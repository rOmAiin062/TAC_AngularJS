import { Component, OnInit } from '@angular/core';
import {formatDate} from '@angular/common';

@Component({
  selector: 'app-footer-component',
  templateUrl: './footer-component.component.html',
  styleUrls: ['./footer-component.component.css']
})
export class FooterComponentComponent implements OnInit {

    currentDate = ''

    constructor() {
      this.currentDate = formatDate(new Date(),'yyyy', "en-US");
    }

  ngOnInit() {
  }

}
