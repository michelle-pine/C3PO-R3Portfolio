import { Injectable } from "@angular/core";
import { ColorServiceService } from "./color-service.service";

@Injectable({
  providedIn: "root"
})
export class DateRangeService {

  legendPosition = "right";
  public barChartOptionsStacked: any;
  public barChartOptions:any;
  public barChartLabels: string[] = ["1", "2", "3", "4", "5", "6", "7"];
  public barChartType: string = "bar";
  public barChartLegend: boolean = true;
  public barChartData: any[];
  public barChartDataStacked: any[];

  constructor(private colorService: ColorServiceService) {
    this.barChartData = [
      { data: [65, 59, 80, 81, 56, 55, 60], label: "Series A", error:[10,10,10,10,10,10,10] }
    ];
    this.barChartDataStacked = [
      {
        data: [0, 8, 3, 2, 1, 2, 6], 

      },
      {
        data: [0, 2, 3, 5, 6, 2, 2]
      },
      {
        data: [0, 1, 0, 2, 0, 1, 3]
      },
      {
        data: [5, 2, 2, 3, 1, 5, 7]
      },
      {
        data: [0, 1]
      },
      {
        data: [0, 2]
      },
      {
        data: [6, 1]
      },
      {
        data: [0, 2]
      }
    ];
    this.barChartOptionsStacked = {
      scaleShowVerticalLines: false,
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        position: this.legendPosition
      },
      scales: {
        xAxes: [
          {
            stacked: true,
            scaleLabel: {
              display: true,
           
            }
          }
        ],
        yAxes: [
          {
            stacked: true 
          }
        ]
      }
    };
    this.barChartOptions =  {
      scaleShowVerticalLines: false,
      responsive: true,
      legend: {
        position: this.legendPosition,
        display:false
      },
      maintainAspectRatio: false,
      scales: {
        xAxes: [
          {
            scaleLabel: {
              display: true,
    
            }
          }
        ]
      }
    };

  }

  changeLegend(dir) {
    this.legendPosition = dir;
    this.barChartOptions.legend.position = dir;
    this.barChartOptionsStacked.legend.position = dir;
  
  }
}
