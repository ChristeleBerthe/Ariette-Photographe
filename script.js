// // Exo 1 //
// let number=null;
// alert(number1);

// // Exo 2 //
// let nulle;
// alert(nulle);

// // Exo 3 //
// let name='Dupont';
// let firstName='Jean';
// let age='30';
// let ville='Paris';
// alert(`Bonjour, je m'appelle ${firstName} ${name}, j'ai ${age} et j'habite ${ville}.`);

// // Exo 4 //
// let number1=52;
// let number2=25;
// alert(`${number1} ${number2}`);

// // Exo 5 //
// let entier = 25;
// let reel = 10.5;
// let texte = 'moi';
// alert(`${entier} est un entier,${reel} est un réel, ${texte} est une chaîne.`);

// // Exo 6 //
// let naissance =1969;
// let annee = 2022;
// let date = prompt("Entrez votre année de naissance"); 
// alert(annee-naissance); 

// Correction Romain Exo 6 // 
// Écrire un script JS qui affiche une boîte de dialogue de saisie avec le message suivant : " Entrez votre année de naissance : ".  Il calcul l'âge et l'affiche dans une boîte de dialogue.- Remarque : La méthode window.prompt(texte, texte_par_défaut) ouvre une boîte de dialogue dotée d’une zone de saisie et retourne les données saisies par l’utilisateur. 

 let age;
//Demande de l'âge et récupération de la saisie dans une variable.
 let inputBirthYear = window.prompt("Entrez votre année de naissance :");
//transformation de la saisie (string) en entier dans une autre variable.
 let inputBirthYearParsed = parseInt(inputBirthYear, 10);
 //Vérifie que la saisie est bien un entier, sinon on redemande la saisie.
 if(isNaN(inputBirthYearParsed) == false){
     //Vérifie que l'année saisie est logique, sinon on redemande la saisie.
     if(inputBirthYearParsed > 1900 && inputBirthYearParsed <= 2022){
         //Calcul de l'âge en soustrayant l'année en cours à l'âge saisie.
         age = new Date().getFullYear() - inputBirthYearParsed;
         //Affiche dans une boîte de dialogue l'âge. 
         alert(Vous avez ${age}.);
     }else{
         alert("La saisie n'est pas correct");
     }
 }else{
     alert("La saisie n'est pas correct");
 }


// // Exo 7 //
// Déclaration de la variable x et initialisée avec la saisie utilisateur //
// let x = prompt('Saisissez un chiffre');
// Déclaration de la variable y et initialisée avec la saisie utilisateur //
// let y = prompt('Saisissez un autre chiffre');
// affichage de la valeur x dans la console //
// console.log(x);
// affichage de la valeur y dans la console //
// console.log(y);
// Transforme en nombre entier le contenu de la variable x et place le résultat dans la variable x //
// x= parseInt (x);
// Transforme en nombre entier le contenu de la variable y et place le résultat dans la variable y //
// y= parseInt (y);
// Création de la variable addition et initialisation de la variable avec le résultat de l'addition des variables x et y //
// let add = x + y;
// Création de la variable soustraction et initialisation de la variable avec le résultat de la soustrction des variables x et y //
// let sous = x - y;
// Création de la variable différence et initialisation de la variable avec le résultat de la différence des variables x et y //
// let div = x / y;
// Création de la variable reste et initialisation de la variable avec le résultat du reste des variables x et y //
// let modulo = x % y;
// Création de la variable produit et initialisation de la variable avec le résultat du produit des variables x et y //
// let multi = x * y;
// Affichage de la valeur dans la console //
// console.log(add)
// Affichage dans la boîte de dialogue d'un string de l'ensemble des calculs des variables //
// alert(`\n x+y=${add}, \n x-y=${sous}, \n x/y=${div}, \n x%y=${modulo}, \n x*y=${multi}`); 

// // Exo 8 //
// let question = confirm("Etes-vous majeur ?");
// if (question == true)
//     { alert("Vous êtes majeur")} 
// else
//     { alert("Vous n'êtes pas majeur")}
 
// // Exo 9 //
// let string='20';
// let num=20;
// alert (typeof 20=='number');
// alert (typeof 20==='number');

// // Exo 10 //
// let list=['Google', 'Facebooh', 'Apple', 'Amazon', 'Microsoft', 'IBM'];
// alert (list);




// Correction Romain de tous les EXOs //

// // Exo 1 sur if et else //
// let person = prompt("Quel est votre genre ?")
// if (person == 'f') {
//     alert ("Bonjour Madame")
// }
//  else if (person == 'm') {
//     alert ("Bonjour Monsieur")
// }
//  else {
//     alert ("Bonjour")
// }

// Exo 2 sur tableau //
// Déclaration de variables
/*
Exercice 1 :
- Écrire un script JS qui déclare une variable et qui l'initialise avec une valeur 
nulle. 
- Utilisez une boîte de dialogue pour afficher son contenu.
*/
// let nullVariable = null;
// console.log(nullVariable);

/* 
Exercice 2 :
- Écrire un script JS qui déclare une variable sans lui affecter de valeur. 
- Utilisez une boîte de dialogue pour afficher son contenu.
*/
// let emptyVariable;
// console.log(emptyVariable);
/*
 Exercice 3 : 
- Écrire un script JS qui déclare quatre variables pour stocker le nom, le prénom, 
l'âge et la ville d'un utilisateur et initialiser-les.
- En utilisant l'opérateur de concaténation, vous pouvez affichez les variables 
dans une seule boîte de dialogue.
- L'affichage devra être une phrase du type : « Bonjour, je m'appelle Jean Dupont, 
j'ai 30 ans et j'habite Paris. »
 */
// let userLastName = "Ravault";
// let userFirstName = "Romain";
// let userAge = 38;
// let userCity = "Boulogne Billancourt";
// alert(`Bonjour, je m'appelle ${userFirstName} ${userFirstName}, j'ai ${userAge} ans et j'habite ${userCity}.`);
/*
Exercice 4 :
- Écrire un script JS qui déclare deux variables contenant des entiers. 
- Concaténer les deux variables et afficher le résultat dans une boîte de 
dialogue.
*/
// let firstInteger = 15;
// let secondInterger = 50;
// alert(`La concaténation des deux entiers : ${firstInteger}${secondInterger}.`);
/*
Exercice 5 : 
a) Écrire un script JS qui déclare trois variables contenant un entier, un réel et 
une chaîne de caractère. Afficher dans une boîte de dialogue le contenu de 
chaque variable suivie du texte "est un entier", ou "est un réel" , ou "est une 
chaîne". 
b) En utilisant l’opérateur de concaténation, vous pouvez afficher les trois 
variables et leurs textes associés dans une seule et même boîte de dialogue.
*/
// let int = 25;
// let float = 10.5;
// let string = '"Bonjour"';
// alert(int + ' est un entier\n' + float + ' est un réel\n' + string + ' est une chaine.');
/*
Exercice 6 : 
- Écrire un script JS qui affiche une boîte de dialogue de saisie avec le message 
suivant : " Entrez votre année de naissance : ". 
- Il calcul l'âge et l'affiche dans 
une boîte de dialogue.
- Remarque : La méthode window.prompt(texte, texte_par_défaut) ouvre 
une boîte de dialogue dotée d’une zone de saisie et retourne les données 
saisies par l’utilisateur.
*/
let age;
//Demande de l'âge et récupération de la saisie dans une variable.
 let inputBirthYear = window.prompt("Entrez votre année de naissance :");
//transformation de la saisie (string) en entier dans une autre variable.
 let inputBirthYearParsed = parseInt(inputBirthYear, 10);
 //Vérifie que la saisie est bien un entier, sinon on redemande la saisie.
 if(isNaN(inputBirthYearParsed) == false){
     //Vérifie que l'année saisie est logique, sinon on redemande la saisie.
     if(inputBirthYearParsed > 1900 && inputBirthYearParsed <= 2022){
         //Calcul de l'âge en soustrayant l'année en cours à l'âge saisie.
         age = new Date().getFullYear() - inputBirthYearParsed;
         //Affiche dans une boîte de dialogue l'âge. 
         alert(`Vous avez ${age}.`);
     }else{
         alert("La saisie n'est pas correct");
     }
 }else{
     alert("La saisie n'est pas correct");
 }

/**
 *Exercice 7:
 */
//Demande de l'âge et récupération de la saisie dans une variable.
let firstNumber = window.prompt("Entrez un nombre : ");
let secondeNumber = window.prompt("Entrez autre un nombre : ");
let intFirstNumber = parseInt(firstNumber);
let intSecondNumber = parseInt(secondeNumber);
let summResult = intFirstNumber + intSecondNumber;
let subtractResult = intFirstNumber - intSecondNumber;
let productResult = intFirstNumber * intSecondNumber;
let divisiontResult = intFirstNumber / intSecondNumber;
let moduloResult = intFirstNumber % intSecondNumber;
if(isNaN(intFirstNumber) == false && isNaN(intSecondNumber) == false){
    alert(`${firstNumber} + ${secondeNumber} = ${summResult}\n
    ${firstNumber} - ${secondeNumber} = ${subtractResult}\n
    ${firstNumber} X ${secondeNumber} = ${productResult}\n
    ${firstNumber} / ${secondeNumber} = ${divisiontResult}\n
    ${firstNumber} % ${secondeNumber} = ${moduloResult}`);
}else{
    alert("La saisie n'est pas correct");
}








