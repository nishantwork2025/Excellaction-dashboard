
import { DatePipe } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterLink, RouterOutlet } from '@angular/router';
import {
    ApexChart,
    ApexAxisChartSeries,
    ChartComponent,
    ApexDataLabels,
    ApexPlotOptions,
    ApexYAxis,
    ApexXAxis,
    ApexLegend,
    ApexGrid,
    NgApexchartsModule
} from "ng-apexcharts";
import { FeathericonsModule } from '../../../icons/feathericons/feathericons.module';
import { StatsComponent } from '../../../my-profile/stats/stats.component';
import { AboutProjectComponent } from '../../../pages/project-management-page/pm-project-details/about-project/about-project.component';
import { AttachmentsComponent } from '../../../pages/project-management-page/pm-project-details/attachments/attachments.component';
import { TeamMembersComponent } from '../../../pages/users-page/team-members/team-members.component';
import { TgwAsynchronouslyLoadingTcComponent } from '../../../ui-elements/tabs/tgw-asynchronously-loading-tc/tgw-asynchronously-loading-tc.component';
import { UtwaCustomLabelTemplateComponent } from '../../../ui-elements/tabs/utwa-custom-label-template/utwa-custom-label-template.component';

export type ChartOptions = {
    series: ApexAxisChartSeries;
    chart: ApexChart;
    dataLabels: ApexDataLabels;
    plotOptions: ApexPlotOptions;
    yaxis: ApexYAxis;
    xaxis: ApexXAxis;
    grid: ApexGrid;
    colors: string[];
    legend: ApexLegend;
};

@Component({
  selector: 'app-open-task',
  standalone: true,
  imports: [
    RouterLink,
    MatCardModule,
    MatTabsModule,
    TgwAsynchronouslyLoadingTcComponent,
    UtwaCustomLabelTemplateComponent,
    DatePipe,
    RouterOutlet,
    StatsComponent,
    TeamMembersComponent,
    AboutProjectComponent,
    AttachmentsComponent,
    FeathericonsModule,
    NgApexchartsModule,
  ],
  templateUrl: './open-task.component.html',
  styleUrl: './open-task.component.scss'
})
export class OpenTaskComponent {

    @ViewChild("chart") chart: ChartComponent;
    public chartOptions: Partial<ChartOptions>;

    constructor() {
        this.chartOptions = {
            series: [
                {
                    name: "distibuted",
                    data: [21, 22, 10, 28, 16, 21, 13, 30]
                }
            ],
            chart: {
                height: 350,
                type: "bar",
                events: {
                    click: function(chart, w, e) {
                        // console.log(chart, w, e)
                    }
                }
            },
            colors: [
                "#3761ee",
                "#796df6",
                "#00cae3",
                "#ffb264",
                "#2ed47e",
                "#e74c3c",
                "#26a69a",
                "#d10ce8"
            ],
            plotOptions: {
                bar: {
                    columnWidth: "45%",
                    distributed: true
                }
            },
            dataLabels: {
                enabled: false
            },
            legend: {
                show: false,
                offsetY: 10,
                fontSize: '13px',
                position: "bottom",
                horizontalAlign: "center",
                labels: {
                    colors: '#77838f',
                },
                itemMargin: {
                    horizontal: 15,
                    vertical: 5
                }
            },
            grid: {
                show: true,
                strokeDashArray: 5,
                borderColor: "#edeff5",
                row: {
                    colors: ["#f4f6fc", "transparent"], // takes an array which will be repeated on columns
                    opacity: 0.5
                }
            },
            xaxis: {
                categories: [
                    ["John", "Doe"],
                    ["Joe", "Smith"],
                    ["Jake", "Williams"],
                    "Amber",
                    ["Peter", "Brown"],
                    ["Mary", "Evans"],
                    ["David", "Wilson"],
                    ["Lily", "Roberts"]
                ],
                labels: {
                    show: true,
                    style: {
                        colors: [
                            "#3761ee",
                            "#796df6",
                            "#00cae3",
                            "#ffb264",
                            "#2ed47e",
                            "#e74c3c",
                            "#26a69a",
                            "#d10ce8"
                        ],
                        fontSize: "13px"
                    }
                },
                axisBorder: {
                    show: false,
                    color: '#a9a9c8'
                },
                axisTicks: {
                    show: true,
                    color: '#a9a9c8',
                    borderType: 'dotted'
                }
            },
            yaxis: {
                labels: {
                    show: true,
                    style: {
                        colors: "#a9a9c8",
                        fontSize: "13px"
                    }
                },
                axisBorder: {
                    show: false,
                    color: '#edeff5'
                }
            }
        };
    }

}
