
import { Component, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { RouterLink } from '@angular/router';
import {
    ApexAxisChartSeries,
    ApexChart,
    ChartComponent,
    ApexDataLabels,
    ApexPlotOptions,
    ApexYAxis,
    ApexLegend,
    ApexStroke,
    ApexXAxis,
    ApexGrid,
    ApexFill,
    ApexTooltip,
    NgApexchartsModule
} from "ng-apexcharts";

export type ChartOptions = {
    series: ApexAxisChartSeries;
    chart: ApexChart;
    dataLabels: ApexDataLabels;
    plotOptions: ApexPlotOptions;
    grid: ApexGrid;
    yaxis: ApexYAxis;
    xaxis: ApexXAxis;
    colors: string[];
    fill: ApexFill;
    tooltip: ApexTooltip;
    stroke: ApexStroke;
    legend: ApexLegend;
};

@Component({
    selector: 'app-emp-status',
    standalone: true,
    imports: [RouterLink, MatCardModule, MatButtonModule, MatMenuModule, NgApexchartsModule],
    templateUrl: './emp-status.component.html',
    styleUrl: './emp-status.component.scss'
  })
  export class EmpStatusComponent {

    @ViewChild("chart") chart: ChartComponent;
    public chartOptions: Partial<ChartOptions>;
    public selectedTimeframe: string = 'This Year'; // Default selected timeframe

    constructor() {
        this.updateChartData(this.selectedTimeframe);
    }

    // Function to update chart data based on selected timeframe
    updateChartData(timeframe: string) {
        this.selectedTimeframe = timeframe;

        let categories: string[] = [];
        let series: ApexAxisChartSeries = [];

        switch (timeframe) {
            case 'This Day':
                categories = ['00:00', '06:00', '12:00', '18:00'];
                series = [
                    { name: "Nishant ", data: [5, 10, 15, 8] },
                    { name: "Rohit", data: [2, 5, 10, 12] },
               
                ];
                break;

            case 'This Week':
                categories = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
                series = [
                    { name: "Nishant ", data: [20, 25, 30, 28, 35, 40, 50] },
                    { name: "Rohit", data: [15, 18, 22, 20, 25, 30, 35] },
                 
                ];
                break;

            case 'This Month':
                categories = Array.from({ length: 30 }, (_, i) => `Day ${i + 1}`);
                series = [
                    { name: "Nishant ", data: Array.from({ length: 30 }, () => Math.floor(Math.random() * 50) + 10) },
                    { name: "Rohit", data: Array.from({ length: 30 }, () => Math.floor(Math.random() * 40) + 5) },
                   
                ];
                break;

            case 'This Year':
                categories = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
                series = [
                    { name: "Nishant ", data: [280, 300, 320, 340, 360, 380, 400, 420, 440, 460, 480, 500] },
                    { name: "Rohit", data: [240, 260, 280, 300, 320, 340, 360, 380, 400, 420, 440, 460] },
             
                ];
                break;
        }

        this.chartOptions = {
            series: series,
            chart: { type: "bar", height: 427, toolbar: { show: false } },
            plotOptions: { bar: { columnWidth: "20px" } },
            dataLabels: { enabled: false },
            colors: ["#0000FF", "#FF0000", ],
            stroke: { width: 7, show: true, colors: ["transparent"] },
            grid: { show: true, strokeDashArray: 0, borderColor: "#edeff5" },
            xaxis: { categories: categories, labels: { style: { colors: "#262626", fontSize: "13px" } } },
            yaxis: { labels: { style: { colors: "#a9a9c8", fontSize: "13px" } } },
            legend: {
                show: true,
                position: 'top',
                fontSize: '13px',
                horizontalAlign: 'center',
                labels: {colors: ["#0000FF", "#FF0000", ]}, // Blue for Team Blue, Red for Team Red
                itemMargin: { horizontal: 15, vertical: 2 },
                markers: { radius: 12, offsetY: -1 }
            }
        };
    }
}
