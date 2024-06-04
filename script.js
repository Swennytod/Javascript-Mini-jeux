console.log('connecté');
let titre = document.getElementById('titre');
titre.style.color="green";
titre = 2;
console.log(titre);

let score = 0;
console.log(score);

const btnRed = document.getElementById("btn-red");
let compteur = 0;
//déclaration btn red et compteur
let textPoint = document.getElementById("textPoint");
//déclration Paragraphe point fin de partie
let totalPoint = document.getElementById("titre");
//Titre avec total point

function add(){
    compteur = compteur +1;
    totalPoint.innerText = compteur;
}
//fonction compteur et changement de text sur le titre.

console.log(btnRed,"bouton rouge");
btnRed.addEventListener('click', function(){
    add();
    console.log("Bouton rouge cliqué !");
    console.log("Vous avez cliquez ", compteur, " fois ! ");
});

const btnBlue = document.getElementById("btn-blue");
//déclaration btn blue

btnBlue.addEventListener('click', function(){
    add();
    console.log("Bouton blue cliqué !");
    console.log("Vous avez cliquez ", compteur, " fois ! ");
});


let rejouer = document.getElementById("rejouer");
rejouer.addEventListener('click', function(){
    location.reload();
});

//chronometre
setTimeout(function(){
    btnBlue.remove();
    btnRed.remove();
    totalPoint.innerText = 'Fin de partie';
    textPoint.innerText = 'vous avez fait un total de ' + compteur + ' point !';
    console.log('fin du chrono')
},10000);
