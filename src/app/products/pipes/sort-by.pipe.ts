import { Pipe, PipeTransform } from '@angular/core';

import { Hero } from '../interfaces/hero.interface';

@Pipe({
  name: 'sortBy'
})
export class SortByPipe implements PipeTransform {

  transform( heroesP: Hero[], orderBy?: keyof Hero | '' ): Hero[] {

    console.log({ heroesP, orderBy});


    switch( orderBy ) {

    case 'name':
      return heroesP.sort( (a,b) => ( a.name > b.name ) ? 1 : -1 )
    case 'canFly':
      return heroesP.sort( (a,b) => ( a.canFly > b.canFly ) ? 1 : -1 )
    case 'color':
      return heroesP.sort( (a,b) => ( a.color > b.color ) ? 1 : -1 )

    default:
      return heroesP;

    }

  }

}
