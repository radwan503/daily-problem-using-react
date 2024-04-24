import React, { useEffect } from 'react';
import Highcharts from 'highcharts/highmaps';
import HighchartsMap from 'highcharts/modules/map';
import HighchartsExporting from 'highcharts/modules/exporting';
import HighchartsOfflineExporting from 'highcharts/modules/offline-exporting';
import HighchartsAccessibility from 'highcharts/modules/accessibility';
import HighchartsReact from 'highcharts-react-official';
import { Options } from 'highcharts';


// Initialize necessary Highcharts modules
HighchartsMap(Highcharts);
HighchartsExporting(Highcharts);
HighchartsOfflineExporting(Highcharts);
HighchartsAccessibility(Highcharts);

const WorldFlight: React.FC = () => {
 useEffect(() => {
  const fetchMapData = async () => {
   const topologyData = await fetch(
    'https://code.highcharts.com/mapdata/custom/world.topo.json'
   ).then(response => response.json());

   // Initialize the Highcharts map chart
   const options: Options = {
    chart: {
     map: topologyData
    },
    title: {
     text: '2022 World Cup teams flights to Qatar',
     align: 'left'
    },
    mapNavigation: {
     enabled: true
    },
    mapView: {
     fitToGeometry: {
      type: 'MultiPoint',
      coordinates: [
       // Alaska west
       [-168, 72],
       // Greenland north
       [-42, 86],
       // New Zealand east
       [179, -29],
       // Chile south
       [-75, -55]
      ]
     }
    },
    accessibility: {
     point: {
      valueDescriptionFormat: '{xDescription}.'
     }
    },
    plotOptions: {
     flowmap: {
      tooltip: {
       //headerFormat: null,
       pointFormat: `{point.options.from} \u2192 {point.options.to}`
      }
     },
     mappoint: {
      tooltip: {
       headerFormat: '{point.point.id}<br>',
       pointFormat: 'Lat: {point.lat} Lon: {point.lon}'
      },
      showInLegend: false
     }
    },
    series: [
     {
      type: 'map',
      name: 'Basemap',
      showInLegend: false,
      states: {
       inactive: {
        enabled: false
       }
      },
      data: [['qa', 1]]
     },
     {
      type: 'mappoint',
      name: 'Countries',
      color: '#add8e6',
      dataLabels: {
       format: '{point.id}'
      },
      data: [{
       id: 'Qatar',
       lat: 25.35,
       lon: 51.18,
       color: '#550d65'
      }, {
       id: 'Ecuador',
       lat: -2.20,
       lon: -79.9
      }, {
       id: 'Senegal',
       lat: 14.5,
       lon: -14.5
      }, {
       id: 'Netherlands',
       lat: 52.13,
       lon: 5.29
      }, {
       id: 'England',
       lat: 52.36,
       lon: -1.17
      }, {
       id: 'Iran',
       lat: 32.43,
       lon: 53.69
      }, {
       id: 'USA',
       lat: 39.79,
       lon: -102.26
      }, {
       id: 'Wales',
       lat: 52.33,
       lon: -3.7
      }, {
       id: 'Argentina',
       lat: -35.21,
       lon: -65.16
      }, {
       id: 'Saudi Arabia',
       lat: 24.03,
       lon: 44.18
      }, {
       id: 'Mexico',
       lat: 24.43,
       lon: -102.38
      }, {
       id: 'Poland',
       lat: 51.91,
       lon: 19.41
      }, {
       id: 'France',
       lat: 46.63,
       lon: 2.31
      }, {
       id: 'Australia',
       lat: -24.83,
       lon: 133.77
      }, {
       id: 'Denmark',
       lat: 55.94,
       lon: 9.05
      }, {
       id: 'Tunisia',
       lat: 34.17,
       lon: 9.58
      }, {
       id: 'Spain',
       lat: 39.63,
       lon: -3.92
      }, {
       id: 'Costa Rica',
       lat: 9.94,
       lon: -84.1
      }, {
       id: 'Germany',
       lat: 51.05,
       lon: 10.29
      }, {
       id: 'Japan',
       lat: 36.14,
       lon: 138.55
      }, {
       id: 'Belgium',
       lat: 50.71,
       lon: 4.67
      }, {
       id: 'Canada',
       lat: 60.35,
       lon: -113.23
      }, {
       id: 'Morocco',
       lat: 32.04,
       lon: -6.26
      }, {
       id: 'Croatia',
       lat: 45.1,
       lon: 14.79
      }, {
       id: 'Brazil',
       lat: -8.36,
       lon: -56.16
      }, {
       id: 'Serbia',
       lat: 44.09,
       lon: 20.69
      }, {
       id: 'Switzerland',
       lat: 46.76,
       lon: 8.48
      }, {
       id: 'Cameroon',
       lat: 5.67,
       lon: 12.48
      }, {
       id: 'Portugal',
       lat: 39.61,
       lon: -8.14
      }, {
       id: 'Ghana',
       lat: 7.92,
       lon: -1.02
      }, {
       id: 'Uruguay',
       lat: -32.81,
       lon: -55.99
      }, {
       id: 'South Korea',
       lat: 36.52,
       lon: 127.87
      }]
     },
     {
      type: 'flowmap',
      name: 'Flowmap Series',
      accessibility: {
       point: {
        valueDescriptionFormat: 'Origin: {point.options.from:.2f}, Destination: {point.options.to:.2f}.'
       },
       description: 'This is a map showing flight routes to Qatar from countries that participated in the 2022 World Cup.'
      },
      fillOpacity: 1,
      width: 0.2,
      color: '#550d6566',
      data: [
       { from: 'Ecuador', to: 'Qatar' },
       { from: 'Senegal', to: 'Qatar' },
       { from: 'Netherlands', to: 'Qatar' },
       { from: 'England', to: 'Qatar' },
       { from: 'Iran', to: 'Qatar' },
       { from: 'USA', to: 'Qatar' },
       { from: 'Wales', to: 'Qatar' },
       { from: 'Argentina', to: 'Qatar' },
       { from: 'Saudi Arabia', to: 'Qatar' },
       { from: 'Mexico', to: 'Qatar' },
       { from: 'Poland', to: 'Qatar' },
       { from: 'France', to: 'Qatar' },
       { from: 'Australia', to: 'Qatar' },
       { from: 'Denmark', to: 'Qatar' },
       { from: 'Tunisia', to: 'Qatar' },
       { from: 'Spain', to: 'Qatar' },
       { from: 'Costa Rica', to: 'Qatar' },
       { from: 'Germany', to: 'Qatar' },
       { from: 'Japan', to: 'Qatar' },
       { from: 'Belgium', to: 'Qatar' },
       { from: 'Canada', to: 'Qatar' },
       { from: 'Morocco', to: 'Qatar' },
       { from: 'Croatia', to: 'Qatar' },
       { from: 'Brazil', to: 'Qatar' },
       { from: 'Serbia', to: 'Qatar' },
       { from: 'Switzerland', to: 'Qatar' },
       { from: 'Cameroon', to: 'Qatar' },
       { from: 'Portugal', to: 'Qatar' },
       { from: 'Ghana', to: 'Qatar' },
       { from: 'Uruguay', to: 'Qatar' },
       { from: 'South Korea', to: 'Qatar' }
      ]
     }
    ]
   }
   Highcharts.mapChart('container', options);
  };

  fetchMapData();
 }, []);

 return <HighchartsReact highcharts={Highcharts} options={{}} containerProps={{ style: { height: '100%' } }} />;
};

export default WorldFlight;
