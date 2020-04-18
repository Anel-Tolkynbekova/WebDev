import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompaniesComponent } from './companies/companies.component';

import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { VacanciesComponent } from './vacancies/vacancies.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { ToptenComponent } from './topten/topten.component';
import { AuthInterceptor } from './auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    CompaniesComponent,
    VacanciesComponent,
    LoginComponent,
    ToptenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }