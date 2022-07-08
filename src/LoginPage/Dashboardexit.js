import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import "./Dashboardexit.css";
import { auth, db, logout } from "../firebase";
import { query, collection, getDocs, where } from "firebase/firestore";


function Dashboardexit() {
  const [user, loading] = useAuthState(auth);
  
  const navigate = useNavigate();


  

  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/");
}, [user, loading]);
 


  return (
    
    <div className="dashboardexit">
      <div className="dashboardexit__container">
        Active session.
        <div>{user?.email}</div>
       
        <button className="dashboardexit__btn" onClick={logout}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default Dashboardexit;
