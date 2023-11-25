import React from "react";

import { LayerGroup, LayersControl, Marker, Tooltip, useMap } from "react-leaflet";
import { mountaninicon } from "../icons/mountaninicon";


export const MarkerLayerWithTooltip = ({ data }) => {
  const leafletMap = useMap();
  const layer = data.features.map((feature) => {
    const { coordinates } = feature.geometry;
    const { name, elevation, continent } = feature.properties;
    return (
     
       <Marker
       key={String(coordinates + 3)}
       position={[coordinates[1], coordinates[0]]}
       icon={mountaninicon}
       eventHandlers={{
        click: (e) => leafletMap.panTo(e.latlng),
        tooltipclose: (e) => console.log('Fechou')
       }
      }
     >
       <Tooltip key={String(coordinates + 3)} >
         <h3>Mt. {name}</h3>
         Continent: <b>{continent}</b> <br />
         Elevation: <b>{elevation} m</b>
       </Tooltip>
     </Marker>
     
    );
  });
  return <LayersControl.Overlay  name="Highest points">
      <LayerGroup>{layer}</LayerGroup>
    </LayersControl.Overlay>
};
