import React  from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

import { Outlet } from "react-router-dom";

function Functional(){

    return(
        <>
        
        <Header></Header>
      <Outlet></Outlet>
        <Footer></Footer>

        
        
        
        </>
    )



}

export  default Functional;