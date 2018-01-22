import { Component, OnInit } from '@angular/core';

import { FILES } from '../mock-files';
import { FRIENDS } from '../mock-friends';

@Component({
  selector: 'app-sharefile',
  templateUrl: './sharefile.component.html',
  styleUrls: ['./sharefile.component.css']
})
export class SharefileComponent implements OnInit {

	files = FILES;
	friends = FRIENDS;
	
  constructor() { }

  ngOnInit() {
  }

}
