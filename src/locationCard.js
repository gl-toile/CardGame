import { Card } from './card';

export class LocationCard extends Card{
  name;
  occultValue = 2;
  clues = 4;

  constructor(title, illustrationUrl){
    super(title, illustrationUrl);
  }

}
