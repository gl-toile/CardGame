import { Card } from './card';
import { Player } from './player';


export class PlayerCard extends Card{
  text;
  playerCardFamily;
  theme;

  constructor(title, text, playerCardFamily){
    super(title);
    this.text = text;
    this.playerCardFamily = playerCardFamily;
  }
}
