import React from 'react';
import {observer} from 'mobx-react-lite';
import { Context } from '..';

const TypeBar = observer(() => {
    const {device} = useContext(Context);
    return (
        <ListGroup>
            {
                device.types.map(type => 
                   <ListGroup.Item
                    active={type.id === device.selectedType}
                    onClick={() => device.setSectedType(type)}
                    key={type.id}
                   >
                       {type.name}
                   </ListGroup.Item>
            )}
        </ListGroup>
    )
})

export default TypeBar;