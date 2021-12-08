import {Component, OnInit} from '@angular/core';
import {IWord} from "../model/iWord";
import {DictionaryService} from "../service/dictionary.service";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {DomSanitizer} from "@angular/platform-browser";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-dictionary-detail',
  templateUrl: './dictionary-detail.component.html',
  styleUrls: ['./dictionary-detail.component.css']
})
export class DictionaryDetailComponent implements OnInit {
  wordDetail: any;


  constructor(
    private activatedRouter: ActivatedRoute,
    private dictionaryService: DictionaryService
  ) { }

  ngOnInit(): void {
  this.activatedRouter.paramMap.subscribe((paraMap:ParamMap)=>{
    const id=paraMap.get('id');
    this.wordDetail =this.dictionaryService.find(parseInt(id))
  })
  }



}
