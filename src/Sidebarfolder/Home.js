import React from 'react';
import Sidebar from '../Sidebarfolder/Sidebar';
import {logout } from "../firebase";

function Home() {
    
    return (
        
        <div className="home">
        <Sidebar/>

        <button className="dashboard__btn" onClick={logout}>
          Logout
        </button>
        
        <h1>Home Page</h1>
        </div>
    );
}
export default Home; 