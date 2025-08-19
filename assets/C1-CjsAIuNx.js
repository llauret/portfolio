const e=`# Compétence 1 – Réaliser un développement d’application\r
\r
## Contexte rapide\r
\r
Au cours de ma **deuxième** année d'**alternance** au sein de l'entreprise Amphenol FCI Besançon j'ai été amené à\r
poursuivre le développement de l'application que j'ai pu réaliser en première année\r
afin **d'ajouter des fonctionnalités**. L'application est une application de gestion de feuille process, c'est-à-dire\r
que l'on peut y réaliser des relevés de caractéristiques sur des produits en production.\r
L'application est développée en **VueJS** côté frontend et **NodeJS** côté backend avec une base de données **PostgreSQL**.\r
\r
L'application, pour rappel, permet de réaliser des **relevés** de caractéristique sur des produits en production afin\r
d'être conforme aux spécifications.\r
Un opérateur va donc, pour un produit, sur une ligne de production, relever toutes les caractéristiques étape par\r
étape et compléter le relevé.\r
\r
Une fois le relevé réalisé celui-ci est enregistré dans la base de données permettant ainsi d'agir comme un historique\r
des relevés.\r
\r
Au sein de ces historiques il y a donc toutes les valeurs relevées par l'opérateur à un moment \`T\`, des valeurs qui\r
peuvent\r
sortir des spécifications notamment.\r
\r
Avec plusieurs relevés effectués quotidiennement (minimum 3 par jour), l'entreprise totalise actuellement plus de 1 500\r
relevés stockés en base de données. Ces données servent à la fois à l'historisation et au suivi de la qualité des\r
produits.\r
\r
## Problématique identifiée\r
\r
Le principal problème réside dans l'**impossibilité de visualiser rapidement et efficacement** l'évolution des\r
caractéristiques mesurées. Pour analyser l'évolution d'une caractéristique, il est nécessaire de consulter manuellement\r
chaque relevé individuellement, ce qui s'avère chronophage et peu pratique.\r
\r
Cette limitation empêche de :\r
\r
- Vérifier en temps réel si la production respecte les spécifications\r
- Détecter les dérives de caractéristiques avant qu'elles ne deviennent problématiques\r
- Prendre des mesures correctives préventives\r
\r
## Impact métier\r
\r
Cette problématique a récemment causé un **incident** qualité lors d'un audit client. Plusieurs relevés présentaient des\r
valeurs hors spécification qui n'ont pas pu être détectées à temps, faute d'outil de visualisation approprié. Cette\r
situation rappelle les difficultés rencontrées avant la numérisation des relevés.\r
\r
<h1 id="Solution">Solution</h1>\r
\r
Pour répondre à cette problématique, j'ai **conçu et développé un dashboard** de suivi des caractéristiques permettant\r
de visualiser l'évolution des données de production de manière graphique et intuitive.\r
\r
<figure>\r
  <img alt="Dashboard" height="900" src="/portfolio/images_portfolio/dashboard.png" width="100%"/>\r
  <figcaption style="font-size: 1.2em;">\r
    Trace 1 : Tableau de bord de suivi des relevés \r
  </figcaption>\r
</figure>\r
\r
## Architecture de sécurité mise en place\r
\r
L'accès au dashboard est sécurisé par un système d'authentification et d'autorisation basé sur les rôles utilisateurs :\r
\r
### Gestion des accès par rôles\r
\r
- **Administrateur** : Accès complet aux fonctionnalités\r
- **Technicien Process (TP)** : Consultation et gestion des feuilles process\r
- **Ingénieurs/Service Qualité** : Consultation des données statistiques\r
\r
Les opérateurs de production n'ont volontairement pas accès à cette interface, leur rôle se limitant à la saisie des\r
relevés.\r
\r
### Implémentation technique de la sécurité\r
\r
J'ai mis en place une architecture de sécurité comprenant :\r
\r
- **Hachage des mots de passe** avec bcrypt pour la protection des données d'authentification\r
- **Authentification** via JSON Web Token (JWT)\r
- **Vérification des autorisations** à chaque requête pour contrôler l'accès aux fonctionnalités selon le rôle\r
  utilisateur\r
- **Stockage sécurisé** des credentials en base de données\r
\r
Cette approche garantit la confidentialité des données de production tout en permettant aux équipes autorisées d'accéder\r
aux outils d'analyse nécessaires.\r
\r
Ces mesures de sécurité sont réutilisées dans les routes API du dashboard notamment. Cela, grâce à un middleware, (\r
Concept\r
qui permet d'appliquer une logique avant la récupération des données via l'endpoint API) qui va vérifier si\r
l'utilisateur est authentifié et autorisé à accéder à la ressource demandée.\r
\r
Les middleware sont créés dans un dossier dédié, ce qui permet de les réutiliser facilement dans différentes routes API.\r
Par exemple, le middleware \`auth.js\` vérifie le token JWT et le rôle de l'utilisateur avant d'autoriser l'accès aux\r
données.\r
\r
----------------\r
\r
## Interface utilisateur du dashboard\r
\r
Une fois authentifié, l'utilisateur accède au dashboard composé de plusieurs sections :\r
\r
### Tableau de bord statistiques (Dashboard)\r
\r
Une barre d'indicateurs, située au-dessus présente les métriques clés de production (voir [Trace 1](#Solution)) :\r
\r
- **Taux de non-conformité** : Pourcentage de relevés présentant des caractéristiques hors spécifications\r
- **Volume de production** : Nombre de relevés effectués (mensuel, hebdomadaire, par ligne)\r
- **Indicateurs de performance** par ligne de production\r
\r
*Exemple* : Une température avec des bornes de 60° à 80° déclenchera un statut "Hors Spécification" (HS) si la valeur\r
relevée atteint 90° lors de la complétion d'un relevé réalisé par l'opérateur. Un taux HS faible indique une production\r
conforme.\r
\r
### Implémentation technique\r
\r
#### Chargement des données\r
\r
J'utilise le **lifecycle hook \`onMounted\`** de Vue.js pour déclencher la récupération des données dès\r
l'initialisation du composant :\r
\r
- **Frontend** : Requêtes API via Axios\r
- **Backend** : Requêtes SQL\r
- **Traitement** : Calcul automatique des ratios de non-conformité\r
\r
#### Système de classification automatique\r
\r
Chaque relevé est automatiquement évalué lors de sa sauvegarde :\r
\r
**Critères d'évaluation :**\r
\r
- Valeurs hors spécifications techniques\r
- Données manquantes obligatoires\r
\r
**Résultat :** Attribution d'un booléen \`is_hors_spec\` permettant le calcul en temps réel des indicateurs de qualité.\r
\r
Cette approche garantit une traçabilité complète et des statistiques fiables pour le pilotage de la production.\r
\r
---------------------\r
\r
## Interface de sélection des données\r
\r
Le dashboard propose un système de filtrage composé de quatre sélecteurs principaux visibles sur le panneau de gauche (\r
voir [Trace 1](#Solution)) :\r
\r
- **Ligne de production** : Filtrage par ligne active uniquement\r
- **Référence produit** : Nom du produit à analyser\r
- **Caractéristique** : Type de mesure (température, intensité, tension, pH, débit, longueur de cellule)\r
- **Étape** : Phase spécifique du processus de production\r
\r
### Gestion intelligente des données disponibles\r
\r
J'ai implémenté un système de filtrage dynamique pour optimiser l'expérience utilisateur. Les étapes proposées sont\r
automatiquement filtrées selon la disponibilité des caractéristiques sélectionnées.\r
\r
**Logique métier :** Chaque caractéristique n'est pas mesurée à toutes les étapes. Par exemple, une température peut\r
être relevée aux étapes 1 et 3 mais pas à l'étape 2. Le système vérifie donc la présence de données avant de proposer\r
les options. Par exemple il ne va pas y avoir de température à relever pour l'étape 8 qui concerne la caméra.\r
\r
### Architecture de base de données\r
\r
La complexité des relations entre étapes et caractéristiques est gérée par un modèle relationnel adapté :\r
\r
**Structure des données :**\r
\r
- Chaque étape possède un numéro, une description et un état\r
- Les caractéristiques sont liées aux étapes via des tables de jonction (\`multi_temp\`, \`multi_ampere\`, etc.)\r
- Chaque caractéristique définit des coefficients minimal et maximal\r
\r
## Implémentation technique du filtrage\r
\r
Afin donc de récupérer les étapes disponibles sur une caractéristique, je vais écrire la requête SQL.\r
\r
Cette requête permet de récupérer les étapes disponibles pour une caractéristique donnée, à savoir celle choisie\r
dans le sélecteur, en fonction de la référence produit sélectionnée.\r
\r
Côté backend cela se fait avec sequelize, un ORM (Mapping Objet-Relationnel :  il s'agit d'une technique utilisée pour\r
gérer les interactions entre les données d'une base de données relationnelle et les objets utilisés par une application)\r
pour Node.js. C'est une requête SQL dynamique, c'est à dire à\r
conditionnelle, où je vais vérifier quelle caractéristique est sélectionnée et ainsi adapter la requête en conséquence.\r
\r
Les requêtes se trouvent au sein de fichiers services qui sont ensuite appelés par le contrôleur. Je peux ainsi créer un\r
endpoint API (ex: \`/api/etapes\`) qui va appeler cette fonction.\r
Cette requête permet de récupérer les étapes disponibles pour une caractéristique donnée, en fonction de la\r
référence produit sélectionnée.\r
\r
Cette disposition des fichiers permet de structurer le code de manière modulaire et maintenable, facilitant ainsi les\r
évolutions futures.\r
\r
Cela se passe côté backend, côté frontend j'utilise Axios pour interroger l'API et récupérer les données nécessaires à\r
l'affichage des sélecteurs.\r
\r
L'architecture côté frontend se compose comme ceci :\r
\r
- **services** : pour les appels API\r
- **stores** : pour la gestion de l'état avec Pinia\r
\r
Globalement, j'ai mes fonctions de récupération de données dans le dossier \`services\`, et cela est ensuite géré dans le\r
dossier \`stores\` avec Pinia où j'appelle mes fonctions service. C'est une architecture simple mais efficace pour séparer\r
la logique métier de l'interface utilisateur.\r
\r
Et ainsi je peux réutiliser ces fonctions dans différents composants Vue.js.\r
\r
Cette approche permet d'éviter les sélections inutiles et garantit que l'utilisateur ne se retrouve pas avec des\r
graphiques vides.\r
\r
## Maintenabilité et évolutivité de l'architecture\r
\r
L'architecture que j'ai mise en place facilite l'ajout de nouvelles fonctionnalités et la maintenance du code existant :\r
\r
**Côté backend :**\r
\r
- **Séparation des responsabilités** : Les modèles Sequelize sont définis dans des fichiers dédiés, initialisés avec\r
  leurs relations dans un fichier central. Cette organisation permet d'ajouter facilement de nouvelles tables ou de\r
  modifier les relations existantes sans impacter le reste du code.\r
- **Isolation de la logique métier** : Les requêtes et traitements sont encapsulés dans des services, ce qui facilite la\r
  réutilisation. Pour ajouter une nouvelle fonctionnalité, il suffit de créer un nouveau service ou d'étendre un service\r
  existant.\r
- **Extensibilité des API** : La structure contrôleurs/routes permet d'ajouter rapidement de nouveaux endpoints sans\r
  modifier le code existant. J'ai pu ainsi ajouter toutes les fonctionnalités du dashboard sans perturber l'application\r
  de saisie des relevés.\r
- **Middlewares configurables** : Cette approche me permet d'insérer des traitements (validation, authentification) à\r
  n'importe quel point du flux de requêtes.\r
\r
**Côté frontend :**\r
\r
- **Abstraction des appels API** : L'isolation des appels dans des services permet de modifier la logique d'accès aux\r
  données sans impacter les composants d'interface.\r
- **Gestion centralisée de l'état** : Pinia permet de partager l'état entre composants sans créer de dépendances\r
  directes, facilitant ainsi l'ajout de nouvelles vues utilisant les mêmes données.\r
- **Composants réutilisables** : J'ai conçu mes composants Vue.js pour être indépendants et paramétrables, ce qui me\r
  permet de les réutiliser dans différentes parties de l'application.\r
\r
J'utilise Pinia pour la gestion des states et aussi pour les requêtes API, le mieux serait peut être d'utiliser une\r
librairie comme tanstack query, c'est une librairie qui permet de gérer les requêtes API et le cache de manière\r
efficace, ça me permettrait de séparer davantage les appels API de la logique métier. Cependant pour l'instant ce n'est\r
pas un besoin primordial mais c'est une piste d'amélioration pour le futur.\r
\r
---------------\r
\r
Je vous ai parlé des **quatre sélecteurs** mais il en manque un, c'est plutôt deux sélecteurs en un.\r
\r
L’utilisateur peut sélectionner un produit via un champ de saisie où il peut renseigner le nom du produit et\r
cela retournera en temps réel les produits correspondant au produit écrit, visible sur le panneau de gauche (\r
voir [Trace 1](#Solution)). Cela fonctionne avec la propriété LIKE en SQL où je récupère via v-model et donc une liaison\r
bi directionnelle le nom du produit.\r
\r
Ainsi si par exemple j'écris dans le champ input **« F_77310-11 »** cela va retourner tout les produits commençant\r
par **« F_77310-11 »**. La recherche est en temps réel, ce qui pourrait causer d'éventuels problèmes si l'\r
application\r
était accessible à un grand nombre d'utilisateur et en simultané du fait qu'à chaque input il y a une requête effectuée\r
vers le serveur. Cependant il n'y a que une dizaine de personnes ayant accès au Dashboard et en simultané il y a au\r
mieux\r
deux personnes.\r
\r
Si l’optimisation devenait nécessaire, je pourrais implémenter une solution à savoir le **«\r
Debouncing »** qui est d'ajouter un temps d'arrêt avant que la requêtes ne s'éxécute, un temps de chargement finalement\r
pour brider les requêtes envoyées et in fine éviter la surcharge.\r
\r
Une fois le produit entré, l'utilisateur peut, si il le souhaite sélectionner ces produits. Par défaut si l'utilisateur\r
clique sur **« Générer les statistiques »** cela prendra tout les produits commençant par, ici **« F_77310-11 »**\r
dans la\r
génération du graphique, si il sélectionne ces produits alors, je stocke ces derniers dans un tableau, en vérifiant si\r
il\r
n'existe pas déjà, si la taille du tableau est supérieure à 0 alors je prends les éléments de ce celui-ci pour la\r
génération du graphique.\r
\r
L'utilisateur peut donc sélectionner un produit mais aussi le retirer, si il le souhaite, en cliquant dessus pour le\r
supprimer du tableau.\r
\r
----------\r
\r
Une fois le ou les produits sélectionné(s), je réalise alors deux requêtes\r
\r
La première requête va me récupérer les valeurs mesurées de la caractéristique choisie avec ces paramètres :\r
\r
- caracteristic,\r
- caracteristicOpti,\r
- nomLigne,\r
- pnPlating,\r
- etape\r
- mode\r
\r
Le mode est simplement un chiffre pour me permettre de sélectionner le type de données envoyées pour le produit\r
sélectionné.\r
\r
Si le mode est à 0 dans l'envoi de la requête l'on a affaire au tableau des valeurs sélectionnées, sinon l'on prend le\r
LIKE pour la requête. J'ai mis en place ce système, de base, pour une autre fonctionnalité concernant la mise à jour des\r
feuille process, où j'avais du code qui se répétait, j'ai donc réfléchi à une solution me permettant de segmenter le\r
type\r
de la requête, à savoir si je m'occupe d'une grande sélection \`LIKE\`, d'une sélection précise \`=\` ou d'une sélection\r
multiple \`IN\` à partir de là, avec Sequelize, je peux déterminer le type de requête.\r
\r
| Mode | Type de requête                                     |\r
|------|-----------------------------------------------------|\r
| 0    | LIKE (pour les sélections multiples commençant par) |\r
| 1    | = (pour les sélections uniques)                     |\r
| 2    | IN (pour les sélections multiples exactes)          |\r
\r
Une fois la sélection du mode faite, il me faut réaliser la requête, alors, c'est un peu particulier.\r
Un relevé fait par l'opérateur est stocké en base de donnée.\r
\r
Un relevé est composé de plusieurs éléments :\r
\r
- input_toggle (Concerne les cases à cocher pour déterminer si un état d'une étape est conforme)\r
- initiale_user (Les initiales de l'opérateur deux premières lettres du nom et du prénom exemple LALU pour Lauret Lucas)\r
- initiale_userat (Initiale de l'assistant technique qui aide pendant le relevé et le réglage de la ligne de production)\r
- initiale_usertp (Initiale du technicien process qui est null par défaut, se rempli si il vient ajouter un commentaire\r
  depuis son interface afin de compléter un relévé ou autre)\r
- commentaire_tp\r
- date_releve\r
- nom_pn_plating (nom du produit)\r
- commentaire (commentaire de l'opérateur sur le relevé pour justifier des valeurs HS)\r
- nom_ligne (Ligne de production)\r
- pn_brut (nom brut du produit)\r
- nom_famille (nom de la famille de produit)\r
- input_vitesse (objet json regroupant la vitesse relevée et ses coef)\r
- input_pression\r
- is_hors_spec (booléen)\r
- input_releve (Contient la totalité du relevé)\r
\r
Les valeurs renseignées sont mises sous forme d'un objet JSON comme suit\r
\r
\`\`\`json\r
{\r
  "nom_etat": "2 FACES",\r
  "nom_ligne": "F",\r
  "pn_plating": "77391-122LF",\r
  "description": "Regulation moteur",\r
  "etape": "1",\r
  "station": "Degraissage1",\r
  "ph": {\r
    "phMax": 0,\r
    "phMin": 0,\r
    "phOpti": null\r
  },\r
  "debit": {\r
    "debitMax": 0,\r
    "debitMin": 0,\r
    "debitOpti": null\r
  },\r
  "voltage": {\r
    "voltageMax": 0,\r
    "voltageMin": 0,\r
    "voltageOpti": null\r
  },\r
  "amperage": {\r
    "amperageMax": 0,\r
    "amperageMin": 0,\r
    "amperageOpti": null\r
  },\r
  "temperature": {\r
    "temperatureMax": 0,\r
    "temperatureMin": 0,\r
    "temperatureOpti": null\r
  },\r
  "longueurCellule": {\r
    "longueurCelluleMax": 0,\r
    "longueurCelluleMin": 0,\r
    "longueurCelluleOpti": null\r
  }\r
}\r
...\r
  \`\`\`\r
\r
Cet objet fois le nombre d'étape. Ce qui donne en moyenne une cinquantaine d'objets comme celui ci.\r
\r
Cet objet est stocké directement dans la base dans une table appelée \`historique\`, j'ai décidé de stocker directement\r
l'objet JSON, simplement car cela aurait été plus complexe d'un point de vue relationnel au vu de la nature même d'une\r
feuille process, il aurait fallu créer soit plusieurs colonnes, soit le stocker en texte.\r
Mais j'ai décidé que ces \`input_releve\` soit stocké en JSON, en JSONB plus précisément.\r
Le type JSON va stocker en texte, tandis que le JSONB va stocker en format binaire la structure, c'est plus efficace\r
pour les requêtes.\r
\r
Les requêtes postgreSQL sont différentes, il faut utiliser des flèches pour accéder aux objets et sous objets qui\r
m'intéresse, ici ce sont les valeurs dont la clé est "Opti" qui concerne les valeurs relevés, par défaut elles sont à\r
null, c'est à dire qu'il n'y a pas par exemple de température à cette étape d'où les coefficients à 0.\r
Visuellement pour l'opérateur ça représente une cellule noire.\r
\r
Je vais donc chercher ces valeurs "Opti" :\r
\`SELECT elem -> :caracteristic -» :caracteristicOpti AS caracteristic_opti\`\r
ainsi que la vitesse :  \`input_vitesse -» 'inputVitesse'              AS input_vitesse\`\r
\r
Cela me retourne un tableau :\r
\r
\`\`\`json\r
{\r
  "caracteristic_opti": "30",\r
  "date_releve": "07/03/2025 15:05:30",\r
  "nom_pn_plating": "77310-159LF",\r
  "initiale_user": "LAMA",\r
  "initiale_userat": "",\r
  "input_vitesse": "6.7"\r
}\r
\`\`\`\r
\r
que je peux donc exploiter pour mon graphique en récupérant donc la date et la valeur pour constituer mes axes.\r
\r
Afin d'établir mes limites je réalise aussi une requête qui va me récupérer les moyennes hautes et basse.\r
\r
Même principe qu’auparavant, mais je calcule la moyenne, qui va me permetre d'appliquer mes limites dans le\r
graphique. La requête va simplement me retourner la moyenne des valeurs relevées pour la caractéristique sélectionnée\r
pour un produit et une étape donnée dans l'objet JSON stocké en base de données.\r
\r
In fine nous avons un graphique avec ApexChart sur l'évolution des caractéristiques\r
sélectionnées pour un ou plusieurs produits.\r
\r
Ce graphique ne sert pas à faire beau, il est très utile afin de voir si il n'y a pas d'anomalies de production sur\r
l'ensemble des relevés, et si anomalie il y a, alors aviser la dite caractéristique pour par exemple élargir la plage\r
minimale et maximale ou bien la diminuer.\r
\r
J'ai mis en oeuvre le développement au sein d'une application existante, donc l'ajout de fonctionnalité,\r
développer la sélection et l'envoi de données hétérogènes via une api afin de les exploiter de manière statistique.\r
\r
# Bilan\r
\r
Le développement de ce dashboard a permis de répondre à un besoin de l'entreprise en matière de suivi de la qualité des\r
produits. J'ai pu mettre en place une solution technique à l'aide de ce que j'ai appris en cours à l'IUT. À savoir\r
interroger une base de données, récupérer des données, les traiter et les afficher de manière graphique tout cela en\r
respectant les bonnes pratiques d'architecture logicielle.\r
\r
J'ai su à partir d'un besoin métier, identifier les problèmes liés à la gestion des relevés de caractéristiques et\r
proposer une solution adaptée et faire évoluer l'application existante dans un environnement de production en\r
choisissant les architectures adaptées. Le tout en respectant les bonnes pratiques de développement.\r
\r
Cette expérience m'a permis de renforcer mes compétences en développement web, en gestion de base de données et en\r
sécurité des applications.\r
\r
Ce dashboard remplit donc son rôle de suivi des caractéristiques de production, permettant aux équipes de détecter les\r
dérives et d'agir en conséquence.`;export{e as default};
