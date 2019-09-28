import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-master-detail',
  templateUrl: './master-detail.component.html',
  styleUrls: ['./master-detail.component.css']
})
export class MasterDetailComponent implements OnInit {

  GreyAvatar = require('../../../assets/GreyAvatar.svg') as string;
  WarningMessageText = 'Request to get master detail text failed:';
  WarningMessageOpen = false;
  currentDisplayTabIndex = 0;


  constructor() { }

  ngOnInit() {
    
  }

  handleDisplayTabClick(id: number) {
    this.currentDisplayTabIndex = id;
  }
  handleWarningClose(open: boolean) {
    this.WarningMessageOpen = open;
    this.WarningMessageText = '';
  }
}


