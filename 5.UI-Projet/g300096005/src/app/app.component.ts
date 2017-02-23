import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  templateUrl: `./app.component.html`
})
export class AppComponent {
  message = 'This is the sample message.';
  param = {value: 'world'};
}
