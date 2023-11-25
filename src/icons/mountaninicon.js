import  L from  'leaflet';
import iconUrl from './../images/mountain.png';


export const mountaninicon = L.icon(
    {
        iconUrl: iconUrl,
        iconSize:     [35,23], // size of the icon
        iconAnchor:  [17, 16 ], // point of the icon which will correspond to marker's location
        tooltipAnchor: [15, -5]
    })