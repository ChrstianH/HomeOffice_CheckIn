import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IUser } from '../interfaces/IUser';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    this.http
      .post('http://localhost:8080/usrLogin', JSON.stringify(this.userObj), {
        headers: headers,
      })
      .subscribe((res: any) => {
        if (res.result) {
          localStorage.setItem('ho_check_user', JSON.stringify(res.user));
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
