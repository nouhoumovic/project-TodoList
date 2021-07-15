import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { TodoComponent } from "./todo/todo.component";
import { HeaderComponent } from './header/header.component';
import { FormsModule,ReactiveFormsModule } from "@angular/forms";
import { TodoService } from "./services/todo.service";
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SingleTodoComponent } from './single-todo/single-todo.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule, Routes } from "@angular/router";
import { AddTodoComponent } from './todo/add-todo/add-todo.component';
import { UserComponent } from './user/user.component';
import { AddUserComponent } from './user/add-user/add-user.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

export const ROUTES: Routes = [
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
  declarations:[
    AppComponent,
    TodoComponent,
    HeaderComponent,
    HomeComponent,
    NotFoundComponent,
    SingleTodoComponent,
    ContactComponent,
    AddTodoComponent,
    UserComponent,
    AddUserComponent,

  ],
  imports:[
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES),
    AppRoutingModule,
  ],

  providers:[TodoService],
  bootstrap:[AppComponent]
})

export class AppModule{ }
