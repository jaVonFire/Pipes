import { Component } from '@angular/core';

@Component({
  selector: 'app-basic-page',
  templateUrl: './basic-page.component.html',
  styleUrls: ['./basic-page.component.css']
})
export class BasicPageComponent {

  public nameLower: string = 'javier';
  public nameUpper: string = 'JAVIER';
  public fullName: string = 'jAVieR anDrEs NuñEz SanCHEz';

  public customDate: Date = new Date();

}
