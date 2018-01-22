import { Component, OnInit } from '@angular/core';

import { FILES } from '../mock-files';

@Component({
  selector: 'app-filesreceived',
  templateUrl: './filesreceived.component.html',
  styleUrls: ['./filesreceived.component.css']
})
export class FilesreceivedComponent implements OnInit {

	files = FILES;

  constructor() { }

  ngOnInit() {
  }

}
