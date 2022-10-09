import React from "react";
import Axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Bulkform = () => {
  const nav = useNavigate();
  const [branch, setbranch] = useState("");
  const [section, setsection] = useState("");
  const [year, setyear] = useState("");
  //   const usernameChange = (e) => {
  //     setbranch(e.target.value);
  //   };
  const userbranch = (e) => {
    setbranch(e.target.value);
  };
  const usersection = (e) => {
    setsection(e.target.value);
  };
  const useryear = (e) => {
    setyear(e.target.value);
  };
  const getdata = (event) => {
    event.preventDefault();
    //     console.log("jjjkki");
    //     console.log(branch);
    //     console.log(section);
    //     console.log(year);
    // Axios.post("http://localhost:8080/Bulkdisplay", {
    //   branch,
    //   section,
    //   year,
    // }).then((res) => {
    //   console.log(res);
    localStorage.setItem("branch", branch);
    localStorage.setItem("section", section);
    localStorage.setItem("year", year);
    console.log(branch);
    console.log(section);
    console.log(year);
    nav("Displaytable");
    // });

    //     // nav("Display");
  };

  return (
    <div>
      <form>
        <div>
          <h1>Login Form</h1>
          <div>
            <h3>Branch</h3>
            <select value={branch} onChange={userbranch}>
              <option value="">option</option>
              <option value="CSE">CSE</option>
              <option value="IT">IT</option>
              <option value="ECE">ECE</option>
              <option value="EEE">EEE</option>
              <option value="MECHANICAL">MECHANICAL</option>
              <option value="CIVIL">CIVIL</option>
            </select>
          </div>
          <div>
            <h2>Section</h2>
            <select value={section} onChange={usersection}>
              <option value=""></option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
            </select>
          </div>
          <div>
            <h2>YEAR</h2>
            <select value={year} onChange={useryear}>
              <option value=""></option>
              <option value="2024">2024</option>
              <option value="2023">2023</option>
              <option value="2022">2022</option>
              <option value="2021">2021</option>
              <option value="2020">2020</option>
            </select>
          </div>

          <div>
            <button type="submit" value="Submit" onClick={getdata}>
              Login
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Bulkform;
