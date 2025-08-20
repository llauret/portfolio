import{_ as v,o as t,c as r,g as x,b as _,t as m,k as w,a as l,F as h,l as y,m as J,w as C,e as S,h as b,i as k,p as L,q as E,d as q,n as j}from"./index-CiwINyuv.js";const P={__name:"ue-card",props:{title:String,color:String},setup(o){return(e,n)=>(t(),r("div",{style:w({backgroundColor:o.color}),class:"card"},[x(e.$slots,"default",{},void 0),_(" "+m(o.title),1)],4))}},M=v(P,[["__scopeId","data-v-a75b93af"]]),T={class:"title"},D={class:"ac"},I={class:"subTitle"},z={__name:"skill-detail",props:{title:String,ac:String,subTitle:String},setup(o){return(e,n)=>(t(),r(h,null,[l("div",T,m(o.title),1),l("div",D,m(o.ac),1),l("div",I,m(o.subTitle),1),x(e.$slots,"description",{},void 0)],64))}},O=v(z,[["__scopeId","data-v-57255efb"]]),g={"2ème année":{"Réaliser un développement d'application":{AC1:{title:"<span style='font-size: 1.2rem; font-weight: bold; margin-bottom: 1rem;'>AC 1 : Élaborer et implémenter les spécifications fonctionnelles et non fonctionnelles à partir des exigences </span>",content:`<div class="description">
        <h2> Comprendre les exigences</h2>
        Analyse des exigences :

        Chaque semaine (chaque vendredi pour être exact) j’ai une réunion avec un collègue et mon tuteur pour parler
        de l’avancée du projet, et des futures fonctionnalités à implémenter.

        L’application web a pour objectif d’être utilisé par des opérateurs sur ligne de production, ils ont besoin
        que l’application soit simple d’utilisation et aussi fiable, vis-à-vis des valeurs qui leur seront affichés et
        les valeurs entrées

        Pour être plus précis :


        Mon projet est de réaliser une « application » web pour informatiser un processus réalisé à l’origine sur
        papier, les problèmes du processus papier :
        <hr>
        <ul>
          <li>
            Enclin à avoir des erreurs humaines (Mauvaise écriture, mauvais relevé, etc.) -> problème lors d'audit pour
            les normes
          </li>
          <li>
            Historique pas optimal
          </li>
        </ul>
        <br>
        « L’application » web va permettre de corriger ces problèmes. Pour développer cette « application » web, je
        dois avoir une vue d’ensemble sur les spécifications et me poser des questions, documenter les exigences, etc.
        <br>
        Alors certes, l’informatique va corriger ces problèmes, mais il va y avoir des contraintes. Sur papier, l’on
        est libre d’écrire ce que l’on souhaite (sous une certaine forme évidemment) l’on peut écrire des noms
        d’étapes de production comme le souhaite, relever des caractéristiques sous un certain format.

        <br>
        <h3>Exemple bête :</h3>
        <br>

        - Relever une température sur un produit en omettant le °C

        <br>
        Il y a donc des contraintes techniques :

        <ul>

          <li>Uniformiser les données (Créer une base de données)</li>
          <li>Uniformiser l’affichage (Avoir une sorte de « moule », un template sur l’affichage des données)</li>
          <li>Omettre certains éléments (pour l’instant) comme les images, schéma</li>
          <li>Performance, il y a relativement pas mal de données</li>
          <li>Sécurité, même si l'application est en local, il faut ajouter une authentification et protéger les
            systèmes
          </li>

        </ul>

        L’exigence la plus importante est la base de données à créer cf compétence 3

        Bien prendre en compte les exigences, c’est vraiment important pour ne pas réaliser une solution en désaccord
        avec l’envie des clients et éviter cette situation :
        <br>
        <img alt="" src="/portfolio/development.jpg">
        <hr>
        <h2>Conception de l'application</h2>
        <h3>Spécifications fonctionnelles</h3>
        <p>
          Il y a plusieurs fonctionnalités que je dois implémenter dans l’application :
        </p>


        <ul>
          <li>Création d’une base de données en SQL</li>
          <li>Ajout, modification, suppression, lecture de la BDD</li>
          <li>Réaliser des requêtes afin d’afficher les données de la base via une API (Application Programming
            Interface)
          </li>
          <li>Fonctionnalité de tri, filtre...</li>
          <li>Gestion d’utilisateur, avec des rôles pour chacun, ceux pouvant réaliser des relevés, ceux pouvant les
            modifier et accéder à la base de données et un admin
          </li>
        </ul>
        Tout cela m’a appris à réaliser une bonne base de données avec Postgresql, et de l’interroger via une API
        et un ORM (Sequelize) pour l’écriture des requêtes, j’ai pu mettre en application ce que j’ai vue en cours
        en première année et actuellement en deuxième année pour tout ce qui concerne les bases de données et la
        création d’interface.
      </div>
      <img alt="" src="/portfolio/clientapi.png">
      <h5>Exemple d’implémentation :</h5>
      L’ajout d’un bouton d’édition
      <ul>
        <li>Comment j'implémente ça ?</li>
        <li>Sous quelle forme ?</li>
        <li>Où je mets ce bouton ?</li>
        <li>Comment je passe de l'état modifié ou non ?</li>
        <li>Comment je rends les données modifiées persistante etc...</li>
      </ul>
      <hr>
      <span>
        Pour répondre à ces questions, je me pose, et écris sur feuille mon problème, j’écris aussi du pseudo-code, après je passe à une implémentation basique pour voir le fonctionnement et je peaufine ensuite avec du style.
Je réfléchis à une approche basique, le bouton va changer la valeur d’un booléen, ce booléen, je le transmets via un store comme ça, j'ai l'état du bouton qui est sauvegardé.
<p>&nbsp;</p>
        Quand je clique sur ce bouton, j'entre en mode édition, je change mes composants et affiche ceux qui m'intéresse OK ça marche, mais maintenant comment je sauvegarde chaque valeur modifiée, afin que les données soient persistantes ? (Qu’elles restent lorsque je change de page ou que je "refresh" la page)
      </span>
      <img alt="" src="/portfolio/editmode.png">

      <h3> Spécification non fonctionnelles : </h3>

      <div>
        <ul>
          <li>Performance : le nombre de requêtes possible en simultané, Utilisation de la mémoire</li>
          <li>Sécurité : authentification avec JWT pour accéder à la base de données, différent rôles, mot de passe en
            hash dans la base de données.
            JSON Web Token (JWT) est un standard ouvert défini dans la RFC 75191. Il permet l'échange sécurisé de
            jetons (tokens) entre plusieurs parties. Cette sécurité de l’échange se traduit par la vérification de
            l'intégrité et de l'authenticité des données. Elle s’effectue par l'algorithme HMAC ou RSA.
          </li>
          <li>Fiabilité : back-up des données avec des cronjob/scripts cron est un programme qui permet aux utilisateurs
            des systèmes Unix d’exécuter automatiquement des
            scripts, des commandes ou des logiciels à une date et une heure spécifiée à l’avance, ou selon un cycle
            défini à l’avance.
          </li>
          <li>Diagramme :Je créais des diagrammes aussi pour expliquer les relations entre mes composants Vue JS
            notamment pour
            expliquer leurs interactions via les évènements, les stores, etc. Mais aussi des MCD pour la base de données
          </li>
        </ul>
      </div>

      <img alt="" src="/portfolio/schema_view_component.png">
      <h2>Technologies</h2>
      <div>
        Pour développer tout cela, il faut choisir des technologies, comme vu à la page d’introduction, j’ai choisi :

        <ul>
          <li>Vue JS</li>
          <li>PostgreSQL</li>
          <li>Sequelize</li>
          <li>Node JS</li>
          <li>VitePress</li>
          <li>Python</li>
        </ul>
        <br>
        Pourquoi ces choix ? En grande partie, car je les utilise en cours et ça me permettait de travailler avec ce que
        je connais déjà. En soit d’une certaine manière peu importe le Framework, cela aurait fait l’affaire, que ce
        soit Angular ou React. La vraie question, c’est pourquoi du SQL plutôt que du Nosql ? Les raisons sont :
        <ul>
          <li> La relation des données, exemple un produit est sur une ligne et une ligne a plusieurs produits.</li>
          <li> Les données sont structurées.</li>
          <li> Assurer une intégrité des données (normalisation, forme normale).</li>
          <li> Le SQL ça marche, c’est une valeur sûre.</li>
        </ul>
        <br>
        En réalité, j’utilise les deux, dans le sens où je stock du Json dans PostgreSQL avec l’attribut JSONB. C'est un
        format pour enregistrer du JSON.
        <br>
        <span style="font-weight: bold"> JavaScript Object
          Notation (JSON) </span>
        est un <a href="https://fr.wikipedia.org/wiki/Format_de_donn%C3%A9es"> format de données </a> textuel dérivé de
        la notation des <a href="https://fr.wikipedia.org/wiki/Tableau_associatif#Javascript"> objets </a> du langage
        <a href="https://fr.wikipedia.org/wiki/JavaScript"> JavaScript </a>. Il concurrence <a
          href="https://fr.wikipedia.org/wiki/Extensible_Markup_Language"> XML </a> pour la représentation
        et la transmission d’information structurée1.
        <br>
        <span style="font-weight: bold"> Exemple :</span>

        Dans mon application, j’ai une partie de relevé, ce relevé se fait en fonction de ce qui est affichée à
        l’utilisateur.

        L’utilisateur regarde les valeurs attendues et passe en mode édition pour relever ce qu’il observe.
      </div>


      <img alt="" src="/portfolio/interface_degraissage1_edit.png.1.png">

      <div>
        L’affichage se base sur une requête sql avec sequelize où je récupère les attributs d’un produit, je boucle dans
        l’objet pour récupérer ce qui m’intéresse. Le problème qui se pose, c’est comment je stock la partie relevée ?
        Pour cela, j’ai pensé à utiliser le même objet que celui reçu par la requête.
        <p>&nbsp;</p>
        Mais en remplaçant les caractéristiques optimales (les valeurs affichées, elles concernent les valeurs optimales
        d'une caractéristique exemple : Température 57(valeur min) 60(opti) 62(valeur max)) par celles relevées,
        pourquoi je fais ça ?
        <p>&nbsp;</p>
        C’est pour pouvoir afficher la même interface, mais avec les valeurs relevées quand j’accéderai aux fiches dans
        ma partie historique.
      </div>
      <img alt="" src="/portfolio/Screen%20Shot%202024-06-13%20at%2014.08.02-fullpage.png">

      Le problème qui se pose, c’est comment stocker cela dans ma base de données ? Ce sont les mêmes tables interrogées
      mais avec une seule valeur qui change à fois ce qui me ferait créer des éléments à chaque nouvelle valeur avec
      leurs liens respectifs, on en finis plus. J’ai donc choisi de stocker directement l’objet dans la base de données.
      De plus, j’ai une partie avec des checkbox pour valider une étape ou non et c’est pareil, j’ai dû directement
      ajouter l’objet.

      <pre>
        { "ph": { "phMax": 14, "phMin": 0, "phOptimale": 6 },
        "debit": { "debitMax": 1, "debitMin": 0, "debitOptimale": 0.56 },
        "etape": "2.1",
        "voltage": { "voltageMax": 7, "voltageMin": 0, "voltageOptimale": 2 },
        "amperage": { "amperageMax": 7, "amperageMin": 2, "amperageOptimale": 4 },
        "temperature": { "temperatureMax": 62, "temperatureMin": 58, "temperatureOptimale": 59 },
        "descriptions": { "description1": "", "description2": "Chimique + ultrason", "description3": "" },
        "longueurCellule": { "longueurCelluleMax": 0.6, "longueurCelluleMin": 0.5, "longueurCelluleOptimale": 0.52 } },
      </pre>
      Si j'avais stocké cela en SQL cela m'aurait fais créer des tables "doublons", alors peut-être que ce n'est pas la
      meilleure solution, mais ça fonctionne

      <h3>Développement itératif</h3>

      Je suis en quelques sortes un développement itératif vu que je suis en continu en relation avec le « client » que
      je consulte régulièrement pour corriger des fonctionnalités, les améliorer ou en ajouter.
      <br>
      Exemple, rajouter une bulle de commentaires sur le relevé pour donner plus d’informations sur d’éventuels
      problèmes.

      <img alt="" src="/portfolio/ajout_commentaire.gif.1.gif">

      Pourquoi je fais cela ?

      <ul>
        <li> Avoir un feedback constant</li>
        <li> Être flexible</li>
      </ul>

      <h3>Déploiement</h3>
      J’ai trois applications :

      <ul>
        <li> L’application web</li>
        <li> L’API</li>
        <li> La documentation</li>
      </ul>

      Plus la base de données
      <br>
      L’API, le site et la base de données doivent évidemment tourner en même temps pour que tout fonctionne. Avec
      pgAdmin je peux voir les requêtes I/O et avoir des graphiques, les différentes connexions, etc. Cela me permet de
      monitorer la base de données.

      <img alt="" src="/portfolio/schéma_data.png">

      <h3>Amélioration continue</h3>

      Pour l’instant, j’améliore avec les feedbacks de mon tuteur et de mon collègue, quand l’application aura les
      fonctionnalités de base, il y aura des feedbacks sur les utilisateurs.

      Cela va me permettre d’avoir un retour réel, savoir ce que je devrais améliorer sur l’interface. De mon côté, je
      fais de mon mieux pour avoir une interface intuitive, simple, vu que c’est destiné aussi à être utilisé sur
      tablette.

      <h3>Analyse</h3>

      Face à un problème, comme dis précédemment, j'écris du pseudo, je fais la technique du rubber duck. Si je ne
      connais pas une syntaxe ou autre, je regarde sur internet.

      J'utilise l'ia dans ces cas :
      <ul>
        <li> Trouver des idées</li>
        <li> Régler des problèmes de syntaxe</li>
        <li> M'expliquer des concepts</li>
        <li> Refactoring</li>
      </ul>


      <span style="font-weight: bold"> Aurais-je pu faire autrement ? </span>

      Alors, évidemment, oui, j'aurais pu faire autrement, que ce soit :
      <br>
      Les technologies utilisées
      Ma façon d'écrire le code
      <br>
      Il y a plusieurs fois où j'ai dû refactor mon code par problème de clarté par exemple, je me remets toujours en
      question sur comment implémenter telle ou telle fonctionnalité et essayer de suivre les principes :
      <br>
      <ul>
        <li> DRY (Don't repeat yourself)</li>
        <li> KISS (Keep it stupid simple)</li>
        <li> SoC (Separation of concern) Modularité</li>
      </ul>
      <br>
      En suivant ces principes, ça permet de coder un minimum correctement et de bien segmenter mon code.

      <h3>En résumé</h3>

      J'ai appris à être rigoureux dans ma manière de procéder et pas seulement à code juste pour coder, il faut que je
      réfléchisse à : quoi coder, comment et pourquoi je le fais. Respecter les attentes clients et proposer un plan
      pour avancer. Forcément vu que je suis le seul développeur, j'ai doit être en totale autonomie, donc si j'ai un
      problème, je peux compter sur :
      <br>
      <ul>
        <li> Moi</li>
        <li> Internet</li>
        <li> StackOverflow</li>
        <li> IA : ChatGPT, GithubCopilot</li>
      </ul>
      <br>
      J'ai beaucoup appliqué ce que j'ai pu voir en cours aussi, sur la manière de segmenter mon code, de coder
      certaines fonctionnalités, je pense par exemple à l'authentification, en bref, j'ai pu mettre en œuvre ce que j'ai
      appris et aussi pu apprendre en autonomie.

      <pre style="font-size:9.8pt;"><span style="color:#000000;">editMode</span><span
          style="color:#8B0000;">: </span><span style="color:#000000;">JSON</span>.<span
          style="color:#4B0082;">parse</span>(<span style="color:#000000;">localStorage</span>.<span
          style="color:#4B0082;">getItem</span>(<span style="color:#00008B;">'isShifted'</span>)) <span
          style="color:#8B0000;">|| false</span>,<br><span style="color:#000000;">inputValueNumber</span><span
          style="color:#8B0000;">: </span><span style="color:#000000;">JSON</span>.<span
          style="color:#4B0082;">parse</span>(<span style="color:#000000;">localStorage</span>.<span
          style="color:#4B0082;">getItem</span>(<span style="color:#00008B;">'inputValueNumber'</span>)) <span
          style="color:#8B0000;">|| </span>
      </pre>`},AC2:{title:"<span style='font-size: 1.2rem; font-weight: bold; margin-bottom: 1rem;'>AC 2 : Appliquer des principes d’accessibilité et d’ergonomie </span>",content:`<hr>
      L'application que je développe est un site web local conçu spécifiquement pour les employés chargés du contrôle
      d'une ligne de production. Mon objectif principal est de simplifier au maximum l'utilisation de cette application,
      notamment en prenant en compte le fait que les utilisateurs peuvent ne pas être tous familiers avec la technologie
      de manière générale. Pour ce faire, j'adapte l'interface aux fonctionnalités de l'écran tactile des tablettes, en
      intégrant par exemple du responsive, évidemment pour adapter l'interface aux tablettes mais aussi aux pc ou tout
      simplement bien disposer les boutons d'actions.
      <p>&nbsp;</p>
      La simplicité d'utilisation est au cœur de ma démarche. J'œuvre pour rendre cette application à la fois
      ergonomique et intuitive, en privilégiant une interface utilisateur claire et facile à appréhender. Je veille à ce
      que chaque fonctionnalité soit accessible aisément, facilitant ainsi la prise en main pour tous les utilisateurs,
      quels que soient leurs niveaux de familiarité avec les outils numériques. J'essaie de faire cela en réalisant une
      interface simple, UI et UX.
      <p>&nbsp;</p>
      Vu que le site est basé sur tablette je dois évidemment faire du responsive et adapter à l'utilisation de la
      tablette, vu qu'il n'y a pas de souris je dois penser comme si j'utilisais mon doigt. Mettre les boutons à porté
      de mains et faire en sorte que le site soit simple d'utilisation.
      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px;">
        <figure>
          <img alt="" src="/portfolio/interface_tuile.png">
          <figcaption>Interface Tuile</figcaption>
        </figure>
        <figure>
          <img alt="" src="/portfolio/interface_degraissage1.png">
          <figcaption>Interface Dégraissage 1</figcaption>
        </figure>
        <figure>
          <img alt="" src="/portfolio/interface_degraissage1_edit.png">
          <figcaption>Interface Dégraissage 1 Edit</figcaption>
        </figure>
      </div>
      <figure>
        <img alt="" src="/portfolio/interface_prototype.png">
        <figcaption>Interface Prototype</figcaption>
      </figure>
      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px;">
        <figure>
          <img alt="" src="/portfolio/interface_prototype2.png">
          <figcaption>Interface Prototype 2</figcaption>
        </figure>
        <figure>
          <img alt="" src="/portfolio/interface_prototype3.png">
          <figcaption>Interface Prototype 3</figcaption>
        </figure>
      </div>`},AC3:{title:"<span style='font-size: 1.2rem; font-weight: bold; margin-bottom: 1rem;'>AC 3 : Adopter de bonnes pratiques de conception et de programmation </span>",content:`Pour le développement de l'application web, j'ai adopté une approche rigoureuse en segmentant bien mon code pour
      m'y retrouver. Cette structure organisée m'a permis de maintenir une clarté et une cohérence dans mon code. Je
      consacre du temps à refactor régulièrement mon code, évitant ainsi le "code spaghetti" et garantissant sa
      lisibilité et sa maintenabilité.
      <p>&nbsp;</p>
      Dans le respect des bonnes pratiques, j'applique des normes de nommage, telles que le snake_case pour mon code
      Python. Cette cohérence dans la manière de nommer mes variables, fonctions et fichiers rend la compréhension sur
      le code plus fluides pour moi-même et pour les éventuelles futurs développeurs qui verront mon projet.
      Pour une gestion méthodique de mon travail, j'ai segmenté mes projets sur GitHub en deux repositories distincts :
      l'un dédié à mes scripts en Python et l'autre au site web que je développe. J'adopte une approche itérative en
      versionnant mon code.
      Cette approche structurée et méthodique garantit que mon code demeure clair, évolutif et bien documenté, offrant
      ainsi une base solide pour le développement de l'application web.
      <p>&nbsp;</p>
      Je mets aussi des gestions d'erreur notamment sur mes requêtes vers l'API pour facilement comprendre les
      éventuelles erreurs ça me permet de mieux débug
      <p>&nbsp;</p>

      <span style="font-weight: bold"> Côté backend </span> j'ai modularisé mon code :

      <pre
          style="font-family:'JetBrains Mono', monospace;font-size:9pt;background-color:#1a1a1a;padding:12px;border-radius:5px;"><span
          style="color:#ffffff;">exports</span><span style="color:#89ddff;">.</span><span style="color:#82aaff;">findAllProduit </span><span
          style="color:#89ddff;">= (</span><span style="color:#ff9580;">req</span><span style="color:#89ddff;">, </span><span
          style="color:#ff9580;">res</span><span style="color:#89ddff;">) =&gt; {<br></span><span
          style="color:#89ddff;">    </span><span style="color:#eeffe3;">produit</span><span
          style="color:#89ddff;">.</span><span style="color:#82aaff;font-style:italic;">findAll</span><span
          style="color:#89ddff;">().</span><span style="color:#82aaff;">then</span><span style="color:#89ddff;">(</span><span
          style="color:#ff9580;">data </span><span style="color:#89ddff;">=&gt; {<br></span><span
          style="color:#89ddff;">        </span><span style="color:#ff9580;">res</span><span
          style="color:#89ddff;">.</span><span style="color:#82aaff;">send</span><span
          style="color:#89ddff;">(</span><span style="color:#ff9580;">data</span><span
          style="color:#89ddff;">)<br></span><span style="color:#89ddff;">    }).</span><span style="color:#82aaff;">catch</span><span
          style="color:#89ddff;">(</span><span style="color:#ff9580;">err </span><span
          style="color:#89ddff;">=&gt; {<br></span><span style="color:#89ddff;">        </span><span
          style="color:#ff9580;">res</span><span style="color:#89ddff;">.</span><span
          style="color:#82aaff;">status</span><span style="color:#89ddff;">(</span><span
          style="color:#ffd580;">500</span><span style="color:#89ddff;">).</span><span
          style="color:#82aaff;">send</span><span style="color:#89ddff;">({<br></span><span
          style="color:#89ddff;">            </span><span style="color:#ffffff;">message</span><span
          style="color:#89ddff;">: </span><span style="color:#ff9580;">err</span><span
          style="color:#89ddff;">.</span><span style="color:#ffffff;">message </span><span
          style="color:#89ddff;">|| </span><span style="color:#c3e88d;">'Error'<br></span><span
          style="color:#c3e88d;">        </span><span style="color:#89ddff;">})<br></span><span style="color:#89ddff;">    })<br></span><span
          style="color:#89ddff;">}</span></pre>

      <span style="font-weight: bold">Middleware :</span> Intercepter pour gérer les requêtes notamment sur la
      vérification de l'authentification

      <pre style="font-family:'JetBrains Mono', monospace;font-size:9pt;background-color:#1a1a1a"><span
          style="color:#82aaff;">verifyToken </span><span style="color:#89ddff;">= (</span><span
          style="color:#f78c6c;">req</span><span style="color:#89ddff;">, </span><span
          style="color:#f78c6c;">res</span><span style="color:#89ddff;">, </span><span
          style="color:#f78c6c;">next</span><span style="color:#89ddff;">) =&gt; {<br></span><span
          style="color:#89ddff;">    </span><span style="color:#c792ea;font-style:italic;">let </span><span
          style="color:#eeffe3;">token </span><span style="color:#89ddff;">= </span><span
          style="color:#f78c6c;">req</span><span style="color:#89ddff;">.</span><span
          style="color:#eeffff;">headers</span><span style="color:#89ddff;">[</span><span style="color:#c3e88d;">"x-access-token"</span><span
          style="color:#89ddff;">];<br></span><span style="color:#89ddff;">    </span><span
          style="color:#c792ea;font-style:italic;">if</span><span style="color:#89ddff;">(!</span><span
          style="color:#eeffe3;">token</span><span style="color:#89ddff;">) {<br></span><span
          style="color:#89ddff;">        </span><span style="color:#eeffe3;">token </span><span
          style="color:#89ddff;">= </span><span style="color:#f78c6c;">req</span><span
          style="color:#89ddff;">.</span><span
          style="color:#eeffff;">headers</span><span style="color:#89ddff;">[</span><span style="color:#c3e88d;">"authorization"</span><span
          style="color:#89ddff;">];<br></span><span style="color:#89ddff;">        </span><span
          style="color:#c792ea;font-style:italic;">if</span><span style="color:#89ddff;">(!</span><span
          style="color:#eeffe3;">token</span><span style="color:#89ddff;">) {<br></span><span
          style="color:#89ddff;">            </span><span style="color:#c792ea;font-style:italic;">return </span><span
          style="color:#f78c6c;">res</span><span style="color:#89ddff;">.</span><span
          style="color:#82aaff;">status</span><span style="color:#89ddff;">(</span><span
          style="color:#f78c6c;">403</span><span style="color:#89ddff;">).</span><span
          style="color:#82aaff;">send</span><span style="color:#89ddff;">({<br></span><span
          style="color:#89ddff;">                </span><span style="color:#eeffff;">message</span><span
          style="color:#89ddff;">: </span><span style="color:#c3e88d;">"Aucun jeton fourni!"<br></span><span
          style="color:#c3e88d;">            </span><span style="color:#89ddff;">});<br></span><span
          style="color:#89ddff;">        }<br></span><span style="color:#89ddff;">        </span><span
          style="color:#eeffe3;">token </span><span style="color:#89ddff;">= </span><span
          style="color:#eeffe3;">token</span><span style="color:#89ddff;">.</span><span
          style="color:#82aaff;">split</span><span style="color:#89ddff;">(</span><span
          style="color:#c3e88d;">" "</span><span style="color:#89ddff;">)[</span><span
          style="color:#f78c6c;">1</span><span
          style="color:#89ddff;">];<br></span><span style="color:#89ddff;">    }<br></span><span
          style="color:#89ddff;">    </span><span style="color:#eeffff;">jwt</span><span
          style="color:#89ddff;">.</span><span style="color:#eeffff;">verify</span><span
          style="color:#89ddff;">(</span><span style="color:#eeffe3;">token</span><span
          style="color:#89ddff;">, </span><span style="color:#eeffff;">config</span><span
          style="color:#89ddff;">.</span><span style="color:#eeffff;">secret</span><span
          style="color:#89ddff;">, (</span><span style="color:#f78c6c;">err</span><span
          style="color:#89ddff;">, </span><span style="color:#f78c6c;">decoded</span><span style="color:#89ddff;">) =&gt; {<br></span><span
          style="color:#89ddff;">        </span><span style="color:#c792ea;font-style:italic;">if</span><span
          style="color:#89ddff;">(</span><span style="color:#f78c6c;">err</span><span
          style="color:#89ddff;">) {<br></span><span style="color:#89ddff;">            </span><span
          style="color:#c792ea;font-style:italic;">return </span><span style="color:#82aaff;">catchError</span><span
          style="color:#89ddff;">(</span><span style="color:#f78c6c;">err</span><span
          style="color:#89ddff;">, </span><span
          style="color:#f78c6c;">res</span><span style="color:#89ddff;">);<br></span><span style="color:#89ddff;">        }<br></span><span
          style="color:#89ddff;">        </span><span style="color:#f78c6c;">req</span><span
          style="color:#89ddff;">.</span><span style="color:#eeffff;">userId </span><span
          style="color:#89ddff;">= </span><span style="color:#f78c6c;">decoded</span><span
          style="color:#89ddff;">.</span><span style="color:#eeffff;">id</span><span
          style="color:#89ddff;">;<br></span><span style="color:#89ddff;">        </span><span style="color:#f78c6c;">next</span><span
          style="color:#89ddff;">();<br></span><span style="color:#89ddff;">    });<br></span><span
          style="color:#89ddff;">};</span></pre>

      <span style="font-weight: bold"> Model :</span> Schéma de mes tables SQL retranscrit en Sequelize

      <pre style="font-family:'JetBrains Mono', monospace;font-size:9pt;background-color:#1a1a1a"><span
          style="color:#eeffff;">module</span><span style="color:#89ddff;">.</span><span
          style="color:#eeffff;">exports </span><span style="color:#89ddff;">= </span><span
          style="color:#c792ea;font-style:italic;">function</span><span style="color:#89ddff;">(</span><span
          style="color:#f78c6c;">sequelize</span><span style="color:#89ddff;">, </span><span style="color:#f78c6c;">DataTypes</span><span
          style="color:#89ddff;">) {<br></span><span style="color:#89ddff;">    </span><span
          style="color:#c792ea;font-style:italic;">return </span><span style="color:#f78c6c;">sequelize</span><span
          style="color:#89ddff;">.</span><span style="color:#82aaff;">define</span><span style="color:#89ddff;">(</span><span
          style="color:#c3e88d;">'ampere'</span><span style="color:#89ddff;">, {<br></span><span
          style="color:#89ddff;">        </span><span style="color:#eeffff;">id_ampere</span><span
          style="color:#89ddff;">: {<br></span><span style="color:#89ddff;">            </span><span
          style="color:#eeffff;">autoIncrement</span><span style="color:#89ddff;">: </span><span
          style="color:#c792ea;font-style:italic;">true</span><span style="color:#89ddff;">,<br></span><span
          style="color:#89ddff;">            </span><span style="color:#eeffff;">type</span><span
          style="color:#89ddff;">: </span><span style="color:#f78c6c;">DataTypes</span><span
          style="color:#89ddff;">.</span>INTEGER<span style="color:#89ddff;">,<br></span><span
          style="color:#89ddff;">            </span><span style="color:#eeffff;">allowNull</span><span
          style="color:#89ddff;">: </span><span style="color:#c792ea;font-style:italic;">false</span><span
          style="color:#89ddff;">,<br></span><span style="color:#89ddff;">            </span><span
          style="color:#eeffff;">primaryKey</span><span style="color:#89ddff;">: </span><span
          style="color:#c792ea;font-style:italic;">true<br></span><span
          style="color:#c792ea;font-style:italic;">        </span><span style="color:#89ddff;">},<br></span><span
          style="color:#89ddff;">        </span><span style="color:#eeffff;">intensite_amperage</span><span
          style="color:#89ddff;">: {<br></span><span style="color:#89ddff;">            </span><span
          style="color:#eeffff;">type</span><span style="color:#89ddff;">: </span><span
          style="color:#f78c6c;">DataTypes</span><span style="color:#89ddff;">.</span><span style="color:#eeffff;">NUMERIC</span><span
          style="color:#89ddff;">,<br></span><span style="color:#89ddff;">            </span><span
          style="color:#eeffff;">allowNull</span><span style="color:#89ddff;">: </span><span
          style="color:#c792ea;font-style:italic;">true<br></span><span
          style="color:#c792ea;font-style:italic;">        </span><span style="color:#89ddff;">},<br></span><span
          style="color:#89ddff;">    }, {<br></span><span style="color:#89ddff;">        </span><span
          style="color:#f78c6c;">sequelize</span><span style="color:#89ddff;">,<br></span><span
          style="color:#89ddff;">        </span><span style="color:#eeffff;">tableName</span><span
          style="color:#89ddff;">: </span><span style="color:#c3e88d;">'ampere'</span><span style="color:#89ddff;">,<br></span><span
          style="color:#89ddff;">        </span><span style="color:#eeffff;">schema</span><span
          style="color:#89ddff;">: </span><span style="color:#c3e88d;">''</span><span style="color:#89ddff;">,<br></span><span
          style="color:#89ddff;">        </span><span style="color:#eeffff;">timestamps</span><span
          style="color:#89ddff;">: </span><span style="color:#c792ea;font-style:italic;">false</span><span
          style="color:#89ddff;">,<br></span><span style="color:#89ddff;">        </span><span style="color:#eeffff;">indexes</span><span
          style="color:#89ddff;">: [<br></span><span style="color:#89ddff;">            {<br></span><span
          style="color:#89ddff;">                </span><span style="color:#eeffff;">name</span><span
          style="color:#89ddff;">: </span><span style="color:#c3e88d;">'ampere_pkey'</span><span style="color:#89ddff;">,<br></span><span
          style="color:#89ddff;">                </span><span style="color:#eeffff;">unique</span><span
          style="color:#89ddff;">: </span><span style="color:#c792ea;font-style:italic;">true</span><span
          style="color:#89ddff;">,<br></span><span style="color:#89ddff;">                </span><span
          style="color:#eeffff;">fields</span><span style="color:#89ddff;">: [<br></span><span style="color:#89ddff;">                    {</span><span
          style="color:#eeffff;">name</span><span style="color:#89ddff;">: </span><span style="color:#c3e88d;">'id_ampere'</span><span
          style="color:#89ddff;">}<br></span><span style="color:#89ddff;">                ]<br></span><span
          style="color:#89ddff;">            }<br></span><span style="color:#89ddff;">        ]<br></span><span
          style="color:#89ddff;">    })<br></span><span style="color:#89ddff;">}</span></pre>

      <span style="font-weight: bold"> Routes : </span> Là où je définit, où je peux récupérer mes données (endpoint)

      <pre style="font-family:'JetBrains Mono', monospace;font-size:9pt;background-color:#1a1a1a"><span
          style="color:#546e7a;font-style:italic;">/**<br></span><span
          style="color:#546e7a;font-style:italic;"> * </span><span
          style="color:#c792ea;font-weight:bold;font-style:italic;">@swagger<br></span><span
          style="color:#c792ea;font-weight:bold;font-style:italic;"> </span><span
          style="color:#546e7a;font-style:italic;">* /api/produit:<br></span><span
          style="color:#546e7a;font-style:italic;"> *    get:<br></span><span style="color:#546e7a;font-style:italic;"> *      tags:<br></span><span
          style="color:#546e7a;font-style:italic;"> *        - Produit<br></span><span
          style="color:#546e7a;font-style:italic;"> *      summary: Récupère tous les nom_racine<br></span><span
          style="color:#546e7a;font-style:italic;"> *      description: Use to request all nom_racine<br></span><span
          style="color:#546e7a;font-style:italic;"> *      responses:<br></span><span
          style="color:#546e7a;font-style:italic;"> *        200:<br></span><span
          style="color:#546e7a;font-style:italic;"> *          description: A successful response<br></span><span
          style="color:#546e7a;font-style:italic;"> *          content:<br></span><span
          style="color:#546e7a;font-style:italic;"> *            application/json:<br></span><span
          style="color:#546e7a;font-style:italic;"> *              schema:<br></span><span
          style="color:#546e7a;font-style:italic;"> *                type: array<br></span><span
          style="color:#546e7a;font-style:italic;"> */<br></span><span style="color:#eeffe3;">router</span><span
          style="color:#89ddff;">.</span><span style="color:#eeffff;">get</span><span
          style="color:#89ddff;">(</span><span style="color:#c3e88d;">'/produit'</span><span
          style="color:#89ddff;">, </span><span style="color:#eeffe3;">produit</span><span
          style="color:#89ddff;">.</span><span style="color:#82aaff;">findAllNomRacine</span><span
          style="color:#89ddff;">)</span></pre>

      J'écris ma table dans le sous dossier Model -> J'écris une requête dans Controller -> J'assigne la requête à une
      route

      <span style="font-weight: bold">Exemple :</span>
      J'avais un problème de requêtes dans ma base de données, en l'occurrence un problème d'insertion où le corps de ma
      requête n'était pas bon:

      <ul>
        <li> Premièrement je teste dans mon API avec Swagger la requête en question</li>
        <li> J'examine le header et le body que j'envoie avec Javascript et ça là que ça coince</li>
      </ul>
      <p>&nbsp;</p>
      En mettant des gestions d'erreurs et en formatant correctement le code ça me permet de bien envoyer les bonnes
      données

      <pre style="font-family:'JetBrains Mono', monospace;font-size:9pt;background-color: #1a1a1a"><span
          style="color:#6f42c1;">addHistorique</span>() {<br>  <span style="color:#d73a49;">const </span>data <span
          style="color:#d73a49;">= </span>{<br>    input_releve<span style="color:#d73a49;">: </span>JSON.<span
          style="color:#6f42c1;">stringify</span>(<span style="color:#d73a49;">this</span>.inputHistory.data_affichage_caracteristiques),<br>    nom_ligne<span
          style="color:#d73a49;">: this</span>.selectionStore.selectedLigne,<br>    nom_pn_plating<span
          style="color:#d73a49;">: this</span>.selectionStore.selectedNomPnPlating,<br>    commentaire<span
          style="color:#d73a49;">: this</span>.inputValuesStore.inputCommentaire,<br>    date_releve<span
          style="color:#d73a49;">: new </span>Date().<span style="color:#6f42c1;">toISOString</span>(),<br>    input_toggle<span
          style="color:#d73a49;">: </span>JSON.<span style="color:#6f42c1;">stringify</span>(<span
          style="color:#d73a49;">this</span>.inputValuesStore.inputToggleOkNotOk),<br>  }<br>  Service.<span
          style="color:#6f42c1;">addHistorique</span>(data).<span style="color:#6f42c1;">then</span>(() <span
          style="color:#d73a49;">=&gt; </span>{<br>    console.<span style="color:#6f42c1;">log</span>(<span
          style="color:#032f62;">"Historique ajouté"</span>)<br>  }).<span style="color:#6f42c1;">catch</span>((<span
          style="color:#e36209;">e</span>) <span style="color:#d73a49;">=&gt; </span>{<br>    console.<span
          style="color:#6f42c1;">error</span>(<span style="color:#032f62;">'Error:'</span>, <span
          style="color:#e36209;">e</span>.message);<br>    console.<span style="color:#6f42c1;">error</span>(<span
          style="color:#032f62;">'Stack:'</span>, <span style="color:#e36209;">e</span>.stack);<br>  })<br>},</pre>


      J'essaye de bien structurer mon code, de bien le commenter que ce soit directement dans le code avec des
      commentaires ou avec une documentation globale que j'écris en parallèle avec VitePress.

      Je commit mon code régulièrement pour le tenir à jour et aussi pour faire des rollback si jamais je fais des
      bêtises

      Globalement j'essaye de faire de mon mieux sachant que je suis seul sur le projet. Je regarde à droite à gauche
      sur des projets existants comment les autres développeurs font. Je m'informe comme je peux

      <span style="font-weight: bold">Exemple de re-factoring :</span>

      J'avais plusieurs plusieurs composant en VueJS qui faisait essentiellement la même chose, en l’occurrence ça
      affichait des données en fonction de la station où l'on était. La logique était la même j'ai donc supprimer une
      vingtaine de composant pour en faire qu'un seul et j'ai utiliser des props pour avoir un composant modulaire. J'ai
      dû implémenter en fonction de l'URL actuelle un changement dans le props. En fonction de l’URL, les données
      affiché change.

      <pre style="font-family:'JetBrains Mono', monospace;font-size:9pt; background-color: #1a1a1a"><span
          style="color:#89ddff;">{<br></span><span
          style="color:#89ddff;">    </span><span style="color:#eeffff;">path</span><span
          style="color:#89ddff;">: </span><span style="color:#c3e88d;">'/:nom_station'</span><span
          style="color:#89ddff;">,<br></span><span style="color:#89ddff;">    </span><span
          style="color:#eeffff;">name</span><span style="color:#89ddff;">: </span><span style="color:#c3e88d;">'StationTuile'</span><span
          style="color:#89ddff;">,<br></span><span style="color:#89ddff;">    </span><span style="color:#82aaff;">component</span><span
          style="color:#89ddff;">: () =&gt; </span><span style="color:#c792ea;font-style:italic;">import</span><span
          style="color:#89ddff;">(</span><span style="color:#c3e88d;">'@/views/TheStation.vue'</span><span
          style="color:#89ddff;">),<br></span><span style="color:#89ddff;">},</span></pre>

      <pre style="font-family:'JetBrains Mono', monospace;font-size:9pt;background-color: #1a1a1a"><span
          style="color:#82aaff;">filterItems</span><span style="color:#89ddff;">() {<br></span><span
          style="color:#89ddff;">  </span><span style="color:#eeffff;">console</span><span
          style="color:#89ddff;">.</span><span style="color:#82aaff;">log</span><span
          style="color:#89ddff;">(</span><span style="color:#c3e88d;">"je filtre"</span><span
          style="color:#89ddff;">)<br></span><span style="color:#89ddff;">  </span><span
          style="color:#c792ea;font-style:italic;">const </span><span style="color:#eeffe3;">item </span><span
          style="color:#89ddff;">= </span><span style="color:#c792ea;font-style:italic;">this</span><span
          style="color:#89ddff;">.</span><span style="color:#eeffff;">attributes</span><span
          style="color:#89ddff;">.</span><span style="color:#eeffff;">etapes_descriptions_caracteristiques</span><span
          style="color:#89ddff;">.</span><span style="color:#f1c40f;">filter</span><span style="color:#89ddff;">(</span><span
          style="color:#f78c6c;">item </span><span style="color:#89ddff;">=&gt; </span><span
          style="color:#f78c6c;">item</span><span style="color:#89ddff;">.</span><span
          style="color:#eeffff;">station </span><span style="color:#89ddff;">=== </span><span
          style="color:#c792ea;font-style:italic;">this</span><span style="color:#89ddff;">.</span><span
          style="color:#eeffff;">$route</span><span style="color:#89ddff;">.</span><span
          style="color:#f1c40f;">params</span><span style="color:#89ddff;">.</span><span style="color:#eeffff;">nom_station</span><span
          style="color:#89ddff;">);<br></span><span style="color:#89ddff;">  </span><span
          style="color:#c792ea;font-style:italic;">this</span><span style="color:#89ddff;">.</span><span
          style="color:#eeffff;">filteredItems </span><span style="color:#89ddff;">= [{</span><span
          style="color:#eeffff;">key</span><span style="color:#89ddff;">: </span><span
          style="color:#c792ea;font-style:italic;">this</span><span style="color:#89ddff;">.</span><span
          style="color:#eeffff;">$route</span><span style="color:#89ddff;">.</span><span
          style="color:#f1c40f;">params</span><span style="color:#89ddff;">.</span><span style="color:#eeffff;">nom_station</span><span
          style="color:#89ddff;">, </span><span style="color:#eeffff;">data</span><span style="color:#89ddff;">: </span><span
          style="color:#eeffe3;">item</span><span style="color:#89ddff;">}];<br></span><span
          style="color:#89ddff;">  </span><span style="color:#eeffff;">console</span><span
          style="color:#89ddff;">.</span><span style="color:#82aaff;">log</span><span
          style="color:#89ddff;">(</span><span style="color:#c792ea;font-style:italic;">this</span><span
          style="color:#89ddff;">.</span><span style="color:#eeffff;">filteredItems</span><span style="color:#89ddff;">)<br></span><span
          style="color:#89ddff;">}</span></pre>

      J'ai évidemment encore des éléments à améliorer notamment refactor encore mes requêtes afin de les centraliser

      Globalement j'ai appris à mettre en œuvre ce que j'ai pu voir en cours

      <img alt="" src="/portfolio/exemple_doc.png">`},AC4:{title:"<span style='font-size: 1.2rem; font-weight: bold; margin-bottom: 1rem;'>AC 4 : Vérifier et valider la qualité de l'application par les tests </span>",content:`En ce qui concerne les tests, j'utilise ViteTest qui est une librairie pour les projets déployer avec Vite avec
      ViteTest je peux faire des tests Unitaire sur des méthodes, des tests sur des composants et des vues

      Comment je structure mes tests ? Le projet à la création possède un dossier \`__tests__\` j'ai alors recrée
      l'arborescence de mon projet dans ce sous dossier pour tester mes composant et mes vues
      <p>&nbsp;</p>
      Pourquoi je fais ça ?
      <p>&nbsp;</p>
      <ul>
        <li> Pour vérifier que mon code fonctionne comme il devrait fonctionner</li>
        <li> Pour savoir si je dois refactor mon code, dans le sens où, si le test est complexe à écrire c'est qu'il
          doit y avoir un problème avec le code de base
        </li>
        <li> Le test peut servir de documentation, ça permet de voir comment un code fonctionne, du moins comment il est
          supposé fonctionner
        </li>
        <li> Je trouve cela pratique dans ce contexte de développement web, car cela me permet de voir les interactions
          entre
          les éléments, en l’occurrence ici les composants/vues
        </li>
      </ul>
      <p>&nbsp;</p>
      Ce que j'aurais dû changer ?

      Je penses, faire les tests plus tôt, limite en faisant du TDD pourquoi pas

      <p>&nbsp;</p>
      <span style="font-weight: bold">Exemple de test :</span>

      <pre style="font-family:'JetBrains Mono', monospace;font-size:9pt;background-color: #1a1a1a;">
        <span
            style="color:#c792ea;font-style:italic;">import </span><span style="color:#89ddff;">{</span><span
          style="color:#eeffff;">describe</span><span style="color:#89ddff;">, </span><span
          style="color:#eeffff;">it</span><span style="color:#89ddff;">, </span><span
          style="color:#eeffe3;">expect</span><span style="color:#89ddff;">, </span><span
          style="color:#ffcb6b;font-style:italic;">beforeEach</span><span style="color:#89ddff;">} </span><span
          style="color:#c792ea;font-style:italic;">from </span><span style="color:#c3e88d;">'vitest'<br></span><span
          style="color:#c792ea;font-style:italic;">import </span><span style="color:#89ddff;">{</span><span
          style="color:#ffcb6b;font-style:italic;">mount</span><span style="color:#89ddff;">} </span><span
          style="color:#c792ea;font-style:italic;">from </span><span style="color:#c3e88d;">'@vue/test-utils'<br></span><span
          style="color:#c792ea;font-style:italic;">import </span><span style="color:#89ddff;">{</span><span
          style="color:#ffcb6b;font-style:italic;">createPinia</span><span style="color:#89ddff;">} </span><span
          style="color:#c792ea;font-style:italic;">from </span><span style="color:#c3e88d;">'pinia'<br></span><span
          style="color:#c792ea;font-style:italic;">import </span><span style="color:#89ddff;">{</span><span
          style="color:#ffcb6b;font-style:italic;">createMemoryHistory</span><span style="color:#89ddff;">, </span><span
          style="color:#ffcb6b;font-style:italic;">createRouter</span><span style="color:#89ddff;">} </span><span
          style="color:#c792ea;font-style:italic;">from </span><span style="color:#c3e88d;">'vue-router'<br></span><span
          style="color:#c3e88d;"><br></span><span style="color:#c792ea;font-style:italic;">import </span><span
          style="color:#89ddff;">{</span><span style="color:#eeffff;">useInputValuesStore</span><span
          style="color:#89ddff;">} </span><span style="color:#c792ea;font-style:italic;">from </span><span
          style="color:#c3e88d;">"@/stores/inputValuesStore"</span><span style="color:#89ddff;">;<br></span><span
          style="color:#c792ea;font-style:italic;">import </span><span style="color:#89ddff;">{</span><span
          style="color:#eeffff;">useDisplayStore</span><span style="color:#89ddff;">} </span><span
          style="color:#c792ea;font-style:italic;">from </span><span
          style="color:#c3e88d;">"@/stores/display"</span><span style="color:#89ddff;">;<br></span><span
          style="color:#c792ea;font-style:italic;">import </span><span
          style="color:#eeffff;">EditorComments </span><span style="color:#c792ea;font-style:italic;">from </span><span
          style="color:#c3e88d;">"@/components/Editor/editor-comments.vue"</span><span
          style="color:#89ddff;">;<br></span><span style="color:#89ddff;"><br></span><span style="color:#eeffff;">describe</span><span
          style="color:#89ddff;">(</span><span style="color:#c3e88d;">'EditorComments'</span><span
          style="color:#89ddff;">, () =&gt; {<br></span><span style="color:#89ddff;">    </span><span
          style="color:#c792ea;font-style:italic;">let </span><span style="color:#eeffe3;">wrapper<br></span><span
          style="color:#eeffe3;">    </span><span style="color:#c792ea;font-style:italic;">let </span><span
          style="color:#eeffe3;">pinia<br></span><span style="color:#eeffe3;">    </span><span
          style="color:#c792ea;font-style:italic;">let </span><span
          style="color:#eeffe3;">inputValuesStore<br></span><span style="color:#eeffe3;">    </span><span
          style="color:#c792ea;font-style:italic;">let </span><span style="color:#eeffe3;">displayStore<br></span><span
          style="color:#eeffe3;"><br></span><span style="color:#eeffe3;">    </span><span
          style="color:#ffcb6b;font-style:italic;">beforeEach</span><span style="color:#89ddff;">(</span><span
          style="color:#c792ea;font-style:italic;">async</span><span style="color:#89ddff;">() =&gt; {<br></span><span
          style="color:#89ddff;">        </span><span style="color:#eeffe3;">pinia </span><span
          style="color:#89ddff;">= </span><span style="color:#ffcb6b;font-style:italic;">createPinia</span><span
          style="color:#89ddff;">()<br></span><span style="color:#89ddff;">        </span><span style="color:#eeffe3;">inputValuesStore </span><span
          style="color:#89ddff;">= </span><span style="color:#eeffff;">useInputValuesStore</span><span
          style="color:#89ddff;">(</span><span style="color:#eeffe3;">pinia</span><span
          style="color:#89ddff;">)<br></span><span style="color:#89ddff;">        </span><span style="color:#eeffe3;">displayStore </span><span
          style="color:#89ddff;">= </span><span style="color:#eeffff;">useDisplayStore</span><span
          style="color:#89ddff;">(</span><span style="color:#eeffe3;">pinia</span><span
          style="color:#89ddff;">)<br></span><span style="color:#89ddff;">        </span><span style="color:#eeffe3;">displayStore</span><span
          style="color:#89ddff;">.</span><span style="color:#eeffff;">stations </span><span
          style="color:#89ddff;">= [</span><span style="color:#c3e88d;">'TEST'</span><span style="color:#89ddff;">]<br></span><span
          style="color:#89ddff;">        </span><span style="color:#c792ea;font-style:italic;">const </span><span
          style="color:#eeffe3;">router </span><span style="color:#89ddff;">= </span><span
          style="color:#ffcb6b;font-style:italic;">createRouter</span><span style="color:#89ddff;">({<br></span><span
          style="color:#89ddff;">            </span><span style="color:#eeffff;">history</span><span
          style="color:#89ddff;">: </span><span style="color:#ffcb6b;font-style:italic;">createMemoryHistory</span><span
          style="color:#89ddff;">(),<br></span><span style="color:#89ddff;">            </span><span
          style="color:#eeffff;">routes</span><span style="color:#89ddff;">: [<br></span><span style="color:#89ddff;">                {</span><span
          style="color:#eeffff;">path</span><span style="color:#89ddff;">: </span><span style="color:#c3e88d;">'/:nom_station'</span><span
          style="color:#89ddff;">, </span><span style="color:#eeffff;">name</span><span style="color:#89ddff;">: </span><span
          style="color:#c3e88d;">'TheStation'</span><span style="color:#89ddff;">, </span><span style="color:#eeffff;">component</span><span
          style="color:#89ddff;">: {</span><span style="color:#eeffff;">template</span><span
          style="color:#89ddff;">: </span><span style="color:#c3e88d;">'&lt;div&gt;&lt;/div&gt;'</span><span
          style="color:#89ddff;">}}<br></span><span style="color:#89ddff;">            ]<br></span><span
          style="color:#89ddff;">        })<br></span><span style="color:#89ddff;">        </span><span
          style="color:#c792ea;font-style:italic;">await </span><span style="color:#eeffe3;">router</span><span
          style="color:#89ddff;">.</span><span style="color:#82aaff;">push</span><span
          style="color:#89ddff;">({</span><span style="color:#eeffff;">name</span><span style="color:#89ddff;">: </span><span
          style="color:#c3e88d;">'TheStation'</span><span style="color:#89ddff;">, </span><span style="color:#eeffff;">params</span><span
          style="color:#89ddff;">: {</span><span style="color:#eeffff;">nom_station</span><span
          style="color:#89ddff;">: </span><span style="color:#eeffe3;">displayStore</span><span
          style="color:#89ddff;">.</span><span style="color:#eeffff;">stations</span><span
          style="color:#89ddff;">[</span><span style="color:#f78c6c;">0</span><span
          style="color:#89ddff;">]}})<br></span><span style="color:#89ddff;">        </span><span
          style="color:#eeffe3;">wrapper </span><span style="color:#89ddff;">= </span><span
          style="color:#ffcb6b;font-style:italic;">mount</span><span style="color:#89ddff;">(</span><span
          style="color:#eeffff;">EditorComments</span><span style="color:#89ddff;">, {<br></span><span
          style="color:#89ddff;">            </span><span style="color:#eeffff;">global</span><span
          style="color:#89ddff;">: {<br></span><span style="color:#89ddff;">                </span><span
          style="color:#eeffff;">plugins</span><span style="color:#89ddff;">: [</span><span
          style="color:#eeffe3;">pinia</span><span style="color:#89ddff;">, </span><span
          style="color:#eeffe3;">router</span><span style="color:#89ddff;">],<br></span><span
          style="color:#89ddff;">                </span><span style="color:#eeffff;">stubs</span><span
          style="color:#89ddff;">: [</span><span style="color:#c3e88d;">'font-awesome-icon'</span><span
          style="color:#89ddff;">]<br></span><span style="color:#89ddff;">            }<br></span><span
          style="color:#89ddff;">        })<br></span><span style="color:#89ddff;">    })<br></span><span
          style="color:#89ddff;"><br></span><span style="color:#89ddff;">    </span><span
          style="color:#eeffff;">it</span><span style="color:#89ddff;">(</span><span style="color:#c3e88d;">'Affiche le formulaire avec les bonnes classes'</span><span
          style="color:#89ddff;">, () =&gt; {<br></span><span style="color:#89ddff;">        </span><span
          style="color:#eeffe3;">expect</span><span style="color:#89ddff;">(</span><span
          style="color:#eeffe3;">wrapper</span><span style="color:#89ddff;">.</span><span
          style="color:#82aaff;">find</span><span style="color:#89ddff;">(</span><span
          style="color:#c3e88d;">'form'</span><span style="color:#89ddff;">).</span><span
          style="color:#82aaff;">classes</span><span style="color:#89ddff;">()).</span><span style="color:#82aaff;">toEqual</span><span
          style="color:#89ddff;">(</span><span style="color:#eeffe3;">expect</span><span style="color:#89ddff;">.</span><span
          style="color:#82aaff;">arrayContaining</span><span style="color:#89ddff;">([</span><span
          style="color:#c3e88d;">'mb-5'</span><span style="color:#89ddff;">, </span><span
          style="color:#c3e88d;">'flex'</span><span style="color:#89ddff;">, </span><span style="color:#c3e88d;">'justify-center'</span><span
          style="color:#89ddff;">, </span><span style="color:#c3e88d;">'gap-x-2'</span><span
          style="color:#89ddff;">, </span><span style="color:#c3e88d;">'h-40'</span><span style="color:#89ddff;">]))<br></span><span
          style="color:#89ddff;">    })<br></span><span style="color:#89ddff;"><br></span><span
          style="color:#89ddff;">    </span><span style="color:#eeffff;">it</span><span
          style="color:#89ddff;">(</span><span
          style="color:#c3e88d;">'Affiche la div avec les bonnes classes'</span><span style="color:#89ddff;">, () =&gt; {<br></span><span
          style="color:#89ddff;">        </span><span style="color:#eeffe3;">expect</span><span
          style="color:#89ddff;">(</span><span style="color:#eeffe3;">wrapper</span><span
          style="color:#89ddff;">.</span><span style="color:#82aaff;">find</span><span
          style="color:#89ddff;">(</span><span style="color:#c3e88d;">'div'</span><span style="color:#89ddff;">).</span><span
          style="color:#82aaff;">classes</span><span style="color:#89ddff;">()).</span><span style="color:#82aaff;">toEqual</span><span
          style="color:#89ddff;">(</span><span style="color:#eeffe3;">expect</span><span style="color:#89ddff;">.</span><span
          style="color:#82aaff;">arrayContaining</span><span style="color:#89ddff;">([</span><span
          style="color:#c3e88d;">'py-2'</span><span style="color:#89ddff;">, </span><span
          style="color:#c3e88d;">'px-4'</span><span style="color:#89ddff;">, </span><span
          style="color:#c3e88d;">'mb-4'</span><span style="color:#89ddff;">, </span><span style="color:#c3e88d;">'bg-black'</span><span
          style="color:#89ddff;">, </span><span style="color:#c3e88d;">'rounded-lg'</span><span
          style="color:#89ddff;">, </span><span style="color:#c3e88d;">'rounded-t-lg'</span><span
          style="color:#89ddff;">, </span><span style="color:#c3e88d;">'border'</span><span
          style="color:#89ddff;">, </span><span style="color:#c3e88d;">'border-gray-200'</span><span
          style="color:#89ddff;">, </span><span style="color:#c3e88d;">'dark:bg-gray-800'</span><span
          style="color:#89ddff;">, </span><span style="color:#c3e88d;">'dark:border-gray-700'</span><span
          style="color:#89ddff;">, </span><span style="color:#c3e88d;">'w-5/6'</span><span
          style="color:#89ddff;">, </span><span style="color:#c3e88d;">'h-40'</span><span style="color:#89ddff;">]))<br></span><span
          style="color:#89ddff;">    })<br></span><span style="color:#89ddff;"><br></span><span
          style="color:#89ddff;">    </span><span style="color:#eeffff;">it</span><span
          style="color:#89ddff;">(</span><span
          style="color:#c3e88d;">'Affiche le label avec la bonne classe'</span><span style="color:#89ddff;">, () =&gt; {<br></span><span
          style="color:#89ddff;">        </span><span style="color:#eeffe3;">expect</span><span
          style="color:#89ddff;">(</span><span style="color:#eeffe3;">wrapper</span><span
          style="color:#89ddff;">.</span><span style="color:#82aaff;">find</span><span
          style="color:#89ddff;">(</span><span style="color:#c3e88d;">'label'</span><span
          style="color:#89ddff;">).</span><span style="color:#82aaff;">classes</span><span
          style="color:#89ddff;">()).</span><span style="color:#82aaff;">toEqual</span><span
          style="color:#89ddff;">(</span><span style="color:#eeffe3;">expect</span><span style="color:#89ddff;">.</span><span
          style="color:#82aaff;">arrayContaining</span><span style="color:#89ddff;">([</span><span
          style="color:#c3e88d;">'sr-only'</span><span style="color:#89ddff;">]))<br></span><span
          style="color:#89ddff;">    })<br></span><span style="color:#89ddff;"><br></span><span
          style="color:#89ddff;">    </span><span style="color:#eeffff;">it</span><span
          style="color:#89ddff;">(</span><span
          style="color:#c3e88d;">'Affiche le textArea avec les bonnes classes'</span><span style="color:#89ddff;">, () =&gt; {<br></span><span
          style="color:#89ddff;">        </span><span style="color:#eeffe3;">expect</span><span
          style="color:#89ddff;">(</span><span style="color:#eeffe3;">wrapper</span><span
          style="color:#89ddff;">.</span><span style="color:#82aaff;">find</span><span
          style="color:#89ddff;">(</span><span style="color:#c3e88d;">'textarea'</span><span
          style="color:#89ddff;">).</span><span style="color:#82aaff;">classes</span><span
          style="color:#89ddff;">()).</span><span style="color:#82aaff;">toEqual</span><span
          style="color:#89ddff;">(</span><span style="color:#eeffe3;">expect</span><span style="color:#89ddff;">.</span><span
          style="color:#82aaff;">arrayContaining</span><span style="color:#89ddff;">([</span><span
          style="color:#c3e88d;">'px-0'</span><span style="color:#89ddff;">, </span><span style="color:#c3e88d;">'w-full'</span><span
          style="color:#89ddff;">, </span><span style="color:#c3e88d;">'h-32'</span><span
          style="color:#89ddff;">, </span><span style="color:#c3e88d;">'text-xl'</span><span
          style="color:#89ddff;">, </span><span style="color:#c3e88d;">'border-0'</span><span
          style="color:#89ddff;">, </span><span style="color:#c3e88d;">'focus:ring-0'</span><span
          style="color:#89ddff;">, </span><span style="color:#c3e88d;">'focus:outline-none'</span><span
          style="color:#89ddff;">, </span><span style="color:#c3e88d;">'dark:text-white'</span><span
          style="color:#89ddff;">, </span><span style="color:#c3e88d;">'dark:placeholder-gray-400'</span><span
          style="color:#89ddff;">, </span><span style="color:#c3e88d;">'dark:bg-gray-800'</span><span
          style="color:#89ddff;">, </span><span style="color:#c3e88d;">'bg-gray-900'</span><span style="color:#89ddff;">, </span><span
          style="color:#c3e88d;">'text-white'</span><span style="color:#89ddff;">]))<br></span><span
          style="color:#89ddff;">    });<br></span><span style="color:#89ddff;"><br></span><span
          style="color:#89ddff;">    </span><span style="color:#eeffff;">it</span><span
          style="color:#89ddff;">(</span><span style="color:#c3e88d;">'A la création le commentaire contient la valeur du store '</span><span
          style="color:#89ddff;">, </span><span style="color:#c792ea;font-style:italic;">async</span><span
          style="color:#89ddff;">() =&gt; {<br></span><span style="color:#89ddff;">        </span><span
          style="color:#c792ea;font-style:italic;">const </span><span style="color:#eeffe3;">input </span><span
          style="color:#89ddff;">= </span><span style="color:#eeffe3;">wrapper</span><span
          style="color:#89ddff;">.</span><span style="color:#82aaff;">find</span><span
          style="color:#89ddff;">(</span><span style="color:#c3e88d;">'textarea'</span><span
          style="color:#89ddff;">)<br></span><span style="color:#89ddff;">        </span><span
          style="color:#c792ea;font-style:italic;">await </span><span style="color:#eeffe3;">input</span><span
          style="color:#89ddff;">.</span><span style="color:#82aaff;">setValue</span><span
          style="color:#89ddff;">(</span><span style="color:#c3e88d;">'Test'</span><span
          style="color:#89ddff;">)<br></span><span style="color:#89ddff;">        </span><span
          style="color:#546e7a;font-style:italic;">// Je démonte le composant pour le remonter et vérifier que la valeur du store est bien affichée<br></span><span
          style="color:#546e7a;font-style:italic;">        </span><span style="color:#eeffe3;">wrapper</span><span
          style="color:#89ddff;">.</span><span style="color:#82aaff;">unmount</span><span style="color:#89ddff;">()<br></span><span
          style="color:#89ddff;">        </span><span style="color:#eeffe3;">wrapper </span><span
          style="color:#89ddff;">= </span><span style="color:#ffcb6b;font-style:italic;">mount</span><span
          style="color:#89ddff;">(</span><span style="color:#eeffff;">EditorComments</span><span style="color:#89ddff;">, {<br></span><span
          style="color:#89ddff;">            </span><span style="color:#eeffff;">global</span><span
          style="color:#89ddff;">: {<br></span><span style="color:#89ddff;">                </span><span
          style="color:#eeffff;">plugins</span><span style="color:#89ddff;">: [</span><span
          style="color:#eeffe3;">pinia</span><span style="color:#89ddff;">],<br></span><span
          style="color:#89ddff;">                </span><span style="color:#eeffff;">stubs</span><span
          style="color:#89ddff;">: [</span><span style="color:#c3e88d;">'font-awesome-icon'</span><span
          style="color:#89ddff;">]<br></span><span style="color:#89ddff;">            }<br></span><span
          style="color:#89ddff;">        })<br></span><span style="color:#89ddff;">        </span><span
          style="color:#eeffe3;">expect</span><span style="color:#89ddff;">(</span><span
          style="color:#eeffe3;">wrapper</span><span style="color:#89ddff;">.</span><span
          style="color:#82aaff;">find</span><span style="color:#89ddff;">(</span><span
          style="color:#c3e88d;">'textarea'</span><span style="color:#89ddff;">).</span><span style="color:#82aaff;">element</span><span
          style="color:#89ddff;">.</span><span style="color:#eeffff;">value</span><span style="color:#89ddff;">).</span><span
          style="color:#82aaff;">toBe</span><span style="color:#89ddff;">(</span><span
          style="color:#c3e88d;">'Test'</span><span style="color:#89ddff;">)<br></span><span style="color:#89ddff;">    })<br></span><span
          style="color:#89ddff;"><br></span><span style="color:#89ddff;">    </span><span
          style="color:#eeffff;">it</span><span style="color:#89ddff;">(</span><span style="color:#c3e88d;">'Le commentaire est bien enregistré dans le store'</span><span
          style="color:#89ddff;">, </span><span style="color:#c792ea;font-style:italic;">async</span><span
          style="color:#89ddff;">() =&gt; {<br></span><span style="color:#89ddff;">        </span><span
          style="color:#c792ea;font-style:italic;">const </span><span style="color:#eeffe3;">input </span><span
          style="color:#89ddff;">= </span><span style="color:#eeffe3;">wrapper</span><span
          style="color:#89ddff;">.</span><span style="color:#82aaff;">find</span><span
          style="color:#89ddff;">(</span><span style="color:#c3e88d;">'textarea'</span><span
          style="color:#89ddff;">)<br></span><span style="color:#89ddff;">        </span><span
          style="color:#c792ea;font-style:italic;">await </span><span style="color:#eeffe3;">input</span><span
          style="color:#89ddff;">.</span><span style="color:#82aaff;">setValue</span><span
          style="color:#89ddff;">(</span><span style="color:#c3e88d;">'Test'</span><span
          style="color:#89ddff;">)<br></span><span style="color:#89ddff;">        </span><span style="color:#eeffe3;">expect</span><span
          style="color:#89ddff;">(</span><span style="color:#eeffe3;">inputValuesStore</span><span
          style="color:#89ddff;">.</span><span style="color:#eeffff;">inputCommentaire</span><span
          style="color:#89ddff;">).</span><span style="color:#82aaff;">toBe</span><span
          style="color:#89ddff;">(</span><span style="color:#c3e88d;">'Test'</span><span
          style="color:#89ddff;">)<br></span><span style="color:#89ddff;">    })<br></span><span style="color:#89ddff;"><br></span><span
          style="color:#89ddff;">    </span><span style="color:#eeffff;">it</span><span
          style="color:#89ddff;">(</span><span style="color:#c3e88d;">'Le textArea est bien désactivé quand le mode historique est activé'</span><span
          style="color:#89ddff;">, </span><span style="color:#c792ea;font-style:italic;">async</span><span
          style="color:#89ddff;">() =&gt; {<br></span><span style="color:#89ddff;">        </span><span
          style="color:#eeffe3;">displayStore</span><span style="color:#89ddff;">.</span><span style="color:#eeffff;">modeHistorique </span><span
          style="color:#89ddff;">= </span><span style="color:#c792ea;font-style:italic;">true<br></span><span
          style="color:#c792ea;font-style:italic;">        await </span><span style="color:#eeffe3;">wrapper</span><span
          style="color:#89ddff;">.</span><span style="color:#82aaff;">vm</span><span
          style="color:#89ddff;">.</span><span style="color:#82aaff;">$nextTick</span><span
          style="color:#89ddff;">()<br></span><span style="color:#89ddff;">        </span><span style="color:#eeffe3;">expect</span><span
          style="color:#89ddff;">(</span><span style="color:#eeffe3;">wrapper</span><span
          style="color:#89ddff;">.</span><span style="color:#82aaff;">find</span><span
          style="color:#89ddff;">(</span><span style="color:#c3e88d;">'textarea'</span><span
          style="color:#89ddff;">).</span><span style="color:#eeffff;">element</span><span
          style="color:#89ddff;">.</span><span style="color:#eeffff;">disabled</span><span
          style="color:#89ddff;">).</span><span style="color:#82aaff;">toBe</span><span
          style="color:#89ddff;">(</span><span style="color:#c792ea;font-style:italic;">true</span><span
          style="color:#89ddff;">)<br></span><span style="color:#89ddff;">    })<br></span><span style="color:#89ddff;"><br></span><span
          style="color:#89ddff;">})</span></pre>

      Je peux faire des test unitaires, des tests de composants/vues
      Les tests de composants vérifie si le composant est bien rendu, que les tags html existe bien et qu'ils possèdent
      les bonnes classes
      Je test aussi l’interaction entre ma gestion du store, donc l'état de mes variables avec le composant
      <p>&nbsp;</p>
      Les tests de composants et de vues fonctionnent un peu comme des tests d'intégration dans le sens où il faut
      tester les intéractions entre les composants
      par exemple avec l'émission d’événement`}},"Optimiser des applications":{AC1:{title:"<span style='font-size: 1.2rem; font-weight: bold; margin-bottom: 1rem;'>AC 1 : Choisir des structures de données complexes adaptées au problème </span>",content:`J'utilise Python pour extraire des données à partir de fichiers Excel en utilisant des dataframes. Cela me permet
      d'être rapide et efficace, car ces dataframes sont légers et rapides à manipuler. Une fois ces données extraites,
      je les intègre dans des tables SQL pour créer une base de données.

      Je préfère le SQL, car il convient parfaitement à la structure et à l'interconnexion des données que j'utilise.
      Cela me permet de gérer efficacement les relations entre ces données. Pour effectuer des requêtes précises,
      j'utilise Sequelize, qui me donne la souplesse nécessaire pour récupérer les données dont j'ai besoin.
      <p>&nbsp;</p>
      Cette approche, de l'extraction des données jusqu'à leur manipulation dans SQL avec l'utilisation de Sequelize
      pour les requêtes, me permet de gérer et d'utiliser les données de manière ciblée, répondant ainsi efficacement
      aux besoins spécifiques de mes projets.

      Python, c'est pratique pour extraire les données et ça m'as permis de mieux utiliser les dataframes et la
      librairie openpyxl pour manipuler des fichiers Excel.

      Je charge les données dans un dataframe et à partir de là, je le manipule.
      <p>&nbsp;</p>
      <img src="/portfolio/racine.svg" alt="">
      Les données récupérées sont du coup sous dataframe, puis insérer en SQL
      puis le récupère les données en format JSON lors de requêtes.<br>Récupérer les données avec python dans des Excel
      a été un peu fastidieux, pour plusieurs raisons :
      <ul>
        <li>Les données étaient dispatchées dans plusieurs Excel.</li>
        <li>Les données n'étaient pas forcément justes.</li>
        <li>Il y avait beaucoup de formatages à faire.</li>
      </ul>
      <br>Surtout que le format sous Excel qui change en fonction de la version du Excel, ce n'est pas toujours en
      UTF-8. Certains fichiers, justement, ne pouvaient pas être ouverts via python car top vieux (1995). Pour la partie SQL et JSON, ce n'est pas compliqué à manipuler, je n'ai pas de requêtes complexes.
      <br>Voici ma requête la plus longue et encore, elle est "optimisable".<br><br>

      <img src="/portfolio/get_caract.svg" alt="">`},AC2:{title:"<span style='font-size: 1.2rem; font-weight: bold; margin-bottom: 1rem;'>AC 2 : Utiliser des technique algorithmiques adaptées au problème</span>",content:"J'utilise pas de tables de hachages, de graphes ou quoi que ce soit"},AC3:{title:"<span style='font-size: 1.2rem; font-weight: bold; margin-bottom: 1rem;'>AC 3 : Comprendre les enjeux et moyens de sécurisation des données et du code </span>",content:`La sécurité des données est importante, pour cela j'ai dû mettre en place un système d'authentification pour pouvoir accéder à la manipulation des données partie CRUD (Create Read Update Delete) avec JWT. J'aurais pu simplement faire une requête à la base de données pour récupérer et comparer les mots de passes, mais avec JWT ça permet d'avoir un jeton réutilisable, et avoir une meilleure sécurité. Les mots de passes sont d'ailleurs hash
      <p>&nbsp;</p>
      Pour l'implémentation je me suis aidé de mes cours, et de la documentation.

      <img src="/portfolio/user.svg" alt="">
      <img src="/portfolio/checkuser.svg" alt="">

      <h2> Comment ça fonctionne ? </h2>

      L'utilisateur se connecte, côté backend je vérifie le login (en vérifiant que l'user existe) et attribut un jeton à la session, une fois log, il peut accéder à la partie permettant de visualiser les données.
      <p>&nbsp;</p>
      Sur ce site il n'y a pas d'intégration de la partie pour s'enregistrer dans la base de données. Les utilisateurs sont pré-identifiés et ont donc un login/mot de passe qui leurs sont attribué. Je rajouterai si il le faut une interface pour renseigner un utilisateur, mais interface uniquement accessible avec une authentification

      <img src="/portfolio/login_exemple.gif" alt="">
      Installation d'une garde (AuthGuard) pour éviter de se rendre sur des URL sous certaines conditions :
      <img src="/portfolio/guard.svg" alt="">

      <p>&nbsp;</p>
      Cela permet de restreindre l'accès à certaines pages en vérifiant par exemple si l'utilisateur est connecté ou si il a bien sélectionné des éléments avant de se rendre sur une page
      Cela me permet de sécuriser l'accès côté Front et Back car sans authentification les requêtes INSERT UPDATE, DELETE ne sont pas réalisable`}},"Administrer des systèmes informatiques communicants complexes":{AC1:{title:"<span style='font-size: 1.2rem; font-weight: bold; margin-bottom: 1rem;'>AC 1 : Concevoir et développer des applications communicantes </span>",content:`<h2>Conception des Applications Communicantes</h2>
      <h3>Architecture des Applications</h3>
      J'ai créé une API RESTful avec des requêtes http GET, PUT, POST, DELETE. Mon backend est fait avec Sequelize comme
      ORM qui communique directement avec ma base de données en PostgreSQL. J'ai plusieurs endpoint.
      <img alt="" src="/portfolio/endpoints.png">

      J'ai pu apprendre à utiliser Swagger pour documenter mon API (on l'avait déjà vu en cours).

      J'ai toutes mes routes dans un fichier \`routes.js\` et avec des requêtes http du côté frontend je récupère les
      données :
      <img alt="" src="/portfolio/get_ligne.svg">
      Donc j'ai :
      <ul>
        <li>Ma base de donnée</li>
        <li>Mon ORM sequelize pour faire la glue avec la base de donnée et mon application web</li>
      </ul>
      <p>&nbsp;</p>
      Ma base de donnée était de base alimentée via des script python qui allait récupérer les données dans des fichiers
      Excel, mais j'ai arrêté cela et décider de directement formater les données dans les Excel pour les importer. Je
      ne m'en sortais pas, car les données étaient dispersées dans plusieurs fichiers, étaient fausses pour certaines et
      surtout, il n'y avait pas de lien écrit entre les éléments.
      <p>&nbsp;</p>
      J'ai dû faire des comparaisons entre les données pour pouvoir les liés entres elles et ajouter les clés
      étrangères.

      <h2>Analyse</h2>
      Comment je procède :
      Avant d'écrire mes routes et mes fonctions avec Sequelize pour l'API, j'écris mes requêtes SQL séparément pour les
      tester, vérifier que j'ai les bonnes données qui me sont retournées, après ça :

      - Si la table sql n'existe pas en Sequelize, je la crée
      <img alt="" src="/portfolio/table.svg">
      Une fois le model crée (table) je la référence dans mon fichier regroupant les tables, je peux ensuite réaliser
      des requêtes que je regroupe dans le dossier controllers exemple de requête basique
      <img alt="" src="/portfolio/dash.svg">
      Après cela, je référence dans mes routes, afin que cela s'affiche avec swagger et que je puisse tester ma requête.
      Le serveur tourne en fond donc je peux récupérer les informations aux routes qui m'intéressent depuis la partie
      front-end, je récupère les données et les stock.
      <img alt="" src="/portfolio/get_ligne.svg">
      Pour le développement de l'API de manière générale, j'ai appliqué ce que je savais faire et ce que j'ai vu en
      cours, je n'ai pas eu de problème en particulier pour la création de l'API`},AC2:{title:"<span style='font-size: 1.2rem; font-weight: bold; margin-bottom: 1rem;'>AC 2 : Utiliser des serveurs et des services réseaux virtualisés </span>",content:`Actuellement, la gestion de l'hébergement du site n'est pas de mon ressort, mais à l'avenir, je prévois de prendre
      en charge cet aspect en hébergeant le site via une machine virtuelle en local. Ce choix me permettra d'avoir un
      contrôle plus direct sur l'environnement d'hébergement et de mieux comprendre le fonctionnement des serveurs.
      <p>&nbsp;</p>
      En envisageant l'utilisation de Docker, j'aspire à optimiser la gestion des conteneurs pour le déploiement et la
      gestion du site. Cette approche me permettra d'isoler efficacement les différents composants du site web,
      facilitant ainsi le déploiement et assurant une meilleure portabilité entre les environnements. J'ai appris de mon
      côté à utiliser Docker pour notamment conteneuriser ma documentation

      <pre>
        FROM node:18-alpine

        WORKDIR /app

        COPY package*.json ./

        RUN npm install

        COPY . .

        EXPOSE 3000

        CMD ["npm", "run", "docs:dev"]
      </pre>
      <img alt="" src="/portfolio/docker_exemple.gif">
      En parallèle, j'ai l'intention de mettre en place une routine de sauvegarde régulière de la base de données. Cette
      pratique de sauvegarde périodique garantira la sécurité des données et assurera une certaine résilience en cas de
      problèmes techniques ou de perte accidentelle de données.`},AC3:{title:"<span style='font-size: 1.2rem; font-weight: bold; margin-bottom: 1rem;'>AC 3 : Sécuriser les services et données d'un système </span>",content:`<h2> Sécurisation des Données </h2>
      <p>&nbsp;</p>
      Je veille à la sécurité des données et leurs accès, pas n'importe qui peut accéder à la base de données, il y' a
      des rôles. Cela permet de protéger le système à d'éventuelles modification non voulues.
      <p>&nbsp;</p>
      Actuellement, la base de donnée possède des colonnes qui sont référencées par ID qui est juste un chiffre/nombre
      auto-incrémenté, ce qui serait bien je penses serait de changer ces id pour les remplacer par des uuid pour
      améliorer la sécurité des données et éviter de pouvoir rechercher simplement via id`}},"Gérer les données de l'information":{AC1:{title:"<span style='font-size: 1.2rem; font-weight: bold; margin-bottom: 1rem;'>AC 1 : Optimiser une base de données, interagir avec une application et mettre en œuvre la sécurité </span> <span style='font-size: 1.2rem; font-weight: bold; margin-bottom: 1rem;'> AC 1 : Optimiser les modèles de données de l’entreprise </span>",content:`Dans mon processus, je commence par établir un modèle conceptuel de données (MCD) pour établir clairement les
      relations entre les différents éléments. Actuellement, la taille de ma base de données reste modeste <span
        style="font-weight: bold"
    > 31 008
      avec
      cette query</span>
      <pre>
        SELECT sum(reltuples)
        FROM pg_class
        WHERE relkind='r'
        AND relname NOT LIKE 'pg_%';
      </pre>

      Pour gérer efficacement cette quantité de données, j'utilise PostgreSQL, ce qui me permet de travailler sur des
      requêtes optimisées.
      <p>&nbsp;</p>
      Dans le développement de mes requêtes, j'adopte une approche réfléchie pour garantir leur efficacité. Je veille à
      éviter l'accumulation de jointures excessives en optant par exemple pour des sous-requêtes, me permettant ainsi
      d'optimiser les performances et la lisibilité du code. À ce stade, je n'ai pas de problèmes majeurs avec la
      structure de ma base de données.
      <p>&nbsp;</p>
      Cependant, ma vigilance se porte davantage sur le côté du site web lui-même. Je dois veiller attentivement à la
      quantité et à l'efficacité des requêtes que j'envoie au serveur. L'optimisation du côté client devient donc une
      priorité pour éviter de surcharger inutilement le serveur avec un grand nombre de requêtes.
      <h2>Normalisation</h2>
      <p>&nbsp;</p>
      Pourquoi normaliser les données ? Pour éviter les redondances assurer une intégrité des données et aussi éviter
      d'avoir des problèmes lié à l'insertion, la suppression et la modification.
      <br>
      Avec mes cours de première année et actuellement en deuxième année, on a appris à bien construire une base de
      données en respectant un certain nombre de règles, c'est ce que j'ai essayé d'appliquer en normalisant ma base de
      donnée.
      <p>&nbsp;</p>
      J'ai créé une table pour chaque élément important et je n'ai pas lésiné sur les clés étrangères alors c'est bien
      pour l'intégrité des données, mais trop de clé étrangères ça peut être chiant pour les requêtes (faut faire plein
      de jointures) certes, c'est un compromis. Mais pas si chiant que ça, il y a des techniques notamment des
      sous-requêtes.
      <p>&nbsp;</p>
      Normaliser la base de données ça m'a aidé à mieux concevoir une BDD, à mieux modéliser en fonction des relations :
      <ul>
        <li> One to One</li>
        <li> One to Many</li>
        <li> Many to Many</li>
      </ul>
      <img alt="" src="/portfolio/association.svg">
      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px;">
        <img alt="" src="/portfolio/Amphenol_Test.png">
        <img alt="" src="/portfolio/exemple_method_python.png.1.png">
        <img alt="" src="/portfolio/mcd_amphenol.jpg">
      </div>
      <img alt="" src="/portfolio/dernier_mcd.png">`},AC2:{title:"<span style='font-size: 1.2rem; font-weight: bold; margin-bottom: 1rem;'> AC 2 : Assurer la confidentialité des données (intégrité et sécurité) </span>",content:`Je maintiens l'intégrité des données comme dis précédemment en réalisant une normalisation des données
      <p>&nbsp;</p>
      Les tables sont bien segmentés, il n'y a pas de doublons, il y a utilisation de clés étrangère pour joindre les
      tables, tout cela permet l'intégrité des données
      <img alt="" src="/portfolio/table_produit.png">
      Pour la sécurité, comme dit précédemment il y a une authentification JWT côté front, pour pouvoir manipuler la
      bdd. Les insertions, suppression et modifications se font via des transactions pour veiller à l'intégrité et
      éviter qu'il y est des problèmes
      <img alt="" src="/portfolio/deleteligne.svg">`},AC3:{title:"<span style='font-size: 1.2rem; font-weight: bold; margin-bottom: 1rem;'>AC 3 : Organiser la restitution de données à travers la programmation et la visualisation </span>",content:`Actuellement, j'utilise un script Python avec Pandas pour créer ma base de données à partir de fichiers Excel. Je
      prévois d'établir une routine de sauvegarde pour assurer la sécurité des données à l'avenir.
      <span style="font-weight: bold">Exemple : (Méthode obsolète) </span>
      <img alt="" src="/portfolio/updateid.svg">
      En récupérant mes données via l'API je les visualisent notamment avec un CRUD (Create, Read, Update, Delete) dans
      un onglet spécifique au sein de mon application ça permettra aux personnes ayant accés au CRUD (via les rôles)
      d'intéragir avec la base de donnée
      <img src="/portfolio/crud_exemple.gif" alt="">
      J'ai pu apprendre à utiliser python avec Excel en utilisant des dataframe`},AC4:{title:"<span style='font-size: 1.2rem; font-weight: bold; margin-bottom: 1rem;'> AC 4 : Manipuler des données hétérogènes </span>",content:`      <h2>Utilisation de différents formats de données</h2>
      Je travaille avec ces types de données
      <ul>
        <li>CSV</li>
        <li>Dataframe</li>
        <li>JSON</li>
        <li>SQL</li>
      </ul>

      Toutes mes données proviennent de fichiers Excel que je convertis d'abord en dataframes, parfois en passant par le
      format CSV. Ces fichiers contiennent une diversité de types de données, comprenant des chaînes de caractères, des
      nombres entiers, des décimaux. Par exemple, je manipule des données telles que des vitesses en mètres ou des
      mesures de tension et d'intensité électrique. Je manipule des données sous formats csv, excel, json, sql,
      dataframep
      <p>&nbsp;</p>
      Je récupère mes données au travers de fichiers Excel que j'insère dans ma base de données à l'aide de dataframes,
      quand je fais mes requêtes à la base de donnée via Sequelize je reçois un Json que je peux aussi manipuler pour
      l'afficher comme je le souhaite dans mon application. Mes résultats Json peuvent contenir des objets avec des
      tableaux.
      <span style="font-weight: bold">Exemple :</span>
      <img alt="" src="/portfolio/jason.svg">
      <img alt="" src="/portfolio/data_sql_exemple.png">`}},"Conduire un projet":{AC1:{title:"<span style='font-size: 1.2rem; font-weight: bold; margin-bottom: 1rem;'> Appliquer une démarche de suivi de projet en fonction des besoins métiers des clients et des utilisateurs <br> AC 1 : Identifier les processus présents dans une organisation en vue d’améliorer les systèmes d’information </span> ",content:`Je travaille avec le client pour cerner les besoins spécifiques de l'application en cours de développement.
      Actuellement, les processus opérationnels sont manuels, consignés sur papier. Mon objectif consiste à transformer
      ces processus en solutions informatiques, rendant ainsi leur utilisation aussi simple et intuitive que possible.
      <p>&nbsp;</p>
      Mon processus démarre par une analyse des méthodes actuelles consignées sur papier. J'analyse chaque étape pour
      comprendre comment je peux les transposer de manière informatique, tout en veillant à conserver leur simplicité.
      Cette phase initiale est importante pour garantir que la transition vers des systèmes informatiques se fasse de
      manière fluide et ergonomique pour les utilisateurs.
      <p>&nbsp;</p>
      La communication régulière avec le client est essentielle. Cela me permet de valider mes idées, de m'assurer que
      les améliorations envisagées correspondent bien aux besoins métiers et qu'elles simplifient réellement les
      processus existants.
      <p>&nbsp;</p>
      Quand je suis arrivé, il y avait un fichier Excel créé par mon tuteur pour faire ce que je fais actuellement, mais
      il était pas finalisé et surtout pas pratique ni vraiment ergonomique. En voyant cela en plus des fiches format
      papier, cela m'a permis de penser à un système pour améliorer ce processus. J'ai d'abord réaliser des maquettes
      pour le site, conceptualiser la base de donnée, etc. En bref, j'ai essayé de prendre en compte le plus de
      paramètre possible pour avoir une vision d'ensemble suffisante afin d'améliorer l'existant`},AC2:{title:"<span style='font-size: 1.2rem; font-weight: bold; margin-bottom: 1rem;'> AC 2 : Formaliser les besoins du client et de l’utilisateur </span>",content:`      Je consolide les tâches et les objectifs discutés lors de nos réunions hebdomadaires ainsi que des échanges avec
      mon tuteur. Une fois ces informations collectées, je les organise sur Jira en tenant compte à la fois de leur
      importance (Changement d'élément dans l'interface, création de page, etc.) et de leur faisabilité.
      <br>
      Jira me sert de board à todo comme Trello, que j'alimente régulièrement pour des tâches plus ou moins variées
      réparties dans des catégories (interface, refactoring...)
      <p>&nbsp;</p>
      Cela me permet d'avoir une vision de l'état d'avancement du projet (même si il y a souvent des tâches qui se
      rajoutent), ce qui permet donc dans un sens, de formaliser les besoins du client en réalisant étapes par étapes
      des tâches amenant à un jalon important. Par exemple :

      <ul>
        <li>Réaliser un affichage pour la partie manipulation de données.</li>
        <li>Créer les requêtes permettant d'insérer, modifier et supprimer.</li>
        <li>Corriger tel problème.</li>
        <li>Améliorer l'interface.</li>
      </ul>
      <br>
      Tout cela amène à : la possibilité de modifier les données via requêtes API (CRUD).
      <img src="/portfolio/jira_tasks_2.png" alt="">`},AC3:{title:"<span style='font-size: 1.2rem; font-weight: bold; margin-bottom: 1rem;'> AC 3 : Identifier les critères de faisabilité d’un projet informatique </span>",content:`      Le projet que j'entreprends seul me paraît réalisable relativement à mes compétences de développeur Junior. J'ai
      suffisamment de temps pour m'impliquer dans le projet. Cependant, cela implique un apprentissage continu.
      <br>
      En analysant les contours du projet, je ne perçois pas de risque majeur susceptible d'avoir un impact significatif
      sur l'ensemble du projet. Étant seul, je suis conscient des défis, mais je suis confiant dans ma capacité à les
      relever et à les résoudre au fur et à mesure qu'ils se présentent.
      <br>
      Lorsque j'ai une tâche/fonctionnalité à réaliser/implémenter, je me demande combien de temps cela va me prendre.
      Au maximum, cela me prend 3 jours :
      <ul>
        <li>Trouver l'idée</li>
        <li>L'implémenter</li>
        <li>Débugger</li>
      </ul>
      <p>&nbsp;</p>
      De base, il n'y avait rien, pas de base de données, pas de sites, rien, enfin les données étaient dispatchées dans
      des fichiers Excel au quatre coins du monde.

      Le plus long à réaliser n'est pas le site en soit mais bien la base de donnée.

      Il faut avoir une bonne "base" un bon modèle/schéma (MCD) avant de pouvoir insérer les données, déjà ça, c'est
      long. C'est long car il faut réfléchir à :
      <ul>
        <li>Quoi prendre ?</li>
        <li>Les relations entre les éléments</li>
      </ul>
      C'est bien beau d'avoir le MCD, mais maintenant, il faut les récupérer les données, et comme je l'ai déjà dit,
      elles sont dans des fichiers Excel pas toujours intègres, et ce n'est pas pratique au niveau informatique
      d'extraire ces données.
      <p>&nbsp;</p>
      Pour ce qui est du site, j'arrive à bien estimer la conception, grâce aux nombreux projets que l'on a pu avoir en
      cours, ça me permet de jauger telle ou telle fonctionnalité, si elle "difficile" a implémentée ou autre. J'arrive
      mieux à jauger ma capacité en tant que développeur à résoudre des problèmes.`},AC4:{title:"<span style='font-size: 1.2rem; font-weight: bold; margin-bottom: 1rem;'> AC 4 : Définir et mettre en œuvre une démarche de suivi de projet </span>",content:`Je m'appuie sur GitHub et Jira pour gérer mon projet. Je démarre par les tâches les plus complexes, comme la
      résolution de bugs ou l'intégration des fonctionnalités essentielles. Je fais des commits fréquents sur GitHub
      pour suivre les modifications. Les fonctionnalités moins prioritaires sont intégrées après.
      <br>
      On peut retrouver le "peak" du bitcoin en 2017 dans le graphe ci-dessous, en avril et en mai, <span
        style="font-weight: bold">pourquoi ?</span>
      <br><br>
      <span style="font-weight: bold">Contexte :</span>
      Au début, je récupérai les données avec des script en python, je me suis ensuite mis vers le développement du site
      (j'alternai entre les deux) le problème, c'est que je voyais que l'extraction de données était fastidieuse, j'ai
      donc demandé de l'aide à un collègue pour l'extraction de données, en plus de cela, il pouvait justement vérifier
      s'il y avait des erreurs.
      <br><br>
      Pendant qu'il travaillait sur l'extraction, en parallèle, je codais la partie backend + frontend du site
      (application web). Donc n'ayant pas les données, ou parfois le même schéma de donnée, j'ai "prédit" le modèle que
      j'allais avoir et "inventé" le schéma de donnée afin d'avoir un prototype pour que je puisse avancer.
      <br><br>

      Finalement, quand j'ai reçu les données, là, à ce moment, je pouvais remodeler mon code afin d’accueillir les
      vraies données, <span style="font-weight: bold"> j'ai donc fait beaucoup de refactoring d'où les piques en Avril et en Mai.</span>
      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px;">
        <img src="/portfolio/github_add_del.png" alt="">
        <img src="/portfolio/commhisto.png" alt="">
      </div>`}},"Collaborer au sein d'une équipe informatique":{AC3:{title:`<span style='font-size: 1.2rem; font-weight: bold; margin-bottom: 1rem;'> Situer son rôle et ses missions au sein d’une équipe informatique <br> AC 3 : Mobiliser les compétences interpersonnelles pour intégrer une équipe
informatique </span>`,content:`Je ne suis pas dans une équipe informatique, mais à l'avenir je devrai mobiliser les compétences du service
      informatique de l'entreprise pour intégrer mon projet, le mettre en ligne, assurer la sécurité du site, etc.
      <br><br>

      Du coup, je vais parler des projets réalisés en cours.
      <br>
      Projet Web en VueJS sur la création d'un site reprenant une api mongodb. J'ai pu travailler en équipe, et diviser
      les tâches sur le projet. Chacun réalisait une partie, l'on mettait nos travaux en communs avec Git sur Github
      afin d’éventuellement corriger des problèmes ou améliorer certains bouts de code.
      <br><br>
      L'on travaillait chacun de notre côté sur des fonctionnalités différentes pour aboutir vers un tout.`},AC4:{title:"<span style='font-size: 1.2rem; font-weight: bold; margin-bottom: 1rem;'> AC 4 : Rendre compte de son activité professionnelle </span>",content:`Le contact direct avec le "client" me permet de rendre compte de mon activité en permanence en expliquant mon avancée lors de réunions hebdomadaires pour faire le point sur la semaine ou tous les jours avec mon collègue pour discuter des fonctionnalités, de la base de donnée, etc.
 <p>&nbsp;</p>Je rends aussi compte de mon activité d'une certaine manière via Github, ou encore la documentation que j'écris en parallèle.`}}}},R={key:0,class:"ac-container"},N=["innerHTML"],U=["innerHTML"],B={key:1},V={__name:"competence",props:{annee:{type:String,default:"2ème année"},ac:{type:String,default:"Réaliser un développement d'application"}},setup(o){const e=o,n=y(()=>g[e.annee]&&g[e.annee][e.ac]),p=y(()=>n.value?g[e.annee][e.ac]:{}),i=y(()=>n.value?Object.keys(p.value).filter(s=>s.startsWith("AC")).map(s=>parseInt(s.replace("AC",""))).sort((s,c)=>s-c):[]);return(s,c)=>(t(),J(O,{title:e.ac},{description:C(()=>[n.value?(t(),r("div",R,[(t(!0),r(h,null,S(i.value,d=>{var f,a;return t(),r("div",{key:d,class:"ac-section"},[l("div",{class:"ac-title sticky-title",innerHTML:((f=p.value[`AC${d}`])==null?void 0:f.title)||""},null,8,N),l("div",{class:"ac-content",innerHTML:((a=p.value[`AC${d}`])==null?void 0:a.content)||""},null,8,U)])}),128))])):(t(),r("div",B," Aucune donnée disponible pour cette compétence dans cette année. "))]),_:1},8,["title"]))}},Q={class:"skills-container"},H={class:"content-layout"},$={class:"skills-sidebar"},G={__name:"Skills",setup(o){const e=b(1),n=b(0),p=b(null),i=["2ème année"],s=[{title:"Réaliser un développement d'application"},{title:"Optimiser des applications"},{title:"Administrer des systèmes informatiques communicants complexes"},{title:"Gérer les données de l'information"},{title:"Conduire un projet"},{title:"Collaborer au sein d'une équipe informatique"}];function c(a){a.key==="ArrowLeft"?e.value=(e.value-1+i.length)%i.length:a.key==="ArrowRight"?e.value=(e.value+1)%i.length:a.key==="ArrowDown"?n.value=(n.value+1)%s.length:a.key==="ArrowUp"&&(n.value=(n.value-1+s.length)%s.length)}k(()=>{window.addEventListener("keydown",c)}),L(()=>{window.removeEventListener("keydown",c)});const d=a=>{n.value=a},f=()=>{p.value&&(p.value.scrollTop=0)};return E([e,n],()=>{f()}),(a,F)=>(t(),r("div",Q,[l("div",H,[l("div",$,[(t(),r(h,null,S(s,(A,u)=>q(M,{key:u,class:j([{active:n.value===u},"skill-card"]),title:A.title,onMouseenter:W=>d(u)},{default:C(()=>[l("div",{class:j([{active:n.value===u},"square"])},null,2)]),_:2},1032,["class","title","onMouseenter"])),64))]),l("div",{ref_key:"mainContentRef",ref:p,class:"main-content"},[q(V,{ac:s[n.value].title,annee:i[e.value]},null,8,["ac","annee"])],512)])]))}},Y=v(G,[["__scopeId","data-v-1301f4a0"]]);export{Y as default};
