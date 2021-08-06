import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { TemplateAdminModule } from 'src/app/componentes/template-admin/template-admin.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from './home.component';
import { LoginComponent } from './login/login.component';
import { MensagemModule } from 'src/app/componentes/mensagem/mensagem.module';


@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    SharedModule,
    TemplateAdminModule,
    BrowserModule,
    HttpClientModule,
    HttpClientJsonpModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MensagemModule
  ],

  exports: [
    HomeComponent,
    LoginComponent
  ]
})
export class HomeModule { }
