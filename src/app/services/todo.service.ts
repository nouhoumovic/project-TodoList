import { Injectable } from "@angular/core";

@Injectable()
export class TodoService{
  isModif=false;
  today = new Date();
  todoS =[
    {
      todoName : "Projet 1",
      todoStatus: false,
      todoImage:"http://placehold.it/150",
      isModif: false,
    },
    {
      todoName : "Projet 2",
      todoStatus: false,
      todoImage:"http://placehold.it/150",
      isModif: false,
    },
    {
      todoName : "Projet 3",
      todoStatus: true,
      todoImage:"http://placehold.it/150",
      isModif: false,
    },
    {
      todoName : "Projet 4",
      todoStatus: false,
      todoImage:"http://placehold.it/150",
      isModif: false,
    }
  ];
    onChangeStatus(i: number){
      this.todoS[i].todoStatus = !this.todoS[i].todoStatus;
    }

    onIsModif(i: number){
      this.todoS[i].isModif = !this.todoS[i].isModif;
    }
}
