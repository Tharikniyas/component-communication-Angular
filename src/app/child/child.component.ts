import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent{
 @Input() changedValue:number=0;
 
  constructor() { }

  ngOnChanges(changes:SimpleChanges){
    console.log(changes);
    if(this.changedValue==3){
      alert("U are at 3 From child component")
    }
  }


}
