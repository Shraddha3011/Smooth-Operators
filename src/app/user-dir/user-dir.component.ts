import { ProjectApiService } from '../../service/project-api.service';
import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-user-dir',
  templateUrl: './user-dir.component.html',
  styleUrls: ['./user-dir.component.css'],
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
  userform = new FormGroup({
    // uid:new FormControl('',Validators.required),
    uname: new FormControl('', Validators.required),
    urole: new FormControl('', Validators.required),
    uemail: new FormControl('', [Validators.required, Validators.email]),
    uaddress: new FormControl('', Validators.required),
    uphone: new FormControl('', [Validators.required, Validators.required]),
  });
  title = 'user';
  selectedValue: string = '';
  dropdownOpen: boolean = false;
  // uid:number=1;
  uname: string = '';
  uemail: string = '';
  urole: string = '';
  uphone: string = '';
  uaddress: string = '';
  issubmitted: boolean = false;
  userinfo: any[] = [];
  selectedFile: File | null = null;
  isvisible: boolean = false;
  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  onsubmit() {
    this.issubmitted = true;

    if (this.selectedFile) {
      this.userinfo.push({
        // "id":this.uid,
        name: this.uname,
        email: this.uemail,
        role: this.urole,
        phone: this.uphone,
        address: this.uaddress,
        photo: this.selectedFile,
      });
    } else {
      this.userinfo.push({
        // "id":this.uid,
        name: this.uname,
        email: this.uemail,
        role: this.urole,
        phone: this.uphone,
        address: this.uaddress,
      });
    }

    this.selectedFile = null;
    this.userform.reset();
  }
  file: File | null = null;
  base64String: string | null = null;
  url: any;

  async convertToBase64(file: File) {
    return new Promise<void>((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        if (reader.result) {
          this.base64String = reader.result.toString().split(',')[1];
          resolve();
        } else {
          reject(new Error('Reader result is null.'));
        }
      };
      reader.onerror = (error) => {
        reject(error);
      };
    });
  }

  async onFileSelected(event: any): Promise<void> {
    this.file = event.target.files[0];
    if (this.file) {
      await this.convertToBase64(this.file);
      if (this.base64String != null) {
        console.log(this.base64String);
      }
    }
  }

  // base64:any;
  // onFileSelected(event: any) {
  //   let targetEvent = event.target;
  //   let file:File = targetEvent.files[0];
  //   // this.selectedFile = event.target.files[0];
  //   let fileReader = new FileReader();
  //   console.log(this.base64)
  //   fileReader.onload = (e)=>{
  //     this.base64 = fileReader.result
  //     console.log(this.base64);
  //   }
  //   fileReader.readAsDataURL(file)

  // }

  // openform() {
  //   this.isvisible=true;
  // }
  openform() {
    const myFormElement = document.getElementById('myform');
    if (myFormElement) {
      myFormElement.style.display = 'block';
    }
  }

  closeform() {
    const myFormElement = document.getElementById('myform');
    if (myFormElement) {
      myFormElement.style.display = 'none';
    }
  }
  close() {
    const myFormElement = document.getElementById('myform');
    if (myFormElement) {
      myFormElement.style.display = 'none';
    }
  }
  error = null;
  userArr: any[] = [];

  ngOnInit() {
    this.retrieveUsers();
  }

  constructor(
    private obj: ProjectApiService,
    public translate: TranslateService
  ) {
    translate.addLangs(['English', 'Hindi', 'Marathi']);
    translate.setDefaultLang('English');
  }
  switchLang(lang: string) {
    this.translate.use(lang);
  }

  // toggleDarkMode(): void {
  //   this.obj.toggleDarkMode();}

  // ngOnInit(){
  //   this.retrieveUsers();
  // }

  retrieveUsers() {
    this.obj
      .getUserData()
      .then(
        // retrieveUser(){
        //   this.proj.getUserData().subscribe(
        (details: any) => {
          this.userArr = details.Items;
          console.log(details);
          console.log('array is', this.userArr);
        }
      )
      .catch((e) => {
        console.log(e);
        this.error = e.message;
      });
  }
  searchText: string = '';
  setSearch(inputl: HTMLInputElement) {
    this.searchText = inputl.value;
  }

  saveUserFormData(details: any) {
    let body = {
      // "id":details.uid,
      userDetails: {
        uname: details.uname,
        uemail: details.uemail,
        urole: details.urole,
        uphone: details.uphone,
        uaddress: details.uaddress,
        imageUrl: this.base64String,
        imageName: this.file?.name,
      },
    };
    this.obj.saveUserData(body).then((result) => {
      console.log(result);
      this.retrieveUsers();
      this.userform.reset();
    });

    this.close();
  }
}
