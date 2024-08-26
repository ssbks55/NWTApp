import { Component, OnInit } from '@angular/core';
import { NetworthService } from '../networth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  selectedDetail: any = null;
  data: any[] = [];
  totalAssets: number = 0;
  totalLiabilities: number = 0;
  totalNetWorth: number = 0;
  pageHeading: string = 'Dashboard'; // Default heading

  constructor(private networthService: NetworthService) { }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    this.networthService.getNetworthData().subscribe(
      (data) => {
        this.data = data;
        this.updateTotals();
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }

  updateTotals(): void {
    if (this.data.length > 0) {
      const latestRecord = this.data[0]; // latest;
      this.totalAssets = this.calculateTotalByType(latestRecord, 'asset');
      this.totalLiabilities = this.calculateTotalByType(latestRecord, 'liability');
      this.totalNetWorth = this.totalAssets - this.totalLiabilities;
    }
  }

  calculateTotalByType(record: any, type: string): number {
    return record.data
      .filter((item: any) => item.type === type)
      .reduce((sum: number, item: any) => sum + Number(item.value), 0);
  }

  calculateNetWorth(record: any): number {
    const assets = record.data.filter((item: any) => item.type === 'asset');
    const liabilities = record.data.filter((item: any) => item.type === 'liability');
    const totalAssets = assets.reduce((sum: number, item: any) => sum + Number(item.value), 0);
    const totalLiabilities = liabilities.reduce((sum: number, item: any) => sum + Number(item.value), 0);
    return totalAssets - totalLiabilities;
  }

  calculateNetWorthPercentChanged(record: any): number {
    const currentIndex = this.data.findIndex(x => x.recordId === record.recordId);
  
    if (currentIndex === -1 || currentIndex === this.data.length - 1) {
      // If no previous record or invalid index, return 0
      return 0;
    }
  
    const previousRecord = this.data[currentIndex + 1]; // Get previous record
    const currentNetWorth = this.calculateNetWorth(record);
    const previousNetWorth = this.calculateNetWorth(previousRecord);
  
    if (previousNetWorth === 0) {
      // Avoid division by zero
      return 0;
    }
  
    const netWorthChangePercent = ((currentNetWorth - previousNetWorth) / previousNetWorth) * 100;
    
    // Return the percentage change with 2 decimal places
    return Math.abs(parseFloat(netWorthChangePercent.toFixed(2)));
  }
  
  calculateNetWorthDifference(record: any): number {
    const currentIndex = this.data.findIndex(x => x.recordId === record.recordId);
  
    if (currentIndex === -1 || currentIndex === this.data.length - 1) {
      // If no previous record or invalid index, return 0
      return 0;
    }
  
    const previousRecord = this.data[currentIndex + 1]; // Get previous record
    const currentNetWorth = this.calculateNetWorth(record);
    const previousNetWorth = this.calculateNetWorth(previousRecord);
  
    // Return the difference between current and previous net worth
    return parseFloat((currentNetWorth - previousNetWorth).toFixed(2));
  }
  
  

  getNetWorthChangeClass(record: any): string {
    const currentIndex = this.data.findIndex(x => x.recordId === record.recordId);
    if (currentIndex === this.data.length - 1) {
      return 'unchanged';
    } else {
      const previousRecord = this.data[currentIndex + 1]; // Previous record
      const currentNetWorth = this.calculateNetWorth(record);
      const previousNetWorth = this.calculateNetWorth(previousRecord);
      const netWorthChange = currentNetWorth - previousNetWorth;
      if (netWorthChange > 0) {
        return 'increase';
      } else if (netWorthChange < 0) {
        return 'decrease';
      } else {
        return 'unchanged';
      }
    }
  }

  // Handle menu selection
  selectMenu(menu: string): void {
    this.pageHeading = menu;
  }
}
