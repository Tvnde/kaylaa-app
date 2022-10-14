import React from "react"
import './App.scss'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from "./components/login/Login";
import Home from "./components/home/Home";
import Campaign from "./components/campaigns/Campaign";
import New from "./components/campaigns/New";
import Outreach from "./components/outreaches/Outreach";
import Influencer from "./components/influencers/Influencer";
import Create from "./components/outreaches/Create";
import Register from "./components/register/Register";
import Creator from "./components/creator/Creator";


const App = () => (
  <Router>
    <div className="app-container">
      <Routes>
        <Route path="/">
          <Route index element= {<Home/>} />
          <Route path="login" element={<Login/>} />
          <Route path="register" element={<Register/>} />
          <Route path="dashboard" element={<Creator/>} />
        </Route>
        <Route path="campaigns">
          <Route index element = {<Campaign />} />
          <Route path="new" element = {<New/>} />
        </Route>
        <Route path="outreaches">
          <Route index element = {<Outreach />} />
          <Route path="create" element = {<Create/>} />
        </Route>
        <Route path="influencers">
          <Route index element= {<Influencer />} />
        </Route>
      </Routes>
    </div>
  </Router>
)
export default App;
