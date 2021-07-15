import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Todo } from './../../models/todo.model'
import { TodoService } from './../../services/todo.service'


@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  todo = new Todo();
  constructor(private todoservice: TodoService, private router:Router) { }

  ngOnInit(): void {
  }
  onSubmit():void{
  this.todoservice.addTodo(this.todo);
  this.router.navigate(["todo"]);
  }

}
