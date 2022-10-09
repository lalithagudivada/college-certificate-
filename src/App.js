import React from "react";
import { Route, Routes } from "react-router-dom";
import Fee from "./Fee";
import Nav from "./Nav";
import Studycert from "./Studycert";
import Custdoiancert from "./Custdoiancert";
import Towhomcert from "./Towhomcert";
import Interncert from "./Interncert";
import Residencecert from "./Residencecert";
import Studyconductcert from "./Studyconductcert";
import Feecert from "./Feecert";
import Carouselpage from "./Carouselpage";
import Bulkform from "./Bulkform";
import Displaytable from "./Displaytable";
import Message from "./Message";
const App = () => {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Message />} />
        <Route path="Form" element={<Fee />} />
        <Route path="Bulkform" element={<Bulkform />} />
        <Route path="Bulkform/Displaytable" element={<Displaytable />} />
        <Route path="Form/study" element={<Studycert />} />
        <Route path="Form/custodian" element={<Custdoiancert />} />
        <Route path="Form/concern" element={<Towhomcert />} />
        <Route path="Form/intern" element={<Interncert />} />
        <Route path="Form/residence" element={<Residencecert />} />
        <Route path="Form/conduct" element={<Studyconductcert />} />
        <Route path="Form/fee" element={<Feecert />} />
        {/* <Route path="/" element={<Carouselpage />} /> */}
      </Routes>
    </div>
  );
};

export default App;
