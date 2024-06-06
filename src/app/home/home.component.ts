import { Component, Renderer2, ElementRef } from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);
import { HttpClient } from '@angular/common/http';
import { ICity, IData, MasterService } from '../home/master.service';
import { Input } from '@angular/core';
@Component({
  selector: 'app-home',
  // standalone: true,
  // imports: [],
  templateUrl: './home.component.html',

  // template: "<h2>О сайте</h2>",
  styleUrl: './home.component.scss',

  
})
export class HomeComponent {
  @Input() city!: string;

  selectedButton: string | null = null;

  selectButton(button: string) {
    this.selectedButton = button;
  }
  maxPercent: number;
  // GetCustomer(){
  //   return this.http.get("http://localhost:3000/sales")
  // }
  constructor(private service: MasterService,
    private renderer: Renderer2,
    private el: ElementRef
  ) {
    this.service.Getchartcity().subscribe((result) => {
      this.barchart = result;
      console.log(result);
      this.maxPercent = Math.max(...this.barchart.map(city => city.percent));
    });
    
    
  }
  chartdata: IData[] = [];
  labeldata: any[] = [];
  realdata: any[] = [];

  barchart: ICity[] = [];
  title: any[] = [];
  percent: any[] = [];

  // colordata: any[] = [];

  ngOnInit(): void {
    this.service.Getchartinfo().subscribe((result) => {
      this.chartdata = result;
      this.RenderChart();
    });

    this.service.Getchartcity().subscribe((result) => {
      this.barchart = result;
     console.log(result);
    });

   
  }

  RenderChart() {
    const chartCanvas = this.el.nativeElement.querySelector('#plechart');
    const myChart = new Chart('plechart', {
      type: 'bar',
      data: {
        labels: [...this.chartdata.map(d => d.year)],
        datasets: [
          {
            label: '# of Votes',
            data: [...this.chartdata.map(d => d.amount)],
            // data: this.chartdata,
            backgroundColor: ['#3C50E0'],
            borderColor: ['#3C50E0'],
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
    // setTimeout(() => {
    //   this.renderer.removeStyle(chartCanvas, 'height');
    //   this.renderer.removeStyle(chartCanvas, 'width');
    //   // this.renderer.removeAttribute(chartCanvas, 'width');
    //   //   this.renderer.removeAttribute(chartCanvas, 'height');
    //   this.renderer.setStyle(chartCanvas, 'width', '1290px'); // Устанавливаем ширину в 100%
    //   this.renderer.setStyle(chartCanvas, 'height', '397px'); // Устанавливаем высоту автоматически
    // }, 100);
    // this.renderer.setStyle(chartCanvas, 'display', ''); 
    // this.renderer.setStyle(chartCanvas, 'box-sizing', '');
  }
}
