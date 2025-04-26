import { Routes } from '@angular/router';

import { authGuard } from '@guards/auth.guard';
import { homeGuard } from '@guards/home.guard';

import { HomeComponent } from '@pages/home/home.component';
import { DashboardComponent } from '@pages/dashboard/dashboard.component';


export const routes: Routes = [
    { path: '', component: HomeComponent, canActivate: [homeGuard]},
    { path: 'dashboard', component: DashboardComponent, canActivate: [authGuard] }
];
