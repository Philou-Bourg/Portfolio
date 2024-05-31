<template>
<section class="home">
    <h1 id="titreCrea">Créations réalisées dans le cadre de la formation du CEF</h1>
      <h2> Création d'un cahier des charges </h2>
            <p>
               Cet exercice visait à renforcer la planification et le suivi des tâches de développement,<br>
               à améliorer le site en corrigeant les vulnérabilités identifiées,<br>
               à rechercher des informations sur des ressources en ligne, tant en français qu'en anglais,<br>
               et à établir la structure du site tout en respectant les normes orthographiques et grammaticales dans nos écrits.<br>
               Dans ce projet, il nous a été demandé d'analyser les sites concurrents, de définir les objectifs du site, <br>
               d'identifier les groupes cibles, de penser à l’ergonomie, de créer des wireframes et maquettes,<br>
               et de prendre en compte les spécificités client et les contraintes techniques.<br>
               Enfin, nous avons planifié les étapes du projet et les livrables attendus.<br>
               Par ailleurs nous avons tenu compte de la recomandation que ce cahier des charges soit claire, organisé et structuré.
                      
            </p>
    <div class="cv">     
      <img src="@/assets/images/IconeCahier.png" alt="Cahier Icon" class="cv-icon" />
      <!-- Lien pour télécharger le PDF -->
      <a href="/cahier_des_charges.pdf" target="_blank" class="encre">Voir le cahier des charges</a>
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
.encre {
  color: black; /* Je définis La couleur du texte en noir */
  transition: box-shadow 0.3s; /* Animation douce pour l'ombre */
}
.encre:hover {
  box-shadow: 8px 8px 10px 0 rgba(135, 206, 250, 0.8); /* Ombre bleue au survol */
}


</style> 