import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemComponent }      from './item/item.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { ItemDetailComponent }  from './item-detail/item-detail.component';

const routes: Routes = [
  { path: 'detail/:id', component: ItemDetailComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'items', component: ItemComponent }

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
 exports: [ RouterModule ]
})
export class AppRoutingModule { }
