import React from "react";
import { Axios } from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const Custodian = () => {
  // const nav = useNavigate();
  // const Submit2 = () => {
  //   nav("Custdoiancert");
  // };
  // return (
  //   <div>
  //     <div className="main">
  //       <div className="form">
  //         <table className="logo">
  //           <tr>
  //             <td>
  //               <img
  //                 src="https://img.collegedekhocdn.com/media/img/institute/logo/Vishnu_Universal_Learning.png"
  //                 width="100"
  //                 height="105"
  //                 alt=""
  //               />
  //             </td>
  //             <td>
  //               <b>
  //                 SHRI VISHNU DENTAL <p align="center"> COLLEGE</p>
  //               </b>
  //             </td>
  //           </tr>
  //         </table>

  //         <div class="ui form">
  //           <div className="inline field">
  //             <label>Register num </label>
  //             <input type="text" placeholder="register number" />
  //           </div>
  //           <div className="inline field">
  //             <label>Year of study </label>
  //             <input type="text" placeholder="year" />
  //           </div>
  //           <button className="ui button" onClick={Submit2}>
  //             Submit
  //           </button>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );
  const nav = useNavigate();
  const [regno, setUsername] = useState("");
  const usernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handle = (event) => {
    event.preventDefault();

    Axios.post("http://localhost:8080/retrieve", { regno }).then((res) => {
      console.log(res.data.length);
      if (res.data.length === 0) {
        alert("Provided regd.no is not available!");
      } else {
        localStorage.setItem("regdnoRecord", JSON.stringify(res.data));
        nav("Custodiancert");
      }
    });
  };

  return (
    <center>
      <form align="center">
        <div className="ui form">
          <h1>Login Form</h1>
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
          <div className="inline field">
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

export default Custodian;
