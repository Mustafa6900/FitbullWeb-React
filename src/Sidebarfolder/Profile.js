import Sidebar from '../Sidebarfolder/Sidebar';
import "./Profile.css";
import React, { useEffect} from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";

const Profile = () => {
    const [user, loading] = useAuthState(auth);
  
    const navigate = useNavigate();
  
  
    
  useEffect(() => {
      if (loading) return;
      if (!user) return navigate("/");
  }, [user, loading]);
    return ( 
        
        <div className="profile">
            <Sidebar/>
            <h1>Profile  Screen</h1>
        </div>
     );
}
 
export default Profile;