import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styles: [`
    .active   {
      color: #FFF !important;
    }
  `],
  templateUrl: './app.component.html'
})
export class AppComponent {
  message = 'This is the sample message.';
}
