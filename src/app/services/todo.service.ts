import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { Subject } from "rxjs";
import {Todo} from './../models/todo.model'
@Injectable()
export class TodoService{
  today = new Date();
  todoS: Todo[];
  todosSubject = new Subject<any[]>();



  constructor(private httpClient: HttpClient) {
    this.getTodosFromServer();
  }


  emitTodos(){
    this.todosSubject.next(this.todoS);
  }
    onChangeStatus(i: number){
      this.todoS[i].todoStatus = !this.todoS[i].todoStatus;
      this.emitTodos();
    this.saveTodosFromServer();

    }

    onIsModif(i: number){
      this.todoS[i].isModif = !this.todoS[i].isModif;
      this.emitTodos();
    this.saveTodosFromServer();

  }
  getTodo(index: number) {
    if (this.todoS[index]) {
      return this.todoS[index];
    }
    return false;
  }
  addTodo(todo: Todo): void{
    this.todoS.unshift(todo);
    this.emitTodos();
    this.saveTodosFromServer();

  }

  saveTodosFromServer(): void{
    this.httpClient.put("https://todo-list-app-1f7c1-default-rtdb.firebaseio.com/todos.json", this.todoS).subscribe(
      () => {
        console.log("Donnée enregistrée avec succes");

      },
      (error) => {
       console.log("Erreur de sauvegarde : "+error);

      },
    );
  }
   getTodosFromServer(): void {
    this.httpClient.get<Todo[]>("https://todo-list-app-1f7c1-default-rtdb.firebaseio.com/todos.json").subscribe(
      (todoRecup: Todo[]) => {
        this.todoS = todoRecup;
    this.emitTodos();

       },
      (error) => {
        console.log("Erreur de la récuperation des donnée"+error);

       },
      () => {
        console.log("Récupération des donnée terminée");

      },

    );
  }
}
