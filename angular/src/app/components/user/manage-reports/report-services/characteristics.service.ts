import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CharacteristicsService {
  public pieChartLabels:string[] = ['1', '2', '3'];
  public pieChartData:number[] = [300, 500, 100];
  public pieChartType:string = 'pie';
  public pieChartOptions =  {
    scaleShowVerticalLines: false,
    responsive: true,
    legend: {
      position: "right"
    },
    maintainAspectRatio: true,
    
  };
  

  constructor() { }

  changeLegend(dir) {

    this.pieChartOptions.legend.position = dir;
 
  
  }
}
