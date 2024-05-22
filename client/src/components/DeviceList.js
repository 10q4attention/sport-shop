import React, { useContext } from 'react';
import { Context } from '../index';
import { observer } from 'mobx-react-lite';
import Row from 'react-bootstrap/esm/Row';
import DeviceItem from './DeviceItem';

const DeviceList = observer(() => {
    const {device} = useContext(Context)
    return (  
        <div className='devicelist-row'>
            {device.devices.map(device => 
                <DeviceItem key={device.id} device={device}/>
            )}
        </div>
    );
});
 
export default DeviceList;