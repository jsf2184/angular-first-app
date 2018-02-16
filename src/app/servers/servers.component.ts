import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector : 'app-servers',
  // selector: '.app-servers',
  // selector: '[app-servers]',
  templateUrl: './servers.component.html',
  // template: `
  //   <app-server></app-server>
  //   <app-server></app-server>
  // `,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  serverCreateCount = 0;
  allowNewServer = false;
  newServerName = '';

  constructor() {
    // use setTimeout to change allowNewServer from false to true with lambda
    setTimeout(() => {this.allowNewServer = true; }, 2000);
  }

  isNewServerAllowed() {
    return this.allowNewServer;
  }

  getAllowedString() {
    return 'Add Server Button is ' + (this.allowNewServer ? 'enabled' : 'disabled');
  }

  getCreateCountString() {
    // noinspection TsLint
    return 'Created ' + this.serverCreateCount + ' servers!';
  }

  onCreateServer() {
    this.serverCreateCount++;
  }



  ngOnInit() {
  }

  onFormServerName($event: Event) {
    const target = event.target;
    console.log('className: ' + target.toString());
    this.newServerName = (<HTMLInputElement> target).value;
    console.log('newServerName = ' + this.newServerName);
  }
}
