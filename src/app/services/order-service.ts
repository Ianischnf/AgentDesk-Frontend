import { Injectable } from '@angular/core';
import { environment } from '../environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



interface OrderRequest {
  nomClient   : string,
  description : string
  statut      : string
}

export interface OrderResponse {
  id          : number,
  nomClient   : string,
  description : string
  statut      : string
}

@Injectable({
  providedIn: 'root',
})

export class OrderService {
  private apiUrl = `${environment.apiUrl}/order`;

  constructor(private http: HttpClient){}

  getOrders():Observable<any[]>{
    return this.http.get<any[]>(this.apiUrl);
  }

  updateOrders(idOrder : number, dto : OrderRequest) : Observable<OrderResponse> {
    return this.http.put<OrderResponse>(`${this.apiUrl}/${idOrder}`, dto);
  }
}
