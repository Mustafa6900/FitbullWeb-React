import React from 'react';
import SearchBar from '../Components/SearchBar';
import fitnessData from "./data.json"
import Sidebar from '../Sidebarfolder/Sidebar';

const FitnessCenter = () => {
    return ( 
        <div className="fitnesscenter">
            <Sidebar/>
            <h1>FitnessCenter Screen</h1>
            <SearchBar placeholder="Enter a FitnessCenter Name..." data={fitnessData}/>
            

        </div>
     );
}
 
export default FitnessCenter;