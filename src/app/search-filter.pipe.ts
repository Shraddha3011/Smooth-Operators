import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(users: any[], searchText: string): any[] {
    if (!searchText) {
      return users;
    }
  
    return users.filter(user => {
      const uname = user.projectDetails.pname; 
      
  
      return uname.includes(searchText);
    });
  }

}
