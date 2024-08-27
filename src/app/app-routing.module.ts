import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { NetworthDetailComponent } from './networth-detail/networth-detail.component';
import { SettingsComponent } from './settings/settings.component';
import { CategoriesComponent } from './categories/categories.component'; // New import
import { AssetLiabilityFormComponent } from './asset-liability-form/asset-liability-form.component'; // New import

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'networth-detail/:id', component: NetworthDetailComponent },
  { path: 'categories', component: CategoriesComponent }, // Route for categories
  { path: 'asset-liability-form', component: AssetLiabilityFormComponent }, // Route for asset/liability form
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: '/dashboard' } // Wildcard redirect
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
