import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit {
  @Input() rating: number = 0;
  starWidth: number = 0;

  @Output() ratingClicked: EventEmitter<string> =
    new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    this.starWidth = this.rating * 86 / 5;
  }

  onClick(): void {
    this.ratingClicked.emit(`Đánh giá của sản phẩm là ${this.rating} sao!`);
  }
}
