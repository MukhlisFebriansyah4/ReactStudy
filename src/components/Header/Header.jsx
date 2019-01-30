import React, { Component } from 'react';
import Links from '../Linktext/Linktext';
import Icons from '../Toolicon/toolicon';
import './Header.css';

class Header extends Component {    
    render() { 
        return ( 
            <div style={{backgroundColor:'#ffffff',display:'flex',height:'50px',justifyContent:'flex-end'}}>
                <Links link={'Gmail'}/>
                <Links link={'Gambar'}/>                
                <Icons icon={'apps'} />
                <Icons icon={'notifications'} />
                <Icons icon={'account_circle'} />
            </div>
         );
    }
}
 
export default Header;
