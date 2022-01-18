import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BannerComponent } from './components/banner/banner.component';
import { FooterComponent } from './components/footer/footer.component';
import { InitialBoxComponent } from './components/initial-box/initial-box.component';
import { UtilsService } from './services/utils.service';
import { MainComponent } from './screens/main/main.component';
import { IssuesComponent } from './components/issues/issues.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './screens/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BannerComponent,
    FooterComponent,
    InitialBoxComponent,
    MainComponent,
    IssuesComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [UtilsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
