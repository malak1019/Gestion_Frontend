import { Component, Input } from '@angular/core';
import { ChartOptions } from 'chart.js';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class ChartComponent {
  // Pie
  @Input() pieChartDatasets: any;
  @Input() pieChartLabels: any;
  constructor() {}
  public pieChartOptions: ChartOptions<'pie'> = {
    responsive: true,
  };
  public pieChartLegend = true;
  public pieChartPlugins = [];
}
