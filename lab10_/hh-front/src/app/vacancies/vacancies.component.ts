import { Component, OnInit } from '@angular/core';
import { Vacancy } from '../vacancy';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-vacancies',
  templateUrl: './vacancies.component.html',
  styleUrls: ['./vacancies.component.css']
})
export class VacanciesComponent implements OnInit {
  vacancies: Vacancy[];

  constructor(private apiService: ApiService,
              private location: Location,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getVacancies();
  }

  getVacancies(): void {
    const companyId = +this.route.snapshot.paramMap.get('companyId');
    this.apiService.getVacanciesByCompanyId(companyId)
      .subscribe(vacancies => this.vacancies = vacancies);
  }
}