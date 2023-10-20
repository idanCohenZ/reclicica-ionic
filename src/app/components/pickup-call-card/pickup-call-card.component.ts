import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pickup-call-card',
  templateUrl: './pickup-call-card.component.html',
  styleUrls: ['./pickup-call-card.component.scss'],
})
export class PickupCallCardComponent implements OnInit {
  @Input() hasHeader: boolean = false;
  @Input() hasFooter: boolean = false;
  @Input() status: string = '';
  @Input() createdAt: string = '';
  @Input() updatedAt: string = '';
  @Input() notes: string = '';
  @Input() moneyGathered: string = '';

  constructor(private router: Router) {}

  ngOnInit() {}

  allpickUpCallsRedirect() {
    this.router.navigate(['pickup-calls']);
  }
}
