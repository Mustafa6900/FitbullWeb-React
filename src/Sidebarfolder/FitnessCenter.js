import SearchBar from '../Components/SearchBar';
import fitnessData from "./data.json";
import Sidebar from '../Sidebarfolder/Sidebar';
import React, { useEffect} from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";


const FitnessCenter = () => {
    
    const [user, loading] = useAuthState(auth);
  
    const navigate = useNavigate();
  
  
    
  
    useEffect(() => {
      if (loading) return;
      if (!user) return navigate("/");
  }, [user, loading]);
    return ( 
        <div className="fitnesscenter">
            
            <Sidebar/>
          
            <SearchBar placeholder="Enter a FitnessCenter Name..." data={fitnessData}/>
            

        </div>
     );
}
 
export default FitnessCenter;