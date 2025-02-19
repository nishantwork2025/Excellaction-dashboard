
import { Component, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { RouterLink } from '@angular/router';
import {
    ApexAxisChartSeries,
    ApexChart,
    ChartComponent,
    ApexXAxis,
    ApexYAxis,
    ApexDataLabels,
    ApexTooltip,
    ApexStroke,
    NgApexchartsModule
} from "ng-apexcharts";

export type ChartOptions = {
    series: ApexAxisChartSeries;
    chart: ApexChart;
    xaxis: ApexXAxis;
    yaxis: ApexYAxis;
    dataLabels: ApexDataLabels;
    tooltip: ApexTooltip;
    stroke: ApexStroke;
    colors: string[];
};

@Component({
    selector: 'app-average-response-time',
    standalone: true,
    imports: [NgApexchartsModule, MatCardModule, MatButtonModule, MatMenuModule,],
    templateUrl: './average-response-time.component.html',
    styleUrl: './average-response-time.component.scss'
})
export class AverageResponseTimeComponent {

    @ViewChild("chart") chart: ChartComponent;
    public chartOptions: Partial<ChartOptions>;

    constructor() {
        this.chartOptions = {
            series: [
                {
                    name: "Avg Resolution Time (Hours)",
                    data: [5.2, 4.8, 6.3, 5.9, 7.1] // Y-axis: Avg time per day
                }
            ],
            chart: {
                type: "line",
                height: 350
            },
            colors: ["#008FFB"], // Blue color
            xaxis: {
                categories: ["2024-02-10", "2024-02-11", "2024-02-12", "2024-02-13", "2024-02-14"], // X-axis: Dates
                title: {
                    text: "Date"
                }
            },
            yaxis: {
                title: {
                    text: "Resolution Time (Hours)"
                }
            },
            stroke: {
                curve: "smooth",
                width: 2
            },
            dataLabels: {
                enabled: true
            },
            tooltip: {
                enabled: true,
                y: {
                    formatter: function (val) {
                        return val + " hours"; // Tooltip will show "5.2 hours"
                    }
                }
            }
        };
    }
}
