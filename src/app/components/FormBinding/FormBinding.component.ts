import { NgForm } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-FormBinding',
  templateUrl: './FormBinding.component.html',
  styleUrls: ['./FormBinding.component.css']
})
export class FormBindingComponent implements OnInit {

  @ViewChild('loginForm')
  loginForm!: NgForm;

  state = {
    email: '',
    password: ''
  };

  constructor() { }

  ngOnInit() {
  }

  // onSubmit(contactForm: NgForm) {
  onSubmit() {
    // console.log(contactForm.value)
    console.log(this.loginForm.value, '--myLogin')
  }

  onSuggest() {
    this.state.email = "truong.sgr@gmail.com"
  }
}
