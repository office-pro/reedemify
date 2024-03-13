import { Component, Input, Output,EventEmitter, SimpleChange, SimpleChanges, TemplateRef } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { UserContext } from "../services/user-context.service";
import { MatMenu } from "@angular/material/menu";
import { DropdownWithSearchModalComponent } from "./modal/dropdown-with-search-modal.component";
import { MatDialog } from "@angular/material/dialog";

@Component({
  selector: "dropdown-with-search",
  templateUrl: './dropdown-with-search.component.html',
  styleUrls: ['./dropdown-with-search.component.scss']
})

export class DropDownWithSearchComponent {

  @Input()
  public data: Array<any> = [];

  @Input()
  showLabel: boolean = true;

  @Input()
  isDisabled: boolean = false

  @Output()
  dataChange: EventEmitter<any> = new EventEmitter();

  @Input()
  selectedValue: string = "";

  @Input()
  selectedId: number = 0;

  @Input()
  selectedIdKey: string = "";


  @Input()
  label: string = ""
  
  @Input()
  placeholder: string = "";

  @Input()
  emptyResultsLabel: string = "No Results found !!";

  @Output()
  selectedValueChange: EventEmitter<any> = new EventEmitter();

  @Input()
  selectedObject: any = {};

  @Output()
  selectedObjectChange: EventEmitter<any> = new EventEmitter();

  @Input()
  searchValue: string = "";

  @Input()
  key: string = "";

  @Input()
  customAction: Function | undefined;

  @Input()
  customActionComponent: any;

  @Input()
  customActionTitle: string = "add";

  @Input()
  showCustomAction: boolean = false;

  filteredData: Array<any> = [];

  constructor(private router: Router, private userContext: UserContext, private dialog: MatDialog) {}

  ngOnChanges(change: any) {

    if(!!change?.data && !this.checkEmptyArray(change?.data?.currentValue)) {
      this.data = change?.data?.currentValue;
      this.filteredData = JSON.parse(JSON.stringify(this.data));
    }

    if(!!change?.selectedValue) {
      this.selectedValue = change?.selectedValue?.currentValue;
      let value: any = this.data.filter((dataObj: any) => dataObj?.[this.key]?.toLowerCase()?.trim() == this.selectedValue?.toLowerCase()?.trim() );
      if(value.length > 0) {
        this.selectedObject = value[0];
        this.selectedObjectChange.emit(this.selectedObject);
        this.selectedValue = this.selectedObject?.[this.key];
        this.selectedValueChange.emit(this.selectedValue)
      }
    }

    if(!this.checkEmptyArray(change?.data?.currentValue) && (!!this?.selectedId) && !!this.selectedIdKey) {
      let value: any = this.data.filter((dataObj: any) => dataObj?.[this.selectedIdKey] == this.selectedId );
      if(value.length > 0) {
        this.selectedObject = value[0];
        this.selectedObjectChange.emit(this.selectedObject);
        this.selectedValue = this.selectedObject?.[this.key];
        this.selectedValueChange.emit(this.selectedValue)
      }
    }
  }

  ngOnInit() {
    this.filteredData = JSON.parse(JSON.stringify(this.data));
  }

  onSearch() {
    if(!!this.searchValue?.trim()) {
      this.filteredData = this.filteredData.filter((data: any) => data?.[this.key]?.trim()?.toLowerCase()?.includes(this.searchValue?.trim()?.toLowerCase()))
    } else {
      this.filteredData = JSON.parse(JSON.stringify(this.data));
    }
  }

  onValueChange(obj: any) {
    this.selectedValue=obj?.[this.key];
    this.selectedObject = obj;
    this.selectedValueChange.emit(this.selectedValue);
    this.selectedObjectChange.emit(this.selectedObject);
  }

  checkEmptyArray(data: any) {
    return !!data && data.length < 1;
  }

  onCustomActionClick(event: any) {
    const dialogRef = this.dialog.open(this.customActionComponent,{
      data: {
        action: this.customAction,
        event: event
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
    
    
    if(!!this.customAction) {
      this.customAction()
    }
  }
}