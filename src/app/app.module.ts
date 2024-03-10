import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { FormsModule } from '@angular/forms';


@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
        FormsModule,
    ],
    declarations: [
        AppComponent,
        HeroFormComponent,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }