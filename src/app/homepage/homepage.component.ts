import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

	filenumber = 2;
	friendnumber = 4;

  constructor() { }

  ngOnInit() {
  }

}
