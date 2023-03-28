import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  currentId=""
  name="dfsda"
  image="https://tse1.mm.bing.net/th?id=OIP.-kAzuAJ8vD4N8L-SCL_L3AHaHH&pid=Api&rs=1&c=1&qlt=95&w=125&h=120"
  cost="dfdsf"
  info="fdsaf"


  constructor(private http : HttpClient) { }

  getProducts(){
    return this.http.get("https://json-data-2yj8.onrender.com/products").pipe(map((res:any)=>{
      return res;
    }))
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
    })

  }
}
