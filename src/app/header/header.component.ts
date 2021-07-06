import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  getUserName;
  constructor( public router: Router) { }

  ngOnInit(): void {

    this.getUserName = JSON.parse(localStorage.getItem('userName'));
    // alert(this.getUserName);

  }

  logOutUser(){
    this.router.navigate(['login']);

  }

}
