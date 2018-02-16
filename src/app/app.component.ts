import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
  styles: [`
    p {
      color: red;
    }
  `]
})
export class AppComponent {
  password = '';
  title = 'Greater Website';
  userName = 'Joe';

  // onSetToJoeTimeout() {
  //   this.userName = 'Joe';
  //   setTimeout(() => this.onSetToJoeTimeout(), 5000);
  // }

  constructor() {
    // setTimeout(() => this.onSetToJoeTimeout(), 5000);

  }

  onUserNameReset() {
    this.userName = '';
  }
  isUserNameResetAllowed() {
    const res = this.userName.length > 0;
    return res;
  }

}
