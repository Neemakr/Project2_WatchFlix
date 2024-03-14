import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./pages/Signup";
import Netflix from "./pages/Netflix";
import Login from "./pages/Login";

function App(){
  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path = "/login" element = {<Login />} />
          <Route path = "/signup" element = {<SignUp />} />
          <Route path = "/" element = {<Netflix />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;