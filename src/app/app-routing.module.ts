import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedbackFormComponent } from './feedback-form/feedback-form.component';
import { DataDisplayComponent } from './data-display/data-display.component';

const routes: Routes = [
  {path:'',component:DataDisplayComponent},
  {path:'addpost',component:FeedbackFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
