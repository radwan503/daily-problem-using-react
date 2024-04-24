import React, { useEffect, useRef, useState } from 'react';
import mapboxgl, { Map, LngLatLike } from 'mapbox-gl';

// Set your Mapbox access token here
mapboxgl.accessToken = 'YOUR_MAPBOX_ACCESS_TOKEN';

const MapComponent: React.FC = () => {
 const mapContainerRef = useRef<HTMLDivElement>(null);
 const [map, setMap] = useState<Map | null>(null);
 const [isStyleLoaded, setIsStyleLoaded] = useState<boolean>(false);

 // Coordinates of Dhaka and other districts
 const dhakaCoords: LngLatLike = [90.4125, 23.8103];
 const cumillaCoords: LngLatLike = [91.1788, 23.4683];
 const natoreCoords: LngLatLike = [88.6330, 24.4083];
 const barisalCoords: LngLatLike = [90.3718, 22.7010];

 useEffect(() => {
  if (!map) {
   const newMap = new mapboxgl.Map({
    container: mapContainerRef.current!,
    style: 'mapbox://styles/mapbox/streets-v11', // You can choose your desired map style
    center: dhakaCoords,
    zoom: 7, // Adjust the initial zoom level as needed
   });

   // Add navigation control
   newMap.addControl(new mapboxgl.NavigationControl());

   newMap.on('style.load', () => {
    setIsStyleLoaded(true);
   });

   setMap(newMap);
  }

  // Cleanup
  return () => {
   if (map) {
    map.remove();
   }
  };
 }, [map]);

 useEffect(() => {
  if (map && isStyleLoaded) {
   // Add markers for Dhaka and other districts
   addMarker(dhakaCoords, 'Dhaka');
   addMarker(cumillaCoords, 'Cumilla');
   addMarker(natoreCoords, 'Natore');
   addMarker(barisalCoords, 'Barisal');

   // Add routes between Dhaka and other districts
   addRoute(dhakaCoords, cumillaCoords);
   addRoute(dhakaCoords, natoreCoords);
   addRoute(dhakaCoords, barisalCoords);
  }
 }, [map, isStyleLoaded]);

 const addMarker = (coords: LngLatLike, title: string) => {
  new mapboxgl.Marker()
   .setLngLat(coords)
   .setPopup(new mapboxgl.Popup().setText(title))
   .addTo(map!);
 };

 const addRoute = (start: any, end: any) => {
  map!.addLayer({
   id: `route-${start[0]}-${start[1]}-${end[0]}-${end[1]}`,
   type: 'line',
   source: {
    type: 'geojson',
    data: {
     type: 'Feature',
     properties: {},
     geometry: {
      type: 'LineString',
      coordinates: [start, end],
     },
    },
   },
   layout: {
    'line-join': 'round',
    'line-cap': 'round',
   },
   paint: {
    'line-color': '#3887be',
    'line-width': 5,
   },
  });
 };

 return <div ref={mapContainerRef} style={{ width: '100%', height: '100vh' }} />;
};

export default MapComponent;
