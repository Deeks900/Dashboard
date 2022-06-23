import { Component, OnInit } from '@angular/core';
import * as Highcharts from "highcharts";
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-widget-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  Highcharts = Highcharts;
  
  chartOptions = {};
  constructor() { }

  ngOnInit(): void {
    HC_exporting(this.Highcharts);
    this.chartOptions = {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'PocMon Pie Chart'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %'
            }
        }
    },
    series: [{
        name: 'Tasks',
        colorByPoint: true,
        data: [{
            name: 'Completed',
            y: 61.41,
            sliced: true,
            selected: true
        }, {
            name: 'Processed',
            y: 11.84
        }, {
            name: 'Waiting',
            y: 10.85
        }, {
            name: 'Failure',
            y: 4.67
        }, {
            name: 'Not Ready',
            y: 4.18
        }, 
         ]
    }]
    }
    HC_exporting(this.Highcharts);
  }

}
