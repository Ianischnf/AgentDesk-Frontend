import { Component, signal } from '@angular/core';
import { NavbarComponent } from '../../components/navbar-component/navbar-component';
import { OrderService, OrderResponse } from '../../services/order-service';
import { ButtonComponent } from '../../components/button-component/button-component';
import { BundleNumberComponent } from '../home-component/components/bundle-number-component/bundle-number-component';
import { Signal } from '@angular/core';
import { FormUpdateOrderComponent } from '../../components/form-update-order-component/form-update-order-component';

@Component({
  selector: 'app-order-component',
  imports: [NavbarComponent, ButtonComponent, BundleNumberComponent, FormUpdateOrderComponent],
  templateUrl: './order-component.html',
  styleUrl: './order-component.css',
})
export class OrderComponent {

  constructor(private orderService : OrderService) {}

  orders = signal<OrderResponse[]>([]);

  //Contient la commande séléctionnée
  selectedOrder = signal<OrderResponse | null>(null);

  FormUpdateComponent : boolean = false;

  ngOnInit(){
    this.onGetOrders();
  }


  
  // FormUpdateComponentTogle(){
  //   this.FormUpdateComponent = true;
  // }

  openUpdateForm(order : OrderResponse) {
    this.selectedOrder.set(order);
  }

  onGetOrders(){
    this.orderService.getOrders().subscribe({
      next: (data) => {
        this.orders.set(data);
        console.log("Commandes récupérées : ", data);
      },
      error: (error) => {
        console.log("Erreurs lors de la récupération des commandes :", error);
      }
    })
  }
}
