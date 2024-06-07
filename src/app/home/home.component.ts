import { Component, Renderer2, ElementRef } from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);
import { HttpClient } from '@angular/common/http';
import { IBar1, IBar2, ICity, IData, MasterService } from '../home/master.service';
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
  @Input() title_name: string;
  @Input() chartdate: IBar1[];
  @Input() maxViews: number;
  @Input() views_name: string;
  @Input() uniques_name: string;
  visitors = [
    {count: 18.6, title: 'Unique Visitors'},
    {count: 12.6, title: 'Unique Visitors1'},
    {count: 13.6, title: 'Unique Visitors2'},
    {count: 11.6, title: 'Unique Visitors3'},
  ];


  // maxViews: number;
  // maxViews2: number;

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
    
    // this.service.Getcharttop3().subscribe((result) => {
    //   this.chartdate1 = result;
    //   console.log(result);
    //   this.maxViews = Math.max(...this.chartdate1.map(city => city.views));
    // });

  }
  chartdata: IData[] = [];
  labeldata: any[] = [];
  realdata: any[] = [];

  barchart: ICity[] = [];
  title: any[] = [];
  percent: any[] = [];


  chartdate1: IBar1[] = []
  url: any[] = [];
  views: any[] = [];
  uniques: any[] = [];

  chartdate2: IBar1[] = []
  canal: any[] = [];
  views2: any[] = [];
  uniques2: any[] = [];
  // colordata: any[] = [];

  ngOnInit(): void {
    this.service.Getchartinfo().subscribe((result) => {
      this.chartdata = result;
      this.RenderChart();
    });

    this.service.Getcharttop3().subscribe((result) => {
     this.chartdate1 = result['topbar1'];
     this.chartdate2 = result['topbar2'];
     console.log(this.chartdate1, 'svsfdvs')
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

  // @Input() title_name!: string;
  // @Input() views_name!: string;
  // @Input() uniques_name!: string;
}
