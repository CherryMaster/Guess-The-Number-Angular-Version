import {Component, Input, ViewEncapsulation} from '@angular/core'

@Component({
  selector: 'app-notguessedinfo',
  templateUrl: 'src/app/NotGuessedInfo/notguessedinfo.html',
  styleUrls: ['src/app/NotGuessedInfo/notguessedinfo.css'],
  encapsulation: ViewEncapsulation.None
})
export class NotGuessedInfo{
  @Input()
  info;
}