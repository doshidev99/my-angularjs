import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-directive',
  templateUrl: './structural-directive.component.html',
  styleUrls: ['./structural-directive.component.css']
})


export class StructuralDirectiveComponent implements OnInit {

  public isShow: boolean = false;
  public username: string = 'doshi'
  public isChecked: boolean = false;
  public age: number = 20;

  public level: number = 1;


  public products: Array<{ id: number; name: string; price: number; }> = [
    { id: 1, name: 'TV', price: 2000 },
    { id: 2, name: 'Phone', price: 2000 },
    { id: 3, name: 'Bike', price: 5000 },
    { id: 4, name: 'Car', price: 4000 },
  ];


  public _data: Array<{ id: number; name: string; price: number; }> = [
    { id: 1, name: 'TV', price: 2000 },
    { id: 2, name: 'Phone', price: 2000 },
    { id: 3, name: 'Bike', price: 5000 },
    { id: 1, name: 'Book', price: 2000 },
    { id: 2, name: 'Laptop', price: 2000 },
    { id: 3, name: 'Pen', price: 5000 },
    { id: 4, name: 'Calendar', price: 4000 },
  ]

  public users: { name: string, country: string }[] = [
    {
      name: 'John Smith1',
      country: 'VN'
    },
    {
      name: 'John Smith2',
      country: 'USA'
    },
    {
      name: 'John Smith3',
      country: 'EU'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onToggle() {
    this.isShow = !this.isShow
  }

  onChange(value: boolean) {
    this.isChecked = value;
  }

  onLoadData() {
    this.products = this._data
  }

  myTrackByFn(index: number, item: { id: number; name: string; price: number }) {
    return item.id
  }
}
