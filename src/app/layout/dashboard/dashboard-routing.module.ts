import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { CreateCategoryComponent } from 'app/layout/components/create-category/create-category.component';

const routes: Routes = [
  { path: '', component: DashboardComponent
  },{ path: 'createCategory', component: CreateCategoryComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
