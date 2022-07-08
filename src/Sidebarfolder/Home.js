import Sidebar from '../Sidebarfolder/Sidebar';
import "./Home.css";
import React, { useEffect} from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";

function Home() {
    const [user, loading] = useAuthState(auth);
  
    const navigate = useNavigate();
  
  
    
  
    useEffect(() => {
      if (loading) return;
      if (!user) return navigate("/");
  }, [user, loading]);
    
    return (
        
        <div className="home">
        <Sidebar/>
        <h1>Home Page</h1>
        </div>
    );
}
export default Home; 