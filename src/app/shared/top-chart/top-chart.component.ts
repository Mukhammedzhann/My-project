import { Component, OnInit, input } from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);
import { HttpClient } from '@angular/common/http';
import { IBar,ChartService } from './chart.service';
import { Input } from '@angular/core';
import { IBar1 } from '../../home/master.service';


@Component({
  selector: 'app-top-chart',
  templateUrl: './top-chart.component.html',
  styleUrl: './top-chart.component.scss'
})
export class TopChartComponent implements OnInit{
  maxViews: number;
  
  @Input() chartdate!: IBar1[];
  @Input() nav_title!: string;
  @Input() title_name!: string
  @Input() view_name!: string;
  @Input() unique_name!: string;
  @Input() icon!: string;
  @Input() color!: string;


  constructor(private service: ChartService,
  ) {
    // this.service.Getcharttop().subscribe((result) => {
    //   this.chartdate = result;
    //   console.log(result);
    //   this.maxViews = Math.max(...this.chartdate.map(city => city.views));
    // });
  }
  ngOnInit(): void {
    console.log(this.chartdate, 'input parameter');
    this.maxViews = Math.max(...this.chartdate.map(city => city.view));
    console.log(this.maxViews, 'SFVd');
    // this.service.Getcharttop().subscribe((result) => {
    //   this.chartdate = result;
    //  console.log(result);
    // });
  }

}
