import { Component, OnInit } from '@angular/core';
import Product from 'src/app/models/Product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  //criando um array para definir a fonte de dados
  products: Product[] = [{
    category: 0,
    id: '',
    name: 'batata',
    price: 5.7
  }];
  displayedColumns: string[] = ['name', 'price', 'category', 'actions'];

  constructor() {}

  ngOnInit(): void {

  }

  openDialogue(product: Product){

  }

  updateProduct(product: Product){

  }

  deleteProduct(id: string){

  }

}
