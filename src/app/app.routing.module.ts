import { BrowserModule } from '@angular/platform-browser';
//import { NgModule } from '@angular/core';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';


const appRoutes: Routes = [
    { path: "", redirectTo: "/", pathMatch: "full" }
];

@NgModule({
imports: [
    RouterModule.forRoot(appRoutes)
],
exports: [
    RouterModule
],
declarations: []
})

export class AppRoutingModule { }