import React from "react";

const Interncert = () => {
  var dataObject = localStorage.getItem("regdnoRecord");

  dataObject = JSON.parse(dataObject);
  console.log(typeof dataObject, dataObject[0].regno);
  var reg = dataObject[0].regno,
    name = dataObject[0].name;
  return (
    <div id="intern-print">
      <h4 align="right">Date:_____</h4>
      <h1 align="center" className="div2">
        <u>INTERNSHIP DURATION CERTIFICATE</u>
      </h1>

      <div>
        <div className="div1">
          {" "}
          &nbsp;&nbsp;&nbsp;&nbsp; This is to certify that{" "}
          <b>
            <b>
              Ms. {name}, Regd. No. {reg},
            </b>
          </b>
          <br />
          <br />
          is a student of this institute. She has joined in the First BDS course
          during August 2014 .<br />
          <br />
          and completed her Final BDS course during August 2018. <br />
          <br />
          <br />
          <br />
          <div>
            &nbsp;&nbsp;&nbsp;&nbsp;At present she is undergoing her one year
            compulsory rotatory internship
            <br />
            <br /> programme (01.10.2018 to 30.09.2019) at this college.
          </div>
          <br />
          <br />
          <div>
            This certificate is issued with reference to her letter dated _____
            for
            <br />
            <br />
            ______ purpose.
          </div>
          <div className="div3" align="right">
            PRINCIPAL
          </div>
        </div>
      </div>
      {/* <div/> */}
    </div>
  );
};

export default Interncert;
