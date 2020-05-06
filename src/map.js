import { Card } from './card';
import { LocationCard } from './locationCard';
import { Displayable } from './displayable';

export class Map extends Displayable {
  grid= []; // Grille de jeu
  startingLocation = [0,1];

  constructor(){
    super();
    this.grid = [
      [0,new LocationCard("Vestibule", "./salon.jpg"),0 ,0 ],
      [new LocationCard("Cave", "./bibio.jpg"), new LocationCard("Grenier", "./grenier.jpg"), new LocationCard("Salon","./salon.jpg"),0],
      [0, 0, 0, 0]
    ];
  }

  addPlace(card){

  }

  getHtmlCode(){
    var htmlCode='<div class="container">';
    this.grid.forEach(function(row){
      htmlCode+='<div class="row grid">';

      row.forEach(function(placeCard){

        let divClass = placeCard.title ? "case-lieu" : "case-vide";

        if(divClass == "case-vide"){
          htmlCode+='<div class="col case '+ divClass +'">';
          htmlCode+= '</div>';

        } else {

          htmlCode+='<div class="col case '+ divClass +'">'

          htmlCode+='<div class="row">';
          htmlCode+='<div class="col"><img src="' + placeCard.illustrationUrl + '" class="img-fluid" style=""></div>';
          htmlCode+= '</div>';

          htmlCode+='<div class="row"><div class="col card-content">';
          htmlCode+= (placeCard.title || '');
          htmlCode+='<ul class="infos-lieu">';
          htmlCode+='<li>Valeur occulte : '+ placeCard.occultValue + '</li>';
          htmlCode+='<li>Indices : '+ placeCard.clues + '</li>';
          htmlCode+='</ul>';
          htmlCode+= '</div></div>';

          htmlCode+='</div>';
        }

      });
      htmlCode+='</div>';
    })
    htmlCode+="</div>";
    return htmlCode;
  }
}
