import {Carte} from './carte';

export var CarteHistoire = function(titre, texteRecto, texteVerso, maxFatalities=6){
  this.fatalitiesCount = 0;
  this.maxFatalities=6;

  Carte.call(this, titre, texteRecto, texteVerso);

  this.prototype = Carte.prototype;
  this.maxFatalities = maxFatalities;

  console.log('histoire initialisée');
  console.log(maxFatalities);
}

CarteHistoire.prototype = Object.create(Carte.prototype);

CarteHistoire.constructor = CarteHistoire;

CarteHistoire.prototype.addFatalities = function(nb = 1){
  this.fatalitiesCount+=nb;
  console.log("+" + nb + " fatalité(s) sur " + this.titre);
  this.checkFatalities();
}

// Retourne l'état des fatalité : "x/x"
CarteHistoire.prototype.fatalityState = function(){
  return this.fatalitiesCount + "/" + this.maxFatalities;
}

CarteHistoire.prototype.displayFatalityState = function(){
  console.log(this.titre + " : " + this.fatalityState());
}

CarteHistoire.prototype.checkFatalities = function(){
  if(this.fatalitiesCount >= this.maxFatalities){
    this.displayFatalityState();
    console.log("Seuil de fatalité atteint ! (" + this.fatalityState() + ")");
    this.fatalitiesCount=0;
    this.retournerCarte();
  }
}

CarteHistoire.prototype.retournerCarte = function(){
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
