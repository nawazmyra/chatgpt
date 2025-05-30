import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './nav/nav.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'first-project';
  constructor() {
    console.log(this.firstProgram('5345', 9));
    this.fibbonacciNumber(2);
    const list = [1, 2, 3, 4, 5, 6, 7];
    console.log(list[list.length - 1]);
  }

  firstProgram(param1: any, param2: any) {
    if (typeof param1 === 'string' && typeof param2 === 'string') {
      return `Cancatinated value is ${param1 + param2}`;
    } else if (typeof param1 === 'number' && typeof param2 === 'number') {
      return `Sum of the numbers ${param1 + param2}`;
    }
    return 'it is not a string or a number';
  }

  fibbonacciNumber(maxNumber) {
    let fNumber = 0;
    let arr = [];
    if (fNumber <= maxNumber) {
      arr.push(fNumber);
      fNumber = fNumber + 1;
    }
    if (fNumber <= maxNumber) {
      arr.push(fNumber);
    }

    while (arr[arr.length - 1] + arr[arr.length - 2] <= maxNumber) {
      arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
    }
    console.log('arr', arr.length - 1);
    return arr;
  }

  // 153 ---> 1*3 + 5*3 + 3*3 1+125+27 Amstrong number
}
