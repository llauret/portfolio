# ce dont je vais parler

Mise en place du dashboard
partie crud avec l'ajout, modfication, suppression de feuille process.

## Contexte
# TODO

Explique ce qu'est une feuille process mettre screen, 
récapituler vite fais ce qui a été fais, comment fonctionne un relevé

## Dashboard

Au cours de ma deuxième année d'alternance au sein de l'entreprise Amphenol FCI Besançon j'ai été amméné à continuer le développement de l'application que j'ai pu réaliser en première année
pour ainsi rajouter des fonctionnalités en VueJS framework javascript.

L'application, pour rappel permet de réaliser des relevés de caractéristique sur des produits en production afin d'être conforme aux spécifications. 
Un opérateur va donc, pour un produit, sur une ligne de production, relever toutes les caractéristiques étapes par étapes et compléter le relevé. 

Une fois le relevé réalisé celui ci est enregistré dans la base de données permettant ainsi d'agir comme un historique des relevés.

Au sein de ses historiques il y a donc toutes les valeurs relevé par l'opérateur à un moment T, des valeurs qui peuvent sortir des spécifications notamment.

Il y a plusieurs relevé par jour (au moins 3) l'on est actuellement à +1500 relevés. Une des mes tâches à donc été de réaliser un outil permettant de suivre ces caractéristiques relevées
au travers d'un dashboard. Dashboard qui permettrait de visualiser via les données sélectionnés l'évolution d'une caractéristique

<figure>
  <img alt="Dashboard" height="900" src="/portfolio/images_portfolio/dashboard.png" width="100%"/>
  <figcaption style="font-size: 1.2em;">
    Tableau de bord de suivi des relevés 
  </figcaption>
</figure>

Premièrement cette onglet dashboard n'est accessible que via une connexion, c'est à dire pour les personnes ayant un rôle adapté à la consultation à savoir :

- Le rôle Admin
- Le rôle TP (technicien process) ceux qui gère les feuilles process
- Les ingénieurs/service qualité (regroupe le rôle consultant)

Les opérateurs ne possède pas de mots de passe, il n'y ont pas accès.
Une fois connecté l'utilisateur peut alors consulter ce dashboard qui est constitué comme suit :

Une barre regroupant des statistiques sur l'état de la production :

L'on y retrouve le taux de feuille hors spécification, une feuille hors spécification est une feuille possédant une ou plusieurs caractéristiques sortant des intervalles lui étant attribuée.

Si par exemple une température possède ces bornes de mesure : 60° en minimal et 80° en maximal, si la valeur relevé est de 90° alors l'on est en HS, un relevé donc étant non conforme à la production.

Un taux bas est donc une bonne nouvelle. L'on retrouve de plus :
- Le nombre de relevé réalisé dans le mois
- Dans la semaine
- Par ligne
- etc.

Ces données sont récupérer via l'API au lancement de la page, plus prècisement avec le life cycle hook onMounted de vueJS.

Chaque instance d'un composant Vue passe par une série d'étapes d'initialisation lorsqu'elle est créée - par exemple, il faut paramétrer l'observation des données, compiler le template, monter l'instance sur le DOM, et le mettre à jour lorsque les données changent. En cours de route, des fonctions appelées hooks du cycle de vie sont également exécutées, donnant la possibilité à l'utilisateur d'ajouter son propre code à des étapes spécifiques.

En l'occurence ici, dès que le composant est monté je récupère les données via l'API avec Axios côté frontend, ce sont des requêtes SQL avec PostgreSQL côté backend où je récupère par exemple un ratio des feuilles HS. Chaque relevé réalisé par l'opérateur est donc mis en état historique et elle est accompagné d'un booléen TRUE FALSE en fonction de si le relevé est HORS Spec ou non, je détermine cela à la fin du relevé réalisé par l'opérateur , avec un récapitulatif :
- Des valeurs HS
- Des valeurs non renseigné
- Des éléments non cochés

À partir du moment où une valeur est HS au niveau de l'envoi du relevé en historique je passe la valeur à TRUE pour dire qu'elle est HS.

avec ces valeurs je peux donc déterminer le ratio de relevé HS.

Les utilisateurs possédant le rôle de consultant peuvent aussi sélectionner des caractéristiques comme figurant dans la trace sur la partie gauche. L'on y voit cinq selecteurs, les quatre premiers :

- La ligne (La ligne de production du produit)
- Le PnPlating (Le nom du produit)
- L'attribut (Ce qu l'on veut analyser,température, intensité, tension, pH, débit, longueur de cellule)
- Etape (Chaque ligne et produit possède plusieurs étapes de production dispatché sur plusieurs stations de production)

Les lignes regroupenst que celles en production. Chaque produit possède un << état >> à savoir si il est actif, inactif, obsolète etc. ici je ne récupère que les produits étant actifs.

Un attribut n'est pas disponible à chaque étape, par exemple une température peut ne pas se retrouver à tel étape et se retrouver à d'autres, c'est aussi le cas pour l'intensité, la tension etc. Là où je veux en venir est que les étapes sont donc filtrés en fonction de si l'attribut est disponible ou non.

Pour cela jé vérifie donc si la valeur n'est pas null.

Chaque ligne possède des étapes, chaque étape possède :
- Un numéro
- Une description
- Un état
- Une caractéristique (température, pH, etc.)
  - Chaque caractétistique possède un coefficient minimal et un coefficient maximal

Il y a une relation n à n pour chaque caractéristique traduit par des tables de jonction en SQL appelé table << multi >>, multi_ampere, multi_ph etc. qui font la jonction entre la table des coefficients et la tables des valeurs, elle même reliée à la table des étapes en relation n à n avec << multi_etape >> qui relie les étapes avec leurs élements cités au dessus.

Et donc, afin de récupérer les étapes où une caractéristique est présente il me suffit de vérifier si un élément d'une table << multi >> existe. Voir trace 2 qui correspond à mon fichier service du dashboard.

```js
exports.getEtapeByMulti = async (refPlating, multiTable) => {
    let multiCondition = '';
    let multiWhere     = '';

    if(multiTable === 'temperature') {
        multiCondition = 'JOIN public.multi_temp mt on me.id_multi_etape = mt.fk_multi_etape_temp';
        multiWhere     = 'mt.fk_chauffage is not null';
    } else if(multiTable === 'amperage') {
        multiCondition = 'JOIN public.multi_ampere ma on me.id_multi_etape = ma.fk_multi_etape_ampere';
        multiWhere     = 'ma.fk_ampere is not null';
    } else if(multiTable === 'voltage') {
        multiCondition = 'JOIN public.multi_volt mv on me.id_multi_etape = mv.fk_multi_etape_volt';
        multiWhere     = 'mv.fk_voltage is not null';
    } else if(multiTable === 'ph') {
        multiCondition = 'JOIN public.multi_ph mp on me.id_multi_etape = mp.fk_multi_etape_ph';
        multiWhere     = 'mp.fk_ph is not null';
    } else if(multiTable === 'debit') {
        multiCondition = 'JOIN public.multi_debit md on me.id_multi_etape = md.fk_multi_etape_debit';
        multiWhere     = 'md.fk_debit is not null';
    } else if(multiTable === 'longueurCellule') {
        multiCondition = 'JOIN public.multi_cellule m on me.id_multi_etape = m.fk_multi_etape_cellule';
        multiWhere     = 'm.fk_cellule is not null';
    }

    const query = `
        SELECT nom_etape
        FROM etape
                 JOIN public.multi_etape me ON etape.id_etape = me.fk_etape
            ${multiCondition}
                 JOIN public.ligne ON ligne.id_ligne = me.fk_ligne_etape
                 JOIN public.produit ON produit.fk_ligne = ligne.id_ligne
        WHERE produit.ref_plating LIKE :refPlating || '%'
          AND ${multiWhere}
        GROUP BY nom_etape, me.num_ordre
        ORDER BY me.num_ordre;
    `;

    return await db.sequelize.query(query, {
        replacements: {
            refPlating: refPlating,
            multi     : multiTable
        },
        type        : db.sequelize.QueryTypes.SELECT
    });
};
```

Tout cela perme d'éviter d'avoir des étapes inutiles dans la sélection et se retrouver au final avec aucune donnée de généré.

Je vous ai parlé des quatres sélecteurs mais il en manque un, c'est plutôt deux sélecteur en un.

L'utilisateur peut sélectionner un produit, du moins c'est un champ input où il peut renseigner le nom du produit et cela retournera en temp réel les produits correspondant au produit écrit. Cela fonctionne avec la propriété LIKE en SQL où je récupère via v-model et donc une liaison bi directionnelle le nom du produit.

Ainsi si par exemple j'écrit dans le champ input << F_77310-11 >> cela va me retourner tout les produits commençant par << F_77310-11 >>. Alors la recherche est en temps réel, ce qui pourrait causer d'éventuel problème si l'application était accessible à un grand nombre d'utilisateur et en simultané du fait qu'à chaque input il y a une requête effectué au serveur. Cependant il n'y a que une dizaine de personnes ayant accès au Dashboard et en simultané il y a au mieux deux personnes. 

Si c'était réellement primordial d'optimiser cela alors, je pourrais implémenter une solution à savoir le  << Debouncing >> qui est d'ajouter un temps d'arrêt avant que la requêtes ne s'éxécute, un temps de chargement finalement pour brider les requêtes envoyer et in fine éviter la surchage.

Une fois le produit entré, l'utilisateur peut si il le souhaite sélectionner précisèment ces produits. Par défaut si l'utilisateur clique sur << Générer les statistiques >> cela prendra tout les produits commençant par, ici << F_77310-11 >> dans la génération du graphique, si il sélectionne ces produits alors, je stock ces derniers dans un tableau, en vérifiant si il n'existe pas déjà, si la taille du tableau est supérieure à 0 alors je prends les élements de ce dernier pour la génération du graphique.

L'utilisateur peut donc sélectionner un produit mais aussi le retirer, si il le souhaite, en cliquant dessus pour le << pop >> du tableau.

Une fois le ou les produits sélectionné(e), je réalise alors deux requêtes voir trace 3

```js
exports.getCaractOnEtape = async (params) => {
    const {mode, caracteristic, caracteristicOpti, nomLigne, pnPlating, etape} = params;

    let pnPlatingCondition = '';
    if(mode === '0') {
        const pnArray      = pnPlating.split(',').map(pn => `'${pn}'`);
        pnPlatingCondition = `nom_pn_plating IN (${pnArray.join(',')})`;
    } else if(mode === '1') {
        pnPlatingCondition = `nom_pn_plating LIKE '${pnPlating}' || '%'`;
    }

    const query = `
        SELECT elem -> :caracteristic ->> :caracteristicOpti AS caracteristic_opti,
               TO_CHAR(date_releve, 'DD/MM/YYYY HH24:MI:SS') AS date_releve,
               nom_pn_plating,
               initiale_user,
               initiale_userat,
               input_vitesse ->> 'inputVitesse'              AS input_vitesse
        FROM historique,
             LATERAL jsonb_array_elements(input_releve) AS elem
        WHERE nom_ligne = :nomLigne
          AND ${pnPlatingCondition}
          AND elem ->> 'etape' = :etape;
    `;

    return await db.sequelize.query(query, {
        replacements: {
            mode,
            caracteristic,
            caracteristicOpti,
            nomLigne,
            pnPlating,
            etape
        },
        type        : db.sequelize.QueryTypes.SELECT
    });
};
```

La première requête `getCaractOnEtape` va me récupérer les valeurs mesurées de la caractéristique choisie avec ces paramètres :

- caracteristic, 
- caracteristicOpti, 
- nomLigne, 
- pnPlating, 
- etape

Ce sont simplement les paramètres mis plus haut, mais il y en manque un, le mode.

Le mode est simplement un outil pour me permettre de sélectionner le type de données envoyer pour le produit sélectionné.

Si le mode est à 0 dans l'envoi de la requête l'on a à faire au tableau des valeurs sélectionné, sinon l'on prend le LIKE pour la requête. J'ai mis en place ce système, de base, pour une autre fonctionnalité concernant la mise à jour des feuille process, où j'avais du code qui se répété, j'ai donc réfléchi à une solution me permettant de segmenter le type de la requête, à savoir si je m'occupe d'une grande sélection `LIKE`, d'une sélection précise `=` ou d'une sélection multiple `IN` à partir de là avec sequelize je peux déterminer le type de requête.

Une fois la sélection du mode faites, il me faut réaliser la requête, alors, c'est un peu particulier.
Un relevé fait par l'opérateur est stocké en base.

Un relevé est composé de plusieurs éléments : 

- input_toggle (Concerne les cases à cocher pour déterminer si un état d'une étape est conforme)
- initiale_user (Les initiales de l'opérateur deux première lettre du nom et du prénom exemple LALU pour Lauret Lucas)
- initiale_userat (Initiale de l'assistant technique qui aide pendant le relevé et le réglage de la ligne de production)
- initiale_usertp (Initiale du technicien process qui est null par défaut, se rempli si il vient rajouter un commentaire depuis son interface afin de compléter un relévé ou autre)
- commentaire_tp
- date_releve
- nom_pn_plating (nom du produit)
- commentaire (commentaire de l'opérateur sur le relevé pour justifier des valeurs HS)
- nom_ligne (Ligne de production)
- pn_brut (nom brut du produit)
- nom_famille (nom de la famille de produit)
- input_vitesse (objet json regroupant la vitesse relevé et ses coef)
- input_pression
- is_hors_spec (booléen)
- input_releve (Contient la totalité du relevé)

Les valeurs renseigné sont mise sous forme d'un objet JSON comme suit

```json
{
    "nom_etat": "2 FACES",
    "nom_ligne": "F",
    "pn_plating": "77391-122LF",
    "description": "Regulation moteur",
    "etape": "1",
    "station": "Degraissage1",
    "ph": {
      "phMax": 0,
      "phMin": 0,
      "phOpti": null
    },
    "debit": {
      "debitMax": 0,
      "debitMin": 0,
      "debitOpti": null
    },
    "voltage": {
      "voltageMax": 0,
      "voltageMin": 0,
      "voltageOpti": null
    },
    "amperage": {
      "amperageMax": 0,
      "amperageMin": 0,
      "amperageOpti": null
    },
    "temperature": {
      "temperatureMax": 0,
      "temperatureMin": 0,
      "temperatureOpti": null
    },
    "longueurCellule": {
      "longueurCelluleMax": 0,
      "longueurCelluleMin": 0,
      "longueurCelluleOpti": null
    }
  }
  ...
  ```
Cet objet foi* le nombre d'étape. Ce qui donne en moyenne une cinquantaine d'objet comme celui ci.

Cet objet est stocké directement dans la base, j'ai décidé de stocker directement l'objet JSON, simplement car cela aurait été plus complexe d'un point de vue relationnel, au vu de la nature même d'une feuille process, il aurait fallu créer soit plusieurs colonnes, soit le stocker en texte etc.
Mais j'ai décidé que ces `input_releve` soit stocké en JSON, en JSONB pour être plus précis. 
Le type JSON va stocker en texte, tandis que le JSONB va stocker en format binaire la structure, c'est plus efficace pour les requêtes.

Les requêtes postgreSQL sont différentes, il faut utiliser des flèches pour accéder aux objets et sous objets qui nous intéresse, ici ce sont les valeurs ayant comme clé "Opti" qui concerne les valeurs relevés, par défaut elles sont à null, c'est à dire qu'il n'y a pas par exemple de température à cette étape d'où les coefficients à 0. 
Visuellement pour l'opérateur ça représente une cellule noire.

Je vais donc chercher ces valeurs "Opti" : 
`SELECT elem -> :caracteristic ->> :caracteristicOpti AS caracteristic_opti`
ainsi que la vitesse :  `input_vitesse ->> 'inputVitesse'              AS input_vitesse`

Cela me retourne un tableau :
```json
{
  "caracteristic_opti": "30",
  "date_releve": "07/03/2025 15:05:30",
  "nom_pn_plating": "77310-159LF",
  "initiale_user": "LAMA",
  "initiale_userat": "",
  "input_vitesse": "6.7"
}
```

que je peux donc exploiter pour mon graphique en récupérant donc la date et la valeur pour constituer mes axes.

Afin d'établir mes limites je réalise aussi une requête qui va me récupérer les moyennes hautes et basse

```js
exports.getAverageOnValue = async (params) => {
    const {mode, caracteristic, caracteristicMin, caracteristicMax, nomLigne, pnPlating, etape} = params;

    let pnPlatingCondition = '';
    if(mode === '0') {
        const pnArray      = pnPlating.split(',').map(pn => `'${pn}'`);
        pnPlatingCondition = `nom_pn_plating IN (${pnArray.join(',')})`;
    } else if(mode === '1') {
        pnPlatingCondition = `nom_pn_plating LIKE '${pnPlating}' || '%'`;
    }

    const query = `
        SELECT ROUND(AVG((elem -> :caracteristic ->> :caracteristicMin)::numeric), 2) AS average_caracteristic_min,
               ROUND(AVG((elem -> :caracteristic ->> :caracteristicMax)::numeric), 2) AS average_caracteristic_max
        FROM historique,
             LATERAL jsonb_array_elements(input_releve) AS elem
        WHERE nom_ligne = :nomLigne
          AND ${pnPlatingCondition}
          AND elem ->> 'etape' = :etape;
    `;

    return await db.sequelize.query(query, {
        replacements: {
            mode,
            caracteristic,
            caracteristicMin,
            caracteristicMax,
            nomLigne,
            pnPlating,
            etape
        },
        type        : db.sequelize.QueryTypes.SELECT
    });
};
```

Même principe que précèdement cepandant je fais la moyenne, qui va me permmtre d'appliquer des limites.

In fine nous avons un joli graphique, (enfin tout est relatif)  avec ApexChart sur l'évolution des caractéristiques sélectionnées pour un ou plusieurs produits.

Ce graphique ne sert pas à faire beau, il est très utile afin de voir si il n'y a pas d'anomalies de production sur l'ensemble des relevés, et si anomalie il y a, alors aviser la dites caractéristique pour par exemple élargir la plage minimale et maximale ou bien la diminuer.

J'ai pu mettre en oeuvre le développement au sein d'une application existante, donc l'ajout de fonctionnalité,
Développer la sélection et l'envoie de données hétérogène via une api afin de l'exploiter de manière statistique.

parler de la sécurité des données