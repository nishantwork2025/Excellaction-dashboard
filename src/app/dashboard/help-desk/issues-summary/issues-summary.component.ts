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
    selector: 'app-issues-summary',
    standalone: true,
    imports: [RouterLink, MatCardModule, MatButtonModule, MatMenuModule, NgApexchartsModule],
    templateUrl: './issues-summary.component.html',
    styleUrl: './issues-summary.component.scss'
})
export class IssuesSummaryComponent {

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
                    { name: "Pending Issues", data: [5, 10, 15, 8] },
                    { name: "Fixed Issues", data: [2, 5, 10, 12] },
                    { name: "Closed Issues", data: [1, 3, 7, 6] },
                    { name: "New Issues", data: [4, 6, 9, 10] }
                ];
                break;

            case 'This Week':
                categories = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
                series = [
                    { name: "Pending Issues", data: [20, 25, 30, 28, 35, 40, 50] },
                    { name: "Fixed Issues", data: [15, 18, 22, 20, 25, 30, 35] },
                    { name: "Closed Issues", data: [10, 12, 15, 13, 18, 22, 28] },
                    { name: "New Issues", data: [12, 15, 18, 17, 20, 25, 30] }
                ];
                break;

            case 'This Month':
                categories = Array.from({ length: 30 }, (_, i) => `Day ${i + 1}`);
                series = [
                    { name: "Pending Issues", data: Array.from({ length: 30 }, () => Math.floor(Math.random() * 50) + 10) },
                    { name: "Fixed Issues", data: Array.from({ length: 30 }, () => Math.floor(Math.random() * 40) + 5) },
                    { name: "Closed Issues", data: Array.from({ length: 30 }, () => Math.floor(Math.random() * 30) + 5) },
                    { name: "New Issues", data: Array.from({ length: 30 }, () => Math.floor(Math.random() * 35) + 5) }
                ];
                break;

            case 'This Year':
                categories = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
                series = [
                    { name: "Pending Issues", data: [280, 300, 320, 340, 360, 380, 400, 420, 440, 460, 480, 500] },
                    { name: "Fixed Issues", data: [240, 260, 280, 300, 320, 340, 360, 380, 400, 420, 440, 460] },
                    { name: "Closed Issues", data: [190, 210, 230, 250, 270, 290, 310, 330, 350, 370, 390, 410] },
                    { name: "New Issues", data: [170, 190, 210, 230, 250, 270, 290, 310, 330, 350, 370, 390] }
                ];
                break;
        }

        this.chartOptions = {
            series: series,
            chart: { type: "bar", height: 427, toolbar: { show: false } },
            plotOptions: { bar: { columnWidth: "50px" } },
            dataLabels: { enabled: false },
            colors: ["#74ABFF", "#AAE2FF", "#E4D4F6", "#CE93D8"],
            stroke: { width: 7, show: true, colors: ["transparent"] },
            grid: { show: true, strokeDashArray: 0, borderColor: "#edeff5" },
            xaxis: { categories: categories, labels: { style: { colors: "#262626", fontSize: "13px" } } },
            yaxis: { labels: { style: { colors: "#a9a9c8", fontSize: "13px" } } },
            legend: {
                show: true,
                position: 'top',
                fontSize: '13px',
                horizontalAlign: 'center',
                labels: { colors: '#77838f' },
                itemMargin: { horizontal: 15, vertical: 2 },
                markers: { radius: 12, offsetY: -1 }
            }
        };
    }
}
