'use client'

// import Delete from "./Delete.js";
import { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import Status from "./status.js";

export default function carrosView({ setSelected }) {


  const employerViews = filteredEmployer.map((employerData) => {
    
      return (
        <EmployerCard
          card={employerData}
          refresh={refresh}
          setSelected={setSelected}
        />
      );
  });
 
  
  return (
    <>
    
    </>
    );
  }
  return <>{content}</>;

export async function getEmployerData() {
  var employerInfo = {};

  try {
    const response = await fetch("https://java-proj-ps2.onrender.com/empregados");
    employerInfo = response.json();
  } catch (error) {
    // <Link to="/error"></Link>;
  }

  return employerInfo;
}
