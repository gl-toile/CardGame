import { Speaker } from './speaker';

export class Player extends Speaker{
  name = "Sans nom";
  nbActions=3
  investigateur;
  deck = [];
  discard = [];
  playArea;
  threatZone;
  hand = [];
  location = 1;
  ressources=5;
  investigatorCoin; //Jeton sur la carte

  //Points de vie
  physicalHealth;
  mentalHealth;

  // Degats physiques et mentaux
  damages;
  horrors;


  //Compétences
  will;
  intelligence;
  strength;
  agility;
  modifiers;


  constructor(name, startingDeck){
    super();
    this.name = name;
    this.deck = startingDeck;
    this.will=4;
    this.intelligence=3;
    this.strength=4;
    this.agility=2;
    this.physicalHealth=9;
    this.mentalHealth=7;

    this.damages=0;
    this.horrors=0
  }

  draw(nb){
    for(let i =0; i < nb && this.deck.length && this.deck.length ; i++){
      let card = this.deck.pop(); //retire une carte du deck
      this.hand.push(card); // Ajout de la carte à la main
      return card;
    }
  }

  takesDamages(damages, horrors){
      this.damages+= damages;
      this.horrors+= horrors;

      if(this.damages >= this.physicalHealth){
        console.log(this.name + "est vaincu(e)");
        return 0;
      } else if( this.horrors >= this.mentalHealth){
        console.log(this.name + "est vaincu(e)");
        return -1;
      } else{
        return true;
      }
  }

  displayHand(){
    console.log("----");
    console.log("Main de " + this.name + " : ");
    this.hand.forEach(function(card){
      console.log(card.title + " (" + card.playerCardFamily + ") - " + card.text);
    });
    console.log("----");
  }
}
