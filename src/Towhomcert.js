import React from "react";

const Towhomcert = () => {
  var dataObject = localStorage.getItem("regdnoRecord");

  dataObject = JSON.parse(dataObject);
  console.log(typeof dataObject, dataObject[0].regno);
  var reg = dataObject[0].regno,
    name = dataObject[0].name;
  return (
    <div id="concern-print">
      <h4 align="right">Date:_____</h4>
      <h1 align="center" class="div2">
        <u>TO WHOMSOEVER IT MAY CONCERN</u>
      </h1>
      <div>
        <div class="div1">
          {" "}
          &nbsp;&nbsp;&nbsp;&nbsp; This is to certify that <b />
          Ms. {name}, Regd. No. {reg},
          <b />
          <br />
          <br />
          is a student of this institute. She has joined in the 1st BDS course
          during August 2016.
          <br />
          <br />
          At present she is studying 3rd BDS course. <br />
          <br />
          <br />
          <br />
          <div>
            &nbsp;&nbsp;&nbsp;&nbsp;She has paid her tuition fee of Rs.
            5,00,000/- (Rupees five lakhs only) for her
            <br />
            <br /> 3rd BDS course.
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
          <div class="div3" align="right">
            PRINCIPAL
          </div>
        </div>
      </div>
    </div>
  );
};

export default Towhomcert;
