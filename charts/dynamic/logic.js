// Variable con los datos de prueba
const datos = [[0,1], [1,2], [2,4], [3,3], [4,2], [5,5], [6,2], [7,4], [8,3], [9,2], [10,5]]

// Variable donde vamos a manipular el gráfico
let chart = {};

// Función para dibujar el gráfico
const iniciarGrafico = (data) => {
  chart = Highcharts.chart('container', {
    chart: {
      zoomType: 'x'
    },
    title: {
      text: 'Gráfico dinámico'
    },
    subtitle: {
      text: 'Otro subtítulo de gráfico'
    },
    xAxis: {
      type: 'number',
      title: {
        text: 'Valor de X'
      }
    },
    yAxis: {
      title: {
        text: 'Valor de Y'
      }
    },
    legend: {
      enabled: false
    },
    plotOptions: {
      area: {
        fillColor: {
          linearGradient: {
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 1
          },
          stops: [
            [0, Highcharts.getOptions().colors[0]],
            [1, Highcharts.color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
          ]
        },
        marker: {
          radius: 2
        },
        lineWidth: 1,
        states: {
          hover: {
            lineWidth: 1
          }
        },
        threshold: null
      }
    },

    series: [{
      type: 'area',
      name: 'Valores de prueba',
      data: data
    }]
  });
}

// Invocamos la función para dibujar el gráfico con los valores de prueba
iniciarGrafico(datos);

// Función recursiva para agregar puntos
const agregarPunto = (newPoint) => {

  // Accedemos a la serie de puntos del gráfico y le agregamos un punto aleatorio
  chart.series[0].addPoint([newPoint,Math.round(10*Math.random())]); 

  // Llamada recursiva
  setTimeout(() => {
    agregarPunto(newPoint+1);
  }, 1000);
}

// Invocamos la función de agregar puntos un segundo después de iniciar
setTimeout(() => {
  agregarPunto(11);
}, 1000);
