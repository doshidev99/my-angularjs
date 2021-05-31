import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-to-component',
  templateUrl: './view-to-component.component.html',
  styleUrls: ['./view-to-component.component.css']
})
export class ViewToComponentComponent implements OnInit {

  public title: string = "event binding";
  constructor() { }

  ngOnInit(): void {
  }

  onClickMe(e: MouseEvent): any {
    // this.title = "click change";
    console.log(e)
  }

}
