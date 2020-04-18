import { Component, OnInit } from '@angular/core';
import { Vacancy } from '../vacancy';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-topten',
  templateUrl: './topten.component.html',
  styleUrls: ['./topten.component.css']
})
export class ToptenComponent implements OnInit {
  vacancies: Vacancy[];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getTopTen();
  }

  getTopTen(): void {
    this.apiService.getTopTen().subscribe(vacancies => this.vacancies = vacancies);
  }
}