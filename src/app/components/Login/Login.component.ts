import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-Login',
  templateUrl: './Login.component.html',
  styleUrls: ['./Login.component.css'],
})
export class LoginComponent implements OnInit {

  @ViewChild('myLogin')
  myLogin!: NgForm;

  constructor() { }

  ngOnInit() {
  }

  // onSubmit(contactForm: NgForm) {
  onSubmit() {
    // console.log(contactForm.value)
    console.log(this.myLogin.value, '--myLogin')
  }

  onSuggest() {
    console.log('onSuggest')
  }

}
