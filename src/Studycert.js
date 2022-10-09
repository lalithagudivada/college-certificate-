import React from "react";

const studycert = () => {
  var dataObject = localStorage.getItem("regdnoRecord");

  dataObject = JSON.parse(dataObject);
  console.log(typeof dataObject, dataObject[0].regno);
  var reg = dataObject[0].regno,
    name = dataObject[0].name;
  return (
    <div id="study-print">
      <div className="div">
        <p>Date:_____</p>
        <br />
        <h2 align="center">
          <u>STUDY CERTIFICATE</u>
        </h2>
        <div className="div1">
          This is to certify that <b>Mr._____{name}</b>
          <b>Regd.No._____{reg}</b>
          is a student of this institute.He has joined in the 1st BDS course
          during the academic year 2017-2018. <br />
          At present he is studying Second BDS course.
          <div className="div2">
            This certificate is issued with reference to her letter
            dated___for____purpose.
            <br />
            <div className="div3" align="right">
              PRINCIPAL
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default studycert;
