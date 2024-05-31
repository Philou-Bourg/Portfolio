<script>
  import Header from './header.vue';  

  export default {
    components: {
      Header
    },
    methods: {
      openCVFile() {
      // Ouvre le fichier index.html dans une nouvelle fenêtre ou un nouvel onglet
        window.open('/CuriculumVitae/Index.html', '_blank');
      },
    },
  
  }

</script>




<template>
  <section class="home">
    <h1 id="titreCrea">Créations réalisées dans le cadre de la formation du CEF</h1>
      <h2> Création d'un curiculum vitae</h2>
            <p>
               Ce curiculum vitae à été créé le 15 mars 2024. <br>
               L’exercice visait à démontrer notre maîtrise du HTML et du CSS.<br>
               Nous avons structuré les pages web conformément aux normes W3C, tant pour le web classique que mobile.<br>
               Le projet a impliqué le développement de pages web fixes et responsives, en utilisant des balises et du codage CSS,<br>
               tout en adhérant à des principes de qualité pour assurer une robustesse maximale de l’application.<br>
               Pour la gestion du code, nous avons employé un système de contrôle de version,<br>
               et nous avons coordonné et suivi les tâches de développement à l’aide d’un outil collaboratif de partage de fichiers.
            </p>
            <p>
               L'identité graphique de ce projet a été définie par des directives précises :<br>
               l'utilisation des polices <strong>Lato</strong> pour les titres et <strong>Raleway</strong> pour le texte,<br>
               avec une adaptation automatique des tailles de police aux préférences de l'utilisateur du navigateur.<br>
               La palette de couleurs spécifiée, comprenant le <strong>#782221</strong>, le <strong>#dbc2a4</strong> et le <strong>#2c1d27</strong>,<br>
               devait être strictement suivie, tout comme le respect de la maquette fournie.
            </p>
       
            <div class="cv">
                <img src="@/assets/images/IconeCV.png" alt="CV Icon" class="cv-icon" @click="openCVFile" />
                <!-- Lien pour télécharger le PDF -->
                 <a href="/CuriculumVitae/Index.html" target="_blank" class="encre">Voir mon curriculum vitae</a>
            </div>
  
            <div class="space">
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

.home {
  padding-top: 0 /* Je tiens compte de la hauteur l'entête  fixe */
  }


.encre {
  color: black; /* Je définis La couleur du texte en noir */
  transition: box-shadow 0.3s; /* Animation douce pour l'ombre */
}
.encre:hover {
  box-shadow: 8px 8px 10px 0 rgba(135, 206, 250, 0.8); /* Ombre bleue au survol */
}


.cv-icon:hover {
  transform: scale(1.4); /* Agrandit l'image de 40% lors du survol */
}


</style> 