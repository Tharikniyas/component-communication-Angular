import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-grand',
  templateUrl: './grand.component.html',
  styleUrls: ['./grand.component.css']
})
export class GrandComponent  {
   _changedValue!:any
   @Input() set changedValue(value:any){
    this._changedValue=value;
    if(value==5){ alert("Exceeding 5 from Grand-child component")}
   }
   get changedValue(){
    return this._changedValue;
   }
  

}
