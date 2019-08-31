import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuizChoiceComponent } from './quiz-choice/quiz-choice.component';

const routes: Routes = [
  { path: '', component: QuizChoiceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
