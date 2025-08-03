# Contexte de l'entreprise

Au sein d'**Amphenol FCI Besançon**, il existe **4 ateliers spécialisés** :

- **Découpage** : Découpage, pliage et calibrage des contacts
- **Galvanoplastie** : Traitement de surface des contacts
- **Moulage** : Injection plastique de la partie boîtier/support
- **Assemblage** : Assemblage des connecteurs

## Mon environnement de travail

Je me situe au sein de l'**atelier de galvanoplastie**. Cet atelier comprend plusieurs **lignes de production**, chacune
ayant ses spécificités pour le traitement de surface des contacts.

### Processus de relevé de production

Lors d'une production, un **relevé** est effectué pour documenter les valeurs observées à chaque étape de la ligne de
production. Ce processus permet de déterminer si la production est **conforme** aux spécifications.

**Acteurs impliqués :**

- **Opérateur** : Effectue le relevé
- **Assistant Technique (AT)** : Vérifie le relevé
- **Technicien Process (TP)** : Crée les feuilles de relevé

### Fonctionnement du relevé

Pour chaque étape de la ligne de production, l'opérateur note les valeurs observées suite au réglage de la ligne.
L'objectif est de **rester dans les tolérances définies** (spécifications). Si les valeurs sortent de ces tolérances, la
fiche est considérée comme **non conforme** et ne respecte pas les exigences de qualité.

## Problématique identifiée

Les relevés étaient initialement effectués **sur papier**, ce qui posait plusieurs problèmes majeurs :

- ❌ **Risque de perte** ou de détérioration des documents papier
- ❌ **Difficulté d'accès** aux données pour les analyses et audits
- ❌ **Temps de traitement long** pour la saisie et vérification
- ❌ **Risque d'erreurs humaines** lors de la saisie manuelle
- ❌ **Difficulté de traçabilité** des relevés et modifications

## Solution développée

### Objectif de la mission

Lors de ma **première année d'alternance**, j'avais pour mission de **numériser ce processus de relevé**. L'objectif
était de créer une application web permettant aux opérateurs de saisir les relevés directement en ligne via une *
*tablette tactile**, avec des fonctionnalités de validation et de traçabilité.

### Architecture technique

La solution est une **Progressive Web App (PWA)** développée avec :

- **Frontend** : Vue.js (Composition API)
- **Backend** : Node.js avec Express
- **Base de données** : PostgreSQL
- **Hébergement** : Machine virtuelle sur serveur dédié

### Pourquoi une PWA ?

* ✅ **Cohérence** : Les autres outils de l'entreprise sont des applications web
* ✅ **Accessibilité** : Compatible PC, tablette, smartphone sans installation
* ✅ **Expérience utilisateur** : Proche d'une application native
* ✅ **Sécurité** : Respecte les restrictions informatiques de l'entreprise

## Résultats obtenus

### Adoption et utilisation

- **3 relevés minimum** par jour actuellement
- **Plus de 1700 relevés** effectués depuis la mise en place
- **2 tablettes tactiles** en service
- **Objectif** : Passer à 4 tablettes

### Fonctionnalités développées

**Première année (numérisation) :**

- ✅ Saisie numérique des relevés
- ✅ Système d'historisation
- ✅ Validation en ligne

**Deuxième année (fonctionnalités avancées) :**

- ✅ **Gestion complète** des lignes et étapes de production (ajout, modification, suppression)
- ✅ **Système de notifications** pour validations et alertes
- ✅ **Tableau de bord** avec statistiques de production
- ✅ **Améliorations QoL** (Quality of Life)

## Bénéfices apportés

La solution développée permet :

- 🎯 **Meilleure traçabilité** des relevés
- 🎯 **Réduction des erreurs humaines**
- 🎯 **Amélioration de l'accès** aux données
- 🎯 **Facilitation des audits**
- 🎯 **Gain de temps** dans le traitement des relevés