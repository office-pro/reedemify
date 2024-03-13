import { Component, Input } from '@angular/core';
import { RolesRestrictorService } from 'src/app/services/roles-restrictor.service';
import { UserContext } from 'src/app/shared-components/services/user-context.service';
import { HomeUtils } from '../../utils/home-utils';
import { Router } from '@angular/router';

@Component({
  selector: 'brand-products',
  templateUrl: './brand-products.component.html',
  styleUrls: ['./brand-products.component.scss'],
})
export class BrandProductComponent {
  @Input()
  productsData: any = {};

  @Input()
  brandId: number = 0;

  constructor(private userContext: UserContext, public rolesRestrictor: RolesRestrictorService) {}

  ngOnInit() {
    this.userContext.brand$.subscribe((brand: any) => {
      this.brandId = brand.brandId;
    });
  }
}
