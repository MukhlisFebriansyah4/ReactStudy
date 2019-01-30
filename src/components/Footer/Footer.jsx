import React, { Component } from 'react';
import Links from '../Linktext/Linktext';
class Footers extends Component {    
    render() { 
        return (  
            <div style={{backgroundColor: '#f2f2f2',display:'flex',justifyContent:'space-between',height:'48px'}}>
                <div style={{display:'flex'}}>
                    <Links link='Periklanan' />
                    <Links link='Bisinis' />
                    <Links link='Tentang' />
                </div>
                <div style={{display:'flex'}}>
                    <Links link='Privasi' />
                    <Links link='Persyaratan' />
                    <Links link='Setelan' />
                </div>
            </div>
        );
    }
}
 
export default Footers;