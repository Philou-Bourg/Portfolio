<script setup>
  import { RouterLink, RouterView } from 'vue-router'
  import Entete from './components/header.vue'

</script>

<template>
    <div class="page-container">
      <header>
       <Entete />
      </header>
   
  
      <main class="content">
        <RouterView />
        
        <footer class="footer">
          <div class="container_footer">
            <p>
              <a href="https://www.linkedin.com/in/philippe-peeters-a6a6645a/" target="_blank">
                <img src="@/assets/images/linkedin.png" alt="Logo Linkedin" id="Logo1">
              </a>
            </p>

            <p>
              <a href="https://github.com/Philou-Bourg/" target="_blank">
                <img src="@/assets/images/github.png" alt="Logo GitHub" id="Logo2">
              </a>
            </p>
          </div>
          <span class="container_date"> Dernière mise à jour le&nbsp; <time datetime="2024-05-29T00:00:00">  29 mai 2024</time> </span>

        </footer>
      </main>
    </div>
</template>
 

<style>

.page-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start; /* Alignement en haut */
  margin-top: 20px; /* Marge supérieure */
  }

.content {
  flex: 1;
  overflow-y: auto; /* Permet de scroller le contenu principal */
  padding: 20px; /* J'ajuste le padding
  margin-top: 20px;
}



footer {
    
  padding: 100px; /* J'ajuste le padding pour m'adapter à la hauteur fixe */
  display: flex;
  flex-direction: column; /* J'aligne les éléments du footer en colonne */
  justify-content: center; /* Je centre horizontalement le contenu dans le footer */
  align-items: center; /* Je centre verticalement le contenu dans le footer */
  width: calc(100% - 20px); /* je réduis la largeur du footer sur le côté droit */
  margin-right: 20px; /* J'Ajoute une marge à droite pour réduire la largeur du footer */
  margin-top: 200px; /* J'Ajoute une marge en haut du footer afin de l'ajuster */

}


.container_footer {

  display: flex; /* Activation de Flexbox */
  align-items: center; /* Je centre les images linkedin et github verticalement */
  justify-content: center; /* Je centre les images linkedin et github horizontalement */
  column-gap: 2em; /* Je créée un espace entre les deux images */
  height: 50px; /* Je diminue la taille en hauteur
}

.container_date{
  display: flex; /* Activation de Flexbox */
  justify-content: center;
  
}

#Logo1{
    width: 30px;
    height: 30px; 
}

#Logo1:hover{
    opacity:0.7;
}

#Logo2{
    width: 40px;
    height: 40px; 
}

#Logo2:hover{
    opacity:0.7;
}

</style>