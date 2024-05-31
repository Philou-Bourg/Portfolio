
<template>
<section class="page">
<div>

  <h1>  Page 404 </h1>

  <img src="@/assets/images/Page404.png" alt="Caricature Einstein" class="PhotoPage404"/>
  <h2>  Clique, en dehors du formulaire et des invites fonctionnelles </h2>

</div>
 </section>
    <div class="centered-content">
        <a href="/" class="creations-link">Vers l'accueil</a>
        <router-link to="/">
                <img src="@/assets/images/Gauche.png" alt="Flêche gauche" class="right-arrow"/>
        </router-link>
        </div>
  </template>


<style>

h1 {
  color: black; /* Assurez-vous que le texte est visible */
}

.page {
    display: flex;
    flex-direction: column; /* Permet d'aligner les éléments verticalement */
    align-items: center; /* Centrage vertical */
    max-width: 600px;
    margin: 20px auto; /* Ajustez la marge supérieure comme souhaité */
}


img.PhotoPage404 {
    width: 110px;
    height: auto;
    margin: auto;
    margin-left: 215px;
}



</style>