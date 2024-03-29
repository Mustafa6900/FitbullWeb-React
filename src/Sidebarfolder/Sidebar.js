import  SidebarData  from './sidebardata.json';
import React from 'react';
import "../App.css"

const Sidebar = () => {
    return (
        <nav className='sidebar'>
             <h1>  FitBull </h1>
             <ul className='sidebarList'>
              {SidebarData.map((val,key)=>{
                return(
                  <li
                  key={key}
                  className="row"
                  onClick={()=>{
                   window.location.pathname=val.link;
                  }}>
                   <div>{val.title}</div>
                  </li>
                );
                
              })}
             
             <li className="logoutbutton"
                  onClick={()=>{
                   window.location.pathname="/dashboardexit";
                  }}>
                   <div>Logout</div>
                  </li>
                </ul>   
        </nav>
      );
}
 
export default Sidebar;