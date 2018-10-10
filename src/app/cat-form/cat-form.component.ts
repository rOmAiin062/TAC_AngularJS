import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data-service/data.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-cat-form',
  templateUrl: './cat-form.component.html',
  styleUrls: ['./cat-form.component.css']
})

export class CatFormComponent implements OnInit {

  id : number = 0;
  card : any;

  show : boolean = true;

  constructor(
    private route: ActivatedRoute,
    private dataService : DataService
  ){}

  ngOnInit(){
    this.id = +this.route.snapshot.paramMap.get('id');
    if(this.id){
      this.getCard();
    }
  }

  getCard(){
    this.dataService.getCard(this.id).then((card) => this.card = card).catch(e => this.show = false);
  }

}
