import React, { useEffect } from 'react';
import Highcharts from 'highcharts';
import HighchartsMap from 'highcharts/modules/map';
import HighchartsExporting from 'highcharts/modules/exporting';
import { Options, SeriesMapDataOptions } from 'highcharts';

// Initialize Highcharts modules
HighchartsMap(Highcharts);
HighchartsExporting(Highcharts);

const MapChart: React.FC = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://code.highcharts.com/mapdata/countries/bd/bd-all.topo.json'
        );
        const topology = await response.json();

        // Prepare demo data with crop quantities
        const data = [
          { 'hc-key': 'bd-da', value: 10, crops: ['Rice', 'Wheat'] },
          { 'hc-key': 'bd-kh', value: 11, crops: ['Jute', 'Potato'] },
          { 'hc-key': 'bd-ba', value: 12, crops: ['Rice', 'Jute'] },
          { 'hc-key': 'bd-cg', value: 13, crops: ['Potato', 'Wheat'] },
          { 'hc-key': 'bd-sy', value: 14, crops: ['Jute', 'Rice'] },
          { 'hc-key': 'bd-rj', value: 15, crops: ['Wheat', 'Potato'] },
          { 'hc-key': 'bd-rp', value: 16, crops: ['Rice', 'Jute'] }
        ];

        // Create the chart options
        const options: Options = {
          chart: {
            map: topology
          },
          title: {
            text: 'Division-wise Popular Crops in Bangladesh'
          },
          subtitle: {
            text: 'Source map: <a href="http://code.highcharts.com/mapdata/countries/bd/bd-all.topo.json">Bangladesh</a>'
          },
          mapNavigation: {
            enabled: true,
            buttonOptions: {
              verticalAlign: 'bottom'
            }
          },
          colorAxis: {
            min: 0
          },
          series: [{
            type: 'map',
            data: data,
            name: 'Crop Quantity',
            states: {
              hover: {
                color: '#BADA55'
              }
            },
            dataLabels: {
              enabled: true,
              format: '{point.name}'
            }
          }]
        };

        // Render the chart
        Highcharts.mapChart('container', options);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();

    // Cleanup function
    return () => {
      Highcharts.charts.forEach(chart => {
        if (chart) {
          chart.destroy();
        }
      });
    };
  }, []);

  return <div id="container" style={{ height: '500px', minWidth: '310px', maxWidth: '800px', margin: '0 auto' }} />;
};

export default MapChart;
