export var Carte = function Carte(titre, texteRecto, texteVerso){
  this.titre = titre;
  this.texte = texteRecto;
  this.texteVerso = texteVerso || null;

  this.cout = 0;

  console.log("init carte");
}

Carte.prototype.displayText = function(){
    console.log(this.nom);
}
