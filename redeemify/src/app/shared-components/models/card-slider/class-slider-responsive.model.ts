export class ClassSliderResponsiveModel {
  breakpoint: string = '';
  numVisible: number = 0;
  numScroll: number = 0;

  constructor(breakpoint: string = '',numVisible: number = 0, numScroll: number = 0 ) {
    this.breakpoint = breakpoint;
    this.numScroll = numScroll;
    this.numVisible = numVisible;
  }
}