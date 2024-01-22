import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProjectApiService } from '../project-api.service';
@Component({
  selector: 'app-user-dir',
  templateUrl: './user-dir.component.html',
  styleUrls: ['./user-dir.component.css']
})
export class UserDirComponent {
  // userform = new FormGroup(
  //   {
  //     name:new FormControl('',Validators.required),
  //     role:new FormControl('',Validators.required),
  //     email:new FormControl('',[Validators.required,Validators.email]),
  //     address:new FormControl('',Validators.required),
  //     phone:new FormControl('',[Validators.required,Validators.required])

  //   }
  // )
  // title = 'user';
  // selectedValue: string = '';
  // dropdownOpen: boolean = false;
  // name: string = "";
  // email: string = "";
  // role: string = "";
  // phone: string = "";
  // address: string = "";
  // isvisible:boolean=false;
  // issubmitted: boolean = false;
  // userinfo: any[] = [];
  // toggleDropdown() {
  //   this.dropdownOpen = !this.dropdownOpen;
  // }
  // onsubmit() {
  //   this.issubmitted = true;
  //   this.userinfo.push({
  //     "name": this.name,
  //     "email": this.email,
  //     "role": this.role,
  //     "phone": this.phone,
  //     "address": this.address
  //   });
  //   this.issubmitted=true;
  // }

  // openform() {
  //   const myFormElement = document.getElementById('myform');
  //   if (myFormElement) {
  //     myFormElement.style.display = 'block';
  //   }
  // }
  // closeform() {
  //   const myFormElement = document.getElementById('myform');
  //   if (myFormElement) {
  //     myFormElement.style.display = 'none';
  //   }
    
  // }
  userform = new FormGroup(
    {
      name: new FormControl('', Validators.required),
      role: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      address: new FormControl('', Validators.required),
      phone: new FormControl('', [Validators.required, Validators.required])
    }
  );
  title = 'user';
  selectedValue: string = '';
  dropdownOpen: boolean = false;
  name: string = "";
  email: string = "";
  role: string = "";
  phone: string = "";
  address: string = "";
  issubmitted: boolean = false;
  userinfo: any[] = [];
  selectedFile: File | null = null; 
  isvisible:boolean=false;
  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }


  onsubmit() {
    this.issubmitted = true;

    if (this.selectedFile) {
      this.userinfo.push({
        "name": this.name,
        "email": this.email,
        "role": this.role,
        "phone": this.phone,
        "address": this.address,
        "photo": this.selectedFile
      });
    } else {
      this.userinfo.push({
        "name": this.name,
        "email": this.email,
        "role": this.role,
        "phone": this.phone,
        "address": this.address
      });
    }

    this.selectedFile = null; 
    this.userform.reset();
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }
 
  openform() {
    this.isvisible=true;
  }

  closeform() {
    const myFormElement = document.getElementById('myform');
    if (myFormElement) {
      myFormElement.style.display = 'none';
    }
}

error=null;
userArr:any[] = [];


constructor(private proj:ProjectApiService){
  this.proj.getUserData().subscribe(
    (details:any)=>{
      this.userArr = details.response.Items;
    console.log(details);
    console.log("array is",this.userArr);
  },(error: { message: null; })=>{
    console.log(error);
    this.error = error.message;
  })
}


saveUserFormData(details:any){
  let body = {
    "id":details.id,
    "userDetails":{
      "uname":details.uname,
      "uemail":details.uemail,
      "urole":details.urole,
      "uphone":details.uphone,
      "uaddress":details.uaddress
    }
  }
  this.proj.saveUserData(body).subscribe((result)=>{
    console.log(result);
  })
}
}
