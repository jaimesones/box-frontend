import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '@shared/shared.module';
import { CpanelModule } from './cpanel/cpanel.module';
import { HomeRoutingModule } from './home-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbCarouselModule  } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home.component';
import { AboutComponent } from './about/about.component';
import { AlertComponent } from './alert/alert.component';
import { ContactComponent } from './contact/contact.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RetailComponent } from './retail/retail.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { CpanelComponent } from './cpanel/cpanel.component';
import { CenerAComponent } from './ceners/cener-a/cener-a.component';
import { CenerBComponent } from './ceners/cener-b/cener-b.component';
import { CenerCComponent } from './ceners/cener-c/cener-c.component';

@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    AlertComponent,
    ContactComponent,
    NavbarComponent,
    RetailComponent,
    RegisterComponent,
    LoginComponent,
    CpanelComponent,
    CenerAComponent,
    CenerBComponent,
    CenerCComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    CpanelModule,
    NgbCarouselModule
  ],
  exports: [

  ]
})
export class HomeModule { }
