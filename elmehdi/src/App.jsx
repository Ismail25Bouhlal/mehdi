import React from "react";
import Header from "./component/header/header";
import Navbar from './component/navbar/navbar';
import Landing from "./component/landing/landing";
import Contact from "./component/contact/contact";

const App = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Landing />
      <Contact/>
    </>
  );
};

export default App;
