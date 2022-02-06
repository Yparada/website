import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegistryComponent } from './auth/registry/registry.component';
import { TaskGuardService as guard } from './guards/task-guard.service';
import { DevComponent } from './screens/dev/dev.component';
import { MainComponent } from './screens/main/main.component';



const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registry', component: RegistryComponent},
  {path: 'dev', component: DevComponent, canActivate: [guard], data: { expectedRol: ['admin', 'user'] }},
  {path: '**', component: MainComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
