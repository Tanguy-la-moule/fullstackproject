import { Component, OnInit } from '@angular/core';

import { FRIENDS } from '../mock-friends';

@Component({
  selector: 'app-friendrequests',
  templateUrl: './friendrequests.component.html',
  styleUrls: ['./friendrequests.component.css']
})
export class FriendrequestsComponent implements OnInit {

	friends = FRIENDS;
	
  constructor() { }

  ngOnInit() {
  }

}
