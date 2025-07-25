import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteListComponent } from './components/cliente-list.component';
import { ClienteFormComponent } from './components/cliente-form.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  { path: '', component: ClienteListComponent },
  { path: 'novo', component: ClienteFormComponent },
  { path: 'editar/:id', component: ClienteFormComponent }
];

@NgModule({
  declarations: [
    ClienteListComponent,
    ClienteFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ]
})
export class ClientesModule { }
