import { Card } from './card';

export class Deck{
  #cards = [];

  // Constructeur deck
  constructor(cards){
  }

  mix(){

  }

  // Add a card in deck
  addCard(addedCard){
    if(addedCard instanceof Card){
      this.cards.push(addedCard);
    }
  }

  draw(nbCards){
    return cards.pop();
  }

  get displayHtml(){
    return cards[0].activeSide.displayHtml;
  }

}
