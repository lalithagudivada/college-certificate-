import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
// const baseURL = "http://localhost:8080/retrieve";
const Feecert = () => {
  var dataObject = localStorage.getItem("regdnoRecord");

  dataObject = JSON.parse(dataObject);
  console.log(typeof dataObject, dataObject[0].regno);
  var reg = dataObject[0].regno,
    name = dataObject[0].name;
  console.log(name);
  //data
  return (
    <div id="fee-print">
      <div className="div">
        <h2 align="center">
          <u>FEE ESTIMATION CERTIFICATE</u>
        </h2>

        <p id="i">Date:_____</p>
        <div className="div1">
          This is to certify that
          <b>
            Ms.<span id="namees">{name}</span> with
          </b>
          <b>Regd.No.{reg}</b>
          is a student of this institute. She has joined in the 1st BDS course
          during August 2016. At present she is studying 3rd BDS course.
          <br />
          <br />
          <div className="div2">
            She has to pay the below mentioned fee to the college for her 3rd
            BDS course
            <p>Tuition Fee -</p>
            <p>Miscellaneous Fee -</p>
            <p> Stipend Fee -</p>
            <p>
              <b> Total fee - Rs. </b>
            </p>
          </div>
          <br />
          <div className="div3">
            She has paid entire fee to the college for her 1st & 2nd BDS course.
          </div>
          <br />
          <div className="div4">
            College fee should be paid in form of Demand Draft drawn in favour
            of <b>Vishnu Dental College</b>, Payable at <b>Bhimavaram</b>
          </div>
          <br />
          <div className="div5">
            This certificate is issued with reference to her letter dated _____
            for _____ purpose. The Institute is not responsible for any default
            in payment by the candidate.
          </div>
          <br />
          <div className="div6" align="right">
            PRINCIPAL
          </div>
        </div>
      </div>
    </div>
  );
  // }
  // );
};

export default Feecert;
