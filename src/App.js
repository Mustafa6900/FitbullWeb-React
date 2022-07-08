import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./LoginPage/Login";
import Dashboard from "./LoginPage/Dashboard";
import Home from "./Sidebarfolder/Home";
import FitnessCenter from './Sidebarfolder/FitnessCenter';
import PersonalTrainer from './Sidebarfolder/PersonalTrainer';
import Profile from './Sidebarfolder/Profile';
import Suplements from './Sidebarfolder/Suplements';
import Dashboardexit from "./LoginPage/Dashboardexit";
import Register from "./LoginPage/Register";



function App() {
  return (
    <div className="App">
      <Router>

      <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/register" element={<Register/>}/>

      <Route path="/home" element={< Home /> }/>
      <Route path="/fitnessCenter" element={<FitnessCenter />} />
      <Route path="/personalTrainer" element={<PersonalTrainer />} />
      <Route path="/supplements" element={<Suplements />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/dashboardexit" element={<Dashboardexit />} />


     
     
  </Routes>
  </Router>
</div>
  );
}

export default App;
