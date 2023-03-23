//EXERCICE 1

// variable  Créé

const btn1 = document.querySelector("#btn1");
let Age = document.getElementById("Age");
let Sexe= document.getElementById("Sexe");


// lancement du bouton au click

btn1.addEventListener('click', () =>{

    VerifierImposition();
});


// fonction Si/Sinon qui vérifie les conditions

function VerifierImposition (){

    Age = document.getElementById("Age").value;
    Sexe = document.getElementById("Sexe").value;

    if ((Sexe == "H") && (Age >= 20 ) ){

        CréerDivImp();
}
    else if((Sexe == "F") && ((Age >= 18) && (Age <= 35))
){

        CréerDivImp();
}
    else {
        CréerDivNonImp();
}

}

// fonction qui crée le texte dans la div

function CréerDivImp(){

    const myDiv = document.querySelectorAll(".resultat");

    myDiv.forEach((div) => {
  
    div.textContent = "Vous êtes imposable";
    div.classList.remove("response");
    div.classList.remove("response2");
    div.classList.add("response");
  })
}

function CréerDivNonImp(){

    const myDiv = document.querySelectorAll(".resultat");
  
    myDiv.forEach((div) => {
    
      div.textContent = "Vous n'êtes pas imposable";
      div.classList.remove("response");
      div.classList.remove("response2");
      div.classList.add("response2");
    })
}

// Excercie 2

// variable  Créé

const btn2 = document.querySelector("#btn2");
let prix ;
let nCopies = document.getElementById("nCopies");
let reste;
let reste2;

// lancement du bouton au click

btn2.addEventListener('click', () =>{

  TarifPhotocopie()
});

// fonction Si qui vérifie les conditions

function  TarifPhotocopie(){

    nCopies = document.getElementById("nCopies").value;


  if(nCopies <=10){

    prix = nCopies*0.10;
    CréerDivTarif();
  }
   
  if(nCopies <=30){

    reste= 0.10*10;
    prix= (nCopies-10)*0.09 + reste;
    CréerDivTarif();
   
  }

  if(nCopies >=30){

    reste= 0.10*10;
    reste2= 0.09*20;
    prix= (nCopies-30)*0.08 + reste + reste2;
    CréerDivTarif();
   
  }
}

// fonction qui crée le texte dans la div

  function CréerDivTarif(){

    const myDiv = document.querySelectorAll(".resultat2");
  
    myDiv.forEach((div) => {
    
      div.textContent = "le prix est de :" + prix + "€" ;
      div.classList.add("tarif");   
     
    })  
  }

//excercice 3
    
// variable  Créé

const btn3 = document.querySelector("#btn3");
let heure = document.getElementById("heure");
let minutes= document.getElementById("minutes");
let secondes = document.getElementById("secondes");

// lancement du bouton au click

btn3.addEventListener('click', () =>{

  CalculerHeure();

});

// fonction Si qui vérifie les conditions

function CalculerHeure(){


heure = parseInt( document.getElementById("heure").value);
minutes = parseInt( document.getElementById("minutes").value);
secondes = parseInt( document.getElementById("secondes").value);
secondes = secondes + 1;


if(secondes > 59){
  secondes = 00;
  minutes= minutes + 1;
}
if(minutes > 59){
  minutes = 00;
  heure = heure +1;
}
if(heure > 23){
  heure = 00;
}

// fonction qui crée le texte dans la div

  CréerDivHeure();
}

function CréerDivHeure(){

  const myDiv = document.querySelectorAll(".resultat3");

  myDiv.forEach((div) => {
  
    div.textContent ="dans une seconde, il sera :  " + heure +" h " + minutes +" m " + secondes +" s";
    div.classList.add("tarif");   
   
  })  
}

//excercice 4

// variable  Créé

const btn4 = document.querySelector("#btn4");
let MontantPaye = document.getElementById("MontantPaye");
let MontantDonne= document.getElementById("MontantDonne");
let MontantRendu;
let nbrdix;
let nbrcinq;
let nbrpiece;

// lancement du bouton au click

btn4.addEventListener('click', () =>{

  CalculerMonnaie();
});

// fonction TantQue qui vérifie les conditions

function CalculerMonnaie(){

  nbrdix = 0;
  nbrcinq = 0;
  nbrpiece = 0;

  MontantPaye = document.getElementById("MontantPaye").value;
  MontantDonne= document.getElementById("MontantDonne").value;
  MontantRendu =  MontantDonne - MontantPaye;

while (MontantRendu >= 10){

   nbrdix = nbrdix +1;
   MontantRendu = MontantRendu -10;
}

while (MontantRendu >= 5){

  nbrcinq = nbrcinq +1;
  MontantRendu = MontantRendu -5;
}

while (MontantRendu >= 1){

  nbrpiece = nbrpiece +1;
  MontantRendu = MontantRendu -1;
}
CréerDivMonnaie();
}

// fonction qui crée le texte dans la div 

function CréerDivMonnaie(){

  const myDiv = document.querySelectorAll(".resultat4");

  myDiv.forEach((div) => {
   
    div.textContent = nbrdix + " billet(s) de 10 euros. " + nbrcinq + " billet(s) de 5 euros. " + nbrpiece + " piece(s) de 1 euros. ";
    div.classList.add("tarif"); 

  })  
}

//Exercice5

// variable  Créé

let AdresseMail = document.getElementById("AdresseMail");
let Arobase;
let AdresseMailPlacement;

// fonction Si/Sinon qui vérifie les conditions

function VerifierEmail (){

  AdresseMail = document.getElementById("AdresseMail").value;

//la fonction include ajoute les caracteres à la recherche

  if(AdresseMail.includes('@') && AdresseMail.includes('.')){

    //La fonction indexOf renvoi la position de la première occurrence d'un caractère donné.

    Arobase= AdresseMail.indexOf('@');

    //La fonction substring est utilisé pour couper la chaîne de caractère.

    AdresseMailPlacement = AdresseMail.substring(Arobase);
    
   
   if(AdresseMailPlacement.includes('.')){
    CréerDivMailValide();
    
   }

   else{
    
    CréerDivMailInvalide();
  }
}
  else{
    
    CréerDivMailInvalide();
    
  }
  }

  // Appel note fonction à l'evenement de saisie au clavier

  document.getElementById("AdresseMail").addEventListener("keydown", VerifierEmail,false); 


  // fonction qui crée le texte dans la div 

  function CréerDivMailValide(){

    const myDiv = document.querySelectorAll(".resultat5");

    myDiv.forEach((div) => {
  
    div.textContent = "Votre Email est valide";
    div.classList.remove("response");
    div.classList.remove("response2");
    div.classList.add("response2");
  })
}

function CréerDivMailInvalide(){

    const myDiv = document.querySelectorAll(".resultat5");
  
    myDiv.forEach((div) => {
    
      div.textContent = "Votre Email est invalide";
      div.classList.remove("response");
      div.classList.remove("response2");
      div.classList.add("response");
    })
}

//Exercice 6

// variable  Créé

const btn6 = document.querySelector("#btn6");
let Age2 = document.getElementById("Age2");
let Permis = document.getElementById("Permis");
let Accident = document.getElementById("Accident");
let Assurance = document.getElementById("Assurance");
let Points

// lancement du bouton au click

btn6.addEventListener('click', () =>{

  VerifierTarif();
});


// fonction Si/Sinon qui vérifie les conditions

function VerifierTarif(){

  Age2 = document.getElementById("Age2").value;
  Permis = document.getElementById("Permis").value;
  Accident = document.getElementById("Accident").value;
  Assurance = document.getElementById("Assurance").value;
  Points = 0

  if(Age2>=25){
    Points = Points + 1;
  }
  if(Permis>=2){
    Points = Points + 1;
  }
  if(Accident>0){
    Points = Points -1* Accident;
  }
  if(Accident==0) {
    Points = Points + 1;
  }
  if(Assurance >= 1 ){
    Points = Points + 1;
  }


  if(Points == 4){
    CréerDivTarifbleu();
  }
  if(Points == 3){
    CréerDivTarifVert();
  }
  if(Points == 2){
    CréerDivTarifOrange();
  }
  if(Points == 1){
    CréerDivTarifRouge();
  }
  if(Points <= 0){
    CréerDivTarifRefuser();
  }

}

 // fonction qui crée le texte dans la div pour chaque tarif

 function CréerDivTarifbleu(){

  const myDiv = document.querySelectorAll(".resultat6");

  myDiv.forEach((div) => {

  div.textContent = "Vous benificier du tarif bleu";
  div.classList.remove("response");
  div.classList.remove("response2");
  div.classList.remove("tarif");
  div.classList.remove("tarif2");
  div.classList.remove("tarif3");
  div.classList.add("tarif");
})
}

 function CréerDivTarifVert(){

  const myDiv = document.querySelectorAll(".resultat6");

  myDiv.forEach((div) => {

  div.textContent = "Vous benificier du tarif vert";
  div.classList.remove("response");
  div.classList.remove("response2");
  div.classList.remove("tarif");
  div.classList.remove("tarif2");
  div.classList.remove("tarif3");
  div.classList.add("response2");
})
}

function CréerDivTarifOrange(){

  const myDiv = document.querySelectorAll(".resultat6");

  myDiv.forEach((div) => {
  
    div.textContent = "Vous benificier du tarif orange";
    div.classList.remove("response");
    div.classList.remove("response2");
    div.classList.remove("tarif");
    div.classList.remove("tarif2");
    div.classList.remove("tarif3");
    div.classList.add("tarif2");
  })
}

function CréerDivTarifRouge(){

  const myDiv = document.querySelectorAll(".resultat6");

  myDiv.forEach((div) => {
  
    div.textContent = "Vous benificier du tarif rouge";
    div.classList.remove("response");
    div.classList.remove("response2");
    div.classList.remove("tarif");
    div.classList.remove("tarif2");
    div.classList.remove("tarif3");
    div.classList.add("response");
  })
}

function CréerDivTarifRefuser(){

  const myDiv = document.querySelectorAll(".resultat6");

  myDiv.forEach((div) => {
  
    div.textContent = "Vous ne pouvez pas être assuré";
    div.classList.remove("response");
    div.classList.remove("response2");
    div.classList.remove("tarif");
    div.classList.remove("tarif2");
    div.classList.remove("tarif3");
    div.classList.add("tarif3");
  })
}



















