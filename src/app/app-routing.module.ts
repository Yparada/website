import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegistryComponent } from './auth/registry/registry.component';
import { SingUpComponent } from './auth/sign-up/sign-up.component';
import { LoginGuard } from './guards/login.guard';
import { TaskGuardService } from './guards/task-guard.service';
import { DevComponent } from './screens/dev/dev.component';
import { MainComponent } from './screens/main/main.component';



const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'login', component: LoginComponent, canActivate: [LoginGuard]},
  {path: 'registry', component: RegistryComponent, canActivate: [LoginGuard]},
  {path: 'sign-up', component: SingUpComponent},
  {path: 'dev', component: DevComponent, canActivate: [TaskGuardService], data: { expectedRol: ['admin', 'user'] }},
  {path: '**', component: MainComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
