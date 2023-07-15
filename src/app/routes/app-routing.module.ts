import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from '../pages/login-page/login-page.component';
import { TaskPageComponent } from '../pages/task-page/task-page.component';
import { IsLoggedGuard } from '../guards/isLoggedGuard.guard';
import { NotIsLoggedGuard } from '../guards/notIsLoggedGuard.guard';

const routes: Routes = [
  {
    path: 'login',
    component: LoginPageComponent,
    canActivate: [NotIsLoggedGuard],
  },
  {
    path: 'tasks',
    component: TaskPageComponent,
    canActivate: [IsLoggedGuard],
  },
  {
    path: '**',
    redirectTo: 'login',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
