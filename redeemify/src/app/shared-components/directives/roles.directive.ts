import {Directive, Input, Output,EventEmitter} from "@angular/core";
import { DataObtainer } from "../models/base/data-obtainer.model";
import { Observable } from "rxjs";
import { SearchParamModel } from "../models/search-params.model";
import { RolesService } from "../../services/role.service";

@Directive({
  selector: '[roles-data],roles-data'
})

export class RolesDataDirective extends DataObtainer {
  @Input()
  roleId: number = 0;

  @Input()
  data: Array<any> = [];

  @Input()
  key: string = "roleName";

  @Output()
  dataChange: EventEmitter<any> = new EventEmitter();

  constructor(private roleService: RolesService) {
    super();
  }

  ngOnInit() {
    let searchParams = new SearchParamModel();
    this.refreshData(searchParams);
  }

  protected override onAfterUpdateData(data: any): void {
    if(!!data) {
      this.data = data.data;
      this.dataChange.emit(data.data);
    }
  }

  protected override getDataObservable(searchParams: SearchParamModel): Observable<any> {
    return this.roleService.getAllRoles(searchParams);
  }

}