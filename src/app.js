import { Carte } from './carte';
import { CarteHistoire} from './carteHistoire';

function ma_fonction() {
  alert("Et hop !");
}

export var partie;
export var Partie = function(){
  var intrigueCourante;
  var acteCourant;

  console.log('app');
}

Partie.prototype.init = function(){
  this.intrigueCourante = new CarteHistoire("Intrigue 1a", "L'attaque du chat chouette", "Le monstre a sorti griffes, il vous saute au visage et vous empeche de dormir", 6);
  this.acteCourant = new CarteHistoire("Acte 1a", "Une petite Blonde sur un lit douillet", "Ce contenu a été censuré...", 3);

  /*
  var intrigues=[
    new CarteHistoire("Intrigue 1a", "L'attaque du chat chouette", "Le monstre sort ses griffes, vous saute au visage et vous empeche de dormir", 6),
    new CarteHistoire("Intrigue 2a", "L'attaque du chat chouette", "Le monstre sort ses griffes, vous saute au visage et vous empeche de dormir", 6)
    new CarteHistoire("Intrigue 3a", "L'attaque du chat chouette", "Le monstre sort ses griffes, vous saute au visage et vous empeche de dormir", 6)
  ];

  if(!fatalityTest){
    intrigueEnCours = intrigues.pop();
  }
  */

  console.log('partie lancée');
}

Partie.prototype.clickIntrigue = function(){
  console.log("clickIntrigue");
  console.log(this);
  console.log("FIN");
  this.intrigueCourante.addFatalities(1);
  $('#fatalitiesCount').text("blabla" + this.intrigueCourante.fatalityState());
}

Partie.prototype.clickActe = function( event ){
  console.log("clickActe");
}

/* GESTIONNAIRE D'EVeENEMENTS */
export function clickIntrigue(){
  partie.clickIntrigue();
}

export function clickActe(){
  partie.clickActe();
}

$( document ).ready(function() {
    console.log( "ready!" );
    partie = new Partie();
    partie.init();

    $( "#intrigueButton" ).on( "click", function( event ){
      clickIntrigue();
    });
});
