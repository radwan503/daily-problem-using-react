import React, { useEffect } from 'react';
import Highcharts from 'highcharts/highmaps';
import HighchartsMap from 'highcharts/modules/map';
import HighchartsExporting from 'highcharts/modules/exporting';
import HighchartsOfflineExporting from 'highcharts/modules/offline-exporting';
import HighchartsAccessibility from 'highcharts/modules/accessibility';
import { Options, SeriesMaplineOptions, SeriesMappointOptions } from 'highcharts';


// Initialize required Highcharts modules
HighchartsMap(Highcharts);
HighchartsExporting(Highcharts);
HighchartsOfflineExporting(Highcharts);
HighchartsAccessibility(Highcharts);

const CoffeeMap: React.FC = () => {
 useEffect(() => {
  const fetchData = async () => {
   try {
    const topologyResponse = await fetch(
     'https://code.highcharts.com/mapdata/custom/world-highres.topo.json'
    );
    const topology = await topologyResponse.json();

    const data = [
     {
      'hc-key': 'ye',
      color: '#ffa500',
      info: 'Yemen is where coffee took off.'
     },
     {
      'hc-key': 'br',
      color: '#c0ffd5',
      info: 'Coffee came from La Reunion.'
     },
     {
      'hc-key': 'fr',
      color: '#c0ffd5',
      info: 'Coffee came from Java.'
     },
     {
      'hc-key': 'gb',
      color: '#c0ffd5',
      info: 'Coffee came from Java.'
     },
     {
      'hc-key': 'id',
      color: '#c0ffd5',
      info: 'Coffee came from Yemen.'
     },
     {
      'hc-key': 'nl',
      color: '#c0ffd5',
      info: 'Coffee came from Java.'
     },
     {
      'hc-key': 'gu',
      color: '#c0ffd5',
      info: 'Coffee came from France.'
     },
     {
      'hc-key': 're',
      color: '#c0ffd5',
      info: 'Coffee came from Yemen.'
     },
     {
      'hc-key': 'in',
      color: '#c0ffd5',
      info: 'Coffee came from Yemen.'
     }
    ];

    const mapLineSeries: any[] = [
     {
      type: 'mapline',
      data: [
       {
        geometry: {
         type: 'LineString',
         coordinates: [
          [48.516388, 15.552727], // Yemen
          [110.004444, -7.491667] // Java
         ]
        },
        className: 'animated-line',
        color: '#666'
       },
       {
        geometry: {
         type: 'LineString',
         coordinates: [
          [48.516388, 15.552727], // Yemen
          [55.5325, -21.114444] // La reunion
         ]
        },
        className: 'animated-line',
        color: '#666'
       },
       {
        geometry: {
         type: 'LineString',
         coordinates: [
          [55.5325, -21.114444], // La reunion
          [-43.2, -22.9] // Brazil
         ]
        },
        className: 'animated-line',
        color: '#666'
       },
       {
        geometry: {
         type: 'LineString',
         coordinates: [
          [48.516388, 15.552727], // Yemen
          [78, 21] // India
         ]
        },
        className: 'animated-line',
        color: '#666'
       },
       {
        geometry: {
         type: 'LineString',
         coordinates: [
          [110.004444, -7.491667], // Java
          [4.9, 52.366667] // Amsterdam
         ]
        },
        className: 'animated-line',
        color: '#666'
       },
       {
        geometry: {
         type: 'LineString',
         coordinates: [
          [-3, 55], // UK
          [-61.030556, 14.681944] // Antilles
         ]
        },
        className: 'animated-line',
        color: '#666'
       },
       {
        geometry: {
         type: 'LineString',
         coordinates: [
          [2.352222, 48.856613], // Paris
          [-53, 4] // Guyane
         ]
        },
        className: 'animated-line',
        color: '#666'
       }
      ],
      lineWidth: 2,
      enableMouseTracking: false
     },
    ];

    const mapPointSeries: any[] = [
     {
      type: 'mappoint',
      color: '#333',
      dataLabels: {
       format: '<b>{point.name}</b><br><span style="font-weight: normal; opacity: 0.5">{point.custom.arrival}</span>',
       align: 'left',
       verticalAlign: 'middle'
      },
      data: [
       {
        name: 'Yemen',
        geometry: {
         type: 'Point',
         coordinates: [48.516388, 15.552727] // Yemen
        },
        custom: {
         arrival: 1414
        },
        dataLabels: {
         align: 'right'
        }
       },
       {
        name: 'Java',
        geometry: {
         type: 'Point',
         coordinates: [110.004444, -7.491667] // Java
        },
        custom: {
         arrival: 1696
        }
       },
       {
        name: 'La Reunion',
        geometry: {
         type: 'Point',
         coordinates: [55.5325, -21.114444] // La reunion
        },
        custom: {
         arrival: 1708
        }
       },
       {
        name: 'Brazil',
        geometry: {
         type: 'Point',
         coordinates: [-43.2, -22.9] // Brazil
        },
        custom: {
         arrival: 1770
        },
        dataLabels: {
         align: 'right'
        }
       },
       {
        name: 'India',
        geometry: {
         type: 'Point',
         coordinates: [78, 21] // India
        },
        custom: {
         arrival: 1670
        }
       },
       {
        name: 'Amsterdam',
        geometry: {
         type: 'Point',
         coordinates: [4.9, 52.366667] // Amsterdam
        },
        custom: {
         arrival: 1696
        }
       },
       {
        name: 'Antilles',
        geometry: {
         type: 'Point',
         coordinates: [-61.030556, 14.681944] // Antilles
        },
        custom: {
         arrival: 1714
        },
        dataLabels: {
         align: 'right'
        }
       },
       {
        name: 'Guyane',
        geometry: {
         type: 'Point',
         coordinates: [-53, 4] // Guyane
        },
        custom: {
         arrival: 1714
        },
        dataLabels: {
         align: 'right'
        }
       }
      ],
      enableMouseTracking: false
     }
    ];

    const options: Options = {
     chart: {
      map: topology,
      renderTo: 'container'
     },
     title: {
      text: 'The history of the coffee bean ☕'
     },
     legend: {
      enabled: false
     },
     tooltip: {
      useHTML: true,
      headerFormat: '<b>{point.key}</b>:<br/>',
      pointFormat: '{point.info}'
     },
     mapView: {
      fitToGeometry: {
       type: 'MultiPoint',
       coordinates: [
        // Alaska west
        [-164, 54],
        // Greenland north
        [-35, 84],
        // New Zealand east
        [179, -38],
        // Chile south
        [-68, -55]
       ]
      }
     },
     series: [
      ...mapLineSeries,
      ...mapPointSeries,
      {
       type: 'map',
       data,
       keys: ['hc-key', 'color', 'info'],
       name: 'Coffee'
      },
     ]
    }

    Highcharts.mapChart('container', options);
   } catch (error) {
    console.error('Error fetching data:', error);
   }
  };

  fetchData();
 }, []);

 return <div id="container" />;
};

export default CoffeeMap;
