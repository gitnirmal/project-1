import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfessionalSummaryComponent } from './professional-summary/professional-summary.component';
import { EmploymentHistoryComponent } from './employment-history/employment-history.component';
import { SkillsComponent } from './skills/skills.component';
import { EducationComponent } from './education/education.component';
import { ProjectsComponent } from './projects/projects.component';
import { LanguagesComponent } from './languages/languages.component';
import { HomeComponent } from './home/home.component';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';

const appRoute: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'professional-summary', component: ProfessionalSummaryComponent },
  { path: 'employment-history', component: EmploymentHistoryComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'education', component: EducationComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'languages', component: LanguagesComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: NoPageFoundComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    ProfessionalSummaryComponent,
    EmploymentHistoryComponent,
    SkillsComponent,
    EducationComponent,
    ProjectsComponent,
    LanguagesComponent,
    HomeComponent,
    NoPageFoundComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(appRoute), FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
