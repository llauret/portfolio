const e=`# Compétence 2 – Optimiser des applications\r
\r
## Intensités et tensions\r
\r
Avant de commencer un relevé, les opérateurs ont besoin d'avoir un visuel sur la production afin de procéder au réglage\r
de la ligne pour avoir des paramètres de production conformes.\r
\r
Auparavant les opérateurs avaient donc leurs feuilles papier accompagnées d'une autre feuille. Cette feuille répertorie\r
les intensités (A) et les tensions (V) du produit et des produits ayant les mêmes caractéristiques, du moins pour les\r
enchaîner dans la production. Cela leur permet d'avoir une vision sur la production des produits dans le temps.\r
\r
<figure id="AV">\r
  <img alt="AV" height="900" src="/portfolio/images_portfolio/ampvolt.png" width="100%"/>\r
  <figcaption style="font-size: 1.2em;">\r
    Illustration 1 : Affichage des intensités et tensions\r
  </figcaption>\r
</figure>\r
\r
Il fallait donc retranscrire cela de manière numérique, comme sur l'illustration 1.\r
\r
L'opérateur, une fois son produit sélectionné, peut commencer son relevé mais il peut aussi accéder à des informations\r
complémentaires au produit à l'aide de nouvelles icônes apparues dans la barre de navigation. L'une des icônes peut\r
faire apparaître la « documentation » du produit, qui va afficher par exemple le sens d'enroulement de la bobine du\r
produit. L'autre icône permet donc d'afficher les intensités et les tensions du produit actuel.\r
\r
Cette fonctionnalité a été demandée par l'un des opérateurs pour justement lui permettre d'« enchaîner » sa production,\r
et de retrouver les caractéristiques importantes pour ne pas avoir à re-régler la ligne de production de manière\r
significative.\r
\r
Au clic sur cette icône, une popup apparaît et affiche donc les intensités et les tensions éventuelles du produit en\r
question (voir [Illustration 1](#AV)). Il n'y a pas de requête API pour afficher ces informations, du moins pour\r
afficher les informations du produit sélectionné au préalable. Ces données affichées sont le résultat d'un filtre\r
appliqué aux données existantes obtenues lors de la confirmation du produit sélectionné, à savoir les données du\r
relevé (températures, intensités, tensions, etc.).\r
\r
J'applique donc un filtre pour ne garder que les intensités et tensions non nulles. Cela permet de visualiser rapidement\r
les données sans\r
devoir aller consulter un à un les éléments. L'opérateur peut alors choisir un autre produit directement dans cette\r
popup, ce qui ici va envoyer une requête API pour récupérer les informations. Afin de récupérer ces données, j'utilise\r
une longue requête avec beaucoup de jointures qui me sert aussi pour récupérer les valeurs de la feuille process.\r
\r
Cette requête est non seulement longue mais prend du temps à s'exécuter, enfin tout est relatif. Si l'on cible le\r
produit pour rechercher les informations, cela prend en moyenne :\r
\r
|                | Mon PC | VM    |\r
|----------------|--------|-------|\r
| Planning time  | 10 ms  | 10 ms |\r
| Execution time | 6 ms   | 15 ms |\r
\r
C'est surtout pour récupérer toutes les feuilles process que cela prend du temps, donc en enlevant la condition de\r
recherche :\r
\r
|                | Mon PC | VM     |\r
|----------------|--------|--------|\r
| Planning time  | 10 ms  | 10 ms  |\r
| Execution time | 500 ms | 500 ms |\r
\r
Planning time vs Execution time (PostgreSQL)\r
\r
Planning time :\r
\r
- Étapes couvertes : parsing (analyse syntaxique), réécriture (rules), résolution des types / paramètres, génération et\r
  énumération des plans possibles (ordres de jointure, choix index / seq scan, hash vs nested loop, etc.), estimation\r
  des coûts via les statistiques.\r
- Impacté par : complexité du SQL (nombre de tables/jointures/CTE), fonctions volatiles, absence ou obsolescence des\r
  statistiques, GUC (enable_nestloop, etc.), non‑réutilisation de plans (requêtes dynamiques), limites de jointure (\r
  exploration search space).\r
- Réduction : prepared statements / query parameters stables (PostgreSQL peut réutiliser un plan générique),\r
  simplification (vue matérialisée, sous‑requêtes pré-calculées), actualisation ANALYZE, éviter du SQL généré\r
  inutilement.\r
\r
Execution time :\r
\r
- Temps pour exécuter le plan retenu : lecture des pages (cache mémoire vs disque), application des filtres, jointures,\r
  agrégations, tris, construction / transmission des lignes au client.\r
- Inclut le temps interne des nœuds (Seq Scan, Index Scan, Hash Join, Sort, Aggregate). Dans EXPLAIN ANALYZE, le détail\r
  par nœud est visible, puis la synthèse Execution Time correspond (hors latence réseau client).\r
- Influencé par : taille des données réellement lues (sélectivité), présence d’index utiles, fragmentation / bloat, I/O\r
  disque vs cache, parallélisme, JIT (pour CPU bound), paramètres work_mem, effective_cache_size.\r
\r
Résumé :\r
Planning time = temps pour décider comment exécuter.\r
Execution time = temps pour exécuter\r
\r
Ma requête étant longue, je cherchais à l'optimiser, en passant par des segmentations de la requête en plusieurs\r
sous-tables que je combinais à la fin, ou la création d'index pour améliorer la recherche, mais rien de concluant. J'ai\r
donc pensé aux vues, que je pourrais requêter comme une table. Cependant, une vue fonctionne un peu comme une macro : ce\r
sera la même requête sous un autre nom, ce n'est donc pas plus rapide.\r
\r
Il existe un autre type de vue, les vues matérialisées. À la différence d'une vue classique, cette dernière va être\r
matérialisée/persistée comme une table de manière physique dans la base de données, ce qui permet d'accéder aux données\r
vraiment plus rapidement, malgré le délai de communication avec la machine virtuelle.\r
\r
Une *materialized view* (vue matérialisée) est un objet de base de données qui stocke physiquement (matérialise) le\r
résultat d’une requête, contrairement à une vue classique (logique) qui exécute la requête à chaque consultation.\r
\r
Résumé :\r
\r
Création : résultat calculé et stocké (table gérée par le SGBD).\r
Lecture : très rapide pour des agrégations / jointures coûteuses.\r
Coût : espace disque + maintenance (mise à jour quand les données sources changent).\r
\r
Vue classique = toujours à jour, pas de stockage (sauf cache).\r
Vue matérialisée = peut être obsolète entre deux refresh, mais accélère les requêtes lourdes.\r
\r
### Sans la condition\r
\r
|                | Mon PC   | VM       |\r
|----------------|----------|----------|\r
| Planning time  | 0.046 ms | 0.046 ms |\r
| Execution time | 2.6 ms   | 3.8 ms   |\r
\r
### Avec la condition\r
\r
|                | Mon PC  | VM      |\r
|----------------|---------|---------|\r
| Planning time  | 0.07 ms | 0.07 ms |\r
| Execution time | 3.4 ms  | 4 ms    |\r
\r
Non seulement cela réduit grandement le temps de la requête, mais c'est aussi plus pratique au niveau du code. Cela me\r
permet d'être plus modulaire et de piocher dans cette vue matérialisée comme dans une mini base de données. Ici, c'est\r
donc une vue matérialisée, qui dit matérialisée, dit figée. C'est effectivement plus rapide car c'est stocké sur disque,\r
cependant il faut rafraîchir cette vue afin d'actualiser les données pour ne pas avoir des données obsolètes.\r
\r
L'objectif d'une vue matérialisée est de pouvoir consulter des données fréquemment utilisées. Si ces données sont\r
constamment modifiées et en grande quantité, les vues matérialisées n'en valent pas vraiment la peine, cela serait même\r
préjudiciable, car consommerait des ressources de calcul. Ce n'est pas le cas de l'application : les feuilles process\r
stockées ne sont pas constamment changées et surtout ne prennent pas beaucoup de place.\r
\r
- 38k lignes de données\r
- 5mb\r
\r
Cela constitue 13% de la taille globale de la base, à savoir 38 Mo.\r
\r
Pour rafraîchir ces vues et avoir des données à jour, il faut une politique de rafraîchissement. Il s'agit simplement de\r
définir quand rafraîchir ces données. C'est plutôt simple : il suffit de les rafraîchir à chaque changement dans les\r
feuilles process (création, modification, etc.).\r
\r
Cette mise en place de vues matérialisées permet d'alléger les calculs lors des requêtes et d'obtenir l'information plus\r
rapidement en ce qui concerne les feuilles process.\r
\r
Je pourrais réutiliser ces vues matérialisées pour d'autres fonctionnalités, notamment pour une stratégie de cache, où\r
je pourrais récupérer les données de la vue matérialisée et les stocker dans un cache pour une utilisation ultérieure,\r
ce qui permettrait d'améliorer encore les performances de l'application.\r
\r
## Web worker\r
\r
Lors d'un relevé process, l'opérateur va relever les valeurs de production. À la fin du formulaire, il y a un\r
récapitulatif des valeurs.\r
\r
<figure id="recap_releve">\r
  <img alt="Récapitulatif du relevé" height="900" src="/portfolio/images_portfolio/recap_releve.png" width="100%"/>\r
  <figcaption style="font-size: 1.2em;">\r
    Illustration 2 : Récapitulatif des valeurs relevées\r
  </figcaption>\r
</figure>\r
\r
Ce récapitulatif (voir [Illustration 2](#recap_releve)) va afficher les valeurs non renseignées, les cases non cochées\r
et les valeurs hors spécifications (HS). C'est la dernière étape avant l'envoi du relevé. Il y a une vérification de\r
chaque élément relevé\r
à travers l'objet complet de la feuille process. Cela permet de vérifier si l'opérateur a bien renseigné tous les champs\r
obligatoires, correctement, et s'il a bien appelé son assistant technique (AT) avant de valider le relevé.\r
\r
Pour réaliser ce récapitulatif, j'ai besoin d'analyser le relevé et pour cela, il faut rechercher des éléments en\r
particulier, à savoir :\r
\r
- Les valeurs HS\r
- Les valeurs non renseignées\r
- Les cases non cochées\r
\r
Auparavant, je faisais cela directement côté frontend avec une boucle. Le problème est que, par moments, cela pouvait\r
prendre suffisamment de temps pour que les valeurs ne s'affichent pas correctement. De plus, ce n'était pas très propre\r
au niveau du code. J'ai donc réfléchi à comment je pourrais modifier cela.\r
\r
C'est là qu'entrent en jeu les Web Workers. Un Web Worker est un script qui s'exécute en arrière-plan. Il permet de\r
déléguer des tâches lourdes à un autre thread, ce qui évite de bloquer le thread principal, celui qui gère l'interface\r
utilisateur.\r
\r
J'envoie les données du relevé et les colonnes au worker. Le worker va donc analyser les données et renvoyer les\r
messages de vérification (hors spécifications et non renseignées). Pour cela (voir trace 2), je boucle sur les données\r
du relevé et les colonnes, je vérifie si les valeurs sont hors spécifications ou non renseignées et, si c'est le cas,\r
j'envoie un message au thread principal avec les informations. L'objet \`column\` contient les informations de la colonne,\r
à savoir les attributs \`min\`, \`opti\` et \`max\`, ainsi que la clé de données de la box. Ce sont en fait les noms des clés\r
à rechercher dans l'objet de données du relevé.\r
\r
Cette approche permet de ne pas bloquer le thread principal, ce qui permet à l'interface utilisateur de rester réactive\r
pendant que le worker effectue les calculs. De plus, cela permet de mieux organiser le code en séparant la logique de\r
vérification des données du reste de l'application.\r
\r
Ce traitement du worker se fait en une fois, à partir du moment où l'on clique sur le bouton d'envoi du formulaire.\r
C'est plus simple à gérer que si j'avais fait cela à chaque changement de valeur, car cela aurait été trop lourd et\r
aurait ralenti l'interface utilisateur. De plus, cela permet de centraliser la logique de vérification des données dans\r
un seul endroit, ce qui facilite la maintenance et les modifications futures. Ce code me sert aussi pour d'autres\r
fonctionnalités, pour alerter par exemple les personnes concernées lorsqu'il y a des valeurs hors spécifications.\r
\r
En termes de complexité algorithmique, le traitement du worker est linéaire, O(n * m), où n est le nombre de données du\r
relevé et m est le nombre de colonnes. Cela signifie que le temps de traitement augmente proportionnellement au nombre\r
de données et de colonnes, ce qui est acceptable pour la taille des données traitées dans cette application. Cela ne\r
prend pas beaucoup de temps, pour ne pas dire que c'est instantané (~0 ms).`;export{e as default};
