<template>
    <section class="home1" @click.self="afficherPage404">
        <h1 id="titreCrea">Formulaire de contact</h1>
        
            <div class="formulaire">
                <!-- Je crée un formulaire avec form et "j'écoute" le déclenchement avec submit -->
            
                <form @submit.prevent="envoyerFormulaire"> 
                    <div>
            
                            <!-- J'utilise label pour associer un texte descriptif à un champs de saisie. Le label du Prénom est prenom -->   

                        <label for="prenom">Prénom :</label>

                            <!-- Je crée un champ de saisie avec input et v-model qui est une commande vue.js -->
                            <!-- v-model lie la valeur du champ de saisie à la propriété prenom, ainsi la saisie sera stocké dans la variable prenom -->    
          
                        <input v-model="prenom" type="text" id="prenom" maxlength="30" required />
                    </div>
                    <div >
                        <label for="nom"> Nom :</label>
                        <input v-model="nom" type="text" id="nom" maxlength="30" required/>
                    </div>
                    <div >
                        <label for="objet">Objet :</label>
                        <input v-model="objet" type="text" id="objet" maxlength="50"/>
                    </div>
                    <div >
                        <label for="message">Message (max 300 caratères):</label>
                        <textarea v-model="message" id="message"  maxlength="300"></textarea>
                        <p v-if="message.length > 300" style="color: red;">Le message ne doit pas dépasser 300 caractères.</p>
                    </div>
                    <!--  J'ai lié l'attribut :disabled du bouton "Envoyer" à la propriété calculée isFormValid. Si isFormValid est false, le bouton est désactivé -->
                    <button type="submit" :disabled="!isFormValid" :class="{ 'valid-button': isFormValid }">Envoyer</button>
                    
                </form>
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

        // Les données du formulaire sont stockées dans les variables prenom, nom, objet et message

<script>
    import Page404 from '@/components/page404.vue';
        // Je déclare les variables prenom nom objet message pour les réutiliser 
    export default {
        data() {
            return {
            prenom: '',
            nom: '',
            objet: '',
            message: ''
            };
        },
            // watch surveille les changements de la variable nom. 
            //Chaque fois que nom change, la méthode formatNom est appelée pour formater correctement le nom
        watch: {
            nom(value) {
                this.nom = this.formatNom(value);    
            },
             prenom(value) {
                this.prenom = this.formatNom(value);
            }
        },

        // J'ai ajouté une propriété calculée isFormValid qui retourne true si les champs prenom et nom ne sont pas vides.
        computed: {
            isFormValid() {
                return this.prenom !== '' &&
                this.nom !== '' &&
                this.objet !== '' &&
                !this.hasMultipleSpaces(this.prenom) &&
                !this.hasMultipleSpaces(this.nom) &&
                !this.hasMultipleSpaces(this.objet) &&
                this.startsWithAlphabet(this.prenom) &&
                this.startsWithAlphabet(this.nom);
            }
        },


        methods: {
            // formatNom met la première lettre en majuscule et les autres en minuscule
            formatNom(nom) {
                if (!nom) return '';
                return nom.charAt(0).toUpperCase() + nom.slice(1).toLowerCase();
                },
            hasMultipleSpaces(value) {
                return /\s{2,}/.test(value);
                },

            startsWithAlphabet(value) {
                return /^[A-Za-z]/.test(value);
                },    

                    
            envoyerFormulaire() {
                if (this.message.length > 300) {
                alert('Le message ne doit pas dépasser 300 caractères.');
                return;
                }
                
                // Je définis l'envoi des données sur le mail destinataire et je crée une chaine de texte grace à prenom nom et message.
                // Je construis le contenu de l'email grace à prenom nom objet et message
                let contenuEmail = `
                    Bonjour, 
                    j'ai le plaisir de vous faire part du message suivant :
                    ${this.message}
                    Cordialement
                    ${this.nom} ${this.prenom}
                `;

                // j'encode le contenu de l'e-mail pour l'URL
                let encodedContenuEmail = encodeURIComponent(contenuEmail);
    
                // Je crée le mail du destinataire  *let mailtoLink = `mailto:peeters_phil50@hotmail.com?*
                let mailtoLink = `mailto:peeters_phil50@hotmail.com?subject=${encodeURIComponent(this.objet)}&body=${encodedContenuEmail}`;
                
                //Je personalise l'object et le corps du mail *subject=${encodeURIComponent(this.objet)}&body=${encodedContenuEmail}`*
                
                
                // J'ouvre la messagerie par défaut de l'utilisateur avec le mail pré-rempli

                window.location.href = mailtoLink;

                this.resetForm();
            },
            
            resetForm() {
                this.prenom = '';
                this.nom = '';
                this.objet = '';
                this.message = '';
            },
                     
                       
            
            afficherPage404() {
                this.$router.push('/page404');
            },
             
        },
    };

</script>

    <style>
    .home1 {
    padding-top: 10px;
    padding-left: 650px;
    padding-right: 655px;
    padding-bottom: 250px;
    border: 1px solid #ccc;
    }

/* Styles pour le formulaire */
.formulaire {
    display: grid;
    grid-template-columns: 1fr; /* Une seule colonne */
    gap: 10px; /* Espacement entre les éléments */
}
/* Styles pour les champs de saisie */

.formulaire input,.formulaire textarea {
    width: 100%; /* Remplir toute la largeur du conteneur */
    padding: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

.valid-button {
    background-color: green;
    color: white;
}

   
    </style>