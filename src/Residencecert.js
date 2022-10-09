import React from "react";
// import { ComponentToPrint } from './ComponentToPrint';
// import ReactToPrint from 'react-to-print'
const Residencecert = () => {
  var dataObject = localStorage.getItem("regdnoRecord");

  dataObject = JSON.parse(dataObject);
  console.log(typeof dataObject, dataObject[0].regno);
  var reg = dataObject[0].regno,
    name = dataObject[0].name;
  // function print(){
  //     window.print();
  // }
  // const componentRef = useRef();
  return (
    <div id="residence-print">
      {/* <ReactToPrint
          trigger={()=><button>print</button>}
          content={() => componentRef.current}
         />
          <ComponentToPrint ref={componentRef} /> */}
      {/* <div ref={el=>{this.componentRef}}> */}
      <h4 align="right">Date:_____</h4>
      <h1 align="center" class="div2">
        <u>RESIDENCE CERTIFICATE</u>
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
          is a student of this institute. She has joined in the 1st BDS course
          during August 2016.
          <br />
          <br />
          At present she is studying 3rd BDS course. <br />
          <br />
          <br />
          <br />
          <div>
            &nbsp;&nbsp;&nbsp;&nbsp;She is residing in the college attached
            hostel in the below mentioned address:
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
          {/* <div><button >Print</button></div> */}
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Residencecert;
