import { Component } from '@angular/core';
import { SharedService } from '../shared.service';
import { feedback } from '../data-types';

@Component({
  selector: 'app-data-display',
  templateUrl: './data-display.component.html',
  styleUrls: ['./data-display.component.css']
})
export class DataDisplayComponent {
  

  
constructor(private _sharedservice:SharedService){}


showfeedbacks:any;
  ngOnInit(){
this._sharedservice.fetchData().subscribe((result)=>{
  this.showfeedbacks=result
})
  }



  deletePost(id:number){
    this._sharedservice.deleteData(id).subscribe((res)=>{
      console.log("post deleted"+id);
      alert("post deleted!!!")
      this.ngOnInit()
    })
  }
}
