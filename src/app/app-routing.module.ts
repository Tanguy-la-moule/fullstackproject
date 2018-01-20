import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomepageComponent } from './homepage/homepage.component';
import { RegistrationComponent } from './registration/registration.component';
import { ConnectionComponent } from './connection/connection.component';
import { AddfileComponent } from './addfile/addfile.component';
import { FileaddedComponent } from './fileadded/fileadded.component';

const routes: Routes = [
	{ path: 'homepage', component: HomepageComponent },
	{ path: 'registration', component: RegistrationComponent },
	{ path: 'connection', component: ConnectionComponent },
	{ path: '', redirectTo: '/homepage', pathMatch: 'full' },
	{ path: 'addfile', component: AddfileComponent },
	{ path: 'fileadded', component: FileaddedComponent }
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule { }