import { Component, OnInit, Output,ViewChild } from '@angular/core';
import { Com3Component } from '../com3/com3.component';

@Component({
  selector: 'app-c2p',
  templateUrl: './c2p.component.html',
  styleUrls: ['./c2p.component.css']
})
export class C2pComponent {
  data:number=0
  
  @ViewChild(Com3Component,{static:true}) c2p!:Com3Component;

  // #when event emiiter
  childData(count:number){ 
    this.data=count
  }


}
