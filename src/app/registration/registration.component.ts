import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
	user: User = {login: '', email: '', email2: '', password: '', password2: '', country: '' };

	checkLogin(user: User): boolean { return (user.login.length < 8); }
	checkEmail(user: User): boolean { 
		var regex = /^[a-z0-9._-]+@[a-z0-9._-]+$/;
		return (!(regex.test(user.email.toLowerCase())));
	}
	checkEmail2(user: User): boolean { return (!(user.email == user.email2)); }
	checkPassword(user: User): boolean { return(user.password.length < 8); }
	checkCountry(user: User): boolean { return(user.country.length == 0); }

  constructor() {}
  ngOnInit() {}
}