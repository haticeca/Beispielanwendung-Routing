import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ManageUserComponent } from './manage-user/manage-user.component';
import { UserlistComponent } from './manage-user/userlist/userlist.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { FooterComponent } from './footer/footer.component';
import { RegisterMsgComponent } from './register-msg/register-msg.component';
import { AuthAdminGuard} from './guards/auth-admin.guard';
import { LoginMsgComponent } from './login-msg/login-msg.component';
import { ValedictionMsgComponent } from './valediction-msg/valediction-msg.component';
import { ValidationMsgComponent } from './validation-msg/validation-msg.component';
import { UserDetailComponent } from './manage-user/user-detail/user-detail.component';
import { SettingsComponent } from './settings/settings.component';
import { RegisterGuard } from './guards/register.guard';

const routes: Routes = [
  {path: '' , component: HomeComponent,
    pathMatch: 'full'},
  {path: "home" , component: HomeComponent},
  {path: "navigation", component: NavigationComponent},
  {path: "manage-user", component: ManageUserComponent,
    children: [
      {path: '', component: UserlistComponent},
      {path: 'user-detail/:id', component: UserDetailComponent},
      {path: 'delete', component: UserDetailComponent}
    ],
    canActivate: [AuthAdminGuard]
  },
  {path: "registration", component: RegistrationComponent,
    canDeactivate: [RegisterGuard]
  },
  {path: "login", component: LoginComponent},
  {path: "register-msg", component: RegisterMsgComponent},
  {path: "login-msg", component: LoginMsgComponent},
  {path: "validation-msg", component: ValidationMsgComponent},
  {path: "home/valediction-msg", component: ValedictionMsgComponent},
  {path: "settings", component: SettingsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
