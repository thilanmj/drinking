import {Component, OnInit} from '@angular/core';
import {DrinkService} from "../../shared/service/drink.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-drink-details',
  templateUrl: './drink-details.component.html',
  styleUrls: ['./drink-details.component.scss']
})
export class DrinkDetailsComponent implements OnInit {
  drink: any;
  languages=['','ES','DE','FR','IT','ZH-HANS','ZH-HANT']

  constructor(private drinkService: DrinkService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      this.loadDrink(params['id']);
    })

  }

  loadDrink(id: string) {
    this.drinkService.getDrink(id).subscribe(res => {
      this.drink = res.drinks[0];
    })
  }

}
