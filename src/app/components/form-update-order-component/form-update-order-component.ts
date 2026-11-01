import { Component, input } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { ButtonComponent } from '../button-component/button-component';
import { OrderResponse } from '../../services/order-service';

@Component({
  selector: 'app-form-update-order-component',
  imports: [FormsModule, ButtonComponent],
  templateUrl: './form-update-order-component.html',
  styleUrl: './form-update-order-component.css',
})
export class FormUpdateOrderComponent {

  order = input.required<OrderResponse>();

  onSubmit(form: NgForm) {

  }
}
