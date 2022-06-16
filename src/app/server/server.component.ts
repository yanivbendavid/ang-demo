import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
})
export class ServerComponent implements OnInit {
  text = 'new server';

  constructor() {}

  ngOnInit(): void {}

  onChangeServerName(event: any) {
    this.text = event.target.value;
  }
}
