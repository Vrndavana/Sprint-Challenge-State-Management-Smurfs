import React from 'react'; 
import { useContext } from 'react';
import { SmurfCardContext } from '../contexts/SmurfCardContext';
export const SmurfCard = () => {
    const { smurf } = useContext(SmurfCardContext);
    return (
    <div className="smurfCard">
        {smurf.map(item=>{
            return (
                <div key={item.id}>
                <p>{item.name}</p>
                <p>{item.age}</p>
                <p>{item.height}</p>
                 </div>
            )
            })}
    </div>); 
};
