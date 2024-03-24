import {Directive, EventEmitter, HostListener} from '@angular/core';

@Directive({
  selector: 'resizable, [resizable]'
})

export class ResizableDirective {

  private width:number = 0;
  private height: number = 0;
  emitParams: EventEmitter<any> = new EventEmitter();
  

   @HostListener('window:resize', ['$event'])
    onResize(event: Event) {
        console.log("event resized");
        this.width = (event.target as Window).innerWidth;
        this.height = (event.target as Window).innerHeight;
        let resizable = new ResizableModel(this.height,this.width)
        this.emitParams.emit(resizable.params);
    }
}

export class ResizableModel {
  private height: number = 0;
  private width: number = 0;

  constructor(height = 0, width = 0) {
    this.height = height;
    this.width = width;
  }

  get params() {
    return {height: this.height, width: this.width}
  }
}