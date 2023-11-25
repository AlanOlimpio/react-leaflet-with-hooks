import React from "react";
import MarkerClusterGroup from 'react-leaflet-cluster';
import {LayersControl, Marker, Tooltip, useMap } from "react-leaflet";
import { defaultIcon } from "../icons/defaultIcon";
import L, { MarkerCluster } from 'leaflet';

const createClusterCustomIcon = function (cluster: MarkerCluster) {
  return L.divIcon({
    html: `<span>${cluster.getChildCount()}</span>`,
    className: 'custom-marker-cluster',
    iconSize: L.point(33, 33, true),
  })
}


export const MarkerLayerWithTooltipClusterCustomIcone = ({ data }) => {
  const leafletMap = useMap();
  const layer = data.features.map((feature) => {
    const { coordinates } = feature.geometry;
    const { name } = feature.properties;


    
    return (
      
       <Marker
       key={String(coordinates + 3)}
       position={[coordinates[1], coordinates[0]]}
       icon={defaultIcon}
       eventHandlers={{
        click: (e) => leafletMap.panTo(e.latlng),
        tooltipclose: (e) => console.log('Fechou')
       }
      }
     >
       <Tooltip key={String(coordinates + 3)} >
         <h3>Mt. {name}</h3>
       </Tooltip>
     </Marker>
    );
  });
  return <LayersControl.Overlay  name="Clustered custom icone">
      <MarkerClusterGroup 
      onClick={(e) => console.log('onClick', e)}
      iconCreateFunction={createClusterCustomIcon}
      maxClusterRadius={150}
      spiderfyOnMaxZoom={true}
      polygonOptions={{
        fillColor: '#000',
        color: '#000',
        weight: 1,
        opacity: 1,
        fillOpacity: 0.25,
      }}
      showCoverageOnHover={true}
      >{layer}
      </MarkerClusterGroup>
    </LayersControl.Overlay>
};
