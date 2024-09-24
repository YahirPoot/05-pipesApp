import { Component } from '@angular/core';

@Component({
  selector: 'products-ordes',
  templateUrl: './ordes.component.html',
  styles: ``
})
export class OrdesComponent {

  public isUpperCase: boolean = false;

  toggleUpperCase(): void {
    this.isUpperCase = !this.isUpperCase;
  }
}
