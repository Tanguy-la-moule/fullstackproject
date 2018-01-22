import { Component, OnInit } from '@angular/core';

import { FILES } from '../mock-files';

@Component({
  selector: 'app-showalbums',
  templateUrl: './showalbums.component.html',
  styleUrls: ['./showalbums.component.css']
})
export class ShowalbumsComponent implements OnInit {

	files = FILES;
	
  constructor() { }

  ngOnInit() {
  }

}
