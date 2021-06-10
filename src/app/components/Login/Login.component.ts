import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-Login',
  templateUrl: './Login.component.html',
  styleUrls: ['./Login.component.css'],
})
export class LoginComponent implements OnInit {

  @ViewChild('loginForm')

  loginForm!: NgForm;

  constructor() { }

  ngOnInit() {
  }

  // onSubmit(contactForm: NgForm) {
  onSubmit() {
    // console.log(contactForm.value)
    console.log(this.loginForm.value)
  }

  onSuggest() {
    console.log('onSuggest')
  }

}
