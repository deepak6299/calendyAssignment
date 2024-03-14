import { Component } from '@angular/core';
import { feedback } from '../data-types';
import { SharedService } from '../shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feedback-form',
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.css']
})
export class FeedbackFormComponent {

  constructor(private _sharedService:SharedService,private _router:Router){}


  postFeed(data:feedback){
   this._sharedService.postData(data).subscribe((result)=>{
    console.log("Post Success", result);
    this._router.navigate(['/'])
    alert("Post added successfully")
   })
   
  }

}
