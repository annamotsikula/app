import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-main',
  standalone: true,
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {}

@NgModule({
  imports: [
      // სხვა imports აქ
      RouterModule
  ],
  // სხვა პარამეტრები
})
