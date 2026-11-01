import { Component, input, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-button-component',
  imports: [NgClass],
  templateUrl: './button-component.html',
  styleUrl: './button-component.css',
})
export class ButtonComponent {

  @Input() color : string = '#955356'
  @Input() icon  : string = '';
  @Input() label : string = '';

  //Nouveau Input
  buttonClass = input<string>('');
}
