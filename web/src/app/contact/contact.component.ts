import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  model: any = {};
  countries : any;
  constructor() {
   }

  ngOnInit() {
    //Get country list.
    this.countries =[
      {"id" :1, "name": "India"},
      {"id" :2, "name": "Nepal"},
      {"id" :3, "name": "United Arab Emirates"},
      {"id" :4, "name": "United Kingdom"},
      {"id" :5, "name": "United States"},
      {"id" :6, "name": "Australia"},
      {"id" :7, "name": "Austria"},
      {"id" :8, "name": "Canada"},
      {"id" :9, "name": "China"},
    ];


    

   //Default selected country Id.
   //this.model.country = 5;
  }

  public onSubmitCustomer() {
    alert('Your information has been submitted successfully. :-)\n\n' + JSON.stringify(this.model))
  }
}
