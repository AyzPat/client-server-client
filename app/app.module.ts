import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MyComponent }   from './app.component';
import {HttpModule} from '@angular/http';
import 'rxjs/Rx';

@NgModule({
  imports:      [ BrowserModule,HttpModule ],
  declarations: [ MyComponent ],
  bootstrap:    [ MyComponent ]
})
export class MyModule { }
