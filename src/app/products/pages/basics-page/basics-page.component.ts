import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPageComponent {
  public nameLower: string = 'angel';
  public nameUper: string = 'ANGEL';
  public fullName: string = 'AnGeL YaHIr pOOt UcAn';
  public customDate: Date = new Date();
}
