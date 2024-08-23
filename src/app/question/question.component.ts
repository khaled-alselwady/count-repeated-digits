import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [],
  templateUrl: './question.component.html',
  styleUrl: './question.component.css',
})
export class QuestionComponent implements OnInit {
  randomDigit = 0;

  ngOnInit() {
    this.randomDigit = Math.floor(Math.random() * 10);
  }
}
