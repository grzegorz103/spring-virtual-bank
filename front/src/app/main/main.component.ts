import { Component, OnInit } from '@angular/core';
import { faMoneyBillWave, faHands } from '@fortawesome/free-solid-svg-icons';
import { faUniversity } from '@fortawesome/free-solid-svg-icons';
import { faHandshake } from '@fortawesome/free-solid-svg-icons';
import { faHandHolding } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  title = 'front';
  faMoneyBillWave = faMoneyBillWave;
  faUniversity = faUniversity;
  faHandshake = faHandshake;
  faHandHolding = faHandHolding;

  constructor() { }

  ngOnInit() {
  }

}
