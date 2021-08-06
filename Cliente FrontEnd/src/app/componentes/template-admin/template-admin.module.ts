import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateAdminComponent } from './template-admin.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconsProviderModule } from 'src/app/icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';


@NgModule({
  declarations: [
    TemplateAdminComponent
  ],
  imports: [
    SharedModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    CommonModule,
    RouterModule
  ],
  exports: [
    TemplateAdminComponent
  ],
  providers: [

  ]
})
export class TemplateAdminModule { }
