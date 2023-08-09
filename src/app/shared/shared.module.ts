import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { AppEmailDirective } from './validators/app-email.directive';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    LoaderComponent,
    AppEmailDirective
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    LoaderComponent,
    AppEmailDirective
  ]
})
export class SharedModule { }
