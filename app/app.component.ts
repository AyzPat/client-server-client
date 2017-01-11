import { Component ,OnInit} from '@angular/core';
import{ClientService} from'./clientservice';
@Component({
  selector: 'my-app',
  template: `

<ul *ngFor="let token of token">
 
<li>
Name:{{token.value.name|uppercase}}<br>
Lastname:{{token.value.lastname|lowercase}}
<br>
<button >Del</button>
</li>
</ul>
<button type="submit" (click)="get()">GET</button>
 
  <label>Name: <input #name /></label>
  <label>lastname: <input #lastname /></label>
<button (click)="add(name.value,lastname.value); ">Add</button>
 
  
  `,
  providers:[ClientService]
})
export class MyComponent {

  data:any;
  token:any;
  error:any;
  constructor(private _Service: ClientService) { }
ngOnInit(){
 
      
  
   
  // this._Service.getdata().subscribe(
  //                    data => this.data = data.data)
                    
   }

    add (name: string,lastname:string) {
    if (!name) { return; }
    this._Service.add(name,lastname)
                     .subscribe(
                       data  => {
                         console.log(data);
                    
                         },
                       error =>  this.error = <any>error);


                      
  

}


get(){
   this._Service.getdata().subscribe(
       token => {
         console.log(token);
         this.token=token},
       
   )
     }

}
  
 
