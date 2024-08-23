import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { QuestionComponent } from "./question/question.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, QuestionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
