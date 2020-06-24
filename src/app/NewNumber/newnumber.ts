import {Component, Input, Output, EventEmitter, ViewEncapsulation} from '@angular/core'

@Component({
  selector: 'app-newnumber',
  templateUrl: 'src/app/NewNumber/newnumber.html',
  styleUrls: ['src/app/NewNumber/newnumber.css'],
  encapsulation: ViewEncapsulation.None
})
export class NewNumber{
  actNumber = Math.floor(Math.random()*100);
  
  @Output()
  numberEmit = new EventEmitter<number>();
  
  onClick(){
    this.numberEmit.emit(this.actNumber);
    //console.log(this.actNumber);
    //this.actNumber++;
    //return this.actNumber;
  }
}