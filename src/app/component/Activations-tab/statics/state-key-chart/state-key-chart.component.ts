

import { Component, ViewChild, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';
import {
    ApexAxisChartSeries,
    ApexChart,
    ChartComponent,
    ApexDataLabels,
    ApexPlotOptions,
    ApexYAxis,
    ApexGrid,
    ApexTitleSubtitle,
    ApexXAxis,
    ApexFill,
    ApexLegend,
    NgApexchartsModule
} from "ng-apexcharts";

export type ChartOptions = {
    series: ApexAxisChartSeries;
    chart: ApexChart;
    dataLabels: ApexDataLabels;
    plotOptions: ApexPlotOptions;
    grid: ApexGrid;
    yaxis: ApexYAxis;
    colors: any;
    xaxis: ApexXAxis;
    fill: ApexFill;
    title: ApexTitleSubtitle;
    legend: ApexLegend;
};

@Component({
    selector: 'app-statics',
    standalone: true,
    imports: [RouterLink, MatCardModule, NgApexchartsModule],
    templateUrl: './state-key-chart.component.html',
    styleUrl: './state-key-chart.component.scss'
  })
  export class StateKeyChartComponent implements OnInit {

    @ViewChild("chart") chart: ChartComponent;
    public chartOptions: Partial<ChartOptions>;

    constructor() {}

    ngOnInit() {
        this.loadStateWiseData();
    }

    loadStateWiseData() {
        this.chartOptions = {
            series: [
                {
                    name: "Regular Key",
                    data: [120, 80, 150, 200, 130, 90, 170, 140, 110, 190, 160, 180]
                },
                {
                    name: "Smart Key",
                    data: [100, 60, 130, 180, 110, 70, 150, 120, 90, 170, 140, 160]
                }
            ],
            chart: {
                height: 400,
                type: "bar",
                toolbar: {
                    show: true
                }
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: "50%",

                      // endingShape: "rounded" as "flat" | "rounded"
                 
                }
            },
            dataLabels: {
                enabled: true,
                formatter: (val) => val.toString(),
                style: {
                    fontSize: "12px"
                }
            },
            xaxis: {
                categories: [
                    "Uttar Pradesh", "Maharashtra", "Bihar", "West Bengal", "Madhya Pradesh", 
                    "Tamil Nadu", "Rajasthan", "Karnataka", "Gujarat", "Andhra Pradesh", 
                    "Odisha", "Telangana"
                ],
                labels: {
                    rotate: -45,
                    style: {
                        fontSize: "13px"
                    }
                }
            },
            yaxis: {
                title: {
                    text: "Activations"
                }
            },
            colors: ["#3761ee", "#e74c3c"],
            title: {
                text: "Smart & Regular Key Activations by Indian States",
                align: "center",
                style: {
                    fontSize: "16px"
                }
            },
            grid: {
                borderColor: "#e0e0e0"
            },
            legend: {
                position: "top",
                horizontalAlign: "right"
            },
            fill: {
                opacity: 1
            }
        };
    }
}

