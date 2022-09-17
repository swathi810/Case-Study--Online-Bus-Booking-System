import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBusComponent } from './add-bus/add-bus.component';
import { ListBusesComponent } from './list-buses/list-buses.component';
import { SearchBusComponent } from './search-bus/search-bus.component';

const routes: Routes = [
  {path: 'add', component: AddBusComponent},
  {path: 'list', component: ListBusesComponent},
  {path: 'find', component: SearchBusComponent},
  {path: '', redirectTo: '/list', pathMatch: 'full'},
  {path: '**', redirectTo: '/add', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
