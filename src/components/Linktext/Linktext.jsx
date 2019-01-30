import React, { Component } from 'react';
import './Linktext.css'
const Links = props => {
    return ( 
        <div style={{padding:'0px 10px', alignSelf:'center' }}>
            <div>
                <a className="Link-text" href="" style={{color: `${props.color}` }}>{props.link}</a>
            </div>            
        </div>
     );
}
 
export default Links;