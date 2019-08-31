import { Component, OnInit } from '@angular/core';
import { OpentriviaService} from '../opentrivia.service';

@Component({
  selector: 'app-quiz-choice',
  templateUrl: './quiz-choice.component.html',
  styleUrls: ['./quiz-choice.component.css']
})
export class QuizChoiceComponent implements OnInit {

  categories; 

  constructor(
    private openTrivia : OpentriviaService,
  ) {  
    this.categories = openTrivia.getCategories();
  }

  ngOnInit() {
  }

}
