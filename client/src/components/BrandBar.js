import { observer } from 'mobx-react-lite';
import React, {useContext} from 'react';
import { Context } from '../index';
import Row from 'react-bootstrap/Row';
import Card from "react-bootstrap/Card"


const BrandBar = observer(() => {
    const {device} = useContext(Context)
    return ( 
        <div className="brandbad-row">
            {device.brands.map(brand =>
                <Card 
                    key={brand.id}
                    className="p-3"
                >
                    {brand.name}
                </Card>
            )}
        </div>
    );
});
 



export default BrandBar;