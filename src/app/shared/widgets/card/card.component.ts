import { Component, OnInit } from '@angular/core';
import * as Highcharts from "highcharts";
import HC_exporting from 'highcharts/modules/exporting';
// Don't forget to add this module for drilldown
import Drilldown from 'highcharts/modules/drilldown';
Drilldown(Highcharts);
// import more from 'highcharts/highcharts-more.src';
@Component({
  selector: 'app-widget-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  Highcharts = Highcharts;
  
  chartOptions = {};
  constructor() { }

  // Drilldown is a nice Concept here!
  ngOnInit(): void {
    this.chartOptions = {

      chart: {
        type: 'column'
    },
    title: {
        align: 'left',
        text: 'Processes Summary'
    },
    subtitle: {
      enabled: false
        // align: 'left',
        // text: 'Click the columns to view versions. Source: <a href="http://statcounter.com" target="_blank">statcounter.com</a>'
    },
    accessibility: {
        announceNewData: {
            enabled: true
        }
    },
    xAxis: {
      type: 'category',
      title: {
        text: 'Task States'
    },
    },
    yAxis: {
        title: {
            text: 'Tasks Completed'
        }

    },
    legend: {
        enabled: false
    },
    plotOptions: {
        series: {
            borderWidth: 0,
            dataLabels: {
                enabled: true,
                format: '{point.y:.1f}%'
            }
        }
    },

    tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
    },

    series: [
        {
            name: "Tasks",
            colorByPoint: true,
            data: [
                {
                    name: "Completed",
                    y: 100,
                    drilldown: "Completed"
                },
                {
                    name: "Processing",
                    y: 40,
                    drilldown: "Processing"
                },
                {
                    name: "Waiting",
                    y: 8,
                    drilldown: "Waiting"
                },
                {
                    name: "Failed",
                    y: 10,
                    drilldown: "Failed"
                },
                {
                    name: "Not Ready",
                    y: 5,
                    drilldown: "Not Ready"
                },
            ]
        }
    ],
    drilldown: {
      // Breadcrumbs show you the entire path in drilldown
        breadcrumbs: {
            position: {
                align: 'right'
            }
        },
        series: [
            {
              name: "Completed",
                id: "Completed",
                data: [
                  [
                    "Recently Completed",
                   2
                  ],
                  [
                    "Completed In One Go",
                     5
                  ],
                  [
                    "Failed Once",
                     9
                  ]
                ]
            },
            {
               
                id: "Processing",
                data: [
                  ['Recently Processed', 8],
                  ['Failed Once', 9]
                ]
            },
            {

                id: "Waiting",
                data: [
                  ['abc', 8],
                  ['xyz', 9]
                ]
            },
            {
                name: "Failed",
                id: "Safari",
                data: [
                  ['pqr', 8],
                  ['tuv', 9]
                ]
            },
            {
                
                id: "Not Ready",
                data: [
                  ['About to Move', 5],
                  ['Need Time', 10]
                ]
            },
        ]
    }
    }
    HC_exporting(this.Highcharts);
  }

}
