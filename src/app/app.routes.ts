import { Routes } from '@angular/router';
import { HomeComponent } from './features/home-component/home-component';
import { OrderComponent } from './features/order-component/order-component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'orders', component: OrderComponent}
];
