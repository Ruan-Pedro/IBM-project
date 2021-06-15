import { Component, Output } from '@angular/core';
import { EventEmitter } from "@angular/core";
@Component({
  selector: 'ibm-right',
  templateUrl: './right.side.component.html',
  styleUrls: ['./right.side.component.scss']
})
export class RightSideComponent{

  @Output() aoLogar = new EventEmitter<any>()

  email= new String 
  senha = new String 

  logar(){
    
    console.log(this.email)
    console.log(this.senha)
    const inputLogin = {valor:this.email, senha:this.senha}
    this.aoLogar.emit(inputLogin)
    this.limparCampos()
  }
  limparCampos(){
    this.email = ''
    this.senha = ''

  }
 }
