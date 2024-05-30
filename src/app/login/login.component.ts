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
  myForm : FormGroup = this.formBuilder.group({
    "userName": ["", [Validators.required]],
    "userEmail": ["", [ Validators.required, Validators.email]],
    "phones": this.formBuilder.array([
        ["+7", Validators.required]
    ])
});;
  constructor(private formBuilder: FormBuilder){
  }

  getFormsControls() : FormArray{
      return this.myForm.controls["phones"] as FormArray;
  }

  addPhone(){
      (<FormArray>this.myForm.controls["phones"]).push(new FormControl("+7", Validators.required));
  }
  submit(){
      console.log(this.myForm);
  }
}
