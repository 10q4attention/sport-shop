import React from 'react';
import Col from 'react-bootstrap/esm/Col';

const DeviceItem = ({device}) => {
    //console.log(device.device.name)
    //const name = device.name || 'hui';
    //console.log(device.name)
    //console.log(device.id)
    //console.log(device.price)
    //console.log(typeof device)
    //console.log(JSON.stringify(device, null, 2))
    return ( 
        <div>
            <div className='item-card'>
                <img src={device.img} className='item-img' style={{ width: '20px', height: '20px' }}></img>
                <div className='bottom-itemcard'>
                    <div className='item-text'>Samsung</div>
                    <div className='item-rating'>
                        {/* <div className='rating-number'>{device.rating}</div> */}
                        <i className="fas fa-star"></i>
                    </div>
                    <div className='device-name'>{device.name}</div>
                </div>
            </div>
        </div>
     );
}

export default DeviceItem;