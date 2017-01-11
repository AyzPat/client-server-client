import{data} from './data'
import {HttpModule} from '@angular/http';
import {Http, Response,Headers,RequestOptions} from '@angular/http';
import {Injectable} from '@angular/core';
import {Observable}     from 'rxjs/Observable';
import 'rxjs/Rx';   

@Injectable()
export class ClientService {
 
  public _url = 'http://localhost:8081';
  constructor(private http: Http){}
  getdata() { 
    
  
     return this.http.get(this._url)
      .map(res =>res.json())
      
       .catch(this.handleError);
       
  }
  
  add (name: string,lastname:string): Observable<data> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
 console.log(name,lastname);
    return this.http.post('http://localhost:8081/post', { name,lastname }, options)
                    .map(res => res.json())
                    .catch(this.handleError);

    
                   
  }
  

  private handleError (error: Response) {
  //   // in a real world app, we may send the server to some remote logging infrastructure
  //   // instead of just logging it to the console
     console.error(error);
     return Observable.throw(error.json().error || 'Server error');
   }
}

