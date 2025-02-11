// Auteur:  Maxime Faucher
// Date: 2024-02-11
// Sujet: Démo sur les sélecteurs en JavaScript

/*
Références: https://developer.mozilla.org/fr/docs/Web/API/Document/getElementById
            https://developer.mozilla.org/fr/docs/Web/API/Document/getElementsByClassName
            https://developer.mozilla.org/fr/docs/Web/API/Document/getElementsByTagName
            https://developer.mozilla.org/fr/docs/Web/API/Document/querySelector
            https://developer.mozilla.org/fr/docs/Web/API/Document/querySelectorAll

*/

/****************************************************************
getElementById('unID') : 
    retourne l'élément (HTMLElement) ayant l'ID 'unID' si 
    l'élément existe, sinon retourne null
****************************************************************/
console.log("\n1. Sélecteurs par ID : getElementById");

// Sélectionne l'élément ayant l'ID 'pied'
// Affiche l'élément sélectionné
const pied = document.getElementById('pied');
console.log(pied);
// Affiche le type et le nom de noeud et le contenu HTML de l'élément sélectionné
console.log('Type de noeud (nodeType)', pied.nodeType);
console.log('Nom de noeud (nodeName)', pied.nodeName);
console.log('Contenu HTML (innerHTML)', pied.innerHTML);
console.log('Contenu HTML (innerHTML)', pied.textContent);
// Sélectionne l'élément ayant l'ID 'inexistant'
// Affiche null
const absent = document.getElementById('bruh');
if (absent ===null){
    console.log("il n'y a pas d'élément #bruh dans la page.");
} 
else { console.log(absent);}
console.log(absent);

/****************************************************************
getElementsByClassName('uneClasse') :
    retourne une collection d'éléments (HTMLCollection) ayant la 
    classe 'uneClasse' si des éléments existent, sinon retourne 
    une collection vide
****************************************************************/
console.log("\n2. Sélecteurs par classe : getElementsByClassName");

// Sélectionne les éléments ayant la classe 'nav-link'
// Affiche la collection d'éléments sélectionnés
const navLinks = document.getElementsByClassName('nav-link');
console.log(navLinks);
// Affiche le nombre d'éléments sélectionnés
console.log("il y a" , navLinks.length, "élément ayant la class nav-link");
// Affiche le premier élément sélectionné,
console.log(navLinks[0], "est le premier élément"); // préférable à navLinks[0] pour éviter les erreurs
console.log(navLinks.item[0], "est le premier élément");
// Parcourir les éléments d'une HTMLCollection avec boucle for... of

for (const elm of navLinks) {
    console.log(elm.textContent);
    
}

// Autre méthode en convertissant la HTMLCollection en tableau avec Array.from()
Array.from(navLinks).forEach(elm => console.log(elm.textContent));
// Sélectionne les éléments ayant la classe 'inexistant'
const elmBruh = document.getElementsByClassName('inexistant');
console.log("il y a " , elmBruh.length , "élément avec la classe bruh");

// Sélectionne les éléments ayant les classes 'text-info' et 'text-uppercase'
const elmUpper = document.getElementsByClassName("text-uppercase text-")
// l'ordre est sans importance, mais la casse est importante
console.log(elmUpper.item(0));
// Affiche le premier élément sélectionné


/****************************************************************
getElementsByTagName('uneBalise') :
    retourne une collection d'éléments de balise 'uneBalise'
    si des éléments existent, sinon retourne une collection vide
****************************************************************/
console.log("\n3. Sélecteurs par balise : getElementByTagName");

// Sélectionner les éléments <a>
const liens = document.getElementsByTagName('a');
console.log("text des balise a du document");
Array.from(liens).forEach(a => console.log(a.textContent));
// Sélectionne les éléments <head>
const tete = document.getElementsByTagName('head');
console.log(tete);
// Affiche le nombre d'éléments <script>
console.log("il y a " , document.getElementsByTagName('script').length, "balises <script>");

/****************************************************************
querySelector('selecteurCSS') :
    retourne le premier élément correspondant au sélecteur CSS
    si un élément existe, sinon retourne null
****************************************************************/
console.log("\n4. Sélecteur CSS : querySelector");

// Sélectionne le premier élément <p>
// Affiche l'élément sélectionné
const premierP = document.querySelector('p');
console.log(premierP);
// Sélectionne le premier élément <li> du premier <ol>
const premierLiol = document.querySelector('ol li');
// Affiche le contenu HTML de l'élément sélectionné
console.log(premierP.textContent);
// Donne le même résultat que innerHTML, car le li ne contient pas de balises HTML


/****************************************************************
querySelectorAll('selecteurCSS') :
    retourne tous les éléments correspondant au sélecteur CSS sous form de nodeListe
    si des éléments existent, sinon retourne une collection vide
****************************************************************/
console.log("\n5. Sélecteur CSS : querySelectorAll");

// Sélectionne tous les éléments <p>
const tousLesP = document.querySelectorAll('p');
console.log(tousLesP);
// Parcourir les éléments d'une NodeList
// Affiche le texte de chaque élément sélectionné
tousLesP.forEach(p => console.log(p.textContent));
// Sélectionne tous les éléments <li> de tous les <ul>
const tousUlli = document.querySelectorAll('ul li');
console.log(tousUlli);
// Affiche le nombre d'éléments <li> sélectionnés
console.log("il y a", tousUlli.length, "<li> dans des <ul>");