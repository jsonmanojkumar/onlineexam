import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  model: any = {};
  countries : any;
  constructor() {
   }

  ngOnInit() {
    //Get country list.
    this.countries =[
      {"id" :1, "name": "English"},
      {"id" :2, "name": "Math"},
      {"id" :3, "name": "Scince"},
      {"id" :4, "name": "GK."},
      {"id" :5, "name": "GS."},
      
    ];

   //Default selected country Id.
   //this.model.country = 5;
  }

  public onSubmitCustomer() {
    alert('Your information has been submitted successfully. :-)\n\n' + JSON.stringify(this.model))
  }
}

