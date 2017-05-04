import { Component, OnInit } from '@angular/core';
import { ItemsService } from './items.service';
import { Item } from './item';


@Component({ 
    selector: 'items',
    templateUrl: './items.component.html',
    styleUrls: ['./items.component.css']
})

export class ItemsComponent implements OnInit {
    items: Item[];
    content: '';

    constructor(private itemService:ItemsService) {}

    ngOnInit(): void {
        this.itemService.getItems().then(items => {
            console.log(items); this.items = items});
    }

    add(): void {
        this.itemService.addItem(this.content).then(item => {
            console.log(item);
            this.items.push(item);
            console.log(this.items)});
        this.content = '';
    }
}