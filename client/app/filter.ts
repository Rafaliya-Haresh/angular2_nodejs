import {Pipe} from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterArray {
  transform(value, args: any) {
    let station = args;
      return value.filter(bid => {
      	if(bid.name && bid.name.match(station)){
      		return bid;
      	}else{
      		return bid[value];
      	}
      });
  }

}