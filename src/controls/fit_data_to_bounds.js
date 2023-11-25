import  ReactDOM, { unmountComponentAtNode }  from 'react-dom';
import { Button } from 'antd';

import { BorderBottomOutlined, BorderInnerOutlined  } from '@ant-design/icons';

import { createControlComponent } from '@react-leaflet/core';
import { Control, DomUtil } from 'leaflet';

const node = DomUtil.create("div");

Control.FitBoundsToDataControl = Control.extend({
    options: {
        position: "topleft"
    },
    onAdd: function (map) {
        const doFitDataToBounds = () => {
            let latLngs = []
            map.eachLayer((layer) => {
                const latLng = layer.options.doFitDataToBounds && layer.getLatLng();
                if(latLng) {
                    latLngs.push(latLng);
                    
                }
            })

            if (latLngs.length > 0) {
                map.fitBounds(latLngs);
            }
        }

        const comonProps = {
            className:'leaflet-control-layers',
            style: {with:'33px', height:'33px'},
        }
       
        ReactDOM.render(
           <div className='fit-bounds-control-container'>
                <Button
                {... comonProps}
                title="Fit bounds to data"
                icon={<BorderInnerOutlined/>}
                onClick={() => doFitDataToBounds()}></Button>
                <Button
                {... comonProps}
                title="Fit bounds to world"
                icon={<BorderBottomOutlined/>}
                onClick={() => map.fitWorld()}></Button>
            </div>, node
        );
        return node;
    },
    onRemove: function (map) {
        unmountComponentAtNode(node)
    }
})


export const FitBoundsToDataControl = createControlComponent(
  (props) => new Control.FitBoundsToDataControl(props),
)