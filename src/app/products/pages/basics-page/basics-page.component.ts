import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styles: [
  ]
})
export class BasicsPageComponent {

  public nameLower: string = 'kevin';
  public nameUpper: string = 'KEVIN';
  public nameTitle: string = 'KEVin DaVid';
  public customDate: Date = new Date();

}
