import {Component, Input} from "@angular/core";

@Component({
  selector: 'image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.scss']
})

export class ImageSliderComponent {

  @Input()
  imageUrls: Array<string> = [];

  private interval: any

  currentIndex = 0;

  onLoad(event: any) {
    console.log("onload ",event)
  }

  onLoadStart(event: any) {
    console.log("onload start ",event)
  }

  onLoaded(event: any) {
    console.log("on loadeed " +event)
  }

  ngOnInit() {
    // this.interval = setInterval(() => {
    //   this.prev();
    // }, 2000)
  }

  ngOnDestroy() {
    // clearInterval(this.interval)
  }

  next() {
    if(this.currentIndex < this.imageUrls.length - 1 ) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0
    }
  }

  prev() {
    if(this.currentIndex > 0 ) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.imageUrls.length - 1;
    }
  }


}