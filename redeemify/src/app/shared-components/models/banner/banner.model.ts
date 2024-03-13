export class Banner {
  bannerId?: string = "";
  imageUrl: string = "";
  headerText: string = "";
  subHeaderText: string = "";
  link: string = "";
  image?: any;

  constructor(imageUrl: string, headerText: string, subHeaderText: string, link: string) {
    this.imageUrl = imageUrl;
    this.headerText = headerText;
    this.subHeaderText = subHeaderText;
    this.link = link;
  }
}