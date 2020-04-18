import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  logged = false;
  username = '';
  password = '';

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    if (token){
      this.logged = true;
    }
  }

  login(): void {
    this.apiService.login(this.username, this.password)
      .subscribe(res => {
        localStorage.setItem('token', res.token);
        this.logged = true;
        this.username = '';
        this.password = '';
      });
  }

  logout(): void {
    localStorage.clear();
    this.logged = false;
  }
}