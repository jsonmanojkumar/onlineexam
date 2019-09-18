import { Component, OnInit } from '@angular/core';
// import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // private items: MenuItem[];
  constructor() { }

  ngOnInit() {
    // this.items = [
    //   { label: 'ADD', icon: 'fa fa-download', routerLink: ['/add'] },
    //   { label: 'LIST', icon: 'fa fa-download', routerLink: ['/list'] }
    // ];
  }
}
