import React from "react";
import Axios from "axios";

import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
const Fee = (props) => {
  const nav = useNavigate();
  const [regno, setUsername] = useState("");
  // const [stdname, setPassword] = useState("");
  // const passwordChange = (e) => {
  //   setPassword(e.target.value);
  // };

  const usernameChange = (e) => {
    setUsername(e.target.value);
  };

  //for insert the data into databse

  const handle = (event) => {
    // localStorage.setItem("regno", regno);
    event.preventDefault();
    // var selected_regd = localStorage.getItem("regno");

    // setuserdata(response.data);

    // route value pass post

    Axios.post("http://localhost:8080/retrieve", { regno }).then((res) => {
      console.log(res.data.length);
      if (res.data.length == 0) {
        alert("Provided regd.no is not available!");
      } else {
        // alert("type -" + typeof res.data);
        localStorage.setItem("regdnoRecord", JSON.stringify(res.data));
        var certdata = localStorage.getItem("certificate");
        console.log(certdata);

        let finalString = certdata.replace(/["]+/g, "");
        // console.log(finalString);
        nav(finalString);
      }
    });

    // console.log("hola");
    // console.log(localStorage.getItem("regno"));
  };
  // const handle = () => {
  //   nav("Feecert");
  // };

  return (
    <center>
      <form align="center">
        <div className="ui form">
          <h2>
            <u>Login Form</u>
          </h2>
          <table align="center">
            <tr>
              <td>
                <img
                  src="https://img.collegedekhocdn.com/media/img/institute/logo/Vishnu_Universal_Learning.png"
                  width="100"
                  height="105"
                  alt=""
                />
              </td>
              <td>
                <b>
                  SHRI VISHNU DENTAL <p align="center"> COLLEGE</p>
                </b>
              </td>
            </tr>
          </table>
          <div className="inline">
            <input
              type="text"
              name="regno"
              value={regno}
              onChange={usernameChange}
              placeholder="regd no"
            />
          </div>

          <div>
            <button type="submit" value="Submit" onClick={handle}>
              Submit
            </button>
            <br></br>
          </div>
        </div>
      </form>
    </center>
  );
};

export default Fee;
