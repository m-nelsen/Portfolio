import React from 'react';

function backdrop(props){
    return(
        <div className="backdrop" onClick={props.click} />
    )
}

export default backdrop;