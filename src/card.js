import { Displayable } from './displayable';
//CLASS CARD
export class Card extends Displayable{
  name;
  subname;
  text;

  //clues_fixed =false;
  //health_per_investigator;

  traits;
  real_traits;
  flavour;
  illustrator;
  is_unique;
  exile;
  hidden;
  permanent;

  //double_sided;
  //back_text;
  //back_flavor;
  //octgn_id;
  url; //card url on ffg site

  imagesrc;
  //backimagesrc;

  hiddenSide;
  activeSide;
  theme;
  imagesrc;
  type; // Carte joueur, carte rencontre, carte histoire etc.

  constructor(titre, imagesrc, texteRecto, texteVerso, type){
    super();
    this.name = titre;
    this.text = texteRecto;
    this.textVerso = texteVerso || null;
    this.cout = 0;
    this.imagesrc=imagesrc;

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
