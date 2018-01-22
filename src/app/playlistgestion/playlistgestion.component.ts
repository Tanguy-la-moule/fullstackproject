import { Component, OnInit } from '@angular/core';

import { PLAYLISTS } from '../mock-playlists';

@Component({
  selector: 'app-playlistgestion',
  templateUrl: './playlistgestion.component.html',
  styleUrls: ['./playlistgestion.component.css']
})
export class PlaylistgestionComponent implements OnInit {

	playlists = PLAYLISTS;
	
  constructor() { }

  ngOnInit() {

  }

}
