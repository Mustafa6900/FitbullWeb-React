import React from 'react';
import SearchBar from '../Components/SearchBar';
import SuppImage from '../SuppPage/suppImage';
import suppdata from './suppdata.json'
import Sidebar from '../Sidebarfolder/Sidebar';



const Supplements = () => {
    return ( 
        <div className="supplements">
            <Sidebar/>
            <h1>Supplements  Screen</h1>
            <SearchBar placeholder="Enter a Supplements Name..."data={suppdata}/>
            <SuppImage />
        </div>
     );
}
 
export default Supplements;