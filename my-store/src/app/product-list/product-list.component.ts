import { Component, OnInit } from '@angular/core';

import { products } from '../products'
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products:object = products;

  constructor() { }

  ngOnInit(): void {
  }

  share(name:string){
    window.alert('The '+ name +' product has been shared!');
  }

  onNotify(name) {
    window.alert('You will be notified when the ' + name + ' product goes on sale');
  }
}
