import { Component, OnInit } from '@angular/core';

import { FILES } from '../mock-files';

@Component({
  selector: 'app-showtitles',
  templateUrl: './showtitles.component.html',
  styleUrls: ['./showtitles.component.css']
})
export class ShowtitlesComponent implements OnInit {
	files = FILES;
  constructor() { }

  ngOnInit() {
  }

}
