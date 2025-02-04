/*
Auteur  : Maxime Faucher
Date    : 29 janvier 2025
Sujet   : Démos sur les classes JavaScript

Références utiles
    https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Classes
    https://www.programiz.com/javascript/classes

*/

// Reprenons notre modèle de personne pour en faire une classe.
class Personne {
    constructor(nom, age) {
        this.nom = nom;
        this.age = age;
    }

    afficherDetails() {
        console.log(`Bonjour, je m'appelle ${this.nom} et j'ai ${this.age} ans.`);
    }
}

// Créer un objet de la classe
const personne1 = new Personne("shun" , 17);

const shun = Object.create(Personne);
shun.prenom = shun;
shun.nom = "Désilets";
shun.age = 17 ;//depuis 27 mois
// Appeler la méthode afficherDetails()
shun.afficherDetails();

// Modifier et afficher le nom avec la notation .


// Modifier l'âge et l'afficher avec la notation []

