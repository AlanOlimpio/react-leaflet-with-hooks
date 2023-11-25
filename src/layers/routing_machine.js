import { useEffect } from "react";
import { useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet-routing-machine";
import { defaultIcon } from "../icons/defaultIcon";
 
// a point in France to begin directing from
const WAYPOINT_FROM = [-23.527755652245702, -46.85824379569036];
// a point in Korea to direct to
const WAYPOINT_TO = [-23.515686128208365, -46.855595114363766];
 
const RoutingMachine = ({}) => {
  const map = useMap();
 
  useEffect(() => {
    if (!map) return;
 
    const waypoints = [L.latLng(WAYPOINT_FROM), L.latLng(WAYPOINT_TO)];
 
    const routingControl = L.Routing.control({
      waypoints,
      routeWhileDragging: true,
      createMarker: function (i, waypoint, n) {
        L.marker(waypoint.latLng, {
          icon: defaultIcon,
        });
      },
      // some configurable options, see the routing control documentation for full list
      show: true,
      addWaypoints: false,
      routeWhileDragging: true,
      draggableWaypoints: true,
      fitSelectedRoutes: false,
      showAlternatives: true,
    }).addTo(map);
 
    return () => map.removeControl(routingControl);
  }, [map]);
 
  return null;
};
 
export { RoutingMachine };