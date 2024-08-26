import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NetworthService } from '../networth.service';

@Component({
  selector: 'app-records-list',
  templateUrl: './records-list.component.html',
  styleUrls: ['./records-list.component.css']
})
export class RecordsListComponent {
  @Input() data: any[] = [];
  @Input() getNetWorthChangeClass: (record: any) => string = () => 'unchanged';
  @Input() calculateNetWorth: (record: any) => number = () => 0;
  @Input() calculateNetWorthPercentChanged: (record: any) => number = () => 0;
  @Input() calculateNetWorthDifference: (record: any) => number = () => 0;

  constructor(
    private networthService: NetworthService,
    private router: Router
  ) {}

  navigateToDetail(record: any): void {
    this.router.navigate(['/networth-detail', record.recordId]);
  }
}
