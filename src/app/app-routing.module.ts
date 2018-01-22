import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomepageComponent } from './homepage/homepage.component';
import { RegistrationComponent } from './registration/registration.component';
import { ConnectionComponent } from './connection/connection.component';
import { AddfileComponent } from './addfile/addfile.component';
import { PlaylistgestionComponent } from './playlistgestion/playlistgestion.component';
import { PlaylistdetailComponent } from './playlistdetail/playlistdetail.component';
import { AllfilesComponent } from './allfiles/allfiles.component';
import { FriendsComponent } from './friends/friends.component';
import { SharefileComponent } from './sharefile/sharefile.component';

const routes: Routes = [
	{ path: 'homepage', component: HomepageComponent },
	{ path: 'registration', component: RegistrationComponent },
	{ path: 'connection', component: ConnectionComponent },
	{ path: '', redirectTo: '/homepage', pathMatch: 'full' },
	{ path: 'addfile', component: AddfileComponent },
	{ path: 'playlistgestion', component: PlaylistgestionComponent},
	{ path: 'playlistdetail', component: PlaylistdetailComponent },
	{ path: 'allfiles', component: AllfilesComponent },
	{ path: 'friends', component: FriendsComponent },
	{ path: 'sharefile', component: SharefileComponent }
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule { }