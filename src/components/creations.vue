<template>
  <section class="home">
    <h1 id="titreCrea">Créations réalisées dans le cadre de la formation du CEF</h1>
      <div class="space-h1"></div> <!-- Espace supplémentaire -->
      <h2> Création d'un curiculum vitae </h2>
            <p>
               L’exercice visait à démontrer notre maîtrise du HTML et du CSS.<br>
               Nous avons structuré les pages web conformément aux normes W3C, tant pour le web classique que mobile.<br>
               Le projet a impliqué le développement de pages web fixes et responsives, en utilisant des balises et du codage CSS,<br>
              tout en adhérant à des principes de qualité pour assurer une robustesse maximale de l’application.<br>
              Pour la gestion du code, nous avons employé un système de contrôle de version,<br>
              et nous avons coordonné et suivi les tâches de développement à l’aide d’un outil collaboratif de partage de fichiers.
            </p>
        
            <div class="cv">
                <router-link to="/cv">
                  <img src="@/assets/images/IconeCV.png" alt="CV Icon" class="cv-icon" />
                </router-link>
                <router-link to="/cv" class="encre">En savoir plus sur mon curriculum vitae </router-link>
            </div>
    
      <h2> Création d'un cahier des charges </h2>
            <p>
               Cet exercice visait à renforcer la planification et le suivi des tâches de développement,<br>
               à améliorer le site en corrigeant les vulnérabilités identifiées,<br>
               à rechercher des informations sur des ressources en ligne, tant en français qu'en anglais,<br>
               et à établir la structure du site tout en respectant les normes orthographiques et grammaticales dans nos écrits.
           </p>
              <div class="cv">
                <router-link to="/cahier_des_charges">
                <img src="@/assets/images/IconeCahier.png" alt="Cahier Icon" class="cv-icon" />
                </router-link>
                <router-link to="/cahier_des_charges" class="encre">En savoir plus sur mon cahier des charges </router-link>
              </div>

      <h2> Dynamisation d'un espace commentaires </h2>  
          <p>
            Ce dernier exercice avait pour but d'intégrer des scripts événementiels dans une page web,<br>
            en suivant les principes de qualité et de sécurisation des clients web.<br>
            De plus, nous devions corriger les erreurs et remédier aux vulnérabilités détectées,<br>
            tout en recherchant des solutions pertinentes pour les difficultés techniques de développement<br>
            ou les vulnérabilités identifiées.              
          </p>

            <div class="cv">
            <router-link to="/dyn_espaces">
                  <img src="@/assets/images/IconeDyn.png" alt="dynamique Icon" class="cv-icon" />
                </router-link>
                <router-link to="/dyn_espaces" class="encre">En savoir plus sur dynamiqser un espace commentaires </router-link>              
            </div>
         
          
  </section>
          <div class="centered-content">
        <a href="/" class="creations-link">Vers l'accueil</a>
        <router-link to="/">
         <img src="@/assets/images/Gauche.png" alt="Flêche gauche" class="right-arrow"/>
          </router-link>
        </div>

           <div class="space">
            </div>
          
</template>

<style>

.home {
  padding-top:30px /* Je tiens compte de la hauteur l'entête  fixe */
  }

.space-h1 {
  height: 10px; /* Espace supplémentaire entre h1 et h2 */
}

#titreCrea {
   font-weight: bold; /* Je rends le texte du titre en gras */
   font-size: 25px; /* J'augmente la taille des caractères */
}
.cv-icon {
  width: 30px; /* Ajuste la taille de l'icon */
  height: auto; /* Je conserve les proportions */
  margin-right: 10px; /* je mets un espace entre l'icône et le lien <CuriculumVitae /> */
  transition: box-shadow 0.3s; /* Animation douce pour l'ombre */
}

.cv-icon:hover {
  box-shadow: 8px 8px 10px 0 rgba(0, 0, 0, 0.4); /* Ombre grisée au survol */
}

.cv {
  display: flex; /* Activation de Flexbox */
  align-items: center; /* Centre l'icone et le lien  <CuriculumVitae /> verticalement */
}

.encre {
  color: black; /* Je définis La couleur du texte en noir */
  transition: box-shadow 0.3s; /* Animation douce pour l'ombre */
}
.encre:hover {
  box-shadow: 8px 8px 10px 0 rgba(135, 206, 250, 0.8); /* Ombre bleue au survol */
}




h2 {
  font-size: 20px;  /* Je réduis la taille de la police à 20 pixels */
  font-weight: 600; /* Je rends le titre moins gras avec Une valeur de 600  */
}

.space {
  height: 80px; /* Espace en blanc */
  background-color: white; /* Couleur blanche */
}

</style>