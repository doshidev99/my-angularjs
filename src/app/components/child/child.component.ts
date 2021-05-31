import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input('title') title: string = 'default tile';

  // truy cập private
  private newName: string = '';

  public txtFullName: string = '';

  @Output('txtFullName')
  onHandelFullName = new EventEmitter<string>();
  // EventEmitter<type variable>
  //
  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  set name(name: string) {
    this.newName = name;
  }

  get variableShow() {
    return this.newName;
  }

  onSubmit() {
    this.onHandelFullName.emit(this.txtFullName)
  }
}
