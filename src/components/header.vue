<template>
  <div id="conteneur-global">
    <div id="bleue-ciel">
      <div id="profile-container" @click="scrollToTop">
          <!-- On affiche la photo avec un événement click qui appelle la méthode scrollToTop et on ajoute une fonction audio au survol-->
          <img src="@/assets/images/photoSite.jpg" alt="Photo profil de monsieur Peeters" id="image" @mouseover="playAudio">
          <p id="figcaption">Philippe Peeters</p>
      </div>
      <h1 id="title-container" >Développement créatif de site web</h1>

      <!-- Container pour le logo avec un événement click -->
      <div id="logo-container" @click="scrollToTop">
        <img src="/logo.png" alt="Logo" id="logo">
      </div>
    </div>

    <!-- Menu de navigation -->
    <nav id="menu-container">
      <ul id="menu">
        <li><router-link to="/">Accueil</router-link></li>
        <li><router-link to="/creations">Les créations</router-link></li>
        <li><router-link to="/contact">Formulaire de contact</router-link></li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  methods: {
    scrollToTop() {
      // Cette méthode remonte la fenêtre au début de la page
      window.scrollTo(0, 0);
    },
     playAudio() {
      // Jouer le fichier audio "Bienvenue.M4A"
      let audio = new Audio('./public/Bienvenue.M4A');
      audio.play();
    },
  }
}
</script>

<style>

#conteneur-global {
 position: fixed; /* Fixe l'élément en haut de la page */
    top: 0; /* Aucun espace entre l'élément et le haut de la page */
    left: 0; /* Aucun espace entre l'élément et le côté gauche de la page */
    width: 100%; /* L'élément s'étend sur toute la largeur de la page */
    z-index: 1000; /* S'assure que l'entête reste au-dessus des autres éléments de la page */

    background-color: #87CEEB; /* Couleur bleue ciel pour le fond global */
}




#profile-container {
    display: flex;
    margin-top: 25px;
    align-items: center;
    justify-content: center;
    background-color: #87CEEB; /* Couleur bleue ciel */
    
}

#bleue-ciel {
    background-color: #87CEEB; /* Couleur bleue ciel */
    margin-bottom: 0; /* Aucune marge en bas pour éviter un espace blanc */
}

#image {
    width: 100px;
    height: 100px;
    margin-right: 40px;
    object-fit: cover;
    border-radius: 50%;
    box-shadow: 0 0 10px rgb(228, 235, 237);
}

#image:hover{
    cursor: zoom-in;
}

#image:active{
    transform: scale(1.5);
}


#figcaption {
    margin: 0; /* On supprime la marge par défaut qui est appliqué autour de figcaption */
     font-size: 24px;
    font-weight: bold;
}


#title-container {
    display: flex;
    justify-content: center;
    margin-top: 0; /* Réduire la marge supérieure à 0 pour éviter un espace blanc */
     background-color: #87CEEB; /* Appliquer un fond bleu ciel au titre */
    }

h1 {
    text-align: center; /* Pour centrer le texte sur les navigateurs qui ne supportent pas flexbox */
    
}



/* Style pour le container du logo */
#logo-container {
  position: absolute; /* Positionnement absolu par rapport au parent positionné */
  top: 20px; /* En haut du conteneur parent */
  right: 10px; /* À droite du conteneur parent */
  padding: 10px; /* Espace autour du logo */
}


/* Style pour le logo */
#logo {
  width: 100px; /* Largeur du logo */
  height: auto; /* Hauteur automatique pour conserver les proportions */
}

#logo:hover {
  box-shadow: 8px 8px 10px 0 rgba(0, 0, 0, 0.4); /* Ombre grisée au survol */
}



/* Style pour le menu de navigation */
#menu-container {
  display: flex;
  justify-content: center; /* Centrer le menu */
  margin-top: 0; /* Espace après le titre -Aucune marge en haut pour connecter directement avec bleue-ciel*/
  background-color: #00008B; /* Bleu foncé */
  padding-top: 10px; /* Ajouter un peu d'espace au-dessus des éléments du menu */
  padding-bottom: 10px; /* Ajouter un peu d'espace en dessous des éléments du menu */
}

#menu {
  list-style: none; /* Supprimer les puces */
  padding: 0; /* Supprimer le padding par défaut */
  display: flex; /* Affichage en ligne */
}

#menu li {
  margin-right: 20px; /* Espace entre les éléments du menu */
}

#menu li:last-child {
  margin-right: 0; /* Pas d'espace après le dernier élément */
}

#menu a {
  
  color: #FFFFFF; /* Couleur du texte des liens en blanc */
  font-weight: bold; /* Rendre le texte des liens en gras */
  font-size: 18px; /* Augmenter la taille des caractères */
}



</style>