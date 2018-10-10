import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data-service/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-cat-form',
    templateUrl: './cat-form.component.html',
    styleUrls: ['./cat-form.component.css']
})

export class CatFormComponent implements OnInit {

    card = {};
    id : number = 0;


    constructor(    private route: ActivatedRoute,
                    private dataService: DataService) { }

    ngOnInit(){
        this.id = +this.route.snapshot.paramMap.get('id');

        if(this.id){
            this.getCard();
        }


    }

    onClick() {
        this.id == 0 ? this.dataService.createCard(this.card):this.dataService.updateCard(this.card);
        //this.dataService.createCard(this.card);
    }


    getCard(){
        this.dataService.getCard(this.id).then((card) => this.card = card);
    }

}
