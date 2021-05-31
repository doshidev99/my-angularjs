import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attribute',
  templateUrl: './attribute.component.html',
  styleUrls: ['./attribute.component.css']
})
export class AttributeComponent implements OnInit {

  public isSpecial: boolean = true
  constructor() { }

  ngOnInit(): void {
  }

  onToggle() {
    this.isSpecial = !this.isSpecial
  }

  setStyles() {
    return { 'border': this.isSpecial ? 'solid 2px blue' : '', 'padding.px': '10' }
  }
}
