import { AfterViewInit, Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatLegacySelect as MatSelect } from '@angular/material/legacy-select';
import { ReplaySubject, Subject } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';



@Component({
  selector: 'single-dropdown-with-search',
  templateUrl: './single-dropdown-with-search.component.html',
  styleUrls: ['./single-dropdown-with-search.component.scss']
})
export class SingleDropdownWithSearch implements OnInit, AfterViewInit, OnDestroy {

  /** list of banks */
  @Input()
   values: Array<any> = [];

  @Input()
  key: string = "";

  public selectCtrl: FormControl = new FormControl("");
  public filterCtrl: FormControl = new FormControl("");
  filter: string = ""
  public filteredResults: ReplaySubject<any> = new ReplaySubject(1);
   protected _onDestroy = new Subject();

  @ViewChild('singleSelect', { static: true }) 
  singleSelect: MatSelect | any;

  product: any = "";
  productSearch: any = "";


  constructor() { }

  ngOnInit() {

    this.selectCtrl.setValue("");
    this.filteredResults.next(this.values.slice());
  
    this.filterCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterBanks();
      });

  }

    /**
   * Write code on Method
   *
   * method logical code
   */
  ngAfterViewInit() {
    this.setInitialValue();
  }
  
  /**
   * Write code on Method
   *
   * method logical code
   */

  onClick(event: any) {
    console.log(event)
    // event.preventDefault();
    // event.stopImmediatePropagation();
  }
  ngOnDestroy() {
    this._onDestroy.next(null);
    this._onDestroy.complete();
  }
  
  /**
   * Write code on Method
   *
   * method logical code
   */
  protected setInitialValue() {
    this.filteredResults
      .pipe(take(1), takeUntil(this._onDestroy))
      .subscribe(() => {
          this.singleSelect.compareWith = (a: any, b: any) => a && b && a.id === b.id;
      });
  }
  
  /**
   * Write code on Method
   *
   * method logical code
   */
  protected filterBanks() {
    if (!this.values) {
      return;
    }
  
    let search = this.filterCtrl.value;
    if (!search) {
      this.filteredResults.next(this.values.slice());
      return;
    } else {
      search = search.toLowerCase();
    }
  
    this.filteredResults.next(
      this.values.filter((data: any) => data[this.key].toLowerCase().indexOf(search) > -1)
    );
  }





}
