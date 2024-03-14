import { Component } from '@angular/core';
import { SharedService } from './shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calendyAssignment';


constructor(private _sharedservice:SharedService){}


showfeedbacks:any;
  ngOnInit(){
this._sharedservice.fetchData().subscribe((result)=>{
  this.showfeedbacks=result
})
  }
}
