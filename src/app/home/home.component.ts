import { Component, Renderer2, ElementRef } from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);
import { HttpClient } from '@angular/common/http';
import { MasterService } from '../home/master.service';
@Component({
  selector: 'app-home',
  // standalone: true,
  // imports: [],
  templateUrl: './home.component.html',

  // template: "<h2>О сайте</h2>",
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  selectedButton: string | null = null;

  selectButton(button: string) {
    this.selectedButton = button;
  }

  // GetCustomer(){
  //   return this.http.get("http://localhost:3000/sales")
  // }
  constructor(private service: MasterService,
    private renderer: Renderer2,
    private el: ElementRef
  ) {}
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
    const chartCanvas = this.el.nativeElement.querySelector('#plechart');
    const myChart = new Chart('plechart', {
      type: 'bar',
      data: {
        labels: [
          this.labeldata,
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
            data: [12, 19, 3, 5, 2, 3, 100, 50,150,180],
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
    setTimeout(() => {
      this.renderer.removeStyle(chartCanvas, 'height');
      this.renderer.removeStyle(chartCanvas, 'width');
      // this.renderer.removeAttribute(chartCanvas, 'width');
      //   this.renderer.removeAttribute(chartCanvas, 'height');
      this.renderer.setStyle(chartCanvas, 'width', '1290px'); // Устанавливаем ширину в 100%
      this.renderer.setStyle(chartCanvas, 'height', '397px'); // Устанавливаем высоту автоматически
    }, 100);
    this.renderer.setStyle(chartCanvas, 'display', ''); 
    this.renderer.setStyle(chartCanvas, 'box-sizing', '');
  }
}
