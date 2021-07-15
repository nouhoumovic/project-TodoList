import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { TodoComponent } from './todo/todo.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ContactComponent } from './contact/contact.component';
import { UserComponent } from './user/user.component';
import { AddUserComponent } from './user/add-user/add-user.component';
import { AddTodoComponent } from './todo/add-todo/add-todo.component';
import { SingleTodoComponent } from './single-todo/single-todo.component';
import { Routes, RouterModule } from '@angular/router';

 const ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', component: TodoComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: 'todo', component: TodoComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'users', component: UserComponent},
  { path: 'add-user', component: AddUserComponent },
  { path: 'add-todo', component: AddTodoComponent },
  { path: 'single-todo/:id', component: SingleTodoComponent },
  { path:'**',pathMatch:'full',redirectTo:'not-found' },
];



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
     RouterModule.forRoot(ROUTES),
  ],
  exports:[RouterModule],
})
export class AppRoutingModule { }
