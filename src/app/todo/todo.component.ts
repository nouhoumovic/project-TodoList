import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router } from "@angular/router";
import {Subscription} from "rxjs";
import { TodoService } from "../services/todo.service";


@Component({
  selector : 'my-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['todo.component.css']
})

export class TodoComponent implements OnInit, OnDestroy{
  today;
  todoS;
  todosSub: Subscription;

  constructor(private todoservice: TodoService, private router : Router){

  }
  ngOnInit(){
    this.today = this.todoservice.today;
   this.todosSub = this.todoservice.todosSubject.subscribe(
     (value: any[])=>{
       this.todoS=value;
     },
     (error
     )=>{console.log("Erreur :"+error);
     },
     ()=>{console.log("Observable completée");
     },
   );
   this.todoservice.emitTodos();
  }
  onChangeStatus(i: number){
    this.todoservice.onChangeStatus(i);
  }

  onIsModif(i: number){
    this.todoservice.onIsModif(i);
  }

  onView(id: number) {
    this.router.navigate(["single-todo", id]);
  }
  ngOnDestroy(){
    this.todosSub.unsubscribe();
  }
}
