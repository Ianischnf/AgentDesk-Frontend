import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar-component/navbar-component';
import { BundleNumberComponent } from './components/bundle-number-component/bundle-number-component';

@Component({
  selector: 'app-home-component',
  imports: [NavbarComponent, BundleNumberComponent],
  templateUrl: './home-component.html',
  styleUrl: './home-component.css',
})
export class HomeComponent {
  stats = [
    { title: 'Total', valeur: 0 },
    { title: 'En attente', valeur: 0 },
    { title: 'En cours', valeur: 0 },
    { title: 'Terminées', valeur: 0 }
  ];
}
