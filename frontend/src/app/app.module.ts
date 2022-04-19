import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxBootstrapIconsModule, allIcons } from 'ngx-bootstrap-icons';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ManageUserComponent } from './manage-user/manage-user.component';
import { UserlistComponent } from './manage-user/userlist/userlist.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterMsgComponent } from './register-msg/register-msg.component';
import { ValidationMsgComponent } from './validation-msg/validation-msg.component';
import { LoginMsgComponent } from './login-msg/login-msg.component';
import { ValedictionMsgComponent } from './valediction-msg/valediction-msg.component';
import { UserDetailComponent } from './manage-user/user-detail/user-detail.component';
import { DeleteComponent } from './manage-user/delete/delete.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { SettingsComponent } from './settings/settings.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    UserlistComponent,
    LoginComponent,
    RegistrationComponent,
    FooterComponent,
    RegisterMsgComponent,
    ValidationMsgComponent,
    LoginMsgComponent,
    ValedictionMsgComponent,
    UserDetailComponent,
    DeleteComponent,
    ManageUserComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxBootstrapIconsModule.pick(allIcons),
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
