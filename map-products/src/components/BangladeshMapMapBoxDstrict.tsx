import React, { useEffect } from 'react';
import mapboxgl, { Map } from 'mapbox-gl';

// Interface for district data
interface District {
 id: string;
 division_id: string;
 name: string;
 bn_name: string;
 lat: string;
 long: string;
}

// JSON data for Bangladesh districts
const bangladeshDistricts: { districts: District[] } = {
 districts: [
  {
   "id": "1",
   "division_id": "3",
   "name": "Dhaka",
   "bn_name": "ঢাকা",
   "lat": "23.7115253",
   "long": "90.4111451"
  },
  {
   "id": "2",
   "division_id": "3",
   "name": "Faridpur",
   "bn_name": "ফরিদপুর",
   "lat": "23.6070822",
   "long": "89.8429406"
  },

  {
   "id": "3",
   "division_id": "3",
   "name": "Gazipur",
   "bn_name": "গাজীপুর",
   "lat": "24.0022858",
   "long": "90.4264283"
  },

  {
   "id": "4",
   "division_id": "3",
   "name": "Gopalganj",
   "bn_name": "গোপালগঞ্জ",
   "lat": "23.0050857",
   "long": "89.8266059"
  },
  {
   "id": "5",
   "division_id": "8",
   "name": "Jamalpur",
   "bn_name": "জামালপুর",
   "lat": "24.937533",
   "long": "89.937775"
  },
  {
   "id": "6",
   "division_id": "3",
   "name": "Kishoreganj",
   "bn_name": "কিশোরগঞ্জ",
   "lat": "24.444937",
   "long": "90.776575"
  },
  {
   "id": "7",
   "division_id": "3",
   "name": "Madaripur",
   "bn_name": "মাদারীপুর",
   "lat": "23.164102",
   "long": "90.1896805"
  },
  {
   "id": "8",
   "division_id": "3",
   "name": "Manikganj",
   "bn_name": "মানিকগঞ্জ",
   "lat": "23.8644",
   "long": "90.0047"
  },
  {
   "id": "9",
   "division_id": "3",
   "name": "Munshiganj",
   "bn_name": "মুন্সিগঞ্জ",
   "lat": "23.5422",
   "long": "90.5305"
  },
  {
   "id": "10",
   "division_id": "8",
   "name": "Mymensingh",
   "bn_name": "ময়মনসিংহ",
   "lat": "24.7471",
   "long": "90.4203"
  },
  {
   "id": "11",
   "division_id": "3",
   "name": "Narayanganj",
   "bn_name": "নারায়াণগঞ্জ",
   "lat": "23.63366",
   "long": "90.496482"
  },
  {
   "id": "12",
   "division_id": "3",
   "name": "Narsingdi",
   "bn_name": "নরসিংদী",
   "lat": "23.932233",
   "long": "90.71541"
  },
  {
   "id": "13",
   "division_id": "8",
   "name": "Netrokona",
   "bn_name": "নেত্রকোণা",
   "lat": "24.870955",
   "long": "90.727887"
  },
  {
   "id": "14",
   "division_id": "3",
   "name": "Rajbari",
   "bn_name": "রাজবাড়ি",
   "lat": "23.7574305",
   "long": "89.6444665"
  },
  {
   "id": "15",
   "division_id": "3",
   "name": "Shariatpur",
   "bn_name": "শরীয়তপুর",
   "lat": "23.2423",
   "long": "90.4348"
  },
  {
   "id": "16",
   "division_id": "8",
   "name": "Sherpur",
   "bn_name": "শেরপুর",
   "lat": "25.0204933",
   "long": "90.0152966"
  },
  {
   "id": "17",
   "division_id": "3",
   "name": "Tangail",
   "bn_name": "টাঙ্গাইল",
   "lat": "24.2513",
   "long": "89.9167"
  },
  {
   "id": "18",
   "division_id": "5",
   "name": "Bogura",
   "bn_name": "বগুড়া",
   "lat": "24.8465228",
   "long": "89.377755"
  },
  {
   "id": "19",
   "division_id": "5",
   "name": "Joypurhat",
   "bn_name": "জয়পুরহাট",
   "lat": "25.0968",
   "long": "89.0227"
  },
  {
   "id": "20",
   "division_id": "5",
   "name": "Naogaon",
   "bn_name": "নওগাঁ",
   "lat": "24.7936",
   "long": "88.9318"
  },
  {
   "id": "21",
   "division_id": "5",
   "name": "Natore",
   "bn_name": "নাটোর",
   "lat": "24.420556",
   "long": "89.000282"
  },
  {
   "id": "22",
   "division_id": "5",
   "name": "Nawabganj",
   "bn_name": "নবাবগঞ্জ",
   "lat": "24.5965034",
   "long": "88.2775122"
  },
  {
   "id": "23",
   "division_id": "5",
   "name": "Pabna",
   "bn_name": "পাবনা",
   "lat": "23.998524",
   "long": "89.233645"
  },
  {
   "id": "24",
   "division_id": "5",
   "name": "Rajshahi",
   "bn_name": "রাজশাহী",
   "lat": "24.3745",
   "long": "88.6042"
  },
  {
   "id": "25",
   "division_id": "5",
   "name": "Sirajgonj",
   "bn_name": "সিরাজগঞ্জ",
   "lat": "24.4533978",
   "long": "89.7006815"
  },
  {
   "id": "26",
   "division_id": "6",
   "name": "Dinajpur",
   "bn_name": "দিনাজপুর",
   "lat": "25.6217061",
   "long": "88.6354504"
  },
  {
   "id": "27",
   "division_id": "6",
   "name": "Gaibandha",
   "bn_name": "গাইবান্ধা",
   "lat": "25.328751",
   "long": "89.528088"
  },
  {
   "id": "28",
   "division_id": "6",
   "name": "Kurigram",
   "bn_name": "কুড়িগ্রাম",
   "lat": "25.805445",
   "long": "89.636174"
  },
  {
   "id": "29",
   "division_id": "6",
   "name": "Lalmonirhat",
   "bn_name": "লালমনিরহাট",
   "lat": "25.9923",
   "long": "89.2847"
  },
  {
   "id": "30",
   "division_id": "6",
   "name": "Nilphamari",
   "bn_name": "নীলফামারী",
   "lat": "25.931794",
   "long": "88.856006"
  },
  {
   "id": "31",
   "division_id": "6",
   "name": "Panchagarh",
   "bn_name": "পঞ্চগড়",
   "lat": "26.3411",
   "long": "88.5541606"
  },
  {
   "id": "32",
   "division_id": "6",
   "name": "Rangpur",
   "bn_name": "রংপুর",
   "lat": "25.7558096",
   "long": "89.244462"
  },
  {
   "id": "33",
   "division_id": "6",
   "name": "Thakurgaon",
   "bn_name": "ঠাকুরগাঁও",
   "lat": "26.0336945",
   "long": "88.4616834"
  },
  {
   "id": "34",
   "division_id": "1",
   "name": "Barguna",
   "bn_name": "বরগুনা",
   "lat": "22.0953",
   "long": "90.1121"
  },
  {
   "id": "35",
   "division_id": "1",
   "name": "Barishal",
   "bn_name": "বরিশাল",
   "lat": "22.7010",
   "long": "90.3535"
  },
  {
   "id": "36",
   "division_id": "1",
   "name": "Bhola",
   "bn_name": "ভোলা",
   "lat": "22.685923",
   "long": "90.648179"
  },
  {
   "id": "37",
   "division_id": "1",
   "name": "Jhalokati",
   "bn_name": "ঝালকাঠি",
   "lat": "22.6406",
   "long": "90.1987"
  },
  {
   "id": "38",
   "division_id": "1",
   "name": "Patuakhali",
   "bn_name": "পটুয়াখালী",
   "lat": "22.3596316",
   "long": "90.3298712"
  },
  {
   "id": "39",
   "division_id": "1",
   "name": "Pirojpur",
   "bn_name": "পিরোজপুর",
   "lat": "22.5841",
   "long": "89.9720"
  },
  {
   "id": "40",
   "division_id": "2",
   "name": "Bandarban",
   "bn_name": "বান্দরবান",
   "lat": "22.1953275",
   "long": "92.2183773"
  },
  {
   "id": "41",
   "division_id": "2",
   "name": "Brahmanbaria",
   "bn_name": "ব্রাহ্মণবাড়িয়া",
   "lat": "23.9570904",
   "long": "91.1119286"
  },
  {
   "id": "42",
   "division_id": "2",
   "name": "Chandpur",
   "bn_name": "চাঁদপুর",
   "lat": "23.2332585",
   "long": "90.6712912"
  },
  {
   "id": "43",
   "division_id": "2",
   "name": "Chattogram",
   "bn_name": "চট্টগ্রাম",
   "lat": "22.335109",
   "long": "91.834073"
  },
  {
   "id": "44",
   "division_id": "2",
   "name": "Cumilla",
   "bn_name": "কুমিল্লা",
   "lat": "23.4682747",
   "long": "91.1788135"
  },
  {
   "id": "45",
   "division_id": "2",
   "name": "Cox's Bazar",
   "bn_name": "কক্স বাজার",
   "lat": "21.4272",
   "long": "92.0058"
  },
  {
   "id": "46",
   "division_id": "2",
   "name": "Feni",
   "bn_name": "ফেনী",
   "lat": "23.0159",
   "long": "91.3976"
  },
  {
   "id": "47",
   "division_id": "2",
   "name": "Khagrachari",
   "bn_name": "খাগড়াছড়ি",
   "lat": "23.119285",
   "long": "91.984663"
  },
  {
   "id": "48",
   "division_id": "2",
   "name": "Lakshmipur",
   "bn_name": "লক্ষ্মীপুর",
   "lat": "22.942477",
   "long": "90.841184"
  },
  {
   "id": "49",
   "division_id": "2",
   "name": "Noakhali",
   "bn_name": "নোয়াখালী",
   "lat": "22.869563",
   "long": "91.099398"
  },
  {
   "id": "50",
   "division_id": "2",
   "name": "Rangamati",
   "bn_name": "রাঙ্গামাটি",
   "lat": "22.7324",
   "long": "92.2985"
  },
  {
   "id": "51",
   "division_id": "7",
   "name": "Habiganj",
   "bn_name": "হবিগঞ্জ",
   "lat": "24.374945",
   "long": "91.41553"
  },
  {
   "id": "52",
   "division_id": "7",
   "name": "Maulvibazar",
   "bn_name": "মৌলভীবাজার",
   "lat": "24.482934",
   "long": "91.777417"
  },
  {
   "id": "53",
   "division_id": "7",
   "name": "Sunamganj",
   "bn_name": "সুনামগঞ্জ",
   "lat": "25.0658042",
   "long": "91.3950115"
  },
  {
   "id": "54",
   "division_id": "7",
   "name": "Sylhet",
   "bn_name": "সিলেট",
   "lat": "24.8897956",
   "long": "91.8697894"
  },
  {
   "id": "55",
   "division_id": "4",
   "name": "Bagerhat",
   "bn_name": "বাগেরহাট",
   "lat": "22.651568",
   "long": "89.785938"
  },
  {
   "id": "56",
   "division_id": "4",
   "name": "Chuadanga",
   "bn_name": "চুয়াডাঙ্গা",
   "lat": "23.6401961",
   "long": "88.841841"
  },
  {
   "id": "57",
   "division_id": "4",
   "name": "Jashore",
   "bn_name": "যশোর",
   "lat": "23.16643",
   "long": "89.2081126"
  },
  {
   "id": "58",
   "division_id": "4",
   "name": "Jhenaidah",
   "bn_name": "ঝিনাইদহ",
   "lat": "23.5448176",
   "long": "89.1539213"
  },
  {
   "id": "59",
   "division_id": "4",
   "name": "Khulna",
   "bn_name": "খুলনা",
   "lat": "22.815774",
   "long": "89.568679"
  },
  {
   "id": "60",
   "division_id": "4",
   "name": "Kushtia",
   "bn_name": "কুষ্টিয়া",
   "lat": "23.901258",
   "long": "89.120482"
  },
  {
   "id": "61",
   "division_id": "4",
   "name": "Magura",
   "bn_name": "মাগুরা",
   "lat": "23.487337",
   "long": "89.419956"
  },
  {
   "id": "62",
   "division_id": "4",
   "name": "Meherpur",
   "bn_name": "মেহেরপুর",
   "lat": "23.762213",
   "long": "88.631821"
  },
  {
   "id": "63",
   "division_id": "4",
   "name": "Narail",
   "bn_name": "নড়াইল",
   "lat": "23.172534",
   "long": "89.512672"
  },
  {
   "id": "64",
   "division_id": "4",
   "name": "Satkhira",
   "bn_name": "সাতক্ষীরা",
   "lat": "22.7185",
   "long": "89.0705"
  }
 ]
};

// Function to convert JSON data to GeoJSON format
function jsonToGeoJSON(jsonData: { districts: District[] }): GeoJSON.FeatureCollection {
 return {
  type: 'FeatureCollection',
  features: jsonData.districts.map(district => ({
   type: 'Feature',
   properties: {
    id: district.id,
    name: district.name,
    bn_name: district.bn_name,
    division_id: district.division_id
   },
   geometry: {
    type: 'Point',
    coordinates: [parseFloat(district.long), parseFloat(district.lat)]
   }
  }))
 };
}

const BangladeshDistrictsMap: React.FC = () => {
 useEffect(() => {
  mapboxgl.accessToken = "pk.eyJ1IjoieWFkYWJzZCIsImEiOiJjbGFvemljbmowcWVmM3ZucGFxeWJrendyIn0.L7K2jreQX7lpYRWIvHiYcQ";
  const map: Map = new mapboxgl.Map({
   container: 'map-container',
   style: 'mapbox://styles/mapbox/streets-v11',
   center: [90.4111451, 23.7115253], // Centered on Dhaka coordinates
   zoom: 7
  });

  // Convert JSON data to GeoJSON format
  const geoJSONData: GeoJSON.FeatureCollection = jsonToGeoJSON(bangladeshDistricts);

  map.on('load', () => {
   map.addSource('districts', {
    type: 'geojson',
    data: geoJSONData // GeoJSON data of districts
   });

   map.addLayer({
    id: 'districts-layer',
    type: 'circle',
    source: 'districts',
    paint: {
     'circle-radius': 5,
     'circle-color': '#ff0000'
    }
   });

   map.on('click', 'districts-layer', (e: any) => {
    const districtName: string = e.features[0].properties.name;
    alert(`You clicked on ${districtName}`);
   });

   map.on('mouseenter', 'districts-layer', () => {
    map.getCanvas().style.cursor = 'pointer';
   });

   map.on('mouseleave', 'districts-layer', () => {
    map.getCanvas().style.cursor = '';
   });
  });

  return () => map.remove(); // Cleanup function
 }, []);

 return <div id="map-container" style={{ width: '100%', height: '400px' }} />;
};

export default BangladeshDistrictsMap;
