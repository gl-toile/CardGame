export class CardSide{
  backgroundPicture="./face.jpg";

  constructor(backgroundPicture){
    this.backgroundPicture = backgroundPicture;
  }

  getDisplayHtml(){
    return "<img src="+ this.backgroundPicture +"></img>";
  }
}
