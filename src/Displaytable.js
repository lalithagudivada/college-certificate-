import React, { useEffect, useState } from "react";
import printJS from "print-js";
import Axios from "axios";
import "./Styles.css";
import Custdoiancert from "./Custdoiancert";
import Studycert from "./Studycert";
import Feecert from "./Feecert";
// import Residencecert from "./Residencecert";
import Dumy from "./Dumy";
import Residencecert from "./Residencecert";
import Interncert from "./Interncert";
import Studyconductcert from "./Studyconductcert";
import Towhomcert from "./Towhomcert";

// const baseURL = "http://localhost:8080/Bulkdisplay";

const Displaytable = () => {
  const [buttonclick, setbuttonclick] = useState();
  const [userdata, setuserdata] = useState([]);
  const b = localStorage.getItem("branch");
  const s = localStorage.getItem("section");
  const y = localStorage.getItem("year");
  console.log(b, s, y);
  const bulkprint = (e) => {
    Axios.post("http://localhost:8080/retrieve", e.target.id).then((res) => {
      localStorage.setItem("regdnoRecord2", JSON.stringify(res.data));
      var certdata = localStorage.getItem("certificate2");
      console.log(certdata);

      //   let certdata = "fee";
      let finalString = certdata.replace(/["]+/g, "");
      setbuttonclick(finalString);
      console.log(finalString);

      //printJS("fee-print", "html");
      printJS(finalString + "-print", "html");
      //   let finalString = certdata.replace(/["]+/g, "");
    });
    //   var certdata = localStorage.getItem("certificate2");
    //   let finalString = certdata.replace(/["]+/g, "");
  };

  useEffect(() => {
    Axios.post(`http://localhost:8080/Bulkdisplay`, { b, s, y }).then(
      (response) => {
        setuserdata(response.data);
        console.log(response.data);
      }
    );
  }, []);

  return (
    <div>
      {/* <Dumy /> */}
      <table border="1" align="center">
        <thead>
          <tr>
            <th>Registration</th>
            <th>Name</th>
            {/* <th>Branch</th> */}
            {/* <th>Section</th> */}
            {/* <th>Year</th> */}

            {/* <th>accept</th> */}
          </tr>
        </thead>
        <tbody>
          {userdata.map((val) => {
            return (
              <tr key={val.regno}>
                <td>{val.regno}</td>
                <td>{val.name}</td>

                <td>
                  <button
                    className="button-solid"
                    id={val.regno}
                    onClick={bulkprint}
                    // onClick={() => {
                    //   setbuttonclick("study");
                    // }}
                  >
                    print
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div style={{ display: "none" }}>
        {buttonclick === "fee" ? (
          <Feecert />
        ) : buttonclick === "study" ? (
          <Studycert />
        ) : buttonclick === "custodian" ? (
          <Custdoiancert />
        ) : buttonclick === "intern" ? (
          <Interncert />
        ) : buttonclick === "residence" ? (
          <Residencecert />
        ) : buttonclick === "conduct" ? (
          <Studyconductcert />
        ) : buttonclick === "concern" ? (
          <Towhomcert />
        ) : (
          <Dumy />
        )}
      </div>
    </div>
  );
};

export default Displaytable;
