import React, { Component } from 'react';
import Inputs from '../Input/Input.jsx';
import Buttons from '../Button/Button';
import Links from '../Linktext/Linktext';

class Contents extends Component {    
    render() { 
        return ( 
            <div style={{paddingTop:'150px'}}>
                <img src={require("../../assests/img/google.png")} alt="google"/>                
                <Inputs />
                <div style={{display:'flex',padding: '24px',justifyContent:'center'}}>
                    <div style={{padding: '0px 10px'}}>
                        <Buttons text="Penelusuran Google" />
                    </div>
                    <div style={{padding: '0px 10px'}}>
                        <Buttons text="Saya Lagi Beruntung" />
                    </div>
                </div>
                <div style={{display:'flex',justifyContent:'center'}}>
                    <span>Google menawarkan :</span>
                    <Links color={'blue'} link={'English'} />
                    <Links color={'blue'} link={'Basa Bali'} />
                </div>
                

            </div>
         );
    }
}
 
export default Contents;