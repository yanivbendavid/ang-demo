import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  allowNewServer = true;

  constructor() {}

  ngOnInit(): void {}

  onCreateServer() {
    this.allowNewServer = false;
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }
}
