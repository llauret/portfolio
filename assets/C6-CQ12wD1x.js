const e=`# Compétence 6 – Collaborer au sein d’une équipe informatique\r
\r
Même si j’ai été seul sur le développement de l’application interne (Vue.js) destinée à être utilisée sur des tablettes\r
en réseau local, j’ai systématiquement raisonné comme si d’autres développeurs allaient reprendre ou étendre mon\r
travail. Cette posture m’a conduit à formaliser mes choix techniques, à structurer le code et à amorcer une\r
documentation. La collaboration s’est donc exprimée de manière “anticipée” : je prépare un terrain compréhensible,\r
maintenable et évolutif plutôt que de laisser un ensemble de décisions implicites.\r
\r
La première problématique concrète est née des conditions d’usage : les tablettes peuvent subir des coupures réseau.\r
J’ai analysé le risque principal (perte de données affichées, impressions de lenteur, répétition de requêtes inutiles)\r
et j’ai exploré des solutions de cache côté client. J’ai distingué deux pistes : utiliser directement IndexedDB pour\r
mettre en cache des données de consultation relativement stables, ou intégrer une couche plus riche comme RxDB offrant\r
synchronisation réactive et gestion de conflits. Après lecture de retours communautaires (issues GitHub, discussions sur\r
Reddit et Hacker News) et tests rapides, j’ai conclu que RxDB introduisait une complexité prématurée par rapport à mon\r
besoin immédiat. J’ai donc retenu une approche incrémentale : poser une stratégie de cache simple adossée à IndexedDB\r
pour certaines collections et laisser ouverte la porte à une évolution vers RxDB si, plus tard, l’écriture hors‑ligne et\r
la résolution de conflits devenaient indispensables.\r
\r
Parallèlement, la croissance fonctionnelle de l’application avait progressivement enflé certains stores Pinia :\r
accumulation d’état, appels API entremêlés, duplication de logique de chargement et de gestion d’erreurs. Constatant que\r
ce modèle rendrait difficile l’arrivée d’un nouveau développeur, j’ai entrepris une refactorisation. Ma veille m’a\r
conduit à TanStack Query, dont j’ai évalué la pertinence pour Vue : invalidation fine, déduplication d’appels\r
simultanés, gestion unifiée des états de requête, mécanismes de revalidation et possibilités de pré‑hydratation future\r
avec un cache persistant. Après un micro‑prototype, j’ai externalisé la logique de récupération de données vers cette\r
bibliothèque, ne laissant aux stores que l’état réellement métier ou dérivé.\r
\r
La réflexion sur la résilience réseau et le fetch centralisé a convergé naturellement : TanStack Query offre déjà des\r
mécanismes de cache en mémoire et de réutilisation de résultats. J’ai planifié leur articulation future avec le stockage\r
persistant IndexedDB (pré‑hydratation au lancement) pour réduire encore la dépendance aux conditions réseau, documentant\r
l’enchaînement envisagé afin d’éviter que cette intention reste tacite.\r
\r
En parallèle, j’ai anticipé les besoins de diagnostic partagé. En cas d’incident, l’absence de traces structurées\r
devient un frein majeur à toute collaboration (même différée). J’ai comparé Winston et Pino sous l’angle de la\r
performance, de la simplicité d’intégration et du format de sortie. Winston, très modulable, m’a semblé surdimensionné\r
pour un contexte interne où je n’avais pas encore de pipeline complexe d’agrégation. Pino, par sa sortie JSON minimale,\r
correspondait mieux à mon objectif : fournir rapidement des logs structurés (timestamp, niveau, contexte) exploitables\r
plus tard par un outil de centralisation si l’équipe s’agrandit. Là encore, la décision est explicitée dans la\r
documentation technique afin que son éventuelle remise en question future parte d’une base argumentée.\r
\r
<figure>\r
  <img alt="Vitepress" height="900" src="/portfolio/images_portfolio/exemple_doc.png" width="100%"/>\r
  <figcaption style="font-size: 1.2em;">\r
    Illustration 1 : Grafana pour le monitoring de la base de données\r
  </figcaption>\r
</figure>\r
\r
Souhaitant aller au-delà du simple logging, j’ai réalisé un test de supervision de la base de données en assemblant un\r
exporter PostgreSQL et un tableau de bord Grafana élémentaire. Ce proof of concept ne prétend pas offrir une\r
observabilité complète, mais il démontre une démarche : exposer des métriques (latence, connexions) et visualiser les\r
tendances. Cette esquisse de monitoring fournit un point d’appui concret pour une future industrialisation (alertes,\r
corrélation avec les logs applicatifs).\r
\r
<figure>\r
  <img alt="Vitepress" height="900" src="/portfolio/images_portfolio/exemple_doc.png" width="100%"/>\r
  <figcaption style="font-size: 1.2em;">\r
    Illustration 2 : VitePress pour la documentation technique\r
  </figcaption>\r
</figure>\r
\r
La dimension collaborative s’exprime enfin dans la documentation. J’ai mis en place un site VitePress qui centralise\r
l’architecture logique (couches UI, couche d’accès via TanStack Query, stores Pinia allégés), les décisions techniques (\r
cache IndexedDB vs RxDB, choix de Pino, adoption de TanStack Query) et des exemples d’usage réels. Chaque section est\r
rédigée dans l’optique d’un onboarding : un lecteur doit comprendre rapidement le pourquoi avant le comment.\r
\r
<figure id="Histoire">\r
  <img alt="Histoire" height="900" src="/portfolio/images_portfolio/histoire.png" width="100%"/>\r
  <figcaption style="font-size: 1.2em;">\r
    Illustration 3 : Histoire pour la documentation interactive des composants\r
  </figcaption>\r
</figure>\r
\r
En cherchant initialement des outils pour automatiser des tests de bout en bout (notamment en comparant Playwright et\r
Cypress), je suis tombé sur Histoire (voir [Illustration 4](#Histoire)), un framework orienté documentation interactive\r
des composants Vue, dans l’esprit de Storybook. Cette découverte parallèle a enrichi ma démarche collaborative : isoler\r
un composant dans Histoire m’a permis de documenter visuellement ses variantes (états de chargement, erreurs, données\r
échantillon) et de révéler des props implicites ou mal nommées. J’ai commencé à y déposer les composants transverses (\r
boutons, formulaires, éléments de liste) avec des scénarios réalistes, préparant ainsi la base d’un futur “design\r
system” léger. Cette galerie interactive devient un langage commun potentiel : un futur collègue ou un référent métier\r
peut valider un état d’interface sans parcourir le code, et chaque “story” constitue un point d’ancrage possible pour\r
des tests E2E scénarisés ultérieurement (réutilisation des mocks et des états documentés). Histoire complète donc\r
VitePress : l’un porte la structure et les décisions, l’autre incarne les composants et leur comportement concret.\r
\r
En conclusion, même en l’absence d’équipe autour de moi, j’ai bâti un environnement de travail qui facilite la reprise :\r
code refactorisé selon des patterns reconnus, choix technologiques justifiés, base de cache évolutive, logging structuré\r
et début de monitoring. Cette approche démontre à la fois la maîtrise de concepts techniques et la capacité à les mettre\r
en œuvre de façon structurée, transférable et orientée vers la collaboration à venir.`;export{e as default};
