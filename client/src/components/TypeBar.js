import React, {useContext} from 'react';
import {observer} from "mobx-react-lite"
import { Context } from '../index';
import ListGroup from 'react-bootstrap/ListGroup';

const TypeBar = observer(() => {
    const {device} =useContext(Context)
    return (  
        <ListGroup>
            {device.types.map(type=>
                <ListGroup.Item 
                    style={{
                        cursor: 'pointer',
                        backgroundColor: type.id === device.selectedType.id ? '#E3E6F3' : '',
                        //borderColor: type.id === device.selectedType.id ? 'green' : '',
                        color: type.id === device.selectedType.id ? '#088178' : '',
                    }}
                    //active={type.id == device.selectedType.id}
                    onClick={() => device.setSelectedType(type)}
                    key={type.id}
                >
                    {type.name}
                </ListGroup.Item>
            )}
        </ListGroup>
    );
});
 
export default TypeBar;

