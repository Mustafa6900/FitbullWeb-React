import SearchBar from '../Components/SearchBar';
import SuppImage from '../SuppPage/suppImage';
import suppdata from './suppdata.json'
import Sidebar from '../Sidebarfolder/Sidebar';
import React, { useEffect} from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";



const Supplements = () => {
    const [user, loading] = useAuthState(auth);
  
    const navigate = useNavigate();
  
  
    
  
    useEffect(() => {
      if (loading) return;
      if (!user) return navigate("/");
  }, [user, loading]);
    return ( 
        <div className="supplements">
            <Sidebar/>
            
            <SearchBar placeholder="Enter a Supplements Name..."data={suppdata}/>
            <SuppImage />
        </div>
     );
}
 
export default Supplements;