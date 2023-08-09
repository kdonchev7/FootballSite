import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { ContactsComponent } from './contacts/contacts.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContactsComponent,
    PageNotFoundComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContactsComponent,
    PageNotFoundComponent
  ]
})
export class CoreModule { }
