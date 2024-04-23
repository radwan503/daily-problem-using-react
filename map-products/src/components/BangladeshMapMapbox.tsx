import React, { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';

const MapComponentMapBox = () => {
 useEffect(() => {
  mapboxgl.accessToken = "pk.eyJ1IjoieWFkYWJzZCIsImEiOiJjbGFvemljbmowcWVmM3ZucGFxeWJrendyIn0.L7K2jreQX7lpYRWIvHiYcQ";
  const map = new mapboxgl.Map({
   container: 'map-container',
   style: 'mapbox://styles/mapbox/streets-v11',
   center: [90.3563, 23.685],
   zoom: 6,
  });

  // Add Bangladesh GeoJSON data layer
  map.on('load', () => {
   map.addSource('bangladesh', {
    type: 'geojson',
    data: '/bangladesh.geojson',
   });

   map.addLayer({
    id: 'bangladesh-layer',
    type: 'fill',
    source: 'bangladesh',
    layout: {},
    paint: {
     'fill-color': '#088',
     'fill-opacity': 0.5,
    },
   });
  });

  return () => map.remove(); // Cleanup function
 }, []);

 return <div id="map-container" style={{ width: '500px', height: '100vh' }} />;
};

export default MapComponentMapBox;
