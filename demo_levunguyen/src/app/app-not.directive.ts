import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appAppNot]'
})
export class AppNotDirective {

  constructor(private tem: TemplateRef<any>,
              private view: ViewContainerRef) {
    }
  @Input()
  set appAppNot(condition: boolean) {
   if (!condition){
     this.view.createEmbeddedView(this.tem);
   }else {
     this.view.clear();
   }
  }
}
