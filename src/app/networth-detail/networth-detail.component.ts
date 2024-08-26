import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NetworthService } from '../networth.service';

@Component({
  selector: 'app-networth-detail',
  templateUrl: './networth-detail.component.html',
  styleUrls: ['./networth-detail.component.css']
})
export class NetworthDetailComponent implements OnInit {
  record: any;
  groupedRecords: any[] = []; // To store grouped data by category

  constructor(
    private route: ActivatedRoute,
    private networthService: NetworthService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.networthService.getNetworthData().subscribe((data: any) => {
      this.record = data.find((record: any) => record.recordId === id);
      if (this.record) {
        this.groupRecordsByCategory();
      }
    });
  }

  get totalAssets(): number {
    return this.calculateTotalByType('asset');
  }

  get totalLiabilities(): number {
    return this.calculateTotalByType('liability');
  }

  get totalNetWorth(): number {
    return this.totalAssets - this.totalLiabilities;
  }

  private calculateTotalByType(type: string): number {
    if (!this.record || !this.record.data) {
      return 0;
    }
    return this.record.data
      .filter((item: any) => item.type === type)
      .reduce((total: number, item: any) => total + parseFloat(item.value), 0);
  }

  // Group records by category and calculate sum for each group
  private groupRecordsByCategory(): void {
    const categories = this.record.data.reduce((acc: any, item: any) => {
      if (!acc[item.category]) {
        acc[item.category] = {
          category: item.category,
          total: 0,
          items: []
        };
      }
      acc[item.category].total += parseFloat(item.value);
      acc[item.category].items.push(item);
      return acc;
    }, {});

    this.groupedRecords = Object.values(categories);
  }

  // Calculate percentage of each item relative to total assets or liabilities
  getItemPercentage(item: any): number {
    const total = item.type === 'asset' ? this.totalAssets : this.totalLiabilities;
    return total ? ((parseFloat(item.value) / total) * 100) : 0;
  }
}
