import { Component } from '@angular/core';

@Component({
  selector: 'app-javascript',
  standalone: true,
  imports: [],
  templateUrl: './javascript.component.html',
  styleUrl: './javascript.component.css',
})
export class JavascriptComponent {
  constructor() {
    this.firstJavascriptPrograme();
  }

  firstJavascriptPrograme() {
    let name = 'Nawaz';
    let age = 25;
    let areYouLearning = true;
    let variable;
    console.log(typeof(variable));
    console.log(variable);
  }
}
