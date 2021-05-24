import { Component, OnInit } from "@angular/core";
import { TodoService } from "../services/todo.service";


@Component({
  selector : 'my-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['todo.component.css']
})

export class TodoComponent implements OnInit{
  today;
  todoS;
  constructor(private todoservice: TodoService){

  }
  ngOnInit(){
    this.today = this.todoservice.today;
    this.todoS = this.todoservice.todoS;
  }
  onChangeStatus(i: number){
    this.todoservice.onChangeStatus(i);
  }

  onIsModif(i: number){
    this.todoservice.onIsModif(i);
  }
}
