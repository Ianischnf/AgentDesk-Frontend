import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bundle-number-component',
  imports: [],
  templateUrl: './bundle-number-component.html',
  styleUrl: './bundle-number-component.css',
})
export class BundleNumberComponent {
  @Input() title : string = '';
  @Input() valeur : number = 0;
}
