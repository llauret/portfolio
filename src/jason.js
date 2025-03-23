export default {
    "1ère année": {
        "Réaliser un développement d'application": {
            "AC1": {
                title: "",
                content: ""
            }
        }
    },
    "2ème année": {
        "Réaliser un développement d'application": {
            "AC1": {
                title: "<span style='\ffont-size: 1.2rem; font-weight: bold; margin-bottom: 1rem;\'>AC 1 : Élaborer et implémenter les spécifications fonctionnelles et non fonctionnelles à partir des exigences </span>",
                content: "<div class=\"description\">\n" +
                    "        <h2> Comprendre les exigences</h2>\n" +
                    "        Analyse des exigences :\n" +
                    "\n" +
                    "        Chaque semaine (chaque vendredi pour être exact) j’ai une réunion avec un collègue et mon tuteur pour parler\n" +
                    "        de l’avancée du projet, et des futures fonctionnalités à implémenter.\n" +
                    "\n" +
                    "        L’application web a pour objectif d’être utilisé par des opérateurs sur ligne de production, ils ont besoin\n" +
                    "        que l’application soit simple d’utilisation et aussi fiable, vis-à-vis des valeurs qui leur seront affichés et\n" +
                    "        les valeurs entrées\n" +
                    "\n" +
                    "        Pour être plus précis :\n" +
                    "\n" +
                    "\n" +
                    "        Mon projet est de réaliser une « application » web pour informatiser un processus réalisé à l’origine sur\n" +
                    "        papier, les problèmes du processus papier :\n" +
                    "        <hr>\n" +
                    "        <ul>\n" +
                    "          <li>\n" +
                    "            Enclin à avoir des erreurs humaines (Mauvaise écriture, mauvais relevé, etc.) -> problème lors d'audit pour\n" +
                    "            les normes\n" +
                    "          </li>\n" +
                    "          <li>\n" +
                    "            Historique pas optimal\n" +
                    "          </li>\n" +
                    "        </ul>\n" +
                    "        <br>\n" +
                    "        « L’application » web va permettre de corriger ces problèmes. Pour développer cette « application » web, je\n" +
                    "        dois avoir une vue d’ensemble sur les spécifications et me poser des questions, documenter les exigences, etc.\n" +
                    "        <br>\n" +
                    "        Alors certes, l’informatique va corriger ces problèmes, mais il va y avoir des contraintes. Sur papier, l’on\n" +
                    "        est libre d’écrire ce que l’on souhaite (sous une certaine forme évidemment) l’on peut écrire des noms\n" +
                    "        d’étapes de production comme le souhaite, relever des caractéristiques sous un certain format.\n" +
                    "\n" +
                    "        <br>\n" +
                    "        <h3>Exemple bête :</h3>\n" +
                    "        <br>\n" +
                    "\n" +
                    "        - Relever une température sur un produit en omettant le °C\n" +
                    "\n" +
                    "        <br>\n" +
                    "        Il y a donc des contraintes techniques :\n" +
                    "\n" +
                    "        <ul>\n" +
                    "\n" +
                    "          <li>Uniformiser les données (Créer une base de données)</li>\n" +
                    "          <li>Uniformiser l’affichage (Avoir une sorte de « moule », un template sur l’affichage des données)</li>\n" +
                    "          <li>Omettre certains éléments (pour l’instant) comme les images, schéma</li>\n" +
                    "          <li>Performance, il y a relativement pas mal de données</li>\n" +
                    "          <li>Sécurité, même si l'application est en local, il faut ajouter une authentification et protéger les\n" +
                    "            systèmes\n" +
                    "          </li>\n" +
                    "\n" +
                    "        </ul>\n" +
                    "\n" +
                    "        L’exigence la plus importante est la base de données à créer cf compétence 3\n" +
                    "\n" +
                    "        Bien prendre en compte les exigences, c’est vraiment important pour ne pas réaliser une solution en désaccord\n" +
                    "        avec l’envie des clients et éviter cette situation :\n" +
                    "        <br>\n" +
                    "        <img alt=\"\" src=\"public/development.jpg\">\n" +
                    "        <hr>\n" +
                    "        <h2>Conception de l'application</h2>\n" +
                    "        <h3>Spécifications fonctionnelles</h3>\n" +
                    "        <p>\n" +
                    "          Il y a plusieurs fonctionnalités que je dois implémenter dans l’application :\n" +
                    "        </p>\n" +
                    "\n" +
                    "\n" +
                    "        <ul>\n" +
                    "          <li>Création d’une base de données en SQL</li>\n" +
                    "          <li>Ajout, modification, suppression, lecture de la BDD</li>\n" +
                    "          <li>Réaliser des requêtes afin d’afficher les données de la base via une API (Application Programming\n" +
                    "            Interface)\n" +
                    "          </li>\n" +
                    "          <li>Fonctionnalité de tri, filtre...</li>\n" +
                    "          <li>Gestion d’utilisateur, avec des rôles pour chacun, ceux pouvant réaliser des relevés, ceux pouvant les\n" +
                    "            modifier et accéder à la base de données et un admin\n" +
                    "          </li>\n" +
                    "        </ul>\n" +
                    "        Tout cela m’a appris à réaliser une bonne base de données avec Postgresql, et de l’interroger via une API\n" +
                    "        et un ORM (Sequelize) pour l’écriture des requêtes, j’ai pu mettre en application ce que j’ai vue en cours\n" +
                    "        en première année et actuellement en deuxième année pour tout ce qui concerne les bases de données et la\n" +
                    "        création d’interface.\n" +
                    "      </div>\n" +
                    "      <img alt=\"\" src=\"public/clientapi.png\">\n" +
                    "      <h5>Exemple d’implémentation :</h5>\n" +
                    "      L’ajout d’un bouton d’édition\n" +
                    "      <ul>\n" +
                    "        <li>Comment j'implémente ça ?</li>\n" +
                    "        <li>Sous quelle forme ?</li>\n" +
                    "        <li>Où je mets ce bouton ?</li>\n" +
                    "        <li>Comment je passe de l'état modifié ou non ?</li>\n" +
                    "        <li>Comment je rends les données modifiées persistante etc...</li>\n" +
                    "      </ul>\n" +
                    "      <hr>\n" +
                    "      <span>\n" +
                    "        Pour répondre à ces questions, je me pose, et écris sur feuille mon problème, j’écris aussi du pseudo-code, après je passe à une implémentation basique pour voir le fonctionnement et je peaufine ensuite avec du style.\n" +
                    "Je réfléchis à une approche basique, le bouton va changer la valeur d’un booléen, ce booléen, je le transmets via un store comme ça, j'ai l'état du bouton qui est sauvegardé.\n" +
                    "<p>&nbsp;</p>\n" +
                    "        Quand je clique sur ce bouton, j'entre en mode édition, je change mes composants et affiche ceux qui m'intéresse OK ça marche, mais maintenant comment je sauvegarde chaque valeur modifiée, afin que les données soient persistantes ? (Qu’elles restent lorsque je change de page ou que je \"refresh\" la page)\n" +
                    "      </span>\n" +
                    "      <img alt=\"\" src=\"public/editmode.png\">\n" +
                    "\n" +
                    "      <h3> Spécification non fonctionnelles : </h3>\n" +
                    "\n" +
                    "      <div>\n" +
                    "        <ul>\n" +
                    "          <li>Performance : le nombre de requêtes possible en simultané, Utilisation de la mémoire</li>\n" +
                    "          <li>Sécurité : authentification avec JWT pour accéder à la base de données, différent rôles, mot de passe en\n" +
                    "            hash dans la base de données.\n" +
                    "            JSON Web Token (JWT) est un standard ouvert défini dans la RFC 75191. Il permet l'échange sécurisé de\n" +
                    "            jetons (tokens) entre plusieurs parties. Cette sécurité de l’échange se traduit par la vérification de\n" +
                    "            l'intégrité et de l'authenticité des données. Elle s’effectue par l'algorithme HMAC ou RSA.\n" +
                    "          </li>\n" +
                    "          <li>Fiabilité : back-up des données avec des cronjob/scripts cron est un programme qui permet aux utilisateurs\n" +
                    "            des systèmes Unix d’exécuter automatiquement des\n" +
                    "            scripts, des commandes ou des logiciels à une date et une heure spécifiée à l’avance, ou selon un cycle\n" +
                    "            défini à l’avance.\n" +
                    "          </li>\n" +
                    "          <li>Diagramme :Je créais des diagrammes aussi pour expliquer les relations entre mes composants Vue JS\n" +
                    "            notamment pour\n" +
                    "            expliquer leurs interactions via les évènements, les stores, etc. Mais aussi des MCD pour la base de données\n" +
                    "          </li>\n" +
                    "        </ul>\n" +
                    "      </div>\n" +
                    "\n" +
                    "      <img alt=\"\" src=\"public/schema_view_component.png\">\n" +
                    "      <h2>Technologies</h2>\n" +
                    "      <div>\n" +
                    "        Pour développer tout cela, il faut choisir des technologies, comme vu à la page d’introduction, j’ai choisi :\n" +
                    "\n" +
                    "        <ul>\n" +
                    "          <li>Vue JS</li>\n" +
                    "          <li>PostgreSQL</li>\n" +
                    "          <li>Sequelize</li>\n" +
                    "          <li>Node JS</li>\n" +
                    "          <li>VitePress</li>\n" +
                    "          <li>Python</li>\n" +
                    "        </ul>\n" +
                    "        <br>\n" +
                    "        Pourquoi ces choix ? En grande partie, car je les utilise en cours et ça me permettait de travailler avec ce que\n" +
                    "        je connais déjà. En soit d’une certaine manière peu importe le Framework, cela aurait fait l’affaire, que ce\n" +
                    "        soit Angular ou React. La vraie question, c’est pourquoi du SQL plutôt que du Nosql ? Les raisons sont :\n" +
                    "        <ul>\n" +
                    "          <li> La relation des données, exemple un produit est sur une ligne et une ligne a plusieurs produits.</li>\n" +
                    "          <li> Les données sont structurées.</li>\n" +
                    "          <li> Assurer une intégrité des données (normalisation, forme normale).</li>\n" +
                    "          <li> Le SQL ça marche, c’est une valeur sûre.</li>\n" +
                    "        </ul>\n" +
                    "        <br>\n" +
                    "        En réalité, j’utilise les deux, dans le sens où je stock du Json dans PostgreSQL avec l’attribut JSONB. C'est un\n" +
                    "        format pour enregistrer du JSON.\n" +
                    "        <br>\n" +
                    "        <span style=\"font-weight: bold\"> JavaScript Object\n" +
                    "          Notation (JSON) </span>\n" +
                    "        est un <a href=\"https://fr.wikipedia.org/wiki/Format_de_donn%C3%A9es\"> format de données </a> textuel dérivé de\n" +
                    "        la notation des <a href=\"https://fr.wikipedia.org/wiki/Tableau_associatif#Javascript\"> objets </a> du langage\n" +
                    "        <a href=\"https://fr.wikipedia.org/wiki/JavaScript\"> JavaScript </a>. Il concurrence <a\n" +
                    "          href=\"https://fr.wikipedia.org/wiki/Extensible_Markup_Language\"> XML </a> pour la représentation\n" +
                    "        et la transmission d’information structurée1.\n" +
                    "        <br>\n" +
                    "        <span style=\"font-weight: bold\"> Exemple :</span>\n" +
                    "\n" +
                    "        Dans mon application, j’ai une partie de relevé, ce relevé se fait en fonction de ce qui est affichée à\n" +
                    "        l’utilisateur.\n" +
                    "\n" +
                    "        L’utilisateur regarde les valeurs attendues et passe en mode édition pour relever ce qu’il observe.\n" +
                    "      </div>\n" +
                    "\n" +
                    "\n" +
                    "      <img alt=\"\" src=\"public/interface_degraissage1_edit.png.1.png\">\n" +
                    "\n" +
                    "      <div>\n" +
                    "        L’affichage se base sur une requête sql avec sequelize où je récupère les attributs d’un produit, je boucle dans\n" +
                    "        l’objet pour récupérer ce qui m’intéresse. Le problème qui se pose, c’est comment je stock la partie relevée ?\n" +
                    "        Pour cela, j’ai pensé à utiliser le même objet que celui reçu par la requête.\n" +
                    "        <p>&nbsp;</p>\n" +
                    "        Mais en remplaçant les caractéristiques optimales (les valeurs affichées, elles concernent les valeurs optimales\n" +
                    "        d'une caractéristique exemple : Température 57(valeur min) 60(opti) 62(valeur max)) par celles relevées,\n" +
                    "        pourquoi je fais ça ?\n" +
                    "        <p>&nbsp;</p>\n" +
                    "        C’est pour pouvoir afficher la même interface, mais avec les valeurs relevées quand j’accéderai aux fiches dans\n" +
                    "        ma partie historique.\n" +
                    "      </div>\n" +
                    "      <img alt=\"\" src=\"public/Screen%20Shot%202024-06-13%20at%2014.08.02-fullpage.png\">\n" +
                    "\n" +
                    "      Le problème qui se pose, c’est comment stocker cela dans ma base de données ? Ce sont les mêmes tables interrogées\n" +
                    "      mais avec une seule valeur qui change à fois ce qui me ferait créer des éléments à chaque nouvelle valeur avec\n" +
                    "      leurs liens respectifs, on en finis plus. J’ai donc choisi de stocker directement l’objet dans la base de données.\n" +
                    "      De plus, j’ai une partie avec des checkbox pour valider une étape ou non et c’est pareil, j’ai dû directement\n" +
                    "      ajouter l’objet.\n" +
                    "\n" +
                    "      <pre>\n" +
                    "        { \"ph\": { \"phMax\": 14, \"phMin\": 0, \"phOptimale\": 6 },\n" +
                    "        \"debit\": { \"debitMax\": 1, \"debitMin\": 0, \"debitOptimale\": 0.56 },\n" +
                    "        \"etape\": \"2.1\",\n" +
                    "        \"voltage\": { \"voltageMax\": 7, \"voltageMin\": 0, \"voltageOptimale\": 2 },\n" +
                    "        \"amperage\": { \"amperageMax\": 7, \"amperageMin\": 2, \"amperageOptimale\": 4 },\n" +
                    "        \"temperature\": { \"temperatureMax\": 62, \"temperatureMin\": 58, \"temperatureOptimale\": 59 },\n" +
                    "        \"descriptions\": { \"description1\": \"\", \"description2\": \"Chimique + ultrason\", \"description3\": \"\" },\n" +
                    "        \"longueurCellule\": { \"longueurCelluleMax\": 0.6, \"longueurCelluleMin\": 0.5, \"longueurCelluleOptimale\": 0.52 } },\n" +
                    "      </pre>\n" +
                    "      Si j'avais stocké cela en SQL cela m'aurait fais créer des tables \"doublons\", alors peut-être que ce n'est pas la\n" +
                    "      meilleure solution, mais ça fonctionne\n" +
                    "\n" +
                    "      <h3>Développement itératif</h3>\n" +
                    "\n" +
                    "      Je suis en quelques sortes un développement itératif vu que je suis en continu en relation avec le « client » que\n" +
                    "      je consulte régulièrement pour corriger des fonctionnalités, les améliorer ou en ajouter.\n" +
                    "      <br>\n" +
                    "      Exemple, rajouter une bulle de commentaires sur le relevé pour donner plus d’informations sur d’éventuels\n" +
                    "      problèmes.\n" +
                    "\n" +
                    "      <img alt=\"\" src=\"public/ajout_commentaire.gif.1.gif\">\n" +
                    "\n" +
                    "      Pourquoi je fais cela ?\n" +
                    "\n" +
                    "      <ul>\n" +
                    "        <li> Avoir un feedback constant</li>\n" +
                    "        <li> Être flexible</li>\n" +
                    "      </ul>\n" +
                    "\n" +
                    "      <h3>Déploiement</h3>\n" +
                    "      J’ai trois applications :\n" +
                    "\n" +
                    "      <ul>\n" +
                    "        <li> L’application web</li>\n" +
                    "        <li> L’API</li>\n" +
                    "        <li> La documentation</li>\n" +
                    "      </ul>\n" +
                    "\n" +
                    "      Plus la base de données\n" +
                    "      <br>\n" +
                    "      L’API, le site et la base de données doivent évidemment tourner en même temps pour que tout fonctionne. Avec\n" +
                    "      pgAdmin je peux voir les requêtes I/O et avoir des graphiques, les différentes connexions, etc. Cela me permet de\n" +
                    "      monitorer la base de données.\n" +
                    "\n" +
                    "      <img alt=\"\" src=\"public/schéma_data.png\">\n" +
                    "\n" +
                    "      <h3>Amélioration continue</h3>\n" +
                    "\n" +
                    "      Pour l’instant, j’améliore avec les feedbacks de mon tuteur et de mon collègue, quand l’application aura les\n" +
                    "      fonctionnalités de base, il y aura des feedbacks sur les utilisateurs.\n" +
                    "\n" +
                    "      Cela va me permettre d’avoir un retour réel, savoir ce que je devrais améliorer sur l’interface. De mon côté, je\n" +
                    "      fais de mon mieux pour avoir une interface intuitive, simple, vu que c’est destiné aussi à être utilisé sur\n" +
                    "      tablette.\n" +
                    "\n" +
                    "      <h3>Analyse</h3>\n" +
                    "\n" +
                    "      Face à un problème, comme dis précédemment, j'écris du pseudo, je fais la technique du rubber duck. Si je ne\n" +
                    "      connais pas une syntaxe ou autre, je regarde sur internet.\n" +
                    "\n" +
                    "      J'utilise l'ia dans ces cas :\n" +
                    "      <ul>\n" +
                    "        <li> Trouver des idées</li>\n" +
                    "        <li> Régler des problèmes de syntaxe</li>\n" +
                    "        <li> M'expliquer des concepts</li>\n" +
                    "        <li> Refactoring</li>\n" +
                    "      </ul>\n" +
                    "\n" +
                    "\n" +
                    "      <span style=\"font-weight: bold\"> Aurais-je pu faire autrement ? </span>\n" +
                    "\n" +
                    "      Alors, évidemment, oui, j'aurais pu faire autrement, que ce soit :\n" +
                    "      <br>\n" +
                    "      Les technologies utilisées\n" +
                    "      Ma façon d'écrire le code\n" +
                    "      <br>\n" +
                    "      Il y a plusieurs fois où j'ai dû refactor mon code par problème de clarté par exemple, je me remets toujours en\n" +
                    "      question sur comment implémenter telle ou telle fonctionnalité et essayer de suivre les principes :\n" +
                    "      <br>\n" +
                    "      <ul>\n" +
                    "        <li> DRY (Don't repeat yourself)</li>\n" +
                    "        <li> KISS (Keep it stupid simple)</li>\n" +
                    "        <li> SoC (Separation of concern) Modularité</li>\n" +
                    "      </ul>\n" +
                    "      <br>\n" +
                    "      En suivant ces principes, ça permet de coder un minimum correctement et de bien segmenter mon code.\n" +
                    "\n" +
                    "      <h3>En résumé</h3>\n" +
                    "\n" +
                    "      J'ai appris à être rigoureux dans ma manière de procéder et pas seulement à code juste pour coder, il faut que je\n" +
                    "      réfléchisse à : quoi coder, comment et pourquoi je le fais. Respecter les attentes clients et proposer un plan\n" +
                    "      pour avancer. Forcément vu que je suis le seul développeur, j'ai doit être en totale autonomie, donc si j'ai un\n" +
                    "      problème, je peux compter sur :\n" +
                    "      <br>\n" +
                    "      <ul>\n" +
                    "        <li> Moi</li>\n" +
                    "        <li> Internet</li>\n" +
                    "        <li> StackOverflow</li>\n" +
                    "        <li> IA : ChatGPT, GithubCopilot</li>\n" +
                    "      </ul>\n" +
                    "      <br>\n" +
                    "      J'ai beaucoup appliqué ce que j'ai pu voir en cours aussi, sur la manière de segmenter mon code, de coder\n" +
                    "      certaines fonctionnalités, je pense par exemple à l'authentification, en bref, j'ai pu mettre en œuvre ce que j'ai\n" +
                    "      appris et aussi pu apprendre en autonomie.\n" +
                    "\n" +
                    "      <pre style=\"font-size:9.8pt;\"><span style=\"color:#000000;\">editMode</span><span\n" +
                    "          style=\"color:#8B0000;\">: </span><span style=\"color:#000000;\">JSON</span>.<span\n" +
                    "          style=\"color:#4B0082;\">parse</span>(<span style=\"color:#000000;\">localStorage</span>.<span\n" +
                    "          style=\"color:#4B0082;\">getItem</span>(<span style=\"color:#00008B;\">'isShifted'</span>)) <span\n" +
                    "          style=\"color:#8B0000;\">|| false</span>,<br><span style=\"color:#000000;\">inputValueNumber</span><span\n" +
                    "          style=\"color:#8B0000;\">: </span><span style=\"color:#000000;\">JSON</span>.<span\n" +
                    "          style=\"color:#4B0082;\">parse</span>(<span style=\"color:#000000;\">localStorage</span>.<span\n" +
                    "          style=\"color:#4B0082;\">getItem</span>(<span style=\"color:#00008B;\">'inputValueNumber'</span>)) <span\n" +
                    "          style=\"color:#8B0000;\">|| </span>\n" +
                    "      </pre>"
            },
            "AC2": {
                title: "<span style='\ffont-size: 1.2rem; font-weight: bold; margin-bottom: 1rem;\'>AC 2 : Appliquer des principes d’accessibilité et d’ergonomie </span>",
                content: "<hr>\n" +
                    "      L'application que je développe est un site web local conçu spécifiquement pour les employés chargés du contrôle\n" +
                    "      d'une ligne de production. Mon objectif principal est de simplifier au maximum l'utilisation de cette application,\n" +
                    "      notamment en prenant en compte le fait que les utilisateurs peuvent ne pas être tous familiers avec la technologie\n" +
                    "      de manière générale. Pour ce faire, j'adapte l'interface aux fonctionnalités de l'écran tactile des tablettes, en\n" +
                    "      intégrant par exemple du responsive, évidemment pour adapter l'interface aux tablettes mais aussi aux pc ou tout\n" +
                    "      simplement bien disposer les boutons d'actions.\n" +
                    "      <p>&nbsp;</p>\n" +
                    "      La simplicité d'utilisation est au cœur de ma démarche. J'œuvre pour rendre cette application à la fois\n" +
                    "      ergonomique et intuitive, en privilégiant une interface utilisateur claire et facile à appréhender. Je veille à ce\n" +
                    "      que chaque fonctionnalité soit accessible aisément, facilitant ainsi la prise en main pour tous les utilisateurs,\n" +
                    "      quels que soient leurs niveaux de familiarité avec les outils numériques. J'essaie de faire cela en réalisant une\n" +
                    "      interface simple, UI et UX.\n" +
                    "      <p>&nbsp;</p>\n" +
                    "      Vu que le site est basé sur tablette je dois évidemment faire du responsive et adapter à l'utilisation de la\n" +
                    "      tablette, vu qu'il n'y a pas de souris je dois penser comme si j'utilisais mon doigt. Mettre les boutons à porté\n" +
                    "      de mains et faire en sorte que le site soit simple d'utilisation.\n" +
                    "      <div style=\"display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px;\">\n" +
                    "        <figure>\n" +
                    "          <img alt=\"\" src=\"public/interface_tuile.png\">\n" +
                    "          <figcaption>Interface Tuile</figcaption>\n" +
                    "        </figure>\n" +
                    "        <figure>\n" +
                    "          <img alt=\"\" src=\"public/interface_degraissage1.png\">\n" +
                    "          <figcaption>Interface Dégraissage 1</figcaption>\n" +
                    "        </figure>\n" +
                    "        <figure>\n" +
                    "          <img alt=\"\" src=\"public/interface_degraissage1_edit.png\">\n" +
                    "          <figcaption>Interface Dégraissage 1 Edit</figcaption>\n" +
                    "        </figure>\n" +
                    "      </div>\n" +
                    "      <figure>\n" +
                    "        <img alt=\"\" src=\"public/interface_prototype.png\">\n" +
                    "        <figcaption>Interface Prototype</figcaption>\n" +
                    "      </figure>\n" +
                    "      <div style=\"display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px;\">\n" +
                    "        <figure>\n" +
                    "          <img alt=\"\" src=\"public/interface_prototype2.png\">\n" +
                    "          <figcaption>Interface Prototype 2</figcaption>\n" +
                    "        </figure>\n" +
                    "        <figure>\n" +
                    "          <img alt=\"\" src=\"public/interface_prototype3.png\">\n" +
                    "          <figcaption>Interface Prototype 3</figcaption>\n" +
                    "        </figure>\n" +
                    "      </div>"
            },
            "AC3": {
                title: "<span style='\ffont-size: 1.2rem; font-weight: bold; margin-bottom: 1rem;\'>AC 3 : Adopter de bonnes pratiques de conception et de programmation </span>",
                content: "Pour le développement de l'application web, j'ai adopté une approche rigoureuse en segmentant bien mon code pour\n" +
                    "      m'y retrouver. Cette structure organisée m'a permis de maintenir une clarté et une cohérence dans mon code. Je\n" +
                    "      consacre du temps à refactor régulièrement mon code, évitant ainsi le \"code spaghetti\" et garantissant sa\n" +
                    "      lisibilité et sa maintenabilité.\n" +
                    "      <p>&nbsp;</p>\n" +
                    "      Dans le respect des bonnes pratiques, j'applique des normes de nommage, telles que le snake_case pour mon code\n" +
                    "      Python. Cette cohérence dans la manière de nommer mes variables, fonctions et fichiers rend la compréhension sur\n" +
                    "      le code plus fluides pour moi-même et pour les éventuelles futurs développeurs qui verront mon projet.\n" +
                    "      Pour une gestion méthodique de mon travail, j'ai segmenté mes projets sur GitHub en deux repositories distincts :\n" +
                    "      l'un dédié à mes scripts en Python et l'autre au site web que je développe. J'adopte une approche itérative en\n" +
                    "      versionnant mon code.\n" +
                    "      Cette approche structurée et méthodique garantit que mon code demeure clair, évolutif et bien documenté, offrant\n" +
                    "      ainsi une base solide pour le développement de l'application web.\n" +
                    "      <p>&nbsp;</p>\n" +
                    "      Je mets aussi des gestions d'erreur notamment sur mes requêtes vers l'API pour facilement comprendre les\n" +
                    "      éventuelles erreurs ça me permet de mieux débug\n" +
                    "      <p>&nbsp;</p>\n" +
                    "\n" +
                    "      <span style=\"font-weight: bold\"> Côté backend </span> j'ai modularisé mon code :\n" +
                    "\n" +
                    "      <pre\n" +
                    "          style=\"font-family:'JetBrains Mono', monospace;font-size:9pt;background-color:#1a1a1a;padding:12px;border-radius:5px;\"><span\n" +
                    "          style=\"color:#ffffff;\">exports</span><span style=\"color:#89ddff;\">.</span><span style=\"color:#82aaff;\">findAllProduit </span><span\n" +
                    "          style=\"color:#89ddff;\">= (</span><span style=\"color:#ff9580;\">req</span><span style=\"color:#89ddff;\">, </span><span\n" +
                    "          style=\"color:#ff9580;\">res</span><span style=\"color:#89ddff;\">) =&gt; {<br></span><span\n" +
                    "          style=\"color:#89ddff;\">    </span><span style=\"color:#eeffe3;\">produit</span><span\n" +
                    "          style=\"color:#89ddff;\">.</span><span style=\"color:#82aaff;font-style:italic;\">findAll</span><span\n" +
                    "          style=\"color:#89ddff;\">().</span><span style=\"color:#82aaff;\">then</span><span style=\"color:#89ddff;\">(</span><span\n" +
                    "          style=\"color:#ff9580;\">data </span><span style=\"color:#89ddff;\">=&gt; {<br></span><span\n" +
                    "          style=\"color:#89ddff;\">        </span><span style=\"color:#ff9580;\">res</span><span\n" +
                    "          style=\"color:#89ddff;\">.</span><span style=\"color:#82aaff;\">send</span><span\n" +
                    "          style=\"color:#89ddff;\">(</span><span style=\"color:#ff9580;\">data</span><span\n" +
                    "          style=\"color:#89ddff;\">)<br></span><span style=\"color:#89ddff;\">    }).</span><span style=\"color:#82aaff;\">catch</span><span\n" +
                    "          style=\"color:#89ddff;\">(</span><span style=\"color:#ff9580;\">err </span><span\n" +
                    "          style=\"color:#89ddff;\">=&gt; {<br></span><span style=\"color:#89ddff;\">        </span><span\n" +
                    "          style=\"color:#ff9580;\">res</span><span style=\"color:#89ddff;\">.</span><span\n" +
                    "          style=\"color:#82aaff;\">status</span><span style=\"color:#89ddff;\">(</span><span\n" +
                    "          style=\"color:#ffd580;\">500</span><span style=\"color:#89ddff;\">).</span><span\n" +
                    "          style=\"color:#82aaff;\">send</span><span style=\"color:#89ddff;\">({<br></span><span\n" +
                    "          style=\"color:#89ddff;\">            </span><span style=\"color:#ffffff;\">message</span><span\n" +
                    "          style=\"color:#89ddff;\">: </span><span style=\"color:#ff9580;\">err</span><span\n" +
                    "          style=\"color:#89ddff;\">.</span><span style=\"color:#ffffff;\">message </span><span\n" +
                    "          style=\"color:#89ddff;\">|| </span><span style=\"color:#c3e88d;\">'Error'<br></span><span\n" +
                    "          style=\"color:#c3e88d;\">        </span><span style=\"color:#89ddff;\">})<br></span><span style=\"color:#89ddff;\">    })<br></span><span\n" +
                    "          style=\"color:#89ddff;\">}</span></pre>\n" +
                    "\n" +
                    "      <span style=\"font-weight: bold\">Middleware :</span> Intercepter pour gérer les requêtes notamment sur la\n" +
                    "      vérification de l'authentification\n" +
                    "\n" +
                    "      <pre style=\"font-family:'JetBrains Mono', monospace;font-size:9pt;background-color:#1a1a1a\"><span\n" +
                    "          style=\"color:#82aaff;\">verifyToken </span><span style=\"color:#89ddff;\">= (</span><span\n" +
                    "          style=\"color:#f78c6c;\">req</span><span style=\"color:#89ddff;\">, </span><span\n" +
                    "          style=\"color:#f78c6c;\">res</span><span style=\"color:#89ddff;\">, </span><span\n" +
                    "          style=\"color:#f78c6c;\">next</span><span style=\"color:#89ddff;\">) =&gt; {<br></span><span\n" +
                    "          style=\"color:#89ddff;\">    </span><span style=\"color:#c792ea;font-style:italic;\">let </span><span\n" +
                    "          style=\"color:#eeffe3;\">token </span><span style=\"color:#89ddff;\">= </span><span\n" +
                    "          style=\"color:#f78c6c;\">req</span><span style=\"color:#89ddff;\">.</span><span\n" +
                    "          style=\"color:#eeffff;\">headers</span><span style=\"color:#89ddff;\">[</span><span style=\"color:#c3e88d;\">\"x-access-token\"</span><span\n" +
                    "          style=\"color:#89ddff;\">];<br></span><span style=\"color:#89ddff;\">    </span><span\n" +
                    "          style=\"color:#c792ea;font-style:italic;\">if</span><span style=\"color:#89ddff;\">(!</span><span\n" +
                    "          style=\"color:#eeffe3;\">token</span><span style=\"color:#89ddff;\">) {<br></span><span\n" +
                    "          style=\"color:#89ddff;\">        </span><span style=\"color:#eeffe3;\">token </span><span\n" +
                    "          style=\"color:#89ddff;\">= </span><span style=\"color:#f78c6c;\">req</span><span\n" +
                    "          style=\"color:#89ddff;\">.</span><span\n" +
                    "          style=\"color:#eeffff;\">headers</span><span style=\"color:#89ddff;\">[</span><span style=\"color:#c3e88d;\">\"authorization\"</span><span\n" +
                    "          style=\"color:#89ddff;\">];<br></span><span style=\"color:#89ddff;\">        </span><span\n" +
                    "          style=\"color:#c792ea;font-style:italic;\">if</span><span style=\"color:#89ddff;\">(!</span><span\n" +
                    "          style=\"color:#eeffe3;\">token</span><span style=\"color:#89ddff;\">) {<br></span><span\n" +
                    "          style=\"color:#89ddff;\">            </span><span style=\"color:#c792ea;font-style:italic;\">return </span><span\n" +
                    "          style=\"color:#f78c6c;\">res</span><span style=\"color:#89ddff;\">.</span><span\n" +
                    "          style=\"color:#82aaff;\">status</span><span style=\"color:#89ddff;\">(</span><span\n" +
                    "          style=\"color:#f78c6c;\">403</span><span style=\"color:#89ddff;\">).</span><span\n" +
                    "          style=\"color:#82aaff;\">send</span><span style=\"color:#89ddff;\">({<br></span><span\n" +
                    "          style=\"color:#89ddff;\">                </span><span style=\"color:#eeffff;\">message</span><span\n" +
                    "          style=\"color:#89ddff;\">: </span><span style=\"color:#c3e88d;\">\"Aucun jeton fourni!\"<br></span><span\n" +
                    "          style=\"color:#c3e88d;\">            </span><span style=\"color:#89ddff;\">});<br></span><span\n" +
                    "          style=\"color:#89ddff;\">        }<br></span><span style=\"color:#89ddff;\">        </span><span\n" +
                    "          style=\"color:#eeffe3;\">token </span><span style=\"color:#89ddff;\">= </span><span\n" +
                    "          style=\"color:#eeffe3;\">token</span><span style=\"color:#89ddff;\">.</span><span\n" +
                    "          style=\"color:#82aaff;\">split</span><span style=\"color:#89ddff;\">(</span><span\n" +
                    "          style=\"color:#c3e88d;\">\" \"</span><span style=\"color:#89ddff;\">)[</span><span\n" +
                    "          style=\"color:#f78c6c;\">1</span><span\n" +
                    "          style=\"color:#89ddff;\">];<br></span><span style=\"color:#89ddff;\">    }<br></span><span\n" +
                    "          style=\"color:#89ddff;\">    </span><span style=\"color:#eeffff;\">jwt</span><span\n" +
                    "          style=\"color:#89ddff;\">.</span><span style=\"color:#eeffff;\">verify</span><span\n" +
                    "          style=\"color:#89ddff;\">(</span><span style=\"color:#eeffe3;\">token</span><span\n" +
                    "          style=\"color:#89ddff;\">, </span><span style=\"color:#eeffff;\">config</span><span\n" +
                    "          style=\"color:#89ddff;\">.</span><span style=\"color:#eeffff;\">secret</span><span\n" +
                    "          style=\"color:#89ddff;\">, (</span><span style=\"color:#f78c6c;\">err</span><span\n" +
                    "          style=\"color:#89ddff;\">, </span><span style=\"color:#f78c6c;\">decoded</span><span style=\"color:#89ddff;\">) =&gt; {<br></span><span\n" +
                    "          style=\"color:#89ddff;\">        </span><span style=\"color:#c792ea;font-style:italic;\">if</span><span\n" +
                    "          style=\"color:#89ddff;\">(</span><span style=\"color:#f78c6c;\">err</span><span\n" +
                    "          style=\"color:#89ddff;\">) {<br></span><span style=\"color:#89ddff;\">            </span><span\n" +
                    "          style=\"color:#c792ea;font-style:italic;\">return </span><span style=\"color:#82aaff;\">catchError</span><span\n" +
                    "          style=\"color:#89ddff;\">(</span><span style=\"color:#f78c6c;\">err</span><span\n" +
                    "          style=\"color:#89ddff;\">, </span><span\n" +
                    "          style=\"color:#f78c6c;\">res</span><span style=\"color:#89ddff;\">);<br></span><span style=\"color:#89ddff;\">        }<br></span><span\n" +
                    "          style=\"color:#89ddff;\">        </span><span style=\"color:#f78c6c;\">req</span><span\n" +
                    "          style=\"color:#89ddff;\">.</span><span style=\"color:#eeffff;\">userId </span><span\n" +
                    "          style=\"color:#89ddff;\">= </span><span style=\"color:#f78c6c;\">decoded</span><span\n" +
                    "          style=\"color:#89ddff;\">.</span><span style=\"color:#eeffff;\">id</span><span\n" +
                    "          style=\"color:#89ddff;\">;<br></span><span style=\"color:#89ddff;\">        </span><span style=\"color:#f78c6c;\">next</span><span\n" +
                    "          style=\"color:#89ddff;\">();<br></span><span style=\"color:#89ddff;\">    });<br></span><span\n" +
                    "          style=\"color:#89ddff;\">};</span></pre>\n" +
                    "\n" +
                    "      <span style=\"font-weight: bold\"> Model :</span> Schéma de mes tables SQL retranscrit en Sequelize\n" +
                    "\n" +
                    "      <pre style=\"font-family:'JetBrains Mono', monospace;font-size:9pt;background-color:#1a1a1a\"><span\n" +
                    "          style=\"color:#eeffff;\">module</span><span style=\"color:#89ddff;\">.</span><span\n" +
                    "          style=\"color:#eeffff;\">exports </span><span style=\"color:#89ddff;\">= </span><span\n" +
                    "          style=\"color:#c792ea;font-style:italic;\">function</span><span style=\"color:#89ddff;\">(</span><span\n" +
                    "          style=\"color:#f78c6c;\">sequelize</span><span style=\"color:#89ddff;\">, </span><span style=\"color:#f78c6c;\">DataTypes</span><span\n" +
                    "          style=\"color:#89ddff;\">) {<br></span><span style=\"color:#89ddff;\">    </span><span\n" +
                    "          style=\"color:#c792ea;font-style:italic;\">return </span><span style=\"color:#f78c6c;\">sequelize</span><span\n" +
                    "          style=\"color:#89ddff;\">.</span><span style=\"color:#82aaff;\">define</span><span style=\"color:#89ddff;\">(</span><span\n" +
                    "          style=\"color:#c3e88d;\">'ampere'</span><span style=\"color:#89ddff;\">, {<br></span><span\n" +
                    "          style=\"color:#89ddff;\">        </span><span style=\"color:#eeffff;\">id_ampere</span><span\n" +
                    "          style=\"color:#89ddff;\">: {<br></span><span style=\"color:#89ddff;\">            </span><span\n" +
                    "          style=\"color:#eeffff;\">autoIncrement</span><span style=\"color:#89ddff;\">: </span><span\n" +
                    "          style=\"color:#c792ea;font-style:italic;\">true</span><span style=\"color:#89ddff;\">,<br></span><span\n" +
                    "          style=\"color:#89ddff;\">            </span><span style=\"color:#eeffff;\">type</span><span\n" +
                    "          style=\"color:#89ddff;\">: </span><span style=\"color:#f78c6c;\">DataTypes</span><span\n" +
                    "          style=\"color:#89ddff;\">.</span>INTEGER<span style=\"color:#89ddff;\">,<br></span><span\n" +
                    "          style=\"color:#89ddff;\">            </span><span style=\"color:#eeffff;\">allowNull</span><span\n" +
                    "          style=\"color:#89ddff;\">: </span><span style=\"color:#c792ea;font-style:italic;\">false</span><span\n" +
                    "          style=\"color:#89ddff;\">,<br></span><span style=\"color:#89ddff;\">            </span><span\n" +
                    "          style=\"color:#eeffff;\">primaryKey</span><span style=\"color:#89ddff;\">: </span><span\n" +
                    "          style=\"color:#c792ea;font-style:italic;\">true<br></span><span\n" +
                    "          style=\"color:#c792ea;font-style:italic;\">        </span><span style=\"color:#89ddff;\">},<br></span><span\n" +
                    "          style=\"color:#89ddff;\">        </span><span style=\"color:#eeffff;\">intensite_amperage</span><span\n" +
                    "          style=\"color:#89ddff;\">: {<br></span><span style=\"color:#89ddff;\">            </span><span\n" +
                    "          style=\"color:#eeffff;\">type</span><span style=\"color:#89ddff;\">: </span><span\n" +
                    "          style=\"color:#f78c6c;\">DataTypes</span><span style=\"color:#89ddff;\">.</span><span style=\"color:#eeffff;\">NUMERIC</span><span\n" +
                    "          style=\"color:#89ddff;\">,<br></span><span style=\"color:#89ddff;\">            </span><span\n" +
                    "          style=\"color:#eeffff;\">allowNull</span><span style=\"color:#89ddff;\">: </span><span\n" +
                    "          style=\"color:#c792ea;font-style:italic;\">true<br></span><span\n" +
                    "          style=\"color:#c792ea;font-style:italic;\">        </span><span style=\"color:#89ddff;\">},<br></span><span\n" +
                    "          style=\"color:#89ddff;\">    }, {<br></span><span style=\"color:#89ddff;\">        </span><span\n" +
                    "          style=\"color:#f78c6c;\">sequelize</span><span style=\"color:#89ddff;\">,<br></span><span\n" +
                    "          style=\"color:#89ddff;\">        </span><span style=\"color:#eeffff;\">tableName</span><span\n" +
                    "          style=\"color:#89ddff;\">: </span><span style=\"color:#c3e88d;\">'ampere'</span><span style=\"color:#89ddff;\">,<br></span><span\n" +
                    "          style=\"color:#89ddff;\">        </span><span style=\"color:#eeffff;\">schema</span><span\n" +
                    "          style=\"color:#89ddff;\">: </span><span style=\"color:#c3e88d;\">'public'</span><span style=\"color:#89ddff;\">,<br></span><span\n" +
                    "          style=\"color:#89ddff;\">        </span><span style=\"color:#eeffff;\">timestamps</span><span\n" +
                    "          style=\"color:#89ddff;\">: </span><span style=\"color:#c792ea;font-style:italic;\">false</span><span\n" +
                    "          style=\"color:#89ddff;\">,<br></span><span style=\"color:#89ddff;\">        </span><span style=\"color:#eeffff;\">indexes</span><span\n" +
                    "          style=\"color:#89ddff;\">: [<br></span><span style=\"color:#89ddff;\">            {<br></span><span\n" +
                    "          style=\"color:#89ddff;\">                </span><span style=\"color:#eeffff;\">name</span><span\n" +
                    "          style=\"color:#89ddff;\">: </span><span style=\"color:#c3e88d;\">'ampere_pkey'</span><span style=\"color:#89ddff;\">,<br></span><span\n" +
                    "          style=\"color:#89ddff;\">                </span><span style=\"color:#eeffff;\">unique</span><span\n" +
                    "          style=\"color:#89ddff;\">: </span><span style=\"color:#c792ea;font-style:italic;\">true</span><span\n" +
                    "          style=\"color:#89ddff;\">,<br></span><span style=\"color:#89ddff;\">                </span><span\n" +
                    "          style=\"color:#eeffff;\">fields</span><span style=\"color:#89ddff;\">: [<br></span><span style=\"color:#89ddff;\">                    {</span><span\n" +
                    "          style=\"color:#eeffff;\">name</span><span style=\"color:#89ddff;\">: </span><span style=\"color:#c3e88d;\">'id_ampere'</span><span\n" +
                    "          style=\"color:#89ddff;\">}<br></span><span style=\"color:#89ddff;\">                ]<br></span><span\n" +
                    "          style=\"color:#89ddff;\">            }<br></span><span style=\"color:#89ddff;\">        ]<br></span><span\n" +
                    "          style=\"color:#89ddff;\">    })<br></span><span style=\"color:#89ddff;\">}</span></pre>\n" +
                    "\n" +
                    "      <span style=\"font-weight: bold\"> Routes : </span> Là où je définit, où je peux récupérer mes données (endpoint)\n" +
                    "\n" +
                    "      <pre style=\"font-family:'JetBrains Mono', monospace;font-size:9pt;background-color:#1a1a1a\"><span\n" +
                    "          style=\"color:#546e7a;font-style:italic;\">/**<br></span><span\n" +
                    "          style=\"color:#546e7a;font-style:italic;\"> * </span><span\n" +
                    "          style=\"color:#c792ea;font-weight:bold;font-style:italic;\">@swagger<br></span><span\n" +
                    "          style=\"color:#c792ea;font-weight:bold;font-style:italic;\"> </span><span\n" +
                    "          style=\"color:#546e7a;font-style:italic;\">* /api/produit:<br></span><span\n" +
                    "          style=\"color:#546e7a;font-style:italic;\"> *    get:<br></span><span style=\"color:#546e7a;font-style:italic;\"> *      tags:<br></span><span\n" +
                    "          style=\"color:#546e7a;font-style:italic;\"> *        - Produit<br></span><span\n" +
                    "          style=\"color:#546e7a;font-style:italic;\"> *      summary: Récupère tous les nom_racine<br></span><span\n" +
                    "          style=\"color:#546e7a;font-style:italic;\"> *      description: Use to request all nom_racine<br></span><span\n" +
                    "          style=\"color:#546e7a;font-style:italic;\"> *      responses:<br></span><span\n" +
                    "          style=\"color:#546e7a;font-style:italic;\"> *        200:<br></span><span\n" +
                    "          style=\"color:#546e7a;font-style:italic;\"> *          description: A successful response<br></span><span\n" +
                    "          style=\"color:#546e7a;font-style:italic;\"> *          content:<br></span><span\n" +
                    "          style=\"color:#546e7a;font-style:italic;\"> *            application/json:<br></span><span\n" +
                    "          style=\"color:#546e7a;font-style:italic;\"> *              schema:<br></span><span\n" +
                    "          style=\"color:#546e7a;font-style:italic;\"> *                type: array<br></span><span\n" +
                    "          style=\"color:#546e7a;font-style:italic;\"> */<br></span><span style=\"color:#eeffe3;\">router</span><span\n" +
                    "          style=\"color:#89ddff;\">.</span><span style=\"color:#eeffff;\">get</span><span\n" +
                    "          style=\"color:#89ddff;\">(</span><span style=\"color:#c3e88d;\">'/produit'</span><span\n" +
                    "          style=\"color:#89ddff;\">, </span><span style=\"color:#eeffe3;\">produit</span><span\n" +
                    "          style=\"color:#89ddff;\">.</span><span style=\"color:#82aaff;\">findAllNomRacine</span><span\n" +
                    "          style=\"color:#89ddff;\">)</span></pre>\n" +
                    "\n" +
                    "      J'écris ma table dans le sous dossier Model -> J'écris une requête dans Controller -> J'assigne la requête à une\n" +
                    "      route\n" +
                    "\n" +
                    "      <span style=\"font-weight: bold\">Exemple :</span>\n" +
                    "      J'avais un problème de requêtes dans ma base de données, en l'occurrence un problème d'insertion où le corps de ma\n" +
                    "      requête n'était pas bon:\n" +
                    "\n" +
                    "      <ul>\n" +
                    "        <li> Premièrement je teste dans mon API avec Swagger la requête en question</li>\n" +
                    "        <li> J'examine le header et le body que j'envoie avec Javascript et ça là que ça coince</li>\n" +
                    "      </ul>\n" +
                    "      <p>&nbsp;</p>\n" +
                    "      En mettant des gestions d'erreurs et en formatant correctement le code ça me permet de bien envoyer les bonnes\n" +
                    "      données\n" +
                    "\n" +
                    "      <pre style=\"font-family:'JetBrains Mono', monospace;font-size:9pt;background-color: #1a1a1a\"><span\n" +
                    "          style=\"color:#6f42c1;\">addHistorique</span>() {<br>  <span style=\"color:#d73a49;\">const </span>data <span\n" +
                    "          style=\"color:#d73a49;\">= </span>{<br>    input_releve<span style=\"color:#d73a49;\">: </span>JSON.<span\n" +
                    "          style=\"color:#6f42c1;\">stringify</span>(<span style=\"color:#d73a49;\">this</span>.inputHistory.data_affichage_caracteristiques),<br>    nom_ligne<span\n" +
                    "          style=\"color:#d73a49;\">: this</span>.selectionStore.selectedLigne,<br>    nom_pn_plating<span\n" +
                    "          style=\"color:#d73a49;\">: this</span>.selectionStore.selectedNomPnPlating,<br>    commentaire<span\n" +
                    "          style=\"color:#d73a49;\">: this</span>.inputValuesStore.inputCommentaire,<br>    date_releve<span\n" +
                    "          style=\"color:#d73a49;\">: new </span>Date().<span style=\"color:#6f42c1;\">toISOString</span>(),<br>    input_toggle<span\n" +
                    "          style=\"color:#d73a49;\">: </span>JSON.<span style=\"color:#6f42c1;\">stringify</span>(<span\n" +
                    "          style=\"color:#d73a49;\">this</span>.inputValuesStore.inputToggleOkNotOk),<br>  }<br>  Service.<span\n" +
                    "          style=\"color:#6f42c1;\">addHistorique</span>(data).<span style=\"color:#6f42c1;\">then</span>(() <span\n" +
                    "          style=\"color:#d73a49;\">=&gt; </span>{<br>    console.<span style=\"color:#6f42c1;\">log</span>(<span\n" +
                    "          style=\"color:#032f62;\">\"Historique ajouté\"</span>)<br>  }).<span style=\"color:#6f42c1;\">catch</span>((<span\n" +
                    "          style=\"color:#e36209;\">e</span>) <span style=\"color:#d73a49;\">=&gt; </span>{<br>    console.<span\n" +
                    "          style=\"color:#6f42c1;\">error</span>(<span style=\"color:#032f62;\">'Error:'</span>, <span\n" +
                    "          style=\"color:#e36209;\">e</span>.message);<br>    console.<span style=\"color:#6f42c1;\">error</span>(<span\n" +
                    "          style=\"color:#032f62;\">'Stack:'</span>, <span style=\"color:#e36209;\">e</span>.stack);<br>  })<br>},</pre>\n" +
                    "\n" +
                    "\n" +
                    "      J'essaye de bien structurer mon code, de bien le commenter que ce soit directement dans le code avec des\n" +
                    "      commentaires ou avec une documentation globale que j'écris en parallèle avec VitePress.\n" +
                    "\n" +
                    "      Je commit mon code régulièrement pour le tenir à jour et aussi pour faire des rollback si jamais je fais des\n" +
                    "      bêtises\n" +
                    "\n" +
                    "      Globalement j'essaye de faire de mon mieux sachant que je suis seul sur le projet. Je regarde à droite à gauche\n" +
                    "      sur des projets existants comment les autres développeurs font. Je m'informe comme je peux\n" +
                    "\n" +
                    "      <span style=\"font-weight: bold\">Exemple de re-factoring :</span>\n" +
                    "\n" +
                    "      J'avais plusieurs plusieurs composant en VueJS qui faisait essentiellement la même chose, en l’occurrence ça\n" +
                    "      affichait des données en fonction de la station où l'on était. La logique était la même j'ai donc supprimer une\n" +
                    "      vingtaine de composant pour en faire qu'un seul et j'ai utiliser des props pour avoir un composant modulaire. J'ai\n" +
                    "      dû implémenter en fonction de l'URL actuelle un changement dans le props. En fonction de l’URL, les données\n" +
                    "      affiché change.\n" +
                    "\n" +
                    "      <pre style=\"font-family:'JetBrains Mono', monospace;font-size:9pt; background-color: #1a1a1a\"><span\n" +
                    "          style=\"color:#89ddff;\">{<br></span><span\n" +
                    "          style=\"color:#89ddff;\">    </span><span style=\"color:#eeffff;\">path</span><span\n" +
                    "          style=\"color:#89ddff;\">: </span><span style=\"color:#c3e88d;\">'/:nom_station'</span><span\n" +
                    "          style=\"color:#89ddff;\">,<br></span><span style=\"color:#89ddff;\">    </span><span\n" +
                    "          style=\"color:#eeffff;\">name</span><span style=\"color:#89ddff;\">: </span><span style=\"color:#c3e88d;\">'StationTuile'</span><span\n" +
                    "          style=\"color:#89ddff;\">,<br></span><span style=\"color:#89ddff;\">    </span><span style=\"color:#82aaff;\">component</span><span\n" +
                    "          style=\"color:#89ddff;\">: () =&gt; </span><span style=\"color:#c792ea;font-style:italic;\">import</span><span\n" +
                    "          style=\"color:#89ddff;\">(</span><span style=\"color:#c3e88d;\">'@/views/TheStation.vue'</span><span\n" +
                    "          style=\"color:#89ddff;\">),<br></span><span style=\"color:#89ddff;\">},</span></pre>\n" +
                    "\n" +
                    "      <pre style=\"font-family:'JetBrains Mono', monospace;font-size:9pt;background-color: #1a1a1a\"><span\n" +
                    "          style=\"color:#82aaff;\">filterItems</span><span style=\"color:#89ddff;\">() {<br></span><span\n" +
                    "          style=\"color:#89ddff;\">  </span><span style=\"color:#eeffff;\">console</span><span\n" +
                    "          style=\"color:#89ddff;\">.</span><span style=\"color:#82aaff;\">log</span><span\n" +
                    "          style=\"color:#89ddff;\">(</span><span style=\"color:#c3e88d;\">\"je filtre\"</span><span\n" +
                    "          style=\"color:#89ddff;\">)<br></span><span style=\"color:#89ddff;\">  </span><span\n" +
                    "          style=\"color:#c792ea;font-style:italic;\">const </span><span style=\"color:#eeffe3;\">item </span><span\n" +
                    "          style=\"color:#89ddff;\">= </span><span style=\"color:#c792ea;font-style:italic;\">this</span><span\n" +
                    "          style=\"color:#89ddff;\">.</span><span style=\"color:#eeffff;\">attributes</span><span\n" +
                    "          style=\"color:#89ddff;\">.</span><span style=\"color:#eeffff;\">etapes_descriptions_caracteristiques</span><span\n" +
                    "          style=\"color:#89ddff;\">.</span><span style=\"color:#f1c40f;\">filter</span><span style=\"color:#89ddff;\">(</span><span\n" +
                    "          style=\"color:#f78c6c;\">item </span><span style=\"color:#89ddff;\">=&gt; </span><span\n" +
                    "          style=\"color:#f78c6c;\">item</span><span style=\"color:#89ddff;\">.</span><span\n" +
                    "          style=\"color:#eeffff;\">station </span><span style=\"color:#89ddff;\">=== </span><span\n" +
                    "          style=\"color:#c792ea;font-style:italic;\">this</span><span style=\"color:#89ddff;\">.</span><span\n" +
                    "          style=\"color:#eeffff;\">$route</span><span style=\"color:#89ddff;\">.</span><span\n" +
                    "          style=\"color:#f1c40f;\">params</span><span style=\"color:#89ddff;\">.</span><span style=\"color:#eeffff;\">nom_station</span><span\n" +
                    "          style=\"color:#89ddff;\">);<br></span><span style=\"color:#89ddff;\">  </span><span\n" +
                    "          style=\"color:#c792ea;font-style:italic;\">this</span><span style=\"color:#89ddff;\">.</span><span\n" +
                    "          style=\"color:#eeffff;\">filteredItems </span><span style=\"color:#89ddff;\">= [{</span><span\n" +
                    "          style=\"color:#eeffff;\">key</span><span style=\"color:#89ddff;\">: </span><span\n" +
                    "          style=\"color:#c792ea;font-style:italic;\">this</span><span style=\"color:#89ddff;\">.</span><span\n" +
                    "          style=\"color:#eeffff;\">$route</span><span style=\"color:#89ddff;\">.</span><span\n" +
                    "          style=\"color:#f1c40f;\">params</span><span style=\"color:#89ddff;\">.</span><span style=\"color:#eeffff;\">nom_station</span><span\n" +
                    "          style=\"color:#89ddff;\">, </span><span style=\"color:#eeffff;\">data</span><span style=\"color:#89ddff;\">: </span><span\n" +
                    "          style=\"color:#eeffe3;\">item</span><span style=\"color:#89ddff;\">}];<br></span><span\n" +
                    "          style=\"color:#89ddff;\">  </span><span style=\"color:#eeffff;\">console</span><span\n" +
                    "          style=\"color:#89ddff;\">.</span><span style=\"color:#82aaff;\">log</span><span\n" +
                    "          style=\"color:#89ddff;\">(</span><span style=\"color:#c792ea;font-style:italic;\">this</span><span\n" +
                    "          style=\"color:#89ddff;\">.</span><span style=\"color:#eeffff;\">filteredItems</span><span style=\"color:#89ddff;\">)<br></span><span\n" +
                    "          style=\"color:#89ddff;\">}</span></pre>\n" +
                    "\n" +
                    "      J'ai évidemment encore des éléments à améliorer notamment refactor encore mes requêtes afin de les centraliser\n" +
                    "\n" +
                    "      Globalement j'ai appris à mettre en œuvre ce que j'ai pu voir en cours\n" +
                    "\n" +
                    "      <img alt=\"\" src=\"public/exemple_doc.png\">"
            },
            "AC4": {title: "<span style='\ffont-size: 1.2rem; font-weight: bold; margin-bottom: 1rem;\'>AC 4 : Vérifier et valider la qualité de l'application par les tests </span>",
                content: "En ce qui concerne les tests, j'utilise ViteTest qui est une librairie pour les projets déployer avec Vite avec\n" +
                    "      ViteTest je peux faire des tests Unitaire sur des méthodes, des tests sur des composants et des vues\n" +
                    "\n" +
                    "      Comment je structure mes tests ? Le projet à la création possède un dossier `__tests__` j'ai alors recrée\n" +
                    "      l'arborescence de mon projet dans ce sous dossier pour tester mes composant et mes vues\n" +
                    "      <p>&nbsp;</p>\n" +
                    "      Pourquoi je fais ça ?\n" +
                    "      <p>&nbsp;</p>\n" +
                    "      <ul>\n" +
                    "        <li> Pour vérifier que mon code fonctionne comme il devrait fonctionner</li>\n" +
                    "        <li> Pour savoir si je dois refactor mon code, dans le sens où, si le test est complexe à écrire c'est qu'il\n" +
                    "          doit y avoir un problème avec le code de base\n" +
                    "        </li>\n" +
                    "        <li> Le test peut servir de documentation, ça permet de voir comment un code fonctionne, du moins comment il est\n" +
                    "          supposé fonctionner\n" +
                    "        </li>\n" +
                    "        <li> Je trouve cela pratique dans ce contexte de développement web, car cela me permet de voir les interactions\n" +
                    "          entre\n" +
                    "          les éléments, en l’occurrence ici les composants/vues\n" +
                    "        </li>\n" +
                    "      </ul>\n" +
                    "      <p>&nbsp;</p>\n" +
                    "      Ce que j'aurais dû changer ?\n" +
                    "\n" +
                    "      Je penses, faire les tests plus tôt, limite en faisant du TDD pourquoi pas\n" +
                    "\n" +
                    "      <p>&nbsp;</p>\n" +
                    "      <span style=\"font-weight: bold\">Exemple de test :</span>\n" +
                    "\n" +
                    "      <pre style=\"font-family:'JetBrains Mono', monospace;font-size:9pt;background-color: #1a1a1a;\">\n" +
                    "        <span\n" +
                    "            style=\"color:#c792ea;font-style:italic;\">import </span><span style=\"color:#89ddff;\">{</span><span\n" +
                    "          style=\"color:#eeffff;\">describe</span><span style=\"color:#89ddff;\">, </span><span\n" +
                    "          style=\"color:#eeffff;\">it</span><span style=\"color:#89ddff;\">, </span><span\n" +
                    "          style=\"color:#eeffe3;\">expect</span><span style=\"color:#89ddff;\">, </span><span\n" +
                    "          style=\"color:#ffcb6b;font-style:italic;\">beforeEach</span><span style=\"color:#89ddff;\">} </span><span\n" +
                    "          style=\"color:#c792ea;font-style:italic;\">from </span><span style=\"color:#c3e88d;\">'vitest'<br></span><span\n" +
                    "          style=\"color:#c792ea;font-style:italic;\">import </span><span style=\"color:#89ddff;\">{</span><span\n" +
                    "          style=\"color:#ffcb6b;font-style:italic;\">mount</span><span style=\"color:#89ddff;\">} </span><span\n" +
                    "          style=\"color:#c792ea;font-style:italic;\">from </span><span style=\"color:#c3e88d;\">'@vue/test-utils'<br></span><span\n" +
                    "          style=\"color:#c792ea;font-style:italic;\">import </span><span style=\"color:#89ddff;\">{</span><span\n" +
                    "          style=\"color:#ffcb6b;font-style:italic;\">createPinia</span><span style=\"color:#89ddff;\">} </span><span\n" +
                    "          style=\"color:#c792ea;font-style:italic;\">from </span><span style=\"color:#c3e88d;\">'pinia'<br></span><span\n" +
                    "          style=\"color:#c792ea;font-style:italic;\">import </span><span style=\"color:#89ddff;\">{</span><span\n" +
                    "          style=\"color:#ffcb6b;font-style:italic;\">createMemoryHistory</span><span style=\"color:#89ddff;\">, </span><span\n" +
                    "          style=\"color:#ffcb6b;font-style:italic;\">createRouter</span><span style=\"color:#89ddff;\">} </span><span\n" +
                    "          style=\"color:#c792ea;font-style:italic;\">from </span><span style=\"color:#c3e88d;\">'vue-router'<br></span><span\n" +
                    "          style=\"color:#c3e88d;\"><br></span><span style=\"color:#c792ea;font-style:italic;\">import </span><span\n" +
                    "          style=\"color:#89ddff;\">{</span><span style=\"color:#eeffff;\">useInputValuesStore</span><span\n" +
                    "          style=\"color:#89ddff;\">} </span><span style=\"color:#c792ea;font-style:italic;\">from </span><span\n" +
                    "          style=\"color:#c3e88d;\">\"@/stores/inputValuesStore\"</span><span style=\"color:#89ddff;\">;<br></span><span\n" +
                    "          style=\"color:#c792ea;font-style:italic;\">import </span><span style=\"color:#89ddff;\">{</span><span\n" +
                    "          style=\"color:#eeffff;\">useDisplayStore</span><span style=\"color:#89ddff;\">} </span><span\n" +
                    "          style=\"color:#c792ea;font-style:italic;\">from </span><span\n" +
                    "          style=\"color:#c3e88d;\">\"@/stores/display\"</span><span style=\"color:#89ddff;\">;<br></span><span\n" +
                    "          style=\"color:#c792ea;font-style:italic;\">import </span><span\n" +
                    "          style=\"color:#eeffff;\">EditorComments </span><span style=\"color:#c792ea;font-style:italic;\">from </span><span\n" +
                    "          style=\"color:#c3e88d;\">\"@/components/Editor/editor-comments.vue\"</span><span\n" +
                    "          style=\"color:#89ddff;\">;<br></span><span style=\"color:#89ddff;\"><br></span><span style=\"color:#eeffff;\">describe</span><span\n" +
                    "          style=\"color:#89ddff;\">(</span><span style=\"color:#c3e88d;\">'EditorComments'</span><span\n" +
                    "          style=\"color:#89ddff;\">, () =&gt; {<br></span><span style=\"color:#89ddff;\">    </span><span\n" +
                    "          style=\"color:#c792ea;font-style:italic;\">let </span><span style=\"color:#eeffe3;\">wrapper<br></span><span\n" +
                    "          style=\"color:#eeffe3;\">    </span><span style=\"color:#c792ea;font-style:italic;\">let </span><span\n" +
                    "          style=\"color:#eeffe3;\">pinia<br></span><span style=\"color:#eeffe3;\">    </span><span\n" +
                    "          style=\"color:#c792ea;font-style:italic;\">let </span><span\n" +
                    "          style=\"color:#eeffe3;\">inputValuesStore<br></span><span style=\"color:#eeffe3;\">    </span><span\n" +
                    "          style=\"color:#c792ea;font-style:italic;\">let </span><span style=\"color:#eeffe3;\">displayStore<br></span><span\n" +
                    "          style=\"color:#eeffe3;\"><br></span><span style=\"color:#eeffe3;\">    </span><span\n" +
                    "          style=\"color:#ffcb6b;font-style:italic;\">beforeEach</span><span style=\"color:#89ddff;\">(</span><span\n" +
                    "          style=\"color:#c792ea;font-style:italic;\">async</span><span style=\"color:#89ddff;\">() =&gt; {<br></span><span\n" +
                    "          style=\"color:#89ddff;\">        </span><span style=\"color:#eeffe3;\">pinia </span><span\n" +
                    "          style=\"color:#89ddff;\">= </span><span style=\"color:#ffcb6b;font-style:italic;\">createPinia</span><span\n" +
                    "          style=\"color:#89ddff;\">()<br></span><span style=\"color:#89ddff;\">        </span><span style=\"color:#eeffe3;\">inputValuesStore </span><span\n" +
                    "          style=\"color:#89ddff;\">= </span><span style=\"color:#eeffff;\">useInputValuesStore</span><span\n" +
                    "          style=\"color:#89ddff;\">(</span><span style=\"color:#eeffe3;\">pinia</span><span\n" +
                    "          style=\"color:#89ddff;\">)<br></span><span style=\"color:#89ddff;\">        </span><span style=\"color:#eeffe3;\">displayStore </span><span\n" +
                    "          style=\"color:#89ddff;\">= </span><span style=\"color:#eeffff;\">useDisplayStore</span><span\n" +
                    "          style=\"color:#89ddff;\">(</span><span style=\"color:#eeffe3;\">pinia</span><span\n" +
                    "          style=\"color:#89ddff;\">)<br></span><span style=\"color:#89ddff;\">        </span><span style=\"color:#eeffe3;\">displayStore</span><span\n" +
                    "          style=\"color:#89ddff;\">.</span><span style=\"color:#eeffff;\">stations </span><span\n" +
                    "          style=\"color:#89ddff;\">= [</span><span style=\"color:#c3e88d;\">'TEST'</span><span style=\"color:#89ddff;\">]<br></span><span\n" +
                    "          style=\"color:#89ddff;\">        </span><span style=\"color:#c792ea;font-style:italic;\">const </span><span\n" +
                    "          style=\"color:#eeffe3;\">router </span><span style=\"color:#89ddff;\">= </span><span\n" +
                    "          style=\"color:#ffcb6b;font-style:italic;\">createRouter</span><span style=\"color:#89ddff;\">({<br></span><span\n" +
                    "          style=\"color:#89ddff;\">            </span><span style=\"color:#eeffff;\">history</span><span\n" +
                    "          style=\"color:#89ddff;\">: </span><span style=\"color:#ffcb6b;font-style:italic;\">createMemoryHistory</span><span\n" +
                    "          style=\"color:#89ddff;\">(),<br></span><span style=\"color:#89ddff;\">            </span><span\n" +
                    "          style=\"color:#eeffff;\">routes</span><span style=\"color:#89ddff;\">: [<br></span><span style=\"color:#89ddff;\">                {</span><span\n" +
                    "          style=\"color:#eeffff;\">path</span><span style=\"color:#89ddff;\">: </span><span style=\"color:#c3e88d;\">'/:nom_station'</span><span\n" +
                    "          style=\"color:#89ddff;\">, </span><span style=\"color:#eeffff;\">name</span><span style=\"color:#89ddff;\">: </span><span\n" +
                    "          style=\"color:#c3e88d;\">'TheStation'</span><span style=\"color:#89ddff;\">, </span><span style=\"color:#eeffff;\">component</span><span\n" +
                    "          style=\"color:#89ddff;\">: {</span><span style=\"color:#eeffff;\">template</span><span\n" +
                    "          style=\"color:#89ddff;\">: </span><span style=\"color:#c3e88d;\">'&lt;div&gt;&lt;/div&gt;'</span><span\n" +
                    "          style=\"color:#89ddff;\">}}<br></span><span style=\"color:#89ddff;\">            ]<br></span><span\n" +
                    "          style=\"color:#89ddff;\">        })<br></span><span style=\"color:#89ddff;\">        </span><span\n" +
                    "          style=\"color:#c792ea;font-style:italic;\">await </span><span style=\"color:#eeffe3;\">router</span><span\n" +
                    "          style=\"color:#89ddff;\">.</span><span style=\"color:#82aaff;\">push</span><span\n" +
                    "          style=\"color:#89ddff;\">({</span><span style=\"color:#eeffff;\">name</span><span style=\"color:#89ddff;\">: </span><span\n" +
                    "          style=\"color:#c3e88d;\">'TheStation'</span><span style=\"color:#89ddff;\">, </span><span style=\"color:#eeffff;\">params</span><span\n" +
                    "          style=\"color:#89ddff;\">: {</span><span style=\"color:#eeffff;\">nom_station</span><span\n" +
                    "          style=\"color:#89ddff;\">: </span><span style=\"color:#eeffe3;\">displayStore</span><span\n" +
                    "          style=\"color:#89ddff;\">.</span><span style=\"color:#eeffff;\">stations</span><span\n" +
                    "          style=\"color:#89ddff;\">[</span><span style=\"color:#f78c6c;\">0</span><span\n" +
                    "          style=\"color:#89ddff;\">]}})<br></span><span style=\"color:#89ddff;\">        </span><span\n" +
                    "          style=\"color:#eeffe3;\">wrapper </span><span style=\"color:#89ddff;\">= </span><span\n" +
                    "          style=\"color:#ffcb6b;font-style:italic;\">mount</span><span style=\"color:#89ddff;\">(</span><span\n" +
                    "          style=\"color:#eeffff;\">EditorComments</span><span style=\"color:#89ddff;\">, {<br></span><span\n" +
                    "          style=\"color:#89ddff;\">            </span><span style=\"color:#eeffff;\">global</span><span\n" +
                    "          style=\"color:#89ddff;\">: {<br></span><span style=\"color:#89ddff;\">                </span><span\n" +
                    "          style=\"color:#eeffff;\">plugins</span><span style=\"color:#89ddff;\">: [</span><span\n" +
                    "          style=\"color:#eeffe3;\">pinia</span><span style=\"color:#89ddff;\">, </span><span\n" +
                    "          style=\"color:#eeffe3;\">router</span><span style=\"color:#89ddff;\">],<br></span><span\n" +
                    "          style=\"color:#89ddff;\">                </span><span style=\"color:#eeffff;\">stubs</span><span\n" +
                    "          style=\"color:#89ddff;\">: [</span><span style=\"color:#c3e88d;\">'font-awesome-icon'</span><span\n" +
                    "          style=\"color:#89ddff;\">]<br></span><span style=\"color:#89ddff;\">            }<br></span><span\n" +
                    "          style=\"color:#89ddff;\">        })<br></span><span style=\"color:#89ddff;\">    })<br></span><span\n" +
                    "          style=\"color:#89ddff;\"><br></span><span style=\"color:#89ddff;\">    </span><span\n" +
                    "          style=\"color:#eeffff;\">it</span><span style=\"color:#89ddff;\">(</span><span style=\"color:#c3e88d;\">'Affiche le formulaire avec les bonnes classes'</span><span\n" +
                    "          style=\"color:#89ddff;\">, () =&gt; {<br></span><span style=\"color:#89ddff;\">        </span><span\n" +
                    "          style=\"color:#eeffe3;\">expect</span><span style=\"color:#89ddff;\">(</span><span\n" +
                    "          style=\"color:#eeffe3;\">wrapper</span><span style=\"color:#89ddff;\">.</span><span\n" +
                    "          style=\"color:#82aaff;\">find</span><span style=\"color:#89ddff;\">(</span><span\n" +
                    "          style=\"color:#c3e88d;\">'form'</span><span style=\"color:#89ddff;\">).</span><span\n" +
                    "          style=\"color:#82aaff;\">classes</span><span style=\"color:#89ddff;\">()).</span><span style=\"color:#82aaff;\">toEqual</span><span\n" +
                    "          style=\"color:#89ddff;\">(</span><span style=\"color:#eeffe3;\">expect</span><span style=\"color:#89ddff;\">.</span><span\n" +
                    "          style=\"color:#82aaff;\">arrayContaining</span><span style=\"color:#89ddff;\">([</span><span\n" +
                    "          style=\"color:#c3e88d;\">'mb-5'</span><span style=\"color:#89ddff;\">, </span><span\n" +
                    "          style=\"color:#c3e88d;\">'flex'</span><span style=\"color:#89ddff;\">, </span><span style=\"color:#c3e88d;\">'justify-center'</span><span\n" +
                    "          style=\"color:#89ddff;\">, </span><span style=\"color:#c3e88d;\">'gap-x-2'</span><span\n" +
                    "          style=\"color:#89ddff;\">, </span><span style=\"color:#c3e88d;\">'h-40'</span><span style=\"color:#89ddff;\">]))<br></span><span\n" +
                    "          style=\"color:#89ddff;\">    })<br></span><span style=\"color:#89ddff;\"><br></span><span\n" +
                    "          style=\"color:#89ddff;\">    </span><span style=\"color:#eeffff;\">it</span><span\n" +
                    "          style=\"color:#89ddff;\">(</span><span\n" +
                    "          style=\"color:#c3e88d;\">'Affiche la div avec les bonnes classes'</span><span style=\"color:#89ddff;\">, () =&gt; {<br></span><span\n" +
                    "          style=\"color:#89ddff;\">        </span><span style=\"color:#eeffe3;\">expect</span><span\n" +
                    "          style=\"color:#89ddff;\">(</span><span style=\"color:#eeffe3;\">wrapper</span><span\n" +
                    "          style=\"color:#89ddff;\">.</span><span style=\"color:#82aaff;\">find</span><span\n" +
                    "          style=\"color:#89ddff;\">(</span><span style=\"color:#c3e88d;\">'div'</span><span style=\"color:#89ddff;\">).</span><span\n" +
                    "          style=\"color:#82aaff;\">classes</span><span style=\"color:#89ddff;\">()).</span><span style=\"color:#82aaff;\">toEqual</span><span\n" +
                    "          style=\"color:#89ddff;\">(</span><span style=\"color:#eeffe3;\">expect</span><span style=\"color:#89ddff;\">.</span><span\n" +
                    "          style=\"color:#82aaff;\">arrayContaining</span><span style=\"color:#89ddff;\">([</span><span\n" +
                    "          style=\"color:#c3e88d;\">'py-2'</span><span style=\"color:#89ddff;\">, </span><span\n" +
                    "          style=\"color:#c3e88d;\">'px-4'</span><span style=\"color:#89ddff;\">, </span><span\n" +
                    "          style=\"color:#c3e88d;\">'mb-4'</span><span style=\"color:#89ddff;\">, </span><span style=\"color:#c3e88d;\">'bg-black'</span><span\n" +
                    "          style=\"color:#89ddff;\">, </span><span style=\"color:#c3e88d;\">'rounded-lg'</span><span\n" +
                    "          style=\"color:#89ddff;\">, </span><span style=\"color:#c3e88d;\">'rounded-t-lg'</span><span\n" +
                    "          style=\"color:#89ddff;\">, </span><span style=\"color:#c3e88d;\">'border'</span><span\n" +
                    "          style=\"color:#89ddff;\">, </span><span style=\"color:#c3e88d;\">'border-gray-200'</span><span\n" +
                    "          style=\"color:#89ddff;\">, </span><span style=\"color:#c3e88d;\">'dark:bg-gray-800'</span><span\n" +
                    "          style=\"color:#89ddff;\">, </span><span style=\"color:#c3e88d;\">'dark:border-gray-700'</span><span\n" +
                    "          style=\"color:#89ddff;\">, </span><span style=\"color:#c3e88d;\">'w-5/6'</span><span\n" +
                    "          style=\"color:#89ddff;\">, </span><span style=\"color:#c3e88d;\">'h-40'</span><span style=\"color:#89ddff;\">]))<br></span><span\n" +
                    "          style=\"color:#89ddff;\">    })<br></span><span style=\"color:#89ddff;\"><br></span><span\n" +
                    "          style=\"color:#89ddff;\">    </span><span style=\"color:#eeffff;\">it</span><span\n" +
                    "          style=\"color:#89ddff;\">(</span><span\n" +
                    "          style=\"color:#c3e88d;\">'Affiche le label avec la bonne classe'</span><span style=\"color:#89ddff;\">, () =&gt; {<br></span><span\n" +
                    "          style=\"color:#89ddff;\">        </span><span style=\"color:#eeffe3;\">expect</span><span\n" +
                    "          style=\"color:#89ddff;\">(</span><span style=\"color:#eeffe3;\">wrapper</span><span\n" +
                    "          style=\"color:#89ddff;\">.</span><span style=\"color:#82aaff;\">find</span><span\n" +
                    "          style=\"color:#89ddff;\">(</span><span style=\"color:#c3e88d;\">'label'</span><span\n" +
                    "          style=\"color:#89ddff;\">).</span><span style=\"color:#82aaff;\">classes</span><span\n" +
                    "          style=\"color:#89ddff;\">()).</span><span style=\"color:#82aaff;\">toEqual</span><span\n" +
                    "          style=\"color:#89ddff;\">(</span><span style=\"color:#eeffe3;\">expect</span><span style=\"color:#89ddff;\">.</span><span\n" +
                    "          style=\"color:#82aaff;\">arrayContaining</span><span style=\"color:#89ddff;\">([</span><span\n" +
                    "          style=\"color:#c3e88d;\">'sr-only'</span><span style=\"color:#89ddff;\">]))<br></span><span\n" +
                    "          style=\"color:#89ddff;\">    })<br></span><span style=\"color:#89ddff;\"><br></span><span\n" +
                    "          style=\"color:#89ddff;\">    </span><span style=\"color:#eeffff;\">it</span><span\n" +
                    "          style=\"color:#89ddff;\">(</span><span\n" +
                    "          style=\"color:#c3e88d;\">'Affiche le textArea avec les bonnes classes'</span><span style=\"color:#89ddff;\">, () =&gt; {<br></span><span\n" +
                    "          style=\"color:#89ddff;\">        </span><span style=\"color:#eeffe3;\">expect</span><span\n" +
                    "          style=\"color:#89ddff;\">(</span><span style=\"color:#eeffe3;\">wrapper</span><span\n" +
                    "          style=\"color:#89ddff;\">.</span><span style=\"color:#82aaff;\">find</span><span\n" +
                    "          style=\"color:#89ddff;\">(</span><span style=\"color:#c3e88d;\">'textarea'</span><span\n" +
                    "          style=\"color:#89ddff;\">).</span><span style=\"color:#82aaff;\">classes</span><span\n" +
                    "          style=\"color:#89ddff;\">()).</span><span style=\"color:#82aaff;\">toEqual</span><span\n" +
                    "          style=\"color:#89ddff;\">(</span><span style=\"color:#eeffe3;\">expect</span><span style=\"color:#89ddff;\">.</span><span\n" +
                    "          style=\"color:#82aaff;\">arrayContaining</span><span style=\"color:#89ddff;\">([</span><span\n" +
                    "          style=\"color:#c3e88d;\">'px-0'</span><span style=\"color:#89ddff;\">, </span><span style=\"color:#c3e88d;\">'w-full'</span><span\n" +
                    "          style=\"color:#89ddff;\">, </span><span style=\"color:#c3e88d;\">'h-32'</span><span\n" +
                    "          style=\"color:#89ddff;\">, </span><span style=\"color:#c3e88d;\">'text-xl'</span><span\n" +
                    "          style=\"color:#89ddff;\">, </span><span style=\"color:#c3e88d;\">'border-0'</span><span\n" +
                    "          style=\"color:#89ddff;\">, </span><span style=\"color:#c3e88d;\">'focus:ring-0'</span><span\n" +
                    "          style=\"color:#89ddff;\">, </span><span style=\"color:#c3e88d;\">'focus:outline-none'</span><span\n" +
                    "          style=\"color:#89ddff;\">, </span><span style=\"color:#c3e88d;\">'dark:text-white'</span><span\n" +
                    "          style=\"color:#89ddff;\">, </span><span style=\"color:#c3e88d;\">'dark:placeholder-gray-400'</span><span\n" +
                    "          style=\"color:#89ddff;\">, </span><span style=\"color:#c3e88d;\">'dark:bg-gray-800'</span><span\n" +
                    "          style=\"color:#89ddff;\">, </span><span style=\"color:#c3e88d;\">'bg-gray-900'</span><span style=\"color:#89ddff;\">, </span><span\n" +
                    "          style=\"color:#c3e88d;\">'text-white'</span><span style=\"color:#89ddff;\">]))<br></span><span\n" +
                    "          style=\"color:#89ddff;\">    });<br></span><span style=\"color:#89ddff;\"><br></span><span\n" +
                    "          style=\"color:#89ddff;\">    </span><span style=\"color:#eeffff;\">it</span><span\n" +
                    "          style=\"color:#89ddff;\">(</span><span style=\"color:#c3e88d;\">'A la création le commentaire contient la valeur du store '</span><span\n" +
                    "          style=\"color:#89ddff;\">, </span><span style=\"color:#c792ea;font-style:italic;\">async</span><span\n" +
                    "          style=\"color:#89ddff;\">() =&gt; {<br></span><span style=\"color:#89ddff;\">        </span><span\n" +
                    "          style=\"color:#c792ea;font-style:italic;\">const </span><span style=\"color:#eeffe3;\">input </span><span\n" +
                    "          style=\"color:#89ddff;\">= </span><span style=\"color:#eeffe3;\">wrapper</span><span\n" +
                    "          style=\"color:#89ddff;\">.</span><span style=\"color:#82aaff;\">find</span><span\n" +
                    "          style=\"color:#89ddff;\">(</span><span style=\"color:#c3e88d;\">'textarea'</span><span\n" +
                    "          style=\"color:#89ddff;\">)<br></span><span style=\"color:#89ddff;\">        </span><span\n" +
                    "          style=\"color:#c792ea;font-style:italic;\">await </span><span style=\"color:#eeffe3;\">input</span><span\n" +
                    "          style=\"color:#89ddff;\">.</span><span style=\"color:#82aaff;\">setValue</span><span\n" +
                    "          style=\"color:#89ddff;\">(</span><span style=\"color:#c3e88d;\">'Test'</span><span\n" +
                    "          style=\"color:#89ddff;\">)<br></span><span style=\"color:#89ddff;\">        </span><span\n" +
                    "          style=\"color:#546e7a;font-style:italic;\">// Je démonte le composant pour le remonter et vérifier que la valeur du store est bien affichée<br></span><span\n" +
                    "          style=\"color:#546e7a;font-style:italic;\">        </span><span style=\"color:#eeffe3;\">wrapper</span><span\n" +
                    "          style=\"color:#89ddff;\">.</span><span style=\"color:#82aaff;\">unmount</span><span style=\"color:#89ddff;\">()<br></span><span\n" +
                    "          style=\"color:#89ddff;\">        </span><span style=\"color:#eeffe3;\">wrapper </span><span\n" +
                    "          style=\"color:#89ddff;\">= </span><span style=\"color:#ffcb6b;font-style:italic;\">mount</span><span\n" +
                    "          style=\"color:#89ddff;\">(</span><span style=\"color:#eeffff;\">EditorComments</span><span style=\"color:#89ddff;\">, {<br></span><span\n" +
                    "          style=\"color:#89ddff;\">            </span><span style=\"color:#eeffff;\">global</span><span\n" +
                    "          style=\"color:#89ddff;\">: {<br></span><span style=\"color:#89ddff;\">                </span><span\n" +
                    "          style=\"color:#eeffff;\">plugins</span><span style=\"color:#89ddff;\">: [</span><span\n" +
                    "          style=\"color:#eeffe3;\">pinia</span><span style=\"color:#89ddff;\">],<br></span><span\n" +
                    "          style=\"color:#89ddff;\">                </span><span style=\"color:#eeffff;\">stubs</span><span\n" +
                    "          style=\"color:#89ddff;\">: [</span><span style=\"color:#c3e88d;\">'font-awesome-icon'</span><span\n" +
                    "          style=\"color:#89ddff;\">]<br></span><span style=\"color:#89ddff;\">            }<br></span><span\n" +
                    "          style=\"color:#89ddff;\">        })<br></span><span style=\"color:#89ddff;\">        </span><span\n" +
                    "          style=\"color:#eeffe3;\">expect</span><span style=\"color:#89ddff;\">(</span><span\n" +
                    "          style=\"color:#eeffe3;\">wrapper</span><span style=\"color:#89ddff;\">.</span><span\n" +
                    "          style=\"color:#82aaff;\">find</span><span style=\"color:#89ddff;\">(</span><span\n" +
                    "          style=\"color:#c3e88d;\">'textarea'</span><span style=\"color:#89ddff;\">).</span><span style=\"color:#82aaff;\">element</span><span\n" +
                    "          style=\"color:#89ddff;\">.</span><span style=\"color:#eeffff;\">value</span><span style=\"color:#89ddff;\">).</span><span\n" +
                    "          style=\"color:#82aaff;\">toBe</span><span style=\"color:#89ddff;\">(</span><span\n" +
                    "          style=\"color:#c3e88d;\">'Test'</span><span style=\"color:#89ddff;\">)<br></span><span style=\"color:#89ddff;\">    })<br></span><span\n" +
                    "          style=\"color:#89ddff;\"><br></span><span style=\"color:#89ddff;\">    </span><span\n" +
                    "          style=\"color:#eeffff;\">it</span><span style=\"color:#89ddff;\">(</span><span style=\"color:#c3e88d;\">'Le commentaire est bien enregistré dans le store'</span><span\n" +
                    "          style=\"color:#89ddff;\">, </span><span style=\"color:#c792ea;font-style:italic;\">async</span><span\n" +
                    "          style=\"color:#89ddff;\">() =&gt; {<br></span><span style=\"color:#89ddff;\">        </span><span\n" +
                    "          style=\"color:#c792ea;font-style:italic;\">const </span><span style=\"color:#eeffe3;\">input </span><span\n" +
                    "          style=\"color:#89ddff;\">= </span><span style=\"color:#eeffe3;\">wrapper</span><span\n" +
                    "          style=\"color:#89ddff;\">.</span><span style=\"color:#82aaff;\">find</span><span\n" +
                    "          style=\"color:#89ddff;\">(</span><span style=\"color:#c3e88d;\">'textarea'</span><span\n" +
                    "          style=\"color:#89ddff;\">)<br></span><span style=\"color:#89ddff;\">        </span><span\n" +
                    "          style=\"color:#c792ea;font-style:italic;\">await </span><span style=\"color:#eeffe3;\">input</span><span\n" +
                    "          style=\"color:#89ddff;\">.</span><span style=\"color:#82aaff;\">setValue</span><span\n" +
                    "          style=\"color:#89ddff;\">(</span><span style=\"color:#c3e88d;\">'Test'</span><span\n" +
                    "          style=\"color:#89ddff;\">)<br></span><span style=\"color:#89ddff;\">        </span><span style=\"color:#eeffe3;\">expect</span><span\n" +
                    "          style=\"color:#89ddff;\">(</span><span style=\"color:#eeffe3;\">inputValuesStore</span><span\n" +
                    "          style=\"color:#89ddff;\">.</span><span style=\"color:#eeffff;\">inputCommentaire</span><span\n" +
                    "          style=\"color:#89ddff;\">).</span><span style=\"color:#82aaff;\">toBe</span><span\n" +
                    "          style=\"color:#89ddff;\">(</span><span style=\"color:#c3e88d;\">'Test'</span><span\n" +
                    "          style=\"color:#89ddff;\">)<br></span><span style=\"color:#89ddff;\">    })<br></span><span style=\"color:#89ddff;\"><br></span><span\n" +
                    "          style=\"color:#89ddff;\">    </span><span style=\"color:#eeffff;\">it</span><span\n" +
                    "          style=\"color:#89ddff;\">(</span><span style=\"color:#c3e88d;\">'Le textArea est bien désactivé quand le mode historique est activé'</span><span\n" +
                    "          style=\"color:#89ddff;\">, </span><span style=\"color:#c792ea;font-style:italic;\">async</span><span\n" +
                    "          style=\"color:#89ddff;\">() =&gt; {<br></span><span style=\"color:#89ddff;\">        </span><span\n" +
                    "          style=\"color:#eeffe3;\">displayStore</span><span style=\"color:#89ddff;\">.</span><span style=\"color:#eeffff;\">modeHistorique </span><span\n" +
                    "          style=\"color:#89ddff;\">= </span><span style=\"color:#c792ea;font-style:italic;\">true<br></span><span\n" +
                    "          style=\"color:#c792ea;font-style:italic;\">        await </span><span style=\"color:#eeffe3;\">wrapper</span><span\n" +
                    "          style=\"color:#89ddff;\">.</span><span style=\"color:#82aaff;\">vm</span><span\n" +
                    "          style=\"color:#89ddff;\">.</span><span style=\"color:#82aaff;\">$nextTick</span><span\n" +
                    "          style=\"color:#89ddff;\">()<br></span><span style=\"color:#89ddff;\">        </span><span style=\"color:#eeffe3;\">expect</span><span\n" +
                    "          style=\"color:#89ddff;\">(</span><span style=\"color:#eeffe3;\">wrapper</span><span\n" +
                    "          style=\"color:#89ddff;\">.</span><span style=\"color:#82aaff;\">find</span><span\n" +
                    "          style=\"color:#89ddff;\">(</span><span style=\"color:#c3e88d;\">'textarea'</span><span\n" +
                    "          style=\"color:#89ddff;\">).</span><span style=\"color:#eeffff;\">element</span><span\n" +
                    "          style=\"color:#89ddff;\">.</span><span style=\"color:#eeffff;\">disabled</span><span\n" +
                    "          style=\"color:#89ddff;\">).</span><span style=\"color:#82aaff;\">toBe</span><span\n" +
                    "          style=\"color:#89ddff;\">(</span><span style=\"color:#c792ea;font-style:italic;\">true</span><span\n" +
                    "          style=\"color:#89ddff;\">)<br></span><span style=\"color:#89ddff;\">    })<br></span><span style=\"color:#89ddff;\"><br></span><span\n" +
                    "          style=\"color:#89ddff;\">})</span></pre>\n" +
                    "\n" +
                    "      Je peux faire des test unitaires, des tests de composants/vues\n" +
                    "      Les tests de composants vérifie si le composant est bien rendu, que les tags html existe bien et qu'ils possèdent\n" +
                    "      les bonnes classes\n" +
                    "      Je test aussi l’interaction entre ma gestion du store, donc l'état de mes variables avec le composant\n" +
                    "      <p>&nbsp;</p>\n" +
                    "      Les tests de composants et de vues fonctionnent un peu comme des tests d'intégration dans le sens où il faut\n" +
                    "      tester les intéractions entre les composants\n" +
                    "      par exemple avec l'émission d’événement"},
        }
    },
    "3ème année": {
        "Réaliser un développement d'application": {
            "AC1": {
                title: "",
                content: ""
            }
        }
    }
}