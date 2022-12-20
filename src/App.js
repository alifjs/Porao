// import {useState} from 'react'

import Sign_in_page from "./Sign_in_page";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sign_up_page from "./Sign_up_page";
import Guardian_page from "./Guardian_page";
import { LoginContext } from './Context';
import React,{useContext,useState} from 'react';
import Tutor_page from "./Tutor_page";
import Job_card from "./Job_card";
import Admin_page from './Admin_page'
import Footer from "./Footer";

function App() {
  const [loggedin,set_logged_in]=useState({})
  return (
    <LoginContext.Provider value={{loggedin,set_logged_in}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" >
            <Route index element={<Sign_in_page />} />
            <Route path="sign_up" element={<Sign_up_page/>} />
            <Route path="guardian_home" element={<Guardian_page/>} />
            <Route path="tutor_home" element={<Tutor_page/>} />
            <Route path="admin_home" element={<Admin_page/>} />
            <Route path="job_card" element={<Job_card/>} />
            <Route path='footer' element={<Footer/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </LoginContext.Provider>
  );
}

export default App;
