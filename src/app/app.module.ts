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
import { LoginComponent } from './auth/login/login.component';
import { RegistryComponent } from './auth/registry/registry.component';
import { FormsModule } from '@angular/forms';
import { DevComponent } from './screens/dev/dev.component';
import { interceptorProvider } from './interceptors/task-interceptor.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainModalComponent } from './modal-global/main-modal/main-modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { InputComponent } from './components/input/input.component';
import { TextAreaComponent } from './components/text-area/text-area.component';
import { DropDownListComponent } from './components/drop-down-list/drop-down-list.component';
import { ButtonPrimaryComponent } from './components/button-primary/button-primary.component';
import { ButtonSuccessComponent } from './components/button-success/button-success.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BannerComponent,
    FooterComponent,
    InitialBoxComponent,
    MainComponent,
    IssuesComponent,
    LoginComponent,
    RegistryComponent,
    DevComponent,
    MainModalComponent,
    InputComponent,
    TextAreaComponent,
    DropDownListComponent,
    ButtonPrimaryComponent,
    ButtonSuccessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [UtilsService, interceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
