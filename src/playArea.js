import { Displayable } from './displayable';

export class PlayArea extends Displayable{

  constructor(){
    super();
  }

  getHtmlCode(){
    htmlCode='<div class="container playground">';

    htmlCode+='<div class="row">';

    htmlCode+='<div class="col">';
    //ZONE DE JEU
    htmlCode+='</div>';

    htmlCode+='<div class="col">';
    //-> DECK
    htmlCode+='</div>';

    htmlCode+='</div>';

    htmlCode+='<div class="row">';

    htmlCode+='<div class="col">';
    //MAIN
    htmlCode+='</div>';

    htmlCode+='<div class="col">';
    //-> CARTE
    htmlCode+='</div>';

    htmlCode+='</div>';

    htmlCode+='</div>';
  }
}
