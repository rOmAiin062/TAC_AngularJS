import { Component } from '@angular/core';
import { formatDate } from '@angular/common'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    currentDate = ''

    constructor(){
      this.currentDate = formatDate(new Date(),'yyyy', "en-US");
    }
    
}
