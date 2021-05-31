import { Component } from '@angular/core';

@Component({ //declare
  selector: 'app-root', // name tag html
  templateUrl: './app.component.html', //template
  styleUrls: ['./app.component.css'] // css of template
})
export class AppComponent {
  // static class - public -private variable ...
  title = 'lesson-angular';
  name = "doshi";

  onGetFName(value: string) {
    console.log({ value })
  }
}
