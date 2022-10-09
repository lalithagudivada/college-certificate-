import React from "react";
import { NavLink } from "react-router-dom";
import printJS from "print-js";
import Fee from "./Fee";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const nav = useNavigate();
  const centralize = (e) => {
    // const changevar = e.target.id;
    const changevar = e.target.value;
    localStorage.setItem("certificate", JSON.stringify(changevar));
    // <Fee data={changevar} />;
    // let finalStrings = changevar.replace(/["]+/g, "");
    console.log(changevar);

    // this.props.history.push(`/${e.target.value}`);

    nav("Form");
  };
  const centralize2 = (e) => {
    // const changevar = e.target.id;
    const changevar2 = e.target.value;
    localStorage.setItem("certificate2", JSON.stringify(changevar2));
    // <Fee data={changevar} />;
    // let finalStrings = changevar.replace(/["]+/g, "");
    console.log(changevar2);

    // this.props.history.push(`/${e.target.value}`);

    nav("Bulkform");
  };
  const printhandler = (e) => {
    // const changevar = e.target.id;
    // console.log(changevar, "hhhhh");
    // console.log("jjjjj");
    // console.log(changevar);
    var certdata = localStorage.getItem("certificate");
    let finalString = certdata.replace(/["]+/g, "");
    printJS(finalString + "-print", "html");
  };
  return (
    <div>
      <div className=" ui inverted menu">
        <select onChange={centralize} className="ui from">
          <option value="single">Single Certificate</option>
          <option value="study" id="study">
            Study
          </option>

          <option value="custodian" id="custodian">
            Custodian
          </option>
          <option value="fee" id="fee">
            Fee
          </option>
          <option value="concern" id="concern">
            Concern
          </option>
          <option value="residence" id="residence">
            Residence
          </option>
          <option value="intern" id="intern">
            Internship duration
          </option>
          <option value="conduct" id="conduct">
            Study and conduct
          </option>
        </select>
        <div className=" ui inverted menu">
          <select onChange={centralize2}>
            <option value="BULK">Bulk Certificate</option>
            <option value="study" id="study">
              Study
            </option>

            <option value="custodian" id="custodian">
              Custodian
            </option>
            <option value="fee" id="fee">
              Fee
            </option>
            <option value="custodian" id="custodian">
              Concern
            </option>
            <option value="residence" id="residence">
              Residence
            </option>
            <option value="intern" id="intern">
              Internship
            </option>
            <option value="conduct" id="conduct">
              Study and conduct
            </option>
          </select>
        </div>

        {/* <NavLink
          // to="Study"
          to="Form"
          className="item"
          id="study"
          onClick={centralize}
        >
          STUDY CERTIFICATE{" "}
        </NavLink>
        <NavLink
          //   to="Custodian"
          to="Form"
          className="item"
          id="custodian"
          onClick={centralize}
        >
          CUSTODIAN CERTIFICATE{" "}
        </NavLink>
        <NavLink to="Form" className="item" id="fee" onClick={centralize}>
          FEE ESTIMATION{" "}
        </NavLink>
        <NavLink
          //   to="Concern"
          to="Form"
          className="item"
          id="concern"
          onClick={centralize}
        >
          TO WHOMSOEVER IT MAY CONCERN
        </NavLink>
        <NavLink
          //   to="Residence"
          to="Form"
          className="item"
          id="residence"
          onClick={centralize}
        >
          RESIDENCE CERTIFICATE{" "}
        </NavLink> */}
        {/* <NavLink
          //   to="Internship"
          to="Form"
          className="item"
          id="internship"
          onClick={centralize}
        >
          INTERNSHIP DURATION{" "}
        </NavLink> */}
        {/* <NavLink
          //   to="Conduct"
          to="Form"
          className="item"
          id="conduct"
          onClick={centralize}
        >
          STUDY AND CONDUCT{" "}
        </NavLink> */}
        <button onClick={printhandler}>print</button>
      </div>
    </div>
  );
};

export default Nav;
