import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-to-view',
  templateUrl: './component-to-view.component.html',
  styleUrls: ['./component-to-view.component.css']
})
export class ComponentToViewComponent implements OnInit {

  public name: string = 'interpolation';
  public age: number = 20;

  public user: { name: string, age: number } = {
    name: 'truong',
    age: 23,
  };

  public valueProperty: string = 'valueInputProperty';
  public height: number = 300;
  public border: number = 3;
  public isActive: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  showInfo() {
    return `name: ${this.user.name}`
  }

}
