import {Card} from './card';

export class StoryCard extends Card{
  fatalitiesCount=0;
  #maxFatalities=999;
  storyText="Le monstre à tentacule sort de terre..."

  constructor(titre, texteRecto, texteVerso, maxFatalities=6){

    super(titre, texteRecto, texteVerso);
    this.fatalitiesCount = 0;
    this.maxFatalities=6;
    this.maxFatalities = maxFatalities;

    console.log('histoire initialisée');
    console.log(maxFatalities);
  }

  // GETTERS
  get area() {
    return "";
  }
  get fatalitiesCount(){
    return this.fatalitiesCount;
  }



  addFatalities(nb = 1){
    this.fatalitiesCount+=nb;
    console.log("1.2 +" + nb + " fatalité(s) sur " + this.title);
  }

  fatalityState(){
    return this.fatalitiesCount + "/" + this.maxFatalities;
  }

  displayFatalityState(){
    console.log(this.titre + " : " + this.fatalityState());
  }

  checkFatalities(){
    if(this.fatalitiesCount >= this.maxFatalities){
      //this.displayFatalityState();
      console.log("1.3 Seuil de fatalité atteint ! (" + this.fatalityState() + ")");
      this.fatalitiesCount=0;
      //this.retournerCarte();
    }
    else {
      console.log("1.3 Verification du seuil de fatalité... "+ this.fatalityState());
    }
  }

  retournerCarte(){
    console.log('-----------------');
    var nbChars = this.texteVerso.length;
    var bordureCarte="";
    for(let i=0 ; i<nbChars ; i++){
      bordureCarte+="-";
    }
    console.log(bordureCarte);
    console.log(this.texteVerso);
    console.log(bordureCarte);
  }

}
