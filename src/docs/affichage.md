# affichage des intensités + materialized view pour rapidité, et comment refresh

# temps materialized view

PC   VM
Plan time :      12   10
Execution time : 22   80

0.047 0.069
2.5  4.3

différence de en moyenne 0.6 ms
-----------

## Amp volt
Avant de commencer un relevé, les opérateurs ont besoin d'avoir un visuel sur la production afin de procéder au réglage de la ligne pour avoir des paramètre de production conforme.

Auparavant les opérateurs avaient donc leurs feuilles papier accompagné d'une autre feuille, cette feuille répertorie les intensités (A) et les tensions (V) du produit et des produits ayant les mêmes caractéristiques du moins pour les enchainers dans la production, ça leurs permet d'avoir une vision sur la production des produits dans le temps.

Il fallait donc restranscrire cela de manière numérique comme sur la trace 1

[Insérer trace 1]

L'opérateur, une fois son produit sélectionné peut commencer son relevé mais il peut aussi accéder à des informations complémentaire au produits à l'aide de nouvelle icones apparu dans la barre de navigation, une des icones peut faire apparaitre la << documentation >> du produit, qui va afficher par exemple le sens d'enroulement de la bobine du produit. L'autre icone permet donc d'afficher les intensités et les tensions du produit actuel.

Cette fonctionnalité a été demandé par l'un des opérateur pour justement lui permettre de "chainer" sa production, retrouver les caractéristiques importantes pour ne pas re régler la ligne de production de manière significatif.

Au clic de cette icone, une popup apparait et affiche donc les intensités et les tensions éventuelles du produit en question. Il n'y a pas de requêtes API pour afficher ces informations, du moins pour afficher les informations du produit sélectionné au préalabe. Ces données affiché est un filtre appliqué aux données existante obtenu de la confirmation du produit sélectionné, à savoir les données du relevé, donc ces températures, intensité, tensions, etc.

Donc j'applique un filtre pour garder que les intensités et tensions non null. Cela permet de rapidement visualiser les données sans
devoir aller consulter un à un les éléments. L'opérateur peut alors choisir une autre produit directement dans cette popup ce qui ici va envoyer une requête API pour récupérer les informations. Afin de récupérer ces données j'utilise une longue requête avec beaucoup de jointure qui me sert aussi pour récupérer les valeurs de la feuille process. 

[Insérer requête ?]

Cette requête est non seulement longue mais prends du temps à s'éxécuter, enfin tout est relatif. Si l'on cible le produit pour recherher les informations cela prends en moyenne :

|---- | Mon PC | VM |
| ---- | ---- | ---- |
| Planning time |10ms | 10ms |
| Execution time |6ms | 15ms |

C'est surtout pour récupérer toutes les feuilles process où cela prends du temps, donc en enlevant la condition de recherche

|---- | Mon PC | VM |
| ---- | ---- | ---- |
| Planning time |10ms | 10ms |
| Execution time |500ms | 500ms |

[Expliquer le planning time et execution time]


Ma requête étant longue, je cherchais à l'optimiser, en passant par des segmententations des la requête en plusieurs sous table que je combinais à la fin, création d'index pour améliorer la recherche mais rien d'intéressant, j'ai donc pensé aux vues, vue que je pourrais requêter comme une table, cependant une vue, mais une vue ça fonctionne un peu comme une macro en soit, dans le sens où ça sera la même requête sous un autre nom, ce n'est pas plus rapide.

Il existe un autre type de vue, les vues matérialisées, à la différence d'une vue classique, cette dernière va être stocké en mémoire, ce qui permet d'accéder au données plus rapidement, vraiment plus rapidement malgrès le délai avec la communication à la machine virtuelle.

### Sans la condition
|---- | Mon PC | VM |
| ---- | ---- | ---- |
| Planning time |0.046ms | 0.046ms |
| Execution time |2.6ms | 3.8ms |

### Avec la condition
|---- | Mon PC | VM |
| ---- | ---- | ---- |
| Planning time |0.07ms | 0.07ms |
| Execution time |3.4ms | 4ms |

Non seulement cela réduit grandement le temps de la requête, mais c'est aussi plus pratique au niveau du code, cela me permet d'être plus modulaire et de piocher dans cette materialzed view comme une mini base de données. Ici c'est donc une vue matériliasé, qui dit matérialisé, dit figé, c'est effectivement plus rapide car c'est stocké dans la mémoire cependant il faut rafraichir cette vue, afin d'actualiser les données pour ne pas avoir des données obsolètes.

L'objectif d'une materialized view est de pouvoir consulter des données fréquemment utilisé, si ces données sont constamment modifiée et en grande quantité, les materieliazed view n'en valent pas vrament la peine, cela serait même détrimental, car consommerait des ressources de calculs. Ce n'est pas le cas de l'application, les feuilles process stockées dans l'application ne sont pas constamment changées et sutout ne prenne pas de place.

- 38k lignes de données
- 5mb

Cela constitue 13% de la taille globale de la base à savoir 38mb

Pour rafraichir ces vues et avoir des données à jour il faut une politique de rafraichissement, simplement dire quand rafraichir ces données, c'est plutôt simple, il suffit de les raffraichir à chaque changement dans les feuille process, que ce soit une création, une modification etc.


Cette mise en place de vue matérialisé permet d'alléger les calculs lors des requêtes et d'obtenir l'informations plus rapidement en ce qui concerne les feuille process.

Je pourrais réutiliser ces vues matérialisées pour d'autres fonctionnalités, notamment pour une stratégie de cache, où je pourrais récupérer les données de la vue matérialisée et les stocker dans un cache pour une utilisation ultérieure, ce qui permettrait d'améliorer encore les performances de l'application.

## Web worker
Lors d'un relevé process, l'opérateur va relever les valeurs de production à la fin du formulaire il y a un récapitulatif du valeurs

[Insérer trace récap fin de relevé]

Ce récapitulatif va afficher les valeurs non renseignées, cases non cochées, HS. C'est la dernière étape avant l'envoi du relevé, il y a vérifications de chaque éléments relevés
à travers l'objet complet de la feuille process. Cela permet de vérifier si l'opérateur a bien renseigné tous les champs obligatoires, correctement, si il a bien appelé son assistant technique (AT) avant de valider le relevé.

Pour réaliser ce récapitulatif j'ai besoin d'analyser le relevé et pour cela il faut rechercher des éléments en particulier, à savoir donc :

- Les valeurs HS
- Les valeurs non renseignée
- Les cases non cochées

Au paravant je faisais cela directementy dans le frontend avec une boucle, le problème est que par moment cela pouvait prendre du temps du moins suffisamment pour que les valeurs ne s'affichent pas correctement, et c'est surtout car ce n'était pas très propre au niveau du code, j'ai donc réfléchi à comment je pourrais modifier cela.

C'est là qu'entre en jeux les web worker, un web worker c'est un script qui s'exécute en arrière plan, il permet de déléguer des tâches lourdes à un autre thread, ce qui permet de ne pas bloquer le thread principal, celui qui gère l'interface utilisateur.

```js
onmessage = (e) => {
    console.log('JE SUIS LE WORKER DE CHECKING');
    let dataReleve = e.data[0];
    let columns = e.data[1];

    const nonRenseigne = [];
    const horsSpec = [];

    dataReleve.forEach(data => {
        columns.forEach(column => {
            const messagesFromCheck = checkDataAttributes(data, column);
            if (messagesFromCheck.length > 0) {
                if (messagesFromCheck[0].statut.includes('Non renseigné')) {
                    nonRenseigne.push(messagesFromCheck[0]);
                }
                if (messagesFromCheck[0].statut.includes('HORS SPECS')) {
                    horsSpec.push({
                        dataKey: column.boxDataKey,
                        station: messagesFromCheck[0].station,
                        message: messagesFromCheck[0].message,
                        valeurReleve: messagesFromCheck[0].valeurReleve,
                    })
                }
            }
        })
    });
    console.log('Ici le worker de checking, prends les données');
    console.log("horsSpec", horsSpec);
    postMessage({nonRenseigne, horsSpec});
};


function isRegistered(min, opti, max) {
    if ((min === 0 && isNaN(opti) && max === 0) || (min === 0 && opti === null && max === 0)) return false;
    else return opti === null || isNaN(opti);
}

function isInInterval(min, opti, max) {
    return opti >= min && opti <= max;
}

function checkDataAttributes(data, column) {
    const attributeOpti = data[column.boxDataKey][column.attributeOpti];
    const attributeMin = data[column.boxDataKey][column.attributeMin];
    const attributeMax = data[column.boxDataKey][column.attributeMax];

    if (attributeMin === 0 && attributeOpti === 0 && attributeMax === 0) return [];
    const messages = [];

    const intervalMessage = checkIntervalValidity(data, column, attributeMin, attributeOpti, attributeMax);
    if (intervalMessage) messages.push(intervalMessage);

    const registrationMessage = checkRegistrationStatus(data, column, attributeMin, attributeOpti, attributeMax);
    if (registrationMessage) messages.push(registrationMessage);

    return messages;
}


const checkIntervalValidity = (data, column, min, opti, max) => {
    if (opti !== null && !isNaN(opti) && !isInInterval(min, opti, max)) {
        return {
            station: data.station,
            statut: 'HORS SPECS',
            message: `[${data.station} : ${data.etape}] [Min : ${min}, Opti : ${opti}, Max : ${max}] ${column.boxDataKey}`,
            valeurReleve: `[${data.station} : ${data.etape}] [${column.boxDataKey}] relevé : [${opti}]`
        }
    }
};

const checkRegistrationStatus = (data, column, min, opti, max) => {
    if (isRegistered(min, opti, max)) {
        return {
            station: data.station,
            statut: 'Non renseigné',
            message: `[${data.station} : ${data.etape}] [${column.boxDataKey}]`
        }
    }
};
```

```js
const setMessages = (event) => {
  let intervalMessage   = event.data.horsSpec;
  let registeredMessage = event.data.nonRenseigne.map(msg => msg.message);
  recapFPStore.outsideInterval.push(...intervalMessage);
  recapFPStore.setOutsideIntervaleStation(event.data.horsSpec[0]?.station);
  recapFPStore.isRegisteredMessage.push(...registeredMessage);
}

const checkWorker = () => {
  if(!modeStore.defaultMode) return;
  resetAlertMessages();
  const dataReleve = JSON.parse(JSON.stringify(dataFPStore.dataReleve))
  const columns    = JSON.parse(JSON.stringify(fpStore.columns));
  checkingWorker.postMessage([dataReleve, columns]);
  checkingWorker.onmessage = (event) => setMessages(event);
}
```

Voir trace code worker, dans la trace 1 j'envoie les données du relevé et les colonnes, le worker va donc analyser les données et renvoyer les messages de vérification, hors specs et non renseigné. Pour cela, voir trace 2, je boucle sur les données du relevé et les colonnes, je vérifie si les valeurs sont hors specs ou non renseignées, si c'est le cas j'envoie un message au thread principal avec les informations. L'objetr colonne `column` contient les informations de la colonne, à savoir les attributs min, opti et max, ainsi que la clé de données de la box. ce sont en fait les noms des clés à rechercher dans l'objet de données du relevé.

Cette approche permet de ne pas bloquer le thread principal, ce qui permet à l'interface utilisateur de rester réactive pendant que le worker effectue les calculs. De plus, cela permet de mieux organiser le code en séparant la logique de vérification des données du reste de l'application.

Ce traitement du worker se fait en une fois, à partir du moment où l'on clique d'envoi du formulaire, c'est plus simple à gérer que si j'avais fait cela à chaque changement de valeur au niveau du code, car cela aurait été trop lourd et aurait ralenti l'interface utilisateur. De plus, cela permet de centraliser la logique de vérification des données dans un seul endroit, ce qui facilite la maintenance et les modifications futures. Ce code me sert aussi pour d'autres fonctionnalités, pour alerter par exemple lorsqu'il y a des valeurs hors specs, les personnes concernées.

En terme de complexité algorithmique, le traitement du worker est linéaire, O(n * m), où n est le nombre de données du relevé et m est le nombre de colonnes. Cela signifie que le temps de traitement augmente proportionnellement au nombre de données et de colonnes, ce qui est acceptable pour la taille des données traitées dans cette application. Cela ne prends pas beaucoup de temps pour ne pas dire que c'est instantané (0ms).