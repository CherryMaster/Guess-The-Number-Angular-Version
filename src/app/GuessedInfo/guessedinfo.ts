import {Component, Input} from '@angular/core'

@Component({
  selector: 'app-guessedinfo',
  templateUrl: 'src/app/GuessedInfo/guessedinfo.html',
  styleUrls: ['src/app/GuessedInfo/guessedinfo.css']
})
export class GuessedInfo{
  @Input()
  number;
  
  @Input()
  tries;
}