import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompaniesComponent } from './companies/companies.component';
import { VacanciesComponent } from './vacancies/vacancies.component';
import { LoginComponent } from './login/login.component';
import { ToptenComponent } from './topten/topten.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'companies', component: CompaniesComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'companies/:companyId/vacancies', component: VacanciesComponent },
  { path: 'vacancies/top_ten', component: ToptenComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }