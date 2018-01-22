import { Component, OnInit } from '@angular/core';

import { FILES } from '../mock-files';

@Component({
  selector: 'app-playlistdetail',
  templateUrl: './playlistdetail.component.html',
  styleUrls: ['./playlistdetail.component.css']
})
export class PlaylistdetailComponent implements OnInit {

	files = FILES;
	playlistname = 'Rap';
	displayall = false;
	checkboxadd = false;
	checkboxremove = false;

  constructor() { }

  ngOnInit() {
  }

}