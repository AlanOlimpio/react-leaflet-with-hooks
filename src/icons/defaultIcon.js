import  L from  'leaflet';
import iconUrl from './../images/marker-icon.png';
import iconShadow from './../images/marker-shadow.png';


const { iconSize, shadowSize, iconAnchor,shadowAnchor, popupAnchor, tooltipAnchor } = L.Marker.prototype.options.icon.options;
export const defaultIcon = L.icon(  {
        iconUrl: iconUrl,
        shadowUrl: iconShadow,
        iconSize:     iconSize, // size of the icon
        shadowSize:   shadowSize, // size of the shadow
        iconAnchor:  iconAnchor, // point of the icon which will correspond to marker's location
        shadowAnchor: shadowAnchor,  // the same for the shadow
        popupAnchor: popupAnchor, // point from which the popup should open relative to the iconAnchor
        tooltipAnchor: tooltipAnchor
    })