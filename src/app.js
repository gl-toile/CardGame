import { Card } from './card';
import { StoryCard } from './storyCard';
import { Timeline } from './timeline';
import { Player } from './player';
import { PlayerCard } from './playerCard';
import { Map } from './map';

export class Partie{
  currentPlot;
  acteCourant;
  joueurs;
  encounterDeck;
  inGameEnnemies;
  chaosTokens;

  constructor(){
    this.currentPlot = new StoryCard("Intrigue 1a", "L'attaque du chat chouette", "Le monstre a sorti griffes, il vous saute au visage et vous empeche de dormir", 6);
    this.acteCourant = new StoryCard("Acte 1a", "Une petite Blonde sur un lit douillet", "Ce contenu a été censuré...", 3);
    this.chaosTokens = [1, 0, 0, -1, -2];

    this.inGameEnnemies = [
      {name: "Goule des glaces", effects:"4 2 2", damages:2, horrors:1, isHunter:false, location:1, isUp:false},
      {name: "Nuée de rats", effects: "1 1 3", damages:1, horrors:1,isHunter:true, location:2, isUp:false},
      {name: "Nuée de rats", effects: "1 1 3",damages:1, horrors:1, isHunter:true, location:3, isUp:true},
      {name: "Goule des glaces", effects:"4 2 2", damages:2, horrors:1,isHunter:false, location:4, isUp:false}
    ];
    this.encounterDeck = [
      {name: "Goule des glaces",  type:"ennemy", effects: "4 3 2"},
      {name : "Paralysé par la peur", type:"skill-test",  effects: "Effectuer un test volonté(3) ou défaussez 3 cartes"}
    ];

    var defaultCards =[
      {name: "Magnum .45", text: "Pour flinguer tout ce qui bouge", playerCardFamily: "one-handed"},
      {name: "Agent de police ", text: "Allié super baleze", playerCardFamily: "ally"},
      {name: "Chance", text: "Vous avez de la change", playerCardFamily: "eventCard"},
      {name: "Chat errant", text: "Miaouh", playerCardFamily:"ally"},
      {name: "Baseball Bat", text: "Bim !", playerCardFamily:"two-handed"}
    ];

    var deck=[];
    console.log(defaultCards);
    defaultCards.forEach(function(card){
      deck.push(new PlayerCard(card.name, card.text, card.playerCardFamily));
    });

    this.joueurs = [
      new Player("Morgane", deck),
      new Player("Guillaume", deck)
    ];
  }


  test(){

    console.log('partie lancée');

    joueurs.forEach(function(joueur){
      console.log("----------");
      console.log(joueur.name.toUpperCase());
      console.log("Cartes dans le deck : ");
      joueur.deck.forEach(function(card){
        console.log(card.name + " (" + card.playerCardFamily + ") - " + card.text);
      });
    });

  }

    // Retourne un modificateur Chaos
    chaosToken(){
      let min = 0;
      let max = this.chaosTokens.length-1;
      let randId = Math.floor(Math.random() * (max-min)+min);
      console.log("Jeton chaos : " + this.chaosTokens[randId]);
      return this.chaosTokens[randId];
    }

  launch(){
    /* --- PHASE DU MYTHE --- */
    console.log("----------------------");
    console.log("--- PHASE DU MYTHE ---");
    console.log("----------------------");

    // 1.1 Début du round. Début de la phase du Mythe
    console.log("1.1 Début du round. Début de la phase du Mythe");

    // 1.2 Placez 1 fatalité sur l'intrigue en intrigueEnCours
    this.currentPlot.addFatalities(1);

    // 1.3 Vérifiez le seuil de fatalité.
    this.currentPlot.checkFatalities();

    // 1.4 Chaque invetigateur pioche 1 carte rencontre
    this.joueurs.forEach(function (joueur){
      let drawId = Math.floor(Math.random() * this.encounterDeck.length); // Index aléatoire
      var encounterCard = this.encounterDeck[drawId];
      console.log("1.4 " + joueur.name + " a pioché : " + encounterCard.name);
      if(encounterCard.type == "ennemy"){
        //this.inGameEnnemies.push(encounterCard);
        console.log("1.4 " + encounterCard.name + " ajoutée sur la carte !");
      }
      else if(encounterCard.type=="skill-test"){
        this.skillTest("will", joueur.will, 8);
        console.log(encounterCard.effects);
      }
      // CHECK LE TYPE
    }, this);

    // Fenêtre de joueur
    this.playerWindow();

    // 1.5 Fin de la phase du Mythe
    console.log("1.5 Fin de la phase du Mythe");


    /* --- PHASE D'INVESTIGATION --- */
    console.log("-----------------------------");
    console.log("--- PHASE D'INVESTIGATION ---");
    console.log("-----------------------------");

    // 2.1 Début de la phase d'INVESTIGATION
    console.log("2.1 Début de la phase d'INVESTIGATION");

    // Fenêtre de joueur
    this.playerWindow();

    this.joueurs.forEach(function(joueur){
      // 2.2 Début du tour de l'investigateur suivant.
      console.log("2.2 Début du tour de " + joueur.name);

      // Fenêtre de joueur
      this.playerWindow();
      for(let i=0; i < joueur.nbActions ; i++){
        // 2.1.1 L'investigateur actif a le droit d'effectuer une action, si possible
        console.log(joueur.name+ " fait une action");
      }

      // 2.2.2 Fin du tour de L'investigateur
      console.log("2.2.2 Fin du tour de " + joueur.name);
    }, this);

    // 2.3 Fin de la phase d'INVESTIGATION
    console.log("2.3 Fin de la phase d'INVESTIGATION");

    /* --- PHASE DES ENNEMIS --- */
    console.log("------------------------");
    console.log("---PHASE DES ENNEMIS ---");
    console.log("------------------------");

    // 3.1 Début de la phase des ENNEMIS
    console.log("3.1 Début de la phase des ENNEMIS");

    // 3.2 Les ennemis Chasseur se déplacent
    this.inGameEnnemies.forEach(function(ennemy){
      if(ennemy.isHunter){
        console.log("3.2 " + ennemy.name + " se déplace...");
      }
    }, this);




    this.joueurs.forEach(function(joueur){

      // 3.3 L'investigateur suivant résout les attaques des ennemis engagés avec lui. (boucle à la précédente Fenêtre de joueur ou Fin)
      this.inGameEnnemies.forEach(function(ennemy){

        if(joueur.location == ennemy.location){
          // Fenêtre de joueur
          this.playerWindow();
          console.log("3.3 %s attaque %s et inflige +%i dégats / +%i horreurs", ennemy.name, joueur.name, ennemy.damages, ennemy.horrors);
          joueur.takesDamages(1,1);
          console.log();
        }
      },this)
    }, this);
    // Fenêtre de joueur
    this.playerWindow();
    // 3.4 Fin de la phase des ENNEMIS
    console.log("3.4 Fin de la phase des ENNEMIS");

    /* --- PHASE D'ENTRETIEN --- */
    console.log("-------------------------");
    console.log("--- PHASE D'ENTRETIEN ---");
    console.log("-------------------------");

    // 4.1 Début de la phase d'ENTRETIEN
    console.log("4.1 Début de la phase d'ENTRETIEN");

    // Fenêtre de joueurs
    this.playerWindow();

    // 4.2 Réinitialisez les actions
    console.log("4.2 Réintialisation des actions...");

    // 4.3 Redressez chaque carte inclinée.
    console.log("4.3 Recherche de carte à redresser...");
    this.inGameEnnemies.forEach(function(ennemy){
      if(!ennemy.isUp){
        ennemy.isUp=true;
        console.log("4.3 " + ennemy.name + " se redresse.");
      }
    })

    // 4.4 Chaque investigateur pioche 1 carte et gagne 1 ressource.
    this.joueurs.forEach(function(joueur){
      console.log();
      let drawCard = joueur.draw(1);
      joueur.ressources++;
      console.log("4.4 " + joueur.name + " a pris 1 ressource. Total : "+ joueur.ressources);

      if(drawCard) {
        console.log("4.4 " + joueur.name + ' a pioché : "' + drawCard.name +'"');
      }else{
        console.log("4.4 " + joueur.name + " n'a pas plus de carte dans son deck");
      }

    }, this);

    // 4.5 Chaque investigateur vérifie la limite de sa MAIN
    this.joueurs.forEach(function(joueur){
      console.log("4.5 Verification de la limite de la main de " + joueur.name);
      joueur.displayHand();
    },this);

    // 4.6 Fin de la phase d'Entretien. Fin du round.

    // RETOUR AU DEBUT
  }

  skillTest(ability, playerValue, testValue){
    // TC1 Déterminez la compétence du test. Un test de compétence de ce type débute
    console.log("TC.1 Un test de %s(%i) débute", ability, testValue);

    // Fenêtre de joueur
    this.playerWindow();

    // TC.2 Attribuez les cartes de la main des joueurs au test de compétence
    console.log("TC.2 Attribution des cartes de compétence...");
    // callToActions();

    // Fenêtre de joueur
    this.playerWindow();

    // TC.3 Révélez un pion chaos
    let chaosAmount = this.chaosToken();

    //TC.4 Appliquez le ou les effet(s) du symbole Chaos
    //chaosEffect();

    // TC.5 Déterminez la valeur de compétence modifiée de l'investigateur
    let modifiedAbility = playerValue + chaosAmount;

    // TC.6 Déterminez la réussite / l'échec du test de compétence.
    let result = modifiedAbility - testValue;
    console.log("Le test de %s a %s : %i/%i (de %s%i)", ability, modifiedAbility>=testValue ? "réussi" : "échoué", modifiedAbility, testValue, result>0 ? "+" : "", result);
    return result;

    // if(modifiedAbility >= testAbility){
    //   return [success:true, difference : modifiedAbility-testAbility];
    // } else {
    //   return [success:false, difference : modifiedAbility-testAbility];
    // }

    // TC.7 Appliquez les résultations du test de compétence.

    // TC.8 Fin du test de compétence
    console.log("TC.8 Fin du test de compétence");
  }

  playerWindow(){
    console.log("~ Fenêtre de joueur");
  }

}


// Partie.prototype.init = function(){
//
//   /*
//   var intrigues=[
//     new CarteHistoire("Intrigue 1a", "L'attaque du chat chouette", "Le monstre sort ses griffes, vous saute au visage et vous empeche de dormir", 6),
//     new CarteHistoire("Intrigue 2a", "L'attaque du chat chouette", "Le monstre sort ses griffes, vous saute au visage et vous empeche de dormir", 6)
//     new CarteHistoire("Intrigue 3a", "L'attaque du chat chouette", "Le monstre sort ses griffes, vous saute au visage et vous empeche de dormir", 6)
//   ];
//
//   if(!fatalityTest){
//     intrigueEnCours = intrigues.pop();
//   }
//   */
//
//
//
//
//
//   //map.updateInvestigators();
//
//
//
// }

$( document ).ready(function() {
  console.log( "ready!" );
  var partie = new Partie();


      var map = new Map();
      $( map.getHtmlCode() ).appendTo( $( "#map" ) );

      // joueurs[0].location = map.startingLocation;
  for(let i = 0; i < 7 ; i++){
    partie.launch();
  }

  var clickIntrigue = function(){
    console.log("clickIntrigue");
    // console.log(this);
    // console.log("FIN");
    // this.currentPlot.addFatalities(1);
    // $('#fatalitiesCount').text("blabla" + this.currentPlot.fatalityState());
  }

  var clickActe = function( event ){
    console.log("clickActe");
  }

  console.log("TEST SIGN : " + Math.sign(5));
  if(Math.sign(5)){
    console.log("OK");
  }
  console.log(Math.sign(5) ? "+" : "-");
  $( "#intrigueButton" ).on( "click", function( event ){
    clickIntrigue();
  });
});
