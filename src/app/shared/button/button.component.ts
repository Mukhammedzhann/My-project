import { Input, Component } from '@angular/core';
@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input() name!: string;
  @Input() class!: string;
  @Input() type!: string;
  @Input() icon!: string;
  @Input() color!: string;
}
