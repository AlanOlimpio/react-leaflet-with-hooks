import React from "react";
import MarkerClusterGroup from 'react-leaflet-cluster';
import {LayersControl, Marker, Tooltip, useMap } from "react-leaflet";
import { defaultIcon } from "../icons/defaultIcon";





export const MarkerLayerWithTooltipCluster = ({ data }) => {
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
  return <LayersControl.Overlay  name="World cities clustered">
      <MarkerClusterGroup 
      showCoverageOnHover={true}
      >{layer}
      </MarkerClusterGroup>
    </LayersControl.Overlay>
};
