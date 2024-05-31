<script>

export default {
methods: {
    openDynFile() {
      // Ouvre le fichier index.html dans une nouvelle fenêtre ou un nouvel onglet
      window.open('/DynamiserUnEspaceDeCommentaires/index.html', '_blank');
    },
  },
  
}

</script>

<template>
<section class="home">
    <h1 id="titreCrea">Créations réalisées dans le cadre de la formation du CEF</h1>
      <h2> Dynamiser un espace de commentaire</h2>
          <p>
              Ce travail à été finalisé le 03 mai 2024. <br>
              Ce dernier exercice avait pour but d'intégrer des scripts événementiels dans une page web,<br>
              en suivant les principes de qualité et de sécurisation des clients web.<br>
              De plus, nous devions corriger les erreurs et remédier aux vulnérabilités détectées,<br>
              tout en recherchant des solutions pertinentes pour les difficultés techniques de développement<br>
              ou les vulnérabilités identifiées.
              Dans le cadre de ce projet, nous avions des spécificités à respecter pour l'accomplissement de ce travail.<br>
              Notre tâche consistait à ajouter un script JavaScript à un fichier HTML transmis. Ce script devait :<br>
              <br>
              - Vérifier que tous les champs du formulaire n'etaient pas vides.<br>
              Si l'un des champs est vide, le message d'erreur déjà présent dans le HTML (initialement caché) devait s'afficher.<br>
              <br>
              - Ajouter le contenu du formulaire sous forme d'un nouveau forumulaire à la liste déjà présente,<br>
              en utilisant les balises HTML et en respectant le style déjà défini des commentaires existants.<br>
              <br>
              - Supprimer le contenu des champs du formulaire une fois que le nouveau commentaire était affiché dans la liste.<br>
              <br>
              Nous avions pour contraintes de ne pas recharger la page lorsque l'utilisateur écrivait un commentaire,<br>
              et l'utilisation du langage JavaScript était obligatoire.<br>
              Seule la partie "visuelle" de ce dynamisme nous était demandée, car l'enregistrement en base de données serait géré séparément.
          </p>


  <div>
    <!-- Lien pour télécharger le PDF -->
    <img src="@/assets/images/IconeDyn.png" alt="dynamique Icon" class="cv-icon" @click="openDynFile"/>
    <a href="/DynamiserUnEspaceDeCommentaires\index.html" target="_blank" class="encre">Voir dynamiser un espaces commentaires</a>
   </div>

</section>

      <div class="centered-content">
          <a href="/creations" class="creations-link">Vers les créations</a>
          <router-link to="/creations">
              <img src="@/assets/images/Gauche.png" alt="Flêche gauche" class="right-arrow"/>
          </router-link>
      </div>

</template>

<style>
  .encre {
    color: black; /* Je définis La couleur du texte en noir */
    transition: box-shadow 0.3s; /* Animation douce pour l'ombre */
  }
  .encre:hover {
    box-shadow: 8px 8px 10px 0 rgba(135, 206, 250, 0.8); /* Ombre bleue au survol */
  }


</style> 