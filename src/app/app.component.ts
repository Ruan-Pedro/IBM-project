import { Component } from '@angular/core';
import { EventEmitter } from "@angular/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'IBM-system'; 
  email = new String
  password = new String


   logar($event : any){
     console.log($event)
     this.email = $event.email
     this.password = $event.password
   }

  
  }

