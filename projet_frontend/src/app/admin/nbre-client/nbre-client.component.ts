import { Component } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';
import { OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-nbre-client',
  templateUrl: './nbre-client.component.html',
  styleUrls: ['./nbre-client.component.scss']
})
export class NbreClientComponent implements OnInit {
  // Define the chart type, e.g., 'pie' or 'doughnut'
  public chartType: ChartType = 'pie';

  // Define the chart data
  public chartData: ChartData<'pie'> = {
    labels: ['January', 'February', 'March', 'April'],
    datasets: [
      {
        data: [30, 50, 20, 70],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
      },
    ],
  };

  
  clientCount!: number;
  contratCount!: number;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getClientCount();
    this.getContratCount();
  }

  getClientCount(): void {
    this.http.get<number>('http://localhost:8092/api/clients/count').subscribe(
      (count) => {
        this.clientCount = count;
      },
      (error) => {
        console.error('Error fetching client count:', error);
      }
    );
  }

  getContratCount(): void {
    this.http.get<number>('http://localhost:8092/api/contrats/count').subscribe(
      (count) => {
        this.contratCount = count;
      },
      (error) => {
        console.error('Error fetching contract count:', error);
      }
    );
  }
}
