import {Component, NgModule, VERSION} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {FormsModule} from '@angular/forms'
import {NotGuessedInfo} from 'src/app/NotGuessedInfo/notguessedinfo'
import {NewNumber} from 'src/app/NewNumber/newnumber'
import {GuessTheNumber} from 'src/app/GuessTheNumber/guessthenumber'
import {GuessedInfo} from 'src/app/GuessedInfo/guessedinfo'

@Component({
  selector: 'app-root',
  templateUrl: 'src/app/app.html',
  styleUrls: ['src/app/app.css']
})
export class App {
  numberOfTries = 0;
  actNumber = 0;
  enteredNumber = 0;
  
  newNumber(number){
    this.actNumber = number;
    this.enteredNumber = 0;
    this.numberOfTries = 0;
  }
  
  guessTheNumber(input){
    this.enteredNumber = parseInt(input);
    this.numberOfTries++;
  }
}

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [App, NotGuessedInfo, NewNumber, GuessTheNumber, GuessedInfo],
  bootstrap: [App]
})
export class AppModule {
}
