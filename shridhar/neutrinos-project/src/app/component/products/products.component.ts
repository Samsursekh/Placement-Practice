import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  
 productList:any[] = [];
 currentId: String =""
 name: String ="dfsda"
 image: String ="https://tse1.mm.bing.net/th?id=OIP.-kAzuAJ8vD4N8L-SCL_L3AHaHH&pid=Api&rs=1&c=1&qlt=95&w=125&h=120"
 cost: String ="dfdsf"
 info: String ="fdsaf"

  constructor(private http:HttpClient){
    this.getProducts()
  }
  
  
  getProducts() {
    this.http.get('https://json-data-2yj8.onrender.com/products').subscribe((resultData: any) => {
      console.log(resultData);
      this.productList = resultData;
    });
  }
  AddProduct(){
    let data = {
      name:this.name,
      image:this.image,
      cost:this.cost,
      info:this.info,
    }
    return this.http.post('https://json-data-2yj8.onrender.com/products',data).subscribe(res=>{
      alert('data added successfully')
      this.getProducts()
    })
}
}