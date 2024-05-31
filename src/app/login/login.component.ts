import { Component, Input } from '@angular/core'; // Исправлен импорт Input
import { BrowserModule } from '@angular/platform-browser'; // Импортируйте BrowserModule
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms'; // Импортируйте ReactiveFormsModule
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { InputComponent } from './input/input.component';
import { LoginModule } from './login.module';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl:'./login.component.html',
  styleUrls: ['./login.component.scss'], // styleUrls вместо styleUrl
  
  // template: `hello`
})
export class LoginComponent {
  name: string = ''; 
  userName: string = "" ;
  type: string = 'password'; 
  placeholder: string = 'Enter your email';
  
  // showEmailError: boolean = false;

  scssProperties = {color: 'red', background: 'green'};
  myForm : FormGroup = this.formBuilder.group({
    "userEmail": ["", [ Validators.required, Validators.email]],
    "userPassword": ["", [Validators.required]],
  });

  get (){
    return this.myForm.get('vdf5') as FormGroup
  }

  get userEmail() {
    return this.myForm.get('userEmail') as FormControl;
  }

  get userPassword() {
    return this.myForm.get('userPassword') as FormControl;
  }

  constructor(private formBuilder: FormBuilder,
    private http: HttpClient
  ){
    this.myForm = this.formBuilder.group({
      userEmail: ['', [Validators.required, Validators.email]],
      userPassword: ['', [Validators.required, Validators.minLength(5)]]
    });

    // this.myForm.get('userEmail')?.valueChanges.subscribe(() => {
    //   this.showEmailError = this.userEmail.invalid && this.userEmail.touched;
    // });
  }

  search(){
    console.log('search');
    
    this.http.get('https://api.realworld.io/api/users/login' + this.userName).subscribe(res => {
      console.log(res);
    })
  }

  submit(){
    console.log('is submit');
    if (this.myForm.status === 'INVALID') return;
    console.log(this.myForm);
    this.search();
  }


}
