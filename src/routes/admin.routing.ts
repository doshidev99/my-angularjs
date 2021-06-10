import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardComponent } from 'src/app/components/dashboard/dashboard.component';
import { AuthGuard } from './auth-guard';

const routes: Routes = [
  { path: 'admin', component: DashboardComponent, canActivate: [AuthGuard] },
];

export const AdminRoutes = RouterModule.forChild(routes);
