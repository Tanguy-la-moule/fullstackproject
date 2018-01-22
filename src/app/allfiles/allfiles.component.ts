import { Component, OnInit } from '@angular/core';

import { ShowalbumsComponent } from '../showalbums/showalbums.component';
import { ShowartistsComponent } from '../showartists/showartists.component';
import { ShowtitlesComponent } from '../showtitles/showtitles.component'


@Component({
  selector: 'app-allfiles',
  templateUrl: './allfiles.component.html',
  styleUrls: ['./allfiles.component.css']
})
export class AllfilesComponent implements OnInit {

	whatToDisplay = [true, false, false];

	DisplayTitle(): boolean[] {
		return [true, false, false];
	}
	DisplayArtist(): boolean[] {
		return [false, true, false];
	}
	DisplayAlbum(): boolean[] {
		return [false, false, true];
	}
	Analyse(whatToDisplay): string {
		if (whatToDisplay[0]){ return 'Titles'}
		else if (whatToDisplay[1]){ return 'Artists'}
		else if (whatToDisplay[2]){ return 'Albums'}
		else {return 'error'} 
	}

  constructor() { }

  ngOnInit() {
  }

}
