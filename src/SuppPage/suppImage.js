import React from "react";
import "./suppImage.css"
import suppData from '../Sidebarfolder/suppdata.json';


function suppimage(){
    return (
     
        <nav className='suppimage'>
          <h1>Supplement</h1>
             <ul className='suppimageList'>
              {suppData.map((val)=>{
                return(
                  <li
                  className="row"
                  onClick={()=>{
                    window.location.pathname=val.image;
                  }}>
                    
                    <img src={process.env.origin = val.image} /> 
                   <div>{val.title}</div>
                  </li>
                );
              })}
             </ul>
        </nav>
      );
}

export default suppimage

