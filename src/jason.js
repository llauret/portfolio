export default {
    "1ère année": {
        "Réaliser un développement d'application": {
            "AC1": {
                title  : "",
                content: ""
            }
        }
    },
    "2ème année": {
        "Réaliser un développement d'application"                      : {
            "AC1": {
                title  : "<span style='font-size: 1.2rem; font-weight: bold; margin-bottom: 1rem;\'>AC 1 : Élaborer et implémenter les spécifications fonctionnelles et non fonctionnelles à partir des exigences </span>",
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
                title  : "<span style='font-size: 1.2rem; font-weight: bold; margin-bottom: 1rem;\'>AC 2 : Appliquer" +
                    " des" +
                    " principes d’accessibilité et d’ergonomie </span>",
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
                title  : "<span style='font-size: 1.2rem; font-weight: bold; margin-bottom: 1rem;\'>AC 3 : Adopter de bonnes pratiques de conception et de programmation </span>",
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
            "AC4": {
                title  : "<span style='font-size: 1.2rem; font-weight: bold; margin-bottom: 1rem;\'>AC 4 : Vérifier et valider la qualité de l'application par les tests </span>",
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
                    "      par exemple avec l'émission d’événement"
            },
        },
        "Optimiser des applications"                                   : {
            "AC1": {
                title  : "<span style='font-size: 1.2rem; font-weight: bold; margin-bottom: 1rem;\'>AC 1 : Choisir" +
                    " des structures de données complexes adaptées au problème </span>",
                content: "J'utilise Python pour extraire des données à partir de fichiers Excel en utilisant des dataframes. Cela me permet\n" +
                    "      d'être rapide et efficace, car ces dataframes sont légers et rapides à manipuler. Une fois ces données extraites,\n" +
                    "      je les intègre dans des tables SQL pour créer une base de données.\n" +
                    "\n" +
                    "      Je préfère le SQL, car il convient parfaitement à la structure et à l'interconnexion des données que j'utilise.\n" +
                    "      Cela me permet de gérer efficacement les relations entre ces données. Pour effectuer des requêtes précises,\n" +
                    "      j'utilise Sequelize, qui me donne la souplesse nécessaire pour récupérer les données dont j'ai besoin.\n" +
                    "      <p>&nbsp;</p>\n" +
                    "      Cette approche, de l'extraction des données jusqu'à leur manipulation dans SQL avec l'utilisation de Sequelize\n" +
                    "      pour les requêtes, me permet de gérer et d'utiliser les données de manière ciblée, répondant ainsi efficacement\n" +
                    "      aux besoins spécifiques de mes projets.\n" +
                    "\n" +
                    "      Python, c'est pratique pour extraire les données et ça m'as permis de mieux utiliser les dataframes et la\n" +
                    "      librairie openpyxl pour manipuler des fichiers Excel.\n" +
                    "\n" +
                    "      Je charge les données dans un dataframe et à partir de là, je le manipule.\n" +
                    "      <p>&nbsp;</p>\n" +
                    "      <img src=\"public/racine.svg\" alt=\"\">\n" +
                    "      Les données récupérées sont du coup sous dataframe, puis insérer en SQL\n" +
                    "      puis le récupère les données en format JSON lors de requêtes.<br>Récupérer les données avec python dans des Excel\n" +
                    "      a été un peu fastidieux, pour plusieurs raisons :\n" +
                    "      <ul>\n" +
                    "        <li>Les données étaient dispatchées dans plusieurs Excel.</li>\n" +
                    "        <li>Les données n'étaient pas forcément justes.</li>\n" +
                    "        <li>Il y avait beaucoup de formatages à faire.</li>\n" +
                    "      </ul>\n" +
                    "      <br>Surtout que le format sous Excel qui change en fonction de la version du Excel, ce n'est pas toujours en\n" +
                    "      UTF-8. Certains fichiers, justement, ne pouvaient pas être ouverts via python car top vieux (1995). Pour la partie SQL et JSON, ce n'est pas compliqué à manipuler, je n'ai pas de requêtes complexes.\n" +
                    "      <br>Voici ma requête la plus longue et encore, elle est \"optimisable\".<br><br>\n" +
                    "\n" +
                    "      <img src=\"public/get_caract.svg\" alt=\"\">"
            },
            "AC2": {
                title  : "<span style='font-size: 1.2rem; font-weight: bold; margin-bottom: 1rem;\'>AC 2 : Utiliser" +
                    " des technique algorithmiques adaptées au problème</span>",
                content: "J'utilise pas de tables de hachages, de graphes ou quoi que ce soit"
            },
            "AC3": {
                title  : "<span style='font-size: 1.2rem; font-weight: bold; margin-bottom: 1rem;\'>AC 3 :" +
                    " Comprendre les enjeux et moyens de sécurisation des données et du code </span>",
                content: "La sécurité des données est importante, pour cela j'ai dû mettre en place un système d'authentification pour pouvoir accéder à la manipulation des données partie CRUD (Create Read Update Delete) avec JWT. J'aurais pu simplement faire une requête à la base de données pour récupérer et comparer les mots de passes, mais avec JWT ça permet d'avoir un jeton réutilisable, et avoir une meilleure sécurité. Les mots de passes sont d'ailleurs hash\n" +
                    "      <p>&nbsp;</p>\n" +
                    "      Pour l'implémentation je me suis aidé de mes cours, et de la documentation.\n" +
                    "\n" +
                    "      <img src=\"public/user.svg\" alt=\"\">\n" +
                    "      <img src=\"public/checkuser.svg\" alt=\"\">\n" +
                    "\n" +
                    "      <h2> Comment ça fonctionne ? </h2>\n" +
                    "\n" +
                    "      L'utilisateur se connecte, côté backend je vérifie le login (en vérifiant que l'user existe) et attribut un jeton à la session, une fois log, il peut accéder à la partie permettant de visualiser les données.\n" +
                    "      <p>&nbsp;</p>\n" +
                    "      Sur ce site il n'y a pas d'intégration de la partie pour s'enregistrer dans la base de données. Les utilisateurs sont pré-identifiés et ont donc un login/mot de passe qui leurs sont attribué. Je rajouterai si il le faut une interface pour renseigner un utilisateur, mais interface uniquement accessible avec une authentification\n" +
                    "\n" +
                    "      <img src=\"public/login_exemple.gif\" alt=\"\">\n" +
                    "      Installation d'une garde (AuthGuard) pour éviter de se rendre sur des URL sous certaines conditions :\n" +
                    "      <img src=\"public/guard.svg\" alt=\"\">\n" +
                    "\n" +
                    "      <p>&nbsp;</p>\n" +
                    "      Cela permet de restreindre l'accès à certaines pages en vérifiant par exemple si l'utilisateur est connecté ou si il a bien sélectionné des éléments avant de se rendre sur une page\n" +
                    "      Cela me permet de sécuriser l'accès côté Front et Back car sans authentification les requêtes INSERT UPDATE, DELETE ne sont pas réalisable"
            }
        },
        "Administrer des systèmes informatiques communicants complexes": {
            "AC1": {
                title  : "<span style='font-size: 1.2rem; font-weight: bold; margin-bottom: 1rem;\'>AC 1 :" +
                    " Concevoir et développer des applications communicantes </span>",
                content: "<h2>Conception des Applications Communicantes</h2>\n" +
                    "      <h3>Architecture des Applications</h3>\n" +
                    "      J'ai créé une API RESTful avec des requêtes http GET, PUT, POST, DELETE. Mon backend est fait avec Sequelize comme\n" +
                    "      ORM qui communique directement avec ma base de données en PostgreSQL. J'ai plusieurs endpoint.\n" +
                    "      <img alt=\"\" src=\"public/endpoints.png\">\n" +
                    "\n" +
                    "      J'ai pu apprendre à utiliser Swagger pour documenter mon API (on l'avait déjà vu en cours).\n" +
                    "\n" +
                    "      J'ai toutes mes routes dans un fichier `routes.js` et avec des requêtes http du côté frontend je récupère les\n" +
                    "      données :\n" +
                    "      <img alt=\"\" src=\"public/get_ligne.svg\">\n" +
                    "      Donc j'ai :\n" +
                    "      <ul>\n" +
                    "        <li>Ma base de donnée</li>\n" +
                    "        <li>Mon ORM sequelize pour faire la glue avec la base de donnée et mon application web</li>\n" +
                    "      </ul>\n" +
                    "      <p>&nbsp;</p>\n" +
                    "      Ma base de donnée était de base alimentée via des script python qui allait récupérer les données dans des fichiers\n" +
                    "      Excel, mais j'ai arrêté cela et décider de directement formater les données dans les Excel pour les importer. Je\n" +
                    "      ne m'en sortais pas, car les données étaient dispersées dans plusieurs fichiers, étaient fausses pour certaines et\n" +
                    "      surtout, il n'y avait pas de lien écrit entre les éléments.\n" +
                    "      <p>&nbsp;</p>\n" +
                    "      J'ai dû faire des comparaisons entre les données pour pouvoir les liés entres elles et ajouter les clés\n" +
                    "      étrangères.\n" +
                    "\n" +
                    "      <h2>Analyse</h2>\n" +
                    "      Comment je procède :\n" +
                    "      Avant d'écrire mes routes et mes fonctions avec Sequelize pour l'API, j'écris mes requêtes SQL séparément pour les\n" +
                    "      tester, vérifier que j'ai les bonnes données qui me sont retournées, après ça :\n" +
                    "\n" +
                    "      - Si la table sql n'existe pas en Sequelize, je la crée\n" +
                    "      <img alt=\"\" src=\"public/table.svg\">\n" +
                    "      Une fois le model crée (table) je la référence dans mon fichier regroupant les tables, je peux ensuite réaliser\n" +
                    "      des requêtes que je regroupe dans le dossier controllers exemple de requête basique\n" +
                    "      <img alt=\"\" src=\"public/dash.svg\">\n" +
                    "      Après cela, je référence dans mes routes, afin que cela s'affiche avec swagger et que je puisse tester ma requête.\n" +
                    "      Le serveur tourne en fond donc je peux récupérer les informations aux routes qui m'intéressent depuis la partie\n" +
                    "      front-end, je récupère les données et les stock.\n" +
                    "      <img alt=\"\" src=\"public/get_ligne.svg\">\n" +
                    "      Pour le développement de l'API de manière générale, j'ai appliqué ce que je savais faire et ce que j'ai vu en\n" +
                    "      cours, je n'ai pas eu de problème en particulier pour la création de l'API"
            },
            "AC2": {
                title  : "<span style='font-size: 1.2rem; font-weight: bold; margin-bottom: 1rem;\'>AC 2 :" +
                    " Utiliser des serveurs et des services réseaux virtualisés </span>",
                content: "Actuellement, la gestion de l'hébergement du site n'est pas de mon ressort, mais à l'avenir, je prévois de prendre\n" +
                    "      en charge cet aspect en hébergeant le site via une machine virtuelle en local. Ce choix me permettra d'avoir un\n" +
                    "      contrôle plus direct sur l'environnement d'hébergement et de mieux comprendre le fonctionnement des serveurs.\n" +
                    "      <p>&nbsp;</p>\n" +
                    "      En envisageant l'utilisation de Docker, j'aspire à optimiser la gestion des conteneurs pour le déploiement et la\n" +
                    "      gestion du site. Cette approche me permettra d'isoler efficacement les différents composants du site web,\n" +
                    "      facilitant ainsi le déploiement et assurant une meilleure portabilité entre les environnements. J'ai appris de mon\n" +
                    "      côté à utiliser Docker pour notamment conteneuriser ma documentation\n" +
                    "\n" +
                    "      <pre>\n" +
                    "        FROM node:18-alpine\n" +
                    "\n" +
                    "        WORKDIR /app\n" +
                    "\n" +
                    "        COPY package*.json ./\n" +
                    "\n" +
                    "        RUN npm install\n" +
                    "\n" +
                    "        COPY . .\n" +
                    "\n" +
                    "        EXPOSE 3000\n" +
                    "\n" +
                    "        CMD [\"npm\", \"run\", \"docs:dev\"]\n" +
                    "      </pre>\n" +
                    "      <img alt=\"\" src=\"public/docker_exemple.gif\">\n" +
                    "      En parallèle, j'ai l'intention de mettre en place une routine de sauvegarde régulière de la base de données. Cette\n" +
                    "      pratique de sauvegarde périodique garantira la sécurité des données et assurera une certaine résilience en cas de\n" +
                    "      problèmes techniques ou de perte accidentelle de données."
            },
            "AC3": {
                title  : "<span style='font-size: 1.2rem; font-weight: bold; margin-bottom: 1rem;\'>AC 3 :" +
                    " Sécuriser les services et données d'un système </span>",
                content: "<h2> Sécurisation des Données </h2>\n" +
                    "      <p>&nbsp;</p>\n" +
                    "      Je veille à la sécurité des données et leurs accès, pas n'importe qui peut accéder à la base de données, il y' a\n" +
                    "      des rôles. Cela permet de protéger le système à d'éventuelles modification non voulues.\n" +
                    "      <p>&nbsp;</p>\n" +
                    "      Actuellement, la base de donnée possède des colonnes qui sont référencées par ID qui est juste un chiffre/nombre\n" +
                    "      auto-incrémenté, ce qui serait bien je penses serait de changer ces id pour les remplacer par des uuid pour\n" +
                    "      améliorer la sécurité des données et éviter de pouvoir rechercher simplement via id"
            }
        },
        "Gérer les données de l'information"                           : {
            "AC1": {
                title  : "<span style='font-size: 1.2rem; font-weight: bold; margin-bottom: 1rem;\'>AC 1 : Optimiser" +
                    " une" +
                    " base de données, interagir avec une application et mettre en œuvre la sécurité </span> <span" +
                    " style='font-size: 1.2rem; font-weight: bold; margin-bottom: 1rem;\'> AC 1 : Optimiser les" +
                    " modèles" +
                    " de données de l’entreprise </span>",
                content: "Dans mon processus, je commence par établir un modèle conceptuel de données (MCD) pour établir clairement les\n" +
                    "      relations entre les différents éléments. Actuellement, la taille de ma base de données reste modeste <span\n" +
                    "        style=\"font-weight: bold\"\n" +
                    "    > 31 008\n" +
                    "      avec\n" +
                    "      cette query</span>\n" +
                    "      <pre>\n" +
                    "        SELECT sum(reltuples)\n" +
                    "        FROM pg_class\n" +
                    "        WHERE relkind='r'\n" +
                    "        AND relname NOT LIKE 'pg_%';\n" +
                    "      </pre>\n" +
                    "\n" +
                    "      Pour gérer efficacement cette quantité de données, j'utilise PostgreSQL, ce qui me permet de travailler sur des\n" +
                    "      requêtes optimisées.\n" +
                    "      <p>&nbsp;</p>\n" +
                    "      Dans le développement de mes requêtes, j'adopte une approche réfléchie pour garantir leur efficacité. Je veille à\n" +
                    "      éviter l'accumulation de jointures excessives en optant par exemple pour des sous-requêtes, me permettant ainsi\n" +
                    "      d'optimiser les performances et la lisibilité du code. À ce stade, je n'ai pas de problèmes majeurs avec la\n" +
                    "      structure de ma base de données.\n" +
                    "      <p>&nbsp;</p>\n" +
                    "      Cependant, ma vigilance se porte davantage sur le côté du site web lui-même. Je dois veiller attentivement à la\n" +
                    "      quantité et à l'efficacité des requêtes que j'envoie au serveur. L'optimisation du côté client devient donc une\n" +
                    "      priorité pour éviter de surcharger inutilement le serveur avec un grand nombre de requêtes.\n" +
                    "      <h2>Normalisation</h2>\n" +
                    "      <p>&nbsp;</p>\n" +
                    "      Pourquoi normaliser les données ? Pour éviter les redondances assurer une intégrité des données et aussi éviter\n" +
                    "      d'avoir des problèmes lié à l'insertion, la suppression et la modification.\n" +
                    "      <br>\n" +
                    "      Avec mes cours de première année et actuellement en deuxième année, on a appris à bien construire une base de\n" +
                    "      données en respectant un certain nombre de règles, c'est ce que j'ai essayé d'appliquer en normalisant ma base de\n" +
                    "      donnée.\n" +
                    "      <p>&nbsp;</p>\n" +
                    "      J'ai créé une table pour chaque élément important et je n'ai pas lésiné sur les clés étrangères alors c'est bien\n" +
                    "      pour l'intégrité des données, mais trop de clé étrangères ça peut être chiant pour les requêtes (faut faire plein\n" +
                    "      de jointures) certes, c'est un compromis. Mais pas si chiant que ça, il y a des techniques notamment des\n" +
                    "      sous-requêtes.\n" +
                    "      <p>&nbsp;</p>\n" +
                    "      Normaliser la base de données ça m'a aidé à mieux concevoir une BDD, à mieux modéliser en fonction des relations :\n" +
                    "      <ul>\n" +
                    "        <li> One to One</li>\n" +
                    "        <li> One to Many</li>\n" +
                    "        <li> Many to Many</li>\n" +
                    "      </ul>\n" +
                    "      <img alt=\"\" src=\"public/association.svg\">\n" +
                    "      <div style=\"display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px;\">\n" +
                    "        <img alt=\"\" src=\"public/Amphenol_Test.png\">\n" +
                    "        <img alt=\"\" src=\"public/exemple_method_python.png.1.png\">\n" +
                    "        <img alt=\"\" src=\"public/mcd_amphenol.jpg\">\n" +
                    "      </div>\n" +
                    "      <img alt=\"\" src=\"public/dernier_mcd.png\">"
            },
            "AC2": {
                title  : "<span style='font-size: 1.2rem; font-weight: bold; margin-bottom: 1rem;\'> AC 2 : Assurer la" +
                    " confidentialité des données (intégrité et sécurité) </span>",
                content: "Je maintiens l'intégrité des données comme dis précédemment en réalisant une normalisation des données\n" +
                    "      <p>&nbsp;</p>\n" +
                    "      Les tables sont bien segmentés, il n'y a pas de doublons, il y a utilisation de clés étrangère pour joindre les\n" +
                    "      tables, tout cela permet l'intégrité des données\n" +
                    "      <img alt=\"\" src=\"public/table_produit.png\">\n" +
                    "      Pour la sécurité, comme dit précédemment il y a une authentification JWT côté front, pour pouvoir manipuler la\n" +
                    "      bdd. Les insertions, suppression et modifications se font via des transactions pour veiller à l'intégrité et\n" +
                    "      éviter qu'il y est des problèmes\n" +
                    "      <img alt=\"\" src=\"public/deleteligne.svg\">"
            },
            "AC3": {
                title  : "<span style='font-size: 1.2rem; font-weight: bold; margin-bottom: 1rem;\'>AC 3 : Organiser" +
                    " la restitution de données à travers la programmation et la visualisation </span>",
                content: "Actuellement, j'utilise un script Python avec Pandas pour créer ma base de données à partir de fichiers Excel. Je\n" +
                    "      prévois d'établir une routine de sauvegarde pour assurer la sécurité des données à l'avenir.\n" +
                    "      <span style=\"font-weight: bold\">Exemple : (Méthode obsolète) </span>\n" +
                    "      <img alt=\"\" src=\"public/updateid.svg\">\n" +
                    "      En récupérant mes données via l'API je les visualisent notamment avec un CRUD (Create, Read, Update, Delete) dans\n" +
                    "      un onglet spécifique au sein de mon application ça permettra aux personnes ayant accés au CRUD (via les rôles)\n" +
                    "      d'intéragir avec la base de donnée\n" +
                    "      <img src=\"public/crud_exemple.gif\" alt=\"\">\n" +
                    "      J'ai pu apprendre à utiliser python avec Excel en utilisant des dataframe"
            },
            "AC4": {
                title  : "<span style='font-size: 1.2rem; font-weight: bold; margin-bottom: 1rem;\'> AC 4 :" +
                    " Manipuler des données hétérogènes </span>",
                content: "      <h2>Utilisation de différents formats de données</h2>\n" +
                    "      Je travaille avec ces types de données\n" +
                    "      <ul>\n" +
                    "        <li>CSV</li>\n" +
                    "        <li>Dataframe</li>\n" +
                    "        <li>JSON</li>\n" +
                    "        <li>SQL</li>\n" +
                    "      </ul>\n" +
                    "\n" +
                    "      Toutes mes données proviennent de fichiers Excel que je convertis d'abord en dataframes, parfois en passant par le\n" +
                    "      format CSV. Ces fichiers contiennent une diversité de types de données, comprenant des chaînes de caractères, des\n" +
                    "      nombres entiers, des décimaux. Par exemple, je manipule des données telles que des vitesses en mètres ou des\n" +
                    "      mesures de tension et d'intensité électrique. Je manipule des données sous formats csv, excel, json, sql,\n" +
                    "      dataframep\n" +
                    "      <p>&nbsp;</p>\n" +
                    "      Je récupère mes données au travers de fichiers Excel que j'insère dans ma base de données à l'aide de dataframes,\n" +
                    "      quand je fais mes requêtes à la base de donnée via Sequelize je reçois un Json que je peux aussi manipuler pour\n" +
                    "      l'afficher comme je le souhaite dans mon application. Mes résultats Json peuvent contenir des objets avec des\n" +
                    "      tableaux.\n" +
                    "      <span style=\"font-weight: bold\">Exemple :</span>\n" +
                    "      <img alt=\"\" src=\"public/jason.svg\">\n" +
                    "      <img alt=\"\" src=\"public/data_sql_exemple.png\">"
            }
        },
        "Conduire un projet"                                           : {
            "AC1": {
                title  : "<span style='font-size: 1.2rem; font-weight: bold; margin-bottom: 1rem;\'>" +
                    " Appliquer une démarche de suivi de projet en fonction des besoins métiers des clients et des" +
                    " utilisateurs <br> AC 1 : Identifier les processus présents dans une organisation en vue" +
                    " d’améliorer les systèmes d’information </span> ",
                content: "Je travaille avec le client pour cerner les besoins spécifiques de l'application en cours de développement.\n" +
                    "      Actuellement, les processus opérationnels sont manuels, consignés sur papier. Mon objectif consiste à transformer\n" +
                    "      ces processus en solutions informatiques, rendant ainsi leur utilisation aussi simple et intuitive que possible.\n" +
                    "      <p>&nbsp;</p>\n" +
                    "      Mon processus démarre par une analyse des méthodes actuelles consignées sur papier. J'analyse chaque étape pour\n" +
                    "      comprendre comment je peux les transposer de manière informatique, tout en veillant à conserver leur simplicité.\n" +
                    "      Cette phase initiale est importante pour garantir que la transition vers des systèmes informatiques se fasse de\n" +
                    "      manière fluide et ergonomique pour les utilisateurs.\n" +
                    "      <p>&nbsp;</p>\n" +
                    "      La communication régulière avec le client est essentielle. Cela me permet de valider mes idées, de m'assurer que\n" +
                    "      les améliorations envisagées correspondent bien aux besoins métiers et qu'elles simplifient réellement les\n" +
                    "      processus existants.\n" +
                    "      <p>&nbsp;</p>\n" +
                    "      Quand je suis arrivé, il y avait un fichier Excel créé par mon tuteur pour faire ce que je fais actuellement, mais\n" +
                    "      il était pas finalisé et surtout pas pratique ni vraiment ergonomique. En voyant cela en plus des fiches format\n" +
                    "      papier, cela m'a permis de penser à un système pour améliorer ce processus. J'ai d'abord réaliser des maquettes\n" +
                    "      pour le site, conceptualiser la base de donnée, etc. En bref, j'ai essayé de prendre en compte le plus de\n" +
                    "      paramètre possible pour avoir une vision d'ensemble suffisante afin d'améliorer l'existant"
            },
            "AC2": {
                title  : "<span style='font-size: 1.2rem; font-weight: bold; margin-bottom: 1rem;'> AC 2 :" +
                    " Formaliser les besoins du client et de l’utilisateur </span>",
                content: "      Je consolide les tâches et les objectifs discutés lors de nos réunions hebdomadaires ainsi que des échanges avec\n" +
                    "      mon tuteur. Une fois ces informations collectées, je les organise sur Jira en tenant compte à la fois de leur\n" +
                    "      importance (Changement d'élément dans l'interface, création de page, etc.) et de leur faisabilité.\n" +
                    "      <br>\n" +
                    "      Jira me sert de board à todo comme Trello, que j'alimente régulièrement pour des tâches plus ou moins variées\n" +
                    "      réparties dans des catégories (interface, refactoring...)\n" +
                    "      <p>&nbsp;</p>\n" +
                    "      Cela me permet d'avoir une vision de l'état d'avancement du projet (même si il y a souvent des tâches qui se\n" +
                    "      rajoutent), ce qui permet donc dans un sens, de formaliser les besoins du client en réalisant étapes par étapes\n" +
                    "      des tâches amenant à un jalon important. Par exemple :\n" +
                    "\n" +
                    "      <ul>\n" +
                    "        <li>Réaliser un affichage pour la partie manipulation de données.</li>\n" +
                    "        <li>Créer les requêtes permettant d'insérer, modifier et supprimer.</li>\n" +
                    "        <li>Corriger tel problème.</li>\n" +
                    "        <li>Améliorer l'interface.</li>\n" +
                    "      </ul>\n" +
                    "      <br>\n" +
                    "      Tout cela amène à : la possibilité de modifier les données via requêtes API (CRUD).\n" +
                    "      <img src=\"public/jira_tasks_2.png\" alt=\"\">"
            },
            "AC3": {
                title  : "<span style='font-size: 1.2rem; font-weight: bold; margin-bottom: 1rem;'> AC 3 :" +
                    " Identifier les critères de faisabilité d’un projet informatique </span>",
                content: "      Le projet que j'entreprends seul me paraît réalisable relativement à mes compétences de développeur Junior. J'ai\n" +
                    "      suffisamment de temps pour m'impliquer dans le projet. Cependant, cela implique un apprentissage continu.\n" +
                    "      <br>\n" +
                    "      En analysant les contours du projet, je ne perçois pas de risque majeur susceptible d'avoir un impact significatif\n" +
                    "      sur l'ensemble du projet. Étant seul, je suis conscient des défis, mais je suis confiant dans ma capacité à les\n" +
                    "      relever et à les résoudre au fur et à mesure qu'ils se présentent.\n" +
                    "      <br>\n" +
                    "      Lorsque j'ai une tâche/fonctionnalité à réaliser/implémenter, je me demande combien de temps cela va me prendre.\n" +
                    "      Au maximum, cela me prend 3 jours :\n" +
                    "      <ul>\n" +
                    "        <li>Trouver l'idée</li>\n" +
                    "        <li>L'implémenter</li>\n" +
                    "        <li>Débugger</li>\n" +
                    "      </ul>\n" +
                    "      <p>&nbsp;</p>\n" +
                    "      De base, il n'y avait rien, pas de base de données, pas de sites, rien, enfin les données étaient dispatchées dans\n" +
                    "      des fichiers Excel au quatre coins du monde.\n" +
                    "\n" +
                    "      Le plus long à réaliser n'est pas le site en soit mais bien la base de donnée.\n" +
                    "\n" +
                    "      Il faut avoir une bonne \"base\" un bon modèle/schéma (MCD) avant de pouvoir insérer les données, déjà ça, c'est\n" +
                    "      long. C'est long car il faut réfléchir à :\n" +
                    "      <ul>\n" +
                    "        <li>Quoi prendre ?</li>\n" +
                    "        <li>Les relations entre les éléments</li>\n" +
                    "      </ul>\n" +
                    "      C'est bien beau d'avoir le MCD, mais maintenant, il faut les récupérer les données, et comme je l'ai déjà dit,\n" +
                    "      elles sont dans des fichiers Excel pas toujours intègres, et ce n'est pas pratique au niveau informatique\n" +
                    "      d'extraire ces données.\n" +
                    "      <p>&nbsp;</p>\n" +
                    "      Pour ce qui est du site, j'arrive à bien estimer la conception, grâce aux nombreux projets que l'on a pu avoir en\n" +
                    "      cours, ça me permet de jauger telle ou telle fonctionnalité, si elle \"difficile\" a implémentée ou autre. J'arrive\n" +
                    "      mieux à jauger ma capacité en tant que développeur à résoudre des problèmes."
            },
            "AC4": {
                title  : "<span style='font-size: 1.2rem; font-weight: bold; margin-bottom: 1rem;'> AC 4 :" +
                    " Définir et mettre en œuvre une démarche de suivi de projet </span>",
                content: "Je m'appuie sur GitHub et Jira pour gérer mon projet. Je démarre par les tâches les plus complexes, comme la\n" +
                    "      résolution de bugs ou l'intégration des fonctionnalités essentielles. Je fais des commits fréquents sur GitHub\n" +
                    "      pour suivre les modifications. Les fonctionnalités moins prioritaires sont intégrées après.\n" +
                    "      <br>\n" +
                    "      On peut retrouver le \"peak\" du bitcoin en 2017 dans le graphe ci-dessous, en avril et en mai, <span\n" +
                    "        style=\"font-weight: bold\">pourquoi ?</span>\n" +
                    "      <br><br>\n" +
                    "      <span style=\"font-weight: bold\">Contexte :</span>\n" +
                    "      Au début, je récupérai les données avec des script en python, je me suis ensuite mis vers le développement du site\n" +
                    "      (j'alternai entre les deux) le problème, c'est que je voyais que l'extraction de données était fastidieuse, j'ai\n" +
                    "      donc demandé de l'aide à un collègue pour l'extraction de données, en plus de cela, il pouvait justement vérifier\n" +
                    "      s'il y avait des erreurs.\n" +
                    "      <br><br>\n" +
                    "      Pendant qu'il travaillait sur l'extraction, en parallèle, je codais la partie backend + frontend du site\n" +
                    "      (application web). Donc n'ayant pas les données, ou parfois le même schéma de donnée, j'ai \"prédit\" le modèle que\n" +
                    "      j'allais avoir et \"inventé\" le schéma de donnée afin d'avoir un prototype pour que je puisse avancer.\n" +
                    "      <br><br>\n" +
                    "\n" +
                    "      Finalement, quand j'ai reçu les données, là, à ce moment, je pouvais remodeler mon code afin d’accueillir les\n" +
                    "      vraies données, <span style=\"font-weight: bold\"> j'ai donc fait beaucoup de refactoring d'où les piques en Avril et en Mai.</span>\n" +
                    "      <div style=\"display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px;\">\n" +
                    "        <img src=\"public/github_add_del.png\" alt=\"\">\n" +
                    "        <img src=\"public/commhisto.png\" alt=\"\">\n" +
                    "      </div>"
            }
        },
        "Collaborer au sein d'une équipe informatique"                 : {
            "AC3": {
                title  : "<span style='font-size: 1.2rem; font-weight: bold; margin-bottom: 1rem;'> Situer son rôle" +
                    " et ses missions au sein d’une équipe informatique <br> AC 3 : Mobiliser les compétences interpersonnelles pour intégrer une équipe\n" +
                    "informatique </span>",
                content: "Je ne suis pas dans une équipe informatique, mais à l'avenir je devrai mobiliser les compétences du service\n" +
                    "      informatique de l'entreprise pour intégrer mon projet, le mettre en ligne, assurer la sécurité du site, etc.\n" +
                    "      <br><br>\n" +
                    "\n" +
                    "      Du coup, je vais parler des projets réalisés en cours.\n" +
                    "      <br>\n" +
                    "      Projet Web en VueJS sur la création d'un site reprenant une api mongodb. J'ai pu travailler en équipe, et diviser\n" +
                    "      les tâches sur le projet. Chacun réalisait une partie, l'on mettait nos travaux en communs avec Git sur Github\n" +
                    "      afin d’éventuellement corriger des problèmes ou améliorer certains bouts de code.\n" +
                    "      <br><br>\n" +
                    "      L'on travaillait chacun de notre côté sur des fonctionnalités différentes pour aboutir vers un tout."
            },
            "AC4": {
                title: "<span style='font-size: 1.2rem; font-weight: bold; margin-bottom: 1rem;'> AC 4 : Rendre" +
                    " compte de son activité professionnelle </span>",
                content: "Le contact direct avec le \"client\" me permet de rendre compte de mon activité en permanence en expliquant mon avancée lors de réunions hebdomadaires pour faire le point sur la semaine ou tous les jours avec mon collègue pour discuter des fonctionnalités, de la base de donnée, etc.\n" +
                    " <p>&nbsp;</p>" +
                    "Je rends aussi compte de mon activité d'une certaine manière via Github, ou encore la documentation que j'écris en parallèle."
            }
        }
    },
    "3ème année": {
        "Réaliser un développement d'application": {
            "AC1": {
                title  : "<span style='font-size: 1.2rem; font-weight: bold; margin-bottom: 1rem;\'>Optimiser" +
                    " une base de données, interagir avec une application et mettre en œuvre la sécurité </span>" +
                    "<span style='font-size: 1.2rem; font-weight: bold; margin-bottom: 1rem;\'> AC 1 :" +
                    " Optimiser les modèles de données de l’entreprise </span>",
                content: ""
            }
        }
    }
}