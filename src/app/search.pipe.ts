import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

 transform(value: any, searchTerm?: string) {
  if (!searchTerm) return value;
    return value.filter(function(search){
      return search.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
  }

}
