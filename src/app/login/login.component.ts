import { Component, Input } from '@angular/core'; // Исправлен импорт Input
import { BrowserModule } from '@angular/platform-browser'; // Импортируйте BrowserModule
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms'; // Импортируйте ReactiveFormsModule
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { InputComponent } from './input/input.component';
import { LoginModule } from './login.module';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Route, } from '@angular/router';
import { RouterOutlet, RouterLink, Router} from "@angular/router";

// import { map, catchError} from "rxjs/operators";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'], // styleUrls вместо styleUrl

  // template: `hello`
})
export class LoginComponent {
  name: string = '';
  userName: string = '';
  type: string = 'password';
  placeholder: string = 'Enter your email';

  // showEmailError: boolean = false;

  scssProperties = { color: 'red', background: 'green' };
  myForm: FormGroup = this.formBuilder.group({
    userEmail: ['', [Validators.required, Validators.email]],
    userPassword: ['', [Validators.required]],
  });

  get() {
    return this.myForm.get('vdf5') as FormGroup;
  }

  get userEmail() {
    return this.myForm.get('userEmail') as FormControl;
  }

  get userPassword() {
    return this.myForm.get('userPassword') as FormControl;
  }

  constructor(private formBuilder: FormBuilder, private http: HttpClient,
    private router: Router
  ) {
    this.myForm = this.formBuilder.group({
      userEmail: ['', [Validators.required, Validators.email]],
      userPassword: ['', [Validators.required, Validators.minLength(5)]],
    });

    // this.myForm.get('userEmail')?.valueChanges.subscribe(() => {
    //   this.showEmailError = this.userEmail.invalid && this.userEmail.touched;
    // });
  }

  // search(){
  //   console.log('search');
  //   const body = {name: this.userEmail, age: this.userPassword};
  //   return this.http.post('https://api.realworld.io/api/users/login' + this.userName).subscribe((res) => {
  //     console.log(res);
  //   })
  // }

  search() {
    console.log('search');
    const body = { "user": {
      "email": this.userEmail.value,
      "password": this.userPassword.value
    } };
    console.log(body)
    return this.http.post('https://api.realworld.io/api/users/login', body);
  }

  submit() {
    console.log('is submit');
    if (this.myForm.status === 'INVALID') return;
    console.log(this.myForm);
  
    this.search().subscribe({
      next: (data: any) => {
        console.log('HTTP request success:', data);
        this.router.navigate(["/home"]);
        // window.location.href = '/home'
        // this.Router.navigateByUrl(['./home.component.html']);
      },
      error: (error: any) => {
        console.error('HTTP request error:', error);
        // error.window.location = 'https://www.youtube.com/watch?v=QTeFnIVuveg&list=RDcepFVPFsM6g&index=7';
      },
    });
  }
}
