import { Component, OnInit } from '@angular/core';

import { File } from '../file';

import { PLAYLISTS } from '../mock-playlists';

@Component({
  selector: 'app-addfile',
  templateUrl: './addfile.component.html',
  styleUrls: ['./addfile.component.css']
})
export class AddfileComponent implements OnInit {
	
	file: File = { id: 1, content: '', artist: '', album: '', title: '', playlists: [] };
	playlists = PLAYLISTS;

	checkContent(file: File): boolean { return (file.content.length < 10); }
	checkArtist(file: File): boolean { return (file.artist.length < 2); }
	checkTitle(file: File): boolean { return (file.title.length < 2); }

  constructor() { }
  ngOnInit() {
  }

}