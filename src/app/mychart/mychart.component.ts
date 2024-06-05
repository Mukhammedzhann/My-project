import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);
import { HttpClient } from '@angular/common/http';
import { MasterService } from '../home/master.service';

@Component({
  selector: 'app-mychart',
  // standalone: true,
  // imports: [],
  templateUrl: './mychart.component.html',
  styleUrl: './mychart.component.scss',
})
export class MychartComponent implements OnInit {
  constructor(private service: MasterService) {}

  // GetCustomer(){
  //   return this.http.get("http://localhost:3000/sales")
  // }

  chartdata: any;
  labeldata: any[] = [];
  realdata: any[] = [];
  // colordata: any[] = [];

  ngOnInit(): void {
    this.service.Getchartinfo().subscribe((result) => {
      this.chartdata = result;
      if ((this.chartdata! = null)) {
        for (let i = 0; i < this.chartdata.length; i++)
          console.log(this.chartdata[i]);
        // this.labeldata.push(this.chartdata[i].label);
        //   this.realdata.push(this.chartdata[i].amount);
      }
    });
     this.RenderChart();
  }

  RenderChart() {
    const myChart = new Chart('plechart', {
      type: 'bar',
      data: {
        labels: [this.labeldata,
          '1',
          '2',
          '3',
          '4',
          '4',
          '5',
          '6',
          '7',
          '8',
          '9',
          '10',
          '11',
          '12',
          '13',
          '14',
          '15',
          '16',
          '17',
          '18',
          '19',
          '20',
          '21',
          '22',
          '23',
          '24',
          '25',
          '26',
          '27',
          '28',
          '29',
          '30',
        ],
        datasets: [
          {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3,100,50],
            // data: this.chartdata,
            backgroundColor: ['#3C50E0',
            ],
            borderColor: [
              '#3C50E0',
            ],
            borderWidth: 1,
            borderRadius: 5,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }
}
