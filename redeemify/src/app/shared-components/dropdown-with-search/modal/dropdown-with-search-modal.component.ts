import { Component, Inject } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: 'dropdown-with-search-modal',
  templateUrl: './dropdown-with-search-modal.component.html',
  styleUrls: ['./dropdown-with-search-modal.component.scss']
})

export class DropdownWithSearchModalComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}


}