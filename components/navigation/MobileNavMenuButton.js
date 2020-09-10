import React from "react"

function MobileNavMenuButton(props){
    return(
        <button className="navMenuButton" onClick={props.click}>
            <div className="navMenuLine" />
            <div className="navMenuLine" />
            <div className="navMenuLine" />
        </button>
    )
}

export default MobileNavMenuButton