import { ClassSliderResponsiveModel } from './class-slider-responsive.model';

export class CardSliderPropertiesModel {
  numVisible: number = 2;
  numScroll: number = 1;
  responsiveOptions: ClassSliderResponsiveModel[] = [];

  constructor(
    numVisible: number = 2,
    numScroll: number = 1,
    responsiveOptions: ClassSliderResponsiveModel[] = []
  ) {
    this.numVisible = numVisible;
    this.numScroll = numScroll;
    this.responsiveOptions =
      responsiveOptions.length > 0
        ? responsiveOptions
        : this.responsiveOptionsData;
  }

  private get responsiveOptionsData() {
    return [
      new ClassSliderResponsiveModel('1199px', 1, 1),
      new ClassSliderResponsiveModel('991px', 2, 1),
      new ClassSliderResponsiveModel('767px', 1, 1),
    ];
  }
}
