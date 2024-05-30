import { Component, Input } from '@angular/core'; // Исправлен импорт Input
import { BrowserModule } from '@angular/platform-browser'; // Импортируйте BrowserModule
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms'; // Импортируйте ReactiveFormsModule
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { FormArray } from '@angular/forms';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl:'./login.component.html',
  styleUrls: ['./login.component.scss'], // styleUrls вместо styleUrl
  
  // template: `hello`
})
export class LoginComponent {
  scssProperties = {color: 'red', background: 'green'};
  myForm : FormGroup = this.formBuilder.group({
    "userEmail": ["", [ Validators.required, Validators.email]],
    "userPassword": ["", [Validators.required]],
 

});;
  constructor(private formBuilder: FormBuilder){
  }


  submit(){
    console.log('is submit');
    if (this.myForm.status === 'INVALID') return;
    console.log(this.myForm);
  }
}
