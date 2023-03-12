import { Component, ElementRef, ViewEncapsulation } from '@angular/core';
import { Chart, ChartDataset } from 'chart.js';
import {
  LineElement,
  PointElement,
  LineController,
  CategoryScale,
  LinearScale,
  Filler,
  Title,
  Tooltip
} from 'chart.js';

Chart.register(
  LineElement,
  PointElement,
  LineController,
  CategoryScale,
  LinearScale,
  Filler,
  Title,
  Tooltip
);

@Component({
  encapsulation: ViewEncapsulation.ShadowDom,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private elRef: ElementRef) {}

  private chartDatasets: ChartDataset[] = [
    {
      data: []
    }
  ];

  private myChart;
  private ctx;

  ngOnInit() {
    this.ctx = this.elRef.nativeElement.shadowRoot
      .getElementById('chart')
      .getContext('2d');

    Chart.defaults.events = ['pointerdown', 'pointerleave', 'pointerup'];
    Chart.defaults.interaction.intersect = false;
    Chart.defaults.interaction.axis = 'xy';

    this.newChart();
    this.myChart.update();
  }

  private newChart() {
    this.myChart = new Chart(this.ctx, {
      type: 'line',
      data: {
        labels: [],
        datasets: this.chartDatasets
      },
      options: {
        scales: {
          x: {
            type: 'linear'
          }
        },
        plugins: {
          tooltip: {
            mode: 'nearest',
            events: ['mousedown', 'mouseup', 'mouseleave']
          }
        },
        hover: {
          mode: 'nearest'
        }
      }
    });
    this.chartDatasets[0].data = [
      { x: 0, y: 40 },
      { x: 1, y: 40 },
      { x: 2, y: 25 },
      { x: 3, y: 79 },
      { x: 4, y: 0 }
    ];
    this.chartDatasets[0].hoverBackgroundColor = 'red';
  }
}
