import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IUser } from '../interfaces/IUser';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  userObj: IUser = { username: '', password: '' };

  constructor(private http: HttpClient) {
    this.userObj = new User();
  }

  onLogin() {
    console.log("Here's the login func");
    this.http
      .post('http://localhost:8080/usrLogin', this.userObj)
      .subscribe((res: any) => {
        if (res.result) {
          alert('Login successful');
        } else {
          alert(res.message);
        }
      });
  }
}
export class User implements IUser {
  username: string;
  password: string;
  constructor() {
    this.username = '';
    this.password = '';
  }
}
