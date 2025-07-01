import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { IUser } from './interfaces/IUser';
//import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LoginComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'frontend';
  userObj: IUser = { username: '', password: '' };

  // constructor(private http: HttpClient) {
  //   this.userObj = new User();
  // }

  onLogin() {
    // this.http
    //   .post('http:localhost:8080/usrLogin', this.userObj)
    //   .subscribe((res: any) => {
    //     if (res.result) {
    //       alert('Login successful');
    //     } else {
    //       alert(res.message);
    //     }
    //   });
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
