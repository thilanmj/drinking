import {Component, OnInit} from '@angular/core';
import {DrinkService} from "../../shared/service/drink.service";

@Component({
  selector: 'app-drink-list',
  templateUrl: './drink-list.component.html',
  styleUrls: ['./drink-list.component.scss']
})
export class DrinkListComponent implements OnInit {
  drinks: any;

  constructor(private drinkService: DrinkService) {
  }

  ngOnInit(): void {
    this.loadDrinkDataList();
  }

  loadDrinkDataList() {
    this.drinkService.getDrinks().subscribe(res => {
      this.drinks = res.drinks;
    })
  }

}
