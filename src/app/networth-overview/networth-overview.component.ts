import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-networth-overview',
  templateUrl: './networth-overview.component.html',
  styleUrls: ['./networth-overview.component.css']
})
export class NetworthOverviewComponent {
  @Input() totalAssets: number = 0;
  @Input() totalLiabilities: number = 0;
  @Input() totalNetWorth: number = 0;
  @Input() headingText: string = '';
  
  getNetworthStatus(value: number): string {
    return value > 0 ? 'positive' : 'negative';
  }
}
