import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { ITEMS } from '../mock-items';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  items = ITEMS;
  selectedItem:Item;
  // item: Item = {
  //   id: 1,
  //   name: 'Banana'
  // };

  constructor() {
  }

  ngOnInit() {
  }
  onSelect(item: Item): void {
    this.selectedItem = item;
  }

}
