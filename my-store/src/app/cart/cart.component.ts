import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms'

import { CartService } from '../cart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

items;
checkoutForm;

  constructor(
    private cartService:CartService,
    private  formBuilder:FormBuilder
    ) { 
      this.checkoutForm = this.formBuilder.group({
        name:'',
        address:''
      });
     }

  ngOnInit(): void {
    this.items = this.cartService.getItems();
  }


  onSubmit(customerData){
    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();

    console.warn('Your order has been submitted', customerData)
    alert('Thank you '+customerData.name+', your order has been submitted and will be send to ' + customerData.address)
  }

}
