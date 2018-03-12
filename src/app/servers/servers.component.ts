import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // selector: '[app-servers]',
  // selector: '.app-servers',
  // template:
  //     `<app-server></app-server>
  //     <app-server></app-server>`,
  templateUrl: './servers.component.html',
  // styleUrls: ['./servers.component.css']
  styles: [`
    .laterClicks {
      background-color: blue;
      color: white
    }
  `]
})
export class ServersComponent implements OnInit {
  allowNewServer = false; // we added a new property holding a boolean value
  serverCreationStatus = 'No server was created!';
  serverName = 'InitialName';
  userName = ''; // used for the purpose of Assignment 2
  displayContent = false;
  serverCreated = false;
  servers = ['testserver', 'testserver2'];
  logs = [];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  }

  onUpdateServerName(event: Event) {
    console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  onToggle() {
    this.displayContent = !this.displayContent;
    this.logs.push(new Date());
    console.log(this.logs);
  }

}
