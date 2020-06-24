import {Component, Output, EventEmitter} from '@angular/core'

@Component({
  selector: 'app-guessthenumber',
  templateUrl: 'src/app/GuessTheNumber/guessthenumber.html',
  styleUrls: ['src/app/GuessTheNumber/guessthenumber.css']
})
export class GuessTheNumber{
  input = '';
  
  @Output()
  emitInput = new EventEmitter<string>();
  
  onClick(){
    this.emitInput.emit(this.input);
    this.input = '';
  }
}