import {Component, Input, TemplateRef} from "@angular/core";
import { CardSliderPropertiesModel } from "../models/card-slider/card-slider-properties.model";

@Component({
  selector: 'card-slider',
  templateUrl: './card-slider.component.html',
  styleUrls: ['./card-slider.component.scss']
}) 

export class CardSliderComponent<T> {

  @Input()
  data: Array<T> = [];

  @Input()
  sliderProperties: CardSliderPropertiesModel | undefined;

  @Input()
  headerLabel: string = ''

  @Input()
  headerTemplate: TemplateRef<any> | undefined;

  @Input()
  numVisible: number = 0

  @Input()
  numScroll: number = 0




  
}
