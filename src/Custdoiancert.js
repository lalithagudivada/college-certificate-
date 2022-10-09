import React from "react";

const Custdoiancert = () => {
  var dataObject = localStorage.getItem("regdnoRecord");

  dataObject = JSON.parse(dataObject);
  console.log(typeof dataObject, dataObject[0].regno);
  var reg = dataObject[0].regno,
    name = dataObject[0].name;
  return (
    <div id="custodian-print">
      <div className="div">
        <p>Date:_____</p>
        <br />
        <h2 align="center">
          <u>CUSTODIAN CERTIFICATE</u>
        </h2>
        <div className="div1">
          This is to certify that <b>Ms.{reg},</b>
          <b>Regd.No.{name},</b>
          is a student of this institute.
          <br />
          <br />
          <br />
          <div className="div2">
            The following original certificates of Ms. ___________ are with this
            college & in our possession:
            <ol>
              <li>
                10 <sup>th</sup> class
              </li>
              <li>Intermediate</li>
              <li>
                6<sup>th</sup> to 10 <sup>th</sup> Study certificates{" "}
              </li>
              <li>Intermediate TC</li>
              <li>Caste Certificate</li>
            </ol>
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <div className="div3">
            This certificate is issued on request her letter dated ____ for
            _____ purpose
          </div>
          <div className="div4" align="right">
            PRINCIPAL
          </div>
        </div>
      </div>
    </div>
  );
};

export default Custdoiancert;
