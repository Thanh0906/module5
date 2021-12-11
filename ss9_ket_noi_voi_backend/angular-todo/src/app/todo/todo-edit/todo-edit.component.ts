import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {TodoService} from "../../service/todo.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css']
})
export class TodoEditComponent implements OnInit {
  todoForm = new FormGroup({
    content: new FormControl()
  });
  id: number;

  constructor(private todoService: TodoService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.getTodo(this.id);
    });
  }
  getTodo(id: number) {
    this.todoService.findById(id).subscribe(value => {
      this.todoForm.setValue(value);
    });
  }
  save(id: number) {
    const todo = this.todoForm.value;
    this.todoService.update(id, todo).subscribe(value => {
      this.router.navigate(['todo/list']);
    });
  }
  ngOnInit(): void {
  }

}
