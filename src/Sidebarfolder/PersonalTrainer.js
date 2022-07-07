import React from 'react';
import SearchBar from '../Components/SearchBar';
import Sidebar from '../Sidebarfolder/Sidebar';


const PersonalTrainer = () => {
    return ( 
        <div className="personaltrainer">
            <Sidebar/>
            <h1>PersonalTrainer  Screen</h1>
            <SearchBar placeholder={"Enter a PersonalTrainer Name..."}/>

        </div>
     );
}
 
export default PersonalTrainer;