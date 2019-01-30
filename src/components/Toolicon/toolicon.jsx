import React, { Component } from 'react';
import './toolicon.css'

const Icons = props => {
    return (  
        <div style={{padding:'14px 8px'}}>
            <a className="material-icons" style={{fontSize: `${props.tsize}px`}}>{props.icon}</a>  
        </div>
    );
}
 
export default Icons;