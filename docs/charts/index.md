---
title: Charts
layout: docs
description: View all charts examples
plugin:
  charts: true
---
{% include edit-on-github.md %}


## Example

<div class="ct-example">

<div class="card shadow-xs border mb-3">
  <div class="card-body p-3 mt-7">
    <div class="chart mt-n6">
      <canvas id="chart-line" class="chart-canvas" height="300px"></canvas>
    </div>
  </div>
</div>

</div>

{% tabs log %}

{% tab log html %}
```html
<!-- HTML -->
<div class="card shadow-xs border mb-3">
  <div class="card-body p-3 mt-7">
    <div class="chart mt-n6">
      <canvas id="chart-line" class="chart-canvas" height="300px"></canvas>
    </div>
  </div>
</div>
```

<div class="my-2"></div>
```javascript
// Javascript
<script src="{{ root }}assets/js/plugins/chartjs.min.js" type="text/javascript"></script>

<script>

var ctx = document.getElementById("chart-line").getContext("2d");

const gradient = ctx.createLinearGradient(0, 230, 0, 50);
gradient.addColorStop(1, 'rgba(27,70,194, 0.4)');
gradient.addColorStop(0.2, 'rgba(72, 72, 176, 0.0)');
gradient.addColorStop(0, 'rgba(155, 119, 255, 0)');

new Chart(ctx, {
  type: "line",
  data: {
    labels: [
      'Sep 21',
      'Sep 22',
      'Sep 23',
      'Sep 24',
      'Sep 25',
      'Sep 25',
      'Sep 27',
    ],
    datasets: [
      {
        label: 'Volume',
        data: ['46.17', '47.73', '47.79', '48.02', '46.38', '46.74', '48.12'],
        fill: 'start',
        backgroundColor: gradient,
        borderColor: '#1b46c2',
        borderWidth: 2,
        pointRadius: 3,
        pointBorderColor: '#1b46c2',
        pointBackgroundColor: '#1b46c2',
        tension: 0.3,
      },
    ],
  },
  options: {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      // show legends for our graph
      legend: {
        display: false,
        position: 'top',
        align: 'end',
        labels: {
          boxWidth: 7,
          boxHeight: 7,
          pointStyle: 'circle',
          usePointStyle: true,
          color: '#59647e',
          font: {
            weight: '500',
          },
        },
      },
      tooltip: {
        boxPadding: 4,
        boxWidth: 8,
        boxHeight: 8,
        usePointStyle: true,
        backgroundColor: 'white',
        bodyColor: '#59647e',
        titleColor: '#59647e',
        padding: 12,
        borderColor: 'rgba(89, 100, 126, .2)',
        borderWidth: 1,
        bodyFont: {
          weight: '500',
        },
      },
    },
    //   show the x and y scales
    scales: {
      x: {
        grid: {
          drawBorder: false,
          display: false,
        },
        ticks: {
          display: true,
          color: '#59647e',
          font: {
            size: 12,
            family: 'Montserrat ,sans-serif',
          },
        },
      },
      y: {
        display: true,
        grid: {
          borderDash: [5, 5],
          drawBorder: false,
          display: true,
          color: 'rgba(89, 100, 126, .1)',
        },
        ticks: {
          stepSize: 1,
          display: true,
          callback: (value) => {
            return value;
          },
          color: '#59647e',
          font: {
            size: 12,
            family: 'Montserrat ,sans-serif',
          },
        },
      },
    },
    // show tooltip on hover near the points
    interaction: {
      intersect: false,
      mode: 'index',
    },
    //   animate in
    animation: {
      duration: 1,
    },
  },
});
</script>
```
{% endtab %}

{% tab log React %}
```javascript
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  ScriptableContext,
} from 'chart.js';

const ElrondChart = () => {

  const optionsLine: ChartOptions = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      // show legends for our graph
      legend: {
        display: false,
        position: 'top',
        align: 'end',
        labels: {
          boxWidth: 7,
          boxHeight: 7,
          pointStyle: 'circle',
          usePointStyle: true,
          color: '#59647e',
          font: {
            weight: '500',
          },
        },
      },
      tooltip: {
        boxPadding: 4,
        boxWidth: 8,
        boxHeight: 8,
        usePointStyle: true,
        backgroundColor: 'white',
        bodyColor: '#59647e',
        titleColor: '#59647e',
        padding: 12,
        borderColor: 'rgba(89, 100, 126, .2)',
        borderWidth: 1,
        bodyFont: {
          weight: '500',
        },
      },
    },
    //   show the x and y scales
    scales: {
      x: {
        grid: {
          drawBorder: false,
          display: false,
        },
        ticks: {
          display: true,
          color: '#59647e',
          font: {
            size: 12,
            family: 'Montserrat ,sans-serif',
          },
        },
      },
      y: {
        display: true,
        grid: {
          borderDash: [5, 5],
          drawBorder: false,
          display: true,
          color: 'rgba(89, 100, 126, .1)',
        },
        ticks: {
          stepSize: 1,
          display: true,
          callback: (value) => {
            return value;
          },
          color: '#59647e',
          font: {
            size: 12,
            family: 'Montserrat ,sans-serif',
          },
        },
      },
    },
    // show tooltip on hover near the points
    interaction: {
      intersect: false,
      mode: 'index',
    },
    //   animate in
    animation: {
      duration: 1,
    },
  };

  const data = () => {
    return {
      labels: [
        'Sep 21',
        'Sep 22',
        'Sep 23',
        'Sep 24',
        'Sep 25',
        'Sep 25',
        'Sep 27',
      ],
      datasets: [
        {
          label: 'Volume',
          data: ['46.17', '47.73', '47.79', '48.02', '46.38', '46.74', '48.12'],
          fill: 'start',
          backgroundColor: (context: ScriptableContext<'line'>) => {
            const ctx = context.chart.ctx;
            const gradient = ctx.createLinearGradient(0, 230, 0, 50);
            gradient.addColorStop(1, 'rgba(27,70,194, 0.4)');
            gradient.addColorStop(0.2, 'rgba(72, 72, 176, 0.0)');
            gradient.addColorStop(0, 'rgba(155, 119, 255, 0)');
            return gradient;
          },
          borderColor: '#1b46c2',
          borderWidth: 2,
          pointRadius: 3,
          pointBorderColor: '#1b46c2',
          pointBackgroundColor: '#1b46c2',
          tension: 0.3,
        },
      ],
    };
  };

  return (
    <>
      <div className="card-body p-3 mt-7">
        <div className="chart mt-n6" style={{ height: '300px' }}>
          <Line data={data()} options={optionsLine} />
        </div>
      </div>
    </>
  );
};
```
{% endtab %}

{% endtabs %}
