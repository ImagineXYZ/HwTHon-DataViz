// Variable con los datos de prueba
const datos = [[0,1], [1,2], [2,4], [3,3], [4,2], [5,5], [6,2], [7,4], [8,3], [9,2], [10,5]]

// Función para dibujar el gráfico
const iniciarGrafico = (data) => {

  Highcharts.chart('container', {
    chart: {
      zoomType: 'x'
    },
    title: {
      text: 'Gráfico estático'
    },
    subtitle: {
      text: 'Subtítulo del gráfico'
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