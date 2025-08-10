const e=`# Contexte de l'entreprise\r
\r
Au sein d'**Amphenol FCI Besançon**, il existe **4 ateliers spécialisés** :\r
\r
- **Découpage** : Découpage, pliage et calibrage des contacts\r
- **Galvanoplastie** : Traitement de surface des contacts\r
- **Moulage** : Injection plastique de la partie boîtier/support\r
- **Assemblage** : Assemblage des connecteurs\r
\r
## Mon environnement de travail\r
\r
Je me situe au sein de l'**atelier de galvanoplastie**. Cet atelier comprend plusieurs **lignes de production**, chacune\r
ayant ses spécificités pour le traitement de surface des contacts.\r
\r
### Processus de relevé de production\r
\r
Lors d'une production, un **relevé** est effectué pour documenter les valeurs observées à chaque étape de la ligne de\r
production. Ce processus permet de déterminer si la production est **conforme** aux spécifications.\r
\r
**Acteurs impliqués :**\r
\r
- **Opérateur** : Effectue le relevé\r
- **Assistant Technique (AT)** : Vérifie le relevé\r
- **Technicien Process (TP)** : Crée les feuilles de relevé\r
\r
### Fonctionnement du relevé\r
\r
Pour chaque étape de la ligne de production, l'opérateur note les valeurs observées suite au réglage de la ligne.\r
L'objectif est de **rester dans les tolérances définies** (spécifications). Si les valeurs sortent de ces tolérances, la\r
fiche est considérée comme **non conforme** et ne respecte pas les exigences de qualité.\r
\r
## Problématique identifiée\r
\r
Les relevés étaient initialement effectués **sur papier**, ce qui posait plusieurs problèmes majeurs :\r
\r
- ❌ **Risque de perte** ou de détérioration des documents papier\r
- ❌ **Difficulté d'accès** aux données pour les analyses et audits\r
- ❌ **Temps de traitement long** pour la saisie et vérification\r
- ❌ **Risque d'erreurs humaines** lors de la saisie manuelle\r
- ❌ **Difficulté de traçabilité** des relevés et modifications\r
\r
## Solution développée\r
\r
### Objectif de la mission\r
\r
Lors de ma **première année d'alternance**, j'avais pour mission de **numériser ce processus de relevé**. L'objectif\r
était de créer une application web permettant aux opérateurs de saisir les relevés directement en ligne via une *\r
*tablette tactile**, avec des fonctionnalités de validation et de traçabilité.\r
\r
### Architecture technique\r
\r
La solution est une **Progressive Web App (PWA)** développée avec :\r
\r
- **Frontend** : Vue.js (Composition API)\r
- **Backend** : Node.js avec Express\r
- **Base de données** : PostgreSQL\r
- **Hébergement** : Machine virtuelle sur serveur dédié\r
\r
### Pourquoi une PWA ?\r
\r
* ✅ **Cohérence** : Les autres outils de l'entreprise sont des applications web\r
* ✅ **Accessibilité** : Compatible PC, tablette, smartphone sans installation\r
* ✅ **Expérience utilisateur** : Proche d'une application native\r
* ✅ **Sécurité** : Respecte les restrictions informatiques de l'entreprise\r
\r
## Résultats obtenus\r
\r
### Adoption et utilisation\r
\r
- **3 relevés minimum** par jour actuellement\r
- **Plus de 1700 relevés** effectués depuis la mise en place\r
- **2 tablettes tactiles** en service\r
- **Objectif** : Passer à 4 tablettes\r
\r
### Fonctionnalités développées\r
\r
**Première année (numérisation) :**\r
\r
- ✅ Saisie numérique des relevés\r
- ✅ Système d'historisation\r
- ✅ Validation en ligne\r
\r
**Deuxième année (fonctionnalités avancées) :**\r
\r
- ✅ **Gestion complète** des lignes et étapes de production (ajout, modification, suppression)\r
- ✅ **Système de notifications** pour validations et alertes\r
- ✅ **Tableau de bord** avec statistiques de production\r
- ✅ **Améliorations QoL** (Quality of Life)\r
\r
## Bénéfices apportés\r
\r
La solution développée permet :\r
\r
- 🎯 **Meilleure traçabilité** des relevés\r
- 🎯 **Réduction des erreurs humaines**\r
- 🎯 **Amélioration de l'accès** aux données\r
- 🎯 **Facilitation des audits**\r
- 🎯 **Gain de temps** dans le traitement des relevés`;export{e as default};
