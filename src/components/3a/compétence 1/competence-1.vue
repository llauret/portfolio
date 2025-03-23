<template>
  <skill-detail
      ac="AC 1 : Élaborer et implémenter les spécifications fonctionnelles et non fonctionnelles à partir des exigences"
      title="Partir des exigences et aller jusqu’à une application complète"
  >
    <template #description>
      <div class="description">
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
        <img alt="" src="/development.jpg">
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
      <img alt="" src="/clientapi.png">
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
      <img alt="" src="/editmode.png">
    </template>
  </skill-detail>
</template>
<script setup>
import SkillDetail from "@/components/skill-detail.vue";
</script>

<style scoped>
</style>