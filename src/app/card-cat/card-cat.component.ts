import { Component, OnInit } from '@angular/core';
import { DataService } from '../data-service/data.service';
@Component({
  selector: 'card-cat',
  templateUrl: './card-cat.component.html',
  styleUrls: ['./card-cat.component.css']
})
export class CardCatComponent implements OnInit {

  cards = { };
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.initData();
    this.dataService.getAllCards().then((cards) => {
      this.cards = cards;
    });
  }

}
