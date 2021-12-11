import { Component, OnInit } from '@angular/core';
import {Todo} from "../../model/todo";
import {TodoService} from "../../service/todo.service";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todoList: Todo[] = [];
  constructor(private  todo:TodoService) { }

  ngOnInit(): void {
    this.getALlTodo();

  }
  getALlTodo(){
    this.todo.getAll().subscribe(value => {
      this.todoList =value;
    },error => {
      console.log(error)
    })
  }
  toggleTodo(i: number) {
    this.todoList[i].complete = !this.todoList[i].complete;
  }
}
