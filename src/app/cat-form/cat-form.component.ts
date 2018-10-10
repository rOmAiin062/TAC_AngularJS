import { Component, OnInit } from '@angular/core';
import { DataService } from '../data-service/data.service';

@Component({
  selector: 'app-cat-form',
  templateUrl: './cat-form.component.html',
  styleUrls: ['./cat-form.component.css']
})
export class CatFormComponent implements OnInit {

 card = {title: 'title',
          imageUrl: '',
          description: ''};

  constructor(private dataservice: DataService) { }

  ngOnInit() {

  }

  onClick() {
    this.dataservice.createCard(this.card);
  }

}
