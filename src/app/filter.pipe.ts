import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(users: any[], searchText: string): any[] {
    if (!searchText) {
      return users;
    }
  
    return users.filter(user => {
      const uname = user.userDetails.uname; 
      
  
      return uname.includes(searchText);
    });
  }

}
