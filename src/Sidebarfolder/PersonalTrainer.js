import SearchBar from '../Components/SearchBar';
import Sidebar from '../Sidebarfolder/Sidebar';
import React, { useEffect} from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";

const PersonalTrainer = () => {
    const [user, loading] = useAuthState(auth);
  
    const navigate = useNavigate();
  
  
    
  
    useEffect(() => {
      if (loading) return;
      if (!user) return navigate("/");
  }, [user, loading]);
    return ( 
        <div className="personaltrainer">
            <Sidebar/>
            
            <SearchBar placeholder={"Enter a PersonalTrainer Name..."}/>

        </div>
     );
}
 
export default PersonalTrainer;