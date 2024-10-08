import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { BasicsPageComponent } from './pages/basics-page/basics-page.component';
import { NumbersPageComponent } from './pages/numbers-page/numbers-page.component';
import { UncommonPageComponent } from './pages/uncommon-page/uncommon-page.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { OrdesComponent } from './pages/ordes/ordes.component';
import { ToggleCasePipe } from './pipes/toggle-case.pipe';
import { CanFlyPipe } from './pipes/can-fly.pipe';
import { SortByPipe } from './pipes/sort-by.pipe';
import { ColorNamePipe } from './pipes/color-name.pipe';



@NgModule({
  declarations: [

    BasicsPageComponent,
      NumbersPageComponent,
      UncommonPageComponent,
      OrdesComponent,
      //Decalracion del nuevo pipe hecho por nmi
      ToggleCasePipe,
      CanFlyPipe,
      SortByPipe,
      ColorNamePipe
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    PrimeNgModule,
  ]
})
export class ProductsModule { }
