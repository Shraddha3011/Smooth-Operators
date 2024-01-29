import { Component, Input } from '@angular/core';
import { ProjectApiService } from '../project-api.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent {
  @Input() userArr: any = {};
  @Input() searchText: string = '';

  constructor(private obj: ProjectApiService, private router: Router) {}

  deleteUser(id: any) {
    Swal.fire({
      title: 'Confirm Deletion',
      text: 'Are you sure you want to delete this user?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!'
    }).then((result: any) => {
      if (result.isConfirmed) {
        this.obj.deleteUser(id).subscribe(
          (response) => {
            console.log('User deleted successfully');
            Swal.fire('Success!', 'User deleted successfully!', 'success');
            this.updateUserArr(id);
            this.obj.navigateOnSuccess(); // Navigate after deletion
          },
          (error: any) => {
            console.error('Error deleting User', error);
            Swal.fire('Error', 'Failed to delete the User', 'error');
          }
        );
      }
    });
  }

  private updateUserArr(deletedUserId: any) {
    const deletedIndex = this.userArr.findIndex((user: any) => user.id === deletedUserId);

    if (deletedIndex !== -1) {
      this.userArr.splice(deletedIndex, 1);
    }
  }
}
