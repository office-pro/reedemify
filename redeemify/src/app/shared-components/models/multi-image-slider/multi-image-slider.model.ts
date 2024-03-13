export class MultiImageSlider {
  image?: string = '';
  thumbImage?: string = '';
  title: string = '';

  constructor(image: string = '', thumbImage: string = '', title: string = '') {
    this.image = image;
    this.thumbImage = thumbImage;
    this.title = title;
  }
}
