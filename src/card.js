import { Displayable } from './displayable';
//CLASS CARD
export class Card extends Displayable{
  title;
  hiddenSide;
  activeSide;
  theme;
  illustrationUrl;
  type; // Carte joueur, carte rencontre, carte histoire etc.

  constructor(titre, illustrationUrl, texteRecto, texteVerso, type){
    super();
    this.title = titre;
    this.text = texteRecto;
    this.textVerso = texteVerso || null;
    this.cout = 0;
    this.illustrationUrl=illustrationUrl;

    console.log("init card");
  }

  buildCard(frontSide, hiddenSide){
    this.frontSide = frontSide;
    this.hiddenSide = hiddenSide;
    if(hiddenSide == undefined){
      if(this.type == "player-card"){
        hiddenSide = new CoverSide("player.jpg"); // mettre les valeurs par défault dans un fichier de confg
      }
    }
  }

  flipCard(){
    var newHiddenSide = activeSide;
    activeSide = hiddenSide;
    hiddenSide = newHiddenSide;
    activeSide.reveal();
  }

  diplayText(){
    console.log(this.nom);
  }
}
