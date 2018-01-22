import { Component, OnInit } from '@angular/core';

import { FILES } from '../mock-files';

@Component({
  selector: 'app-showartists',
  templateUrl: './showartists.component.html',
  styleUrls: ['./showartists.component.css']
})
export class ShowartistsComponent implements OnInit {

	files = FILES;
	
  constructor() { }

  ngOnInit() {
  }

}
