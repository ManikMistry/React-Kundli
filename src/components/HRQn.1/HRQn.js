import React, { useState } from "react";
import './HRQ1.css'

function HRQn() {
  const[page,setPage]=useState("Home");
  return (
    <>
      <nav>
        <a onClick={()=>setPage("Home")}>Home</a>
        <a onClick={()=>setPage("About us")}>About us</a>
        <a onClick={()=>setPage("Contact")}>Contact</a>
        <a onClick={()=>setPage("Help")}>Help</a>
        <a onClick={()=>setPage("Career")}>Career</a>
      </nav>
      <main>
        <h1>{page.toUpperCase()} PAGE</h1>
      </main>
    </>
  );
}

export default HRQn;
