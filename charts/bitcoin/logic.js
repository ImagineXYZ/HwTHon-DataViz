// Función para dibujar el gráfico
const iniciarGrafico = (data) => {

  Highcharts.chart('container', {
    chart: {
      zoomType: 'x'
    },
    title: {
      text: 'Gráfico bitcoin'
    },
    subtitle: {
      text: 'Destructor de sueños'
    },
    xAxis: {
      type: 'datetime',
      title: {
        text: 'Día'
      }
    },
    yAxis: {
      title: {
        text: 'Precio Bitcoin'
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
      name: 'Valor en dólares',
      data: data
    }]
  });
}


// Variable con la dirección de donde obtendremos el dato
const BITCOIN_URL = 'https://api.coindesk.com/v1/bpi/historical/close.json?start=2020-07-07&end=2022-07-07';

// Función para obtener la información
const getBitcoinData = async () => {
  try {

    // Variable donde se irá almacenando la información obtenida
    let pureData = [];

    // Función que hace el llamado HTTP
    const response = await axios.get(BITCOIN_URL);

    // Respuesta de la información
    const fullInfo = response.data;
    console.log(`Toda la información`, fullInfo);

    // Ciclo para guardar la información de la forma requerida por Highcharts
    for (let index = 0; index < Object.keys(fullInfo.bpi).length; index++) {
      const key = Object.keys(fullInfo.bpi)[index];
      pureData.push([new Date(key).getTime(), fullInfo.bpi[key]]); 
    }

    return pureData;
  } catch (errors) {
    console.error(errors);
  }
};

// Invocamos la función para obtener los datos que al finalizar invoca la función de iniciar el gráfico 
getBitcoinData().then(data => {
  iniciarGrafico(data);
});