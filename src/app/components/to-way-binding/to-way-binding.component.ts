import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-way-binding',
  templateUrl: './to-way-binding.component.html',
  styleUrls: ['./to-way-binding.component.css']
})
export class ToWayBindingComponent implements OnInit {

  public value: number = 123;
  constructor() { }

  ngOnInit(): void {
  }

}
