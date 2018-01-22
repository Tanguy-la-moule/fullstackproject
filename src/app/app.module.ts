import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomepageComponent } from './homepage/homepage.component';
import { RegistrationComponent } from './registration/registration.component';
import { ConnectionComponent } from './connection/connection.component';
import { AddfileComponent } from './addfile/addfile.component';
import { PlaylistgestionComponent } from './playlistgestion/playlistgestion.component';
import { PlaylistdetailComponent } from './playlistdetail/playlistdetail.component';
import { AllfilesComponent } from './allfiles/allfiles.component';
import { FriendsComponent } from './friends/friends.component';
import { SharefileComponent } from './sharefile/sharefile.component';
import { ShowtitlesComponent } from './showtitles/showtitles.component';
import { ShowalbumsComponent } from './showalbums/showalbums.component';
import { ShowartistsComponent } from './showartists/showartists.component';
import { FriendrequestsComponent } from './friendrequests/friendrequests.component';
import { FilesreceivedComponent } from './filesreceived/filesreceived.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomepageComponent,
    RegistrationComponent,
    ConnectionComponent,
    AddfileComponent,
    PlaylistgestionComponent,
    PlaylistdetailComponent,
    AllfilesComponent,
    FriendsComponent,
    SharefileComponent,
    ShowtitlesComponent,
    ShowalbumsComponent,
    ShowartistsComponent,
    FriendrequestsComponent,
    FilesreceivedComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
