import { Component ,Input} from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent {
  @Input()
  userArr:any={};
  getPhotoUrl(photo: File): any {
    return photo ? URL.createObjectURL(photo) : '';
  }
  @Input()
  searchText:string="";
}
