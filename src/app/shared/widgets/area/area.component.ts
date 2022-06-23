import { Component, OnInit } from '@angular/core';
import * as Highcharts from "highcharts";
// The exporting module allows your users to download the chart as PDF, PNG, JPG or SVG vector images
// https://rdrr.io/cran/highcharter/man/hc_exporting.html
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-widget-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css']
})

export class AreaComponent implements OnInit {

  constructor() { 
    
  }
  chartOptions: {};
  Highcharts = Highcharts;

  ngOnInit(): void { 
    HC_exporting(this.Highcharts);
    this.chartOptions = {
        chart: {
            type: 'area'
        },
        title: {
            text: 'Process Monitoring'
        },
        subtitle: {
            text: 'Status Of Processes Going on'
        },
        xAxis: {
            categories: ['1 June 22', '2 June 22', '3 June 22', '4 June 22', '5 June 22', '6 June 22', '7 June 22'],
            tickmarkPlacement: 'on',
            title: {
                enabled: false
            }
        },
        yAxis: {
            title: {
                text: 'Thousands'
            },
            // labels: {
            //     formatter: function ():any {
            //         return this.value / 1000;
            //     }
            // }
        },
        tooltip: {
            split: true,
            valueSuffix: 'Thousand'
        },
        plotOptions: {
            area: {
                stacking: 'normal',
                lineColor: '#666666',
                lineWidth: 1,
                marker: {
                    lineWidth: 1,
                    lineColor: '#666666'
                }
            }
        },
        series: [{
            name: 'Completed',
            data: [502, 635, 809, 947, 1402, 3634, 5268]
        }, {
            name: 'Processing',
            data: [106, 107, 111, 133, 221, 767, 1766]
        }, {
            name: 'Waiting',
            data: [163, 203, 276, 408, 547, 729, 628]
        }, {
            name: 'Failed',
            data: [18, 31, 54, 156, 339, 818, 1201]
        }, {
            name: 'Not Ready',
            data: [2, 2, 2, 6, 13, 30, 46]
        }]
    };

    HC_exporting(Highcharts);
    setTimeout(()=>window.dispatchEvent(new Event('resize')), 2000)
  }

  

}



