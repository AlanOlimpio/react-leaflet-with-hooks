import React, {useEffect, useState } from 'react';

import { MapContainer } from 'react-leaflet/MapContainer';
import { TileLayer } from 'react-leaflet/TileLayer';

import 'leaflet/dist/leaflet.css';
import './Map.css';


import {cities} from '../data/cities';
import { mountains } from "../data/highest_points";
import { continents } from '../data/continents';

import { MarkerLayer } from "../layers/marker_layer";
import { MarkerLayerWithTooltip } from "../layers/marker_layer_with_tooltip";
import { RadiusFilter } from '../layers/radius_filter';

import { ContinentPolygonLayer } from '../layers/continents_polygon_layer';
import { LayersControl } from 'react-leaflet';
import { FitBoundsToDataControl } from '../controls/fit_data_to_bounds';
import { ShowActiveFiltersControl } from '../controls/show_active_filters';
import { MarkerLayerWithTooltipCluster } from '../layers/marker_layer_with_tooltip_cluster';
import { MarkerLayerWithTooltipClusterCustomIcone } from '../layers/marker_layer_with_tooltip_cluster_custom';
import { RoutingMachine } from '../layers/routing_machine';




export const Map = () => {

  const [geoFilter, setGeoFilter] = useState(null);
  const getGeoFilter = () => geoFilter;

  const [radiusFilter, setRadiusFilter] = useState(null);
  const getRadiusFilter = () => radiusFilter;

  // const [asyncCities, setAsyncCities] = useState({ features: [] });

  // useEffect(()=> {
  //   const fetchData  = async () => {
  //     const response = await fetch('https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_populated_places_simple.geojson');
  //     const cities = await response.json();
  //     setAsyncCities(cities);
  //   }
  //   fetchData().catch(console.error);
  // }, []);
  
  

return(
  <MapContainer  center={[0, 0]} zoom={1} scrollWheelZoom={true}>
    <LayersControl position='topright'>
     <LayersControl.BaseLayer checked name='OSM Streets'> 
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
     </LayersControl.BaseLayer>
     <LayersControl.BaseLayer  name='ESRI World Image'> 
    <TileLayer
      attribution='Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
      url='https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
    />
     </LayersControl.BaseLayer>
    <MarkerLayer  
    data={cities} 
    setRadiusFilter={setRadiusFilter} 
    getRadiusFilter={getRadiusFilter}
    getGeoFilter={getGeoFilter}
    />
    <MarkerLayerWithTooltip data={mountains} />
    <RadiusFilter 
    radiusFilter={radiusFilter} 
    setRadiusFilter={setRadiusFilter}
    />
    <ContinentPolygonLayer 
    data={continents}   
    setGeoFilter={setGeoFilter} 
    getGeoFilter={getGeoFilter}
    />
    <MarkerLayerWithTooltipCluster data={cities} />
    <MarkerLayerWithTooltipClusterCustomIcone data={cities} />
    </LayersControl>
    <FitBoundsToDataControl/>
    {/* <RoutingMachine /> */}
    <ShowActiveFiltersControl  getFilters={()=>({geoFilter, radiusFilter})}/>
  </MapContainer>
)
}