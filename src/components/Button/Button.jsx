import React, { Component } from 'react';
import './Button.css'

const Buttons = props => {
    return ( 
            <button className='btn-gmail'>{props.text}</button>
        
     );
}
 
export default Buttons;