import React from "react";

const Studyconductcert = () => {
  var dataObject = localStorage.getItem("regdnoRecord");

  dataObject = JSON.parse(dataObject);
  console.log(typeof dataObject, dataObject[0].regno);
  var reg = dataObject[0].regno,
    name = dataObject[0].name;
  return (
    <div id="conduct-print">
      <h4 align="right">Date:_____</h4>
      <h1 align="center" class="div2">
        <u>STUDY AND CONDUCT CERTIFICATE</u>
      </h1>

      <div>
        <div class="div1">
          {" "}
          &nbsp;&nbsp;&nbsp;&nbsp; This is to certify that{" "}
          <b>
            <b>
              Ms. {name}, Regd. No.{reg},
            </b>
          </b>
          <br />
          <br />
          is a student of this institute. She has joined in the First BDS course
          during August 2014
          <br />
          <br />
          and completed her Final BDS course during August 2018. <br />
          <br />
          <br />
          <br />
          <div>
            &nbsp;&nbsp;&nbsp;&nbsp;She has completed her one year compulsory
            rotatory internship programme from
            <br />
            <br />
            01.10.2018 to 30.09.2018 at this college.
          </div>
          <br />
          <br />
          <div>
            During her tenure, her character and conduct were found to be
            Satisfactory.
          </div>
          <div class="div3" align="right">
            PRINCIPAL
          </div>
        </div>
      </div>
    </div>
  );
};

export default Studyconductcert;
