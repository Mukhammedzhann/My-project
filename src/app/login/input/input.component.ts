import { Input, Component} from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'input-comp',
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {

  @Input() name!: string;
  @Input() type!: string;
  @Input() control! : FormControl;
  @Input('placeholder') placeholder! :string
  // @Input() controller: FormControl = new FormControl('', [Validators.required, Validators.email]);


} 
