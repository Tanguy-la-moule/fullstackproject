import { Component, OnInit } from '@angular/core';

import { FILES } from '../mock-files';

@Component({
  selector: 'app-allfiles',
  templateUrl: './allfiles.component.html',
  styleUrls: ['./allfiles.component.css']
})
export class AllfilesComponent implements OnInit {
	
	files = FILES;

  constructor() { }

  ngOnInit() {
  }

}
