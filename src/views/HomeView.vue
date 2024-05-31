<template>
    <div>
      <section class="introduction">
        <h1>Bienvenue sur mon Portfolio</h1>
        <p>
          Après des études en gestion et finance sanctionnées par un DESCF, BAC+5 en 1990, j'ai évolué dans le domaine financier, notamment au sein de BNP Personal Finance où j'étais responsable de la gestion comptable de diverses entités du groupe. Ma fascination pour l'informatique m'a toujours accompagné et, en janvier 2024, j'ai saisi l'opportunité de me réorienter professionnellement grâce à une formation de Développeur Web et Web Mobile dispensée par le Centre Européen de Formation (CEF).
        </p>
        <p>
          Aujourd'hui, je suis ravi de vous présenter, à travers ce portfolio, les projets que j'ai réalisés, témoignant de ma transition réussie vers le secteur technologique et de mon engagement à apporter des solutions innovantes dans le développement web et mobile. À l'issue de ma formation, je projette de créer un cabinet de développement créatif de sites web, où je pourrai mettre en pratique mes compétences et ma passion pour aider les entreprises, qu'il s'agisse de commerçants, d'entrepreneurs individuels, de professions libérales ou d'ETI, à se démarquer dans le monde numérique.
        </p>
      </section>
    </div>
        <div class="centered-content">
            <a href="/creations" class="creations-link">Vers les créations</a>
          <router-link to="/creations">
            <img src="@/assets/images/Droite.png" alt="Flêche droite" class="right-arrow"/>
          </router-link>
        </div>
      
        <div class="space">
        </div>
            
</template>

<style>

   .introduction {
    margin-top: 40px; /* Ajout de la marge supérieure */
    margin-left: auto;
    margin-right: auto;
    max-width: 600px; /* J'ajoute une largeur maximale pour éviter que le contenu ne s'étire trop large sur les grands écrans */
  }
 

  .centered-content {
    position: fixed;
    bottom: 20px;  /* J'ajuste la valeur pour positionner plus haut */
    right: 20px;   /* J'ajuste la valeur pour positionner en retrait sur la gauche */
    display: flex;
    align-items: center;
    justify-content: flex-end; /* Alignement à droite */
  
  }

  .creations-link {
    margin-right: 10px; /* J'ajuste selon l'espacement désiré */
    text-decoration: none;
    color: black; /* Je définis La couleur du texte en noir */
    text-decoration: underline; /* Je souligne le texte */
    transition: box-shadow 0.3s; /* Animation douce pour l'ombre */
  } 

  .creations-link:hover {
    box-shadow: 8px 8px 10px 0 rgba(135, 206, 250, 0.8); /* Ombre bleue au survol */
  }

  .right-arrow {
    width: 50px; /* J'ajuste la largeur de la flêche */
    height: auto;
    margin-right: 10px 
  }

  .right-arrow:hover {
     box-shadow: 8px 8px 10px 0 rgba(0, 0, 0, 0.4); /* Ombre grisée au survol */
  }

</style>


