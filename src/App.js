import React from "react";
import "./App.css";
import MainHeader from "./MainHeader";
import MainFooter from "./MainFooter";
import Overlay from "./Overlay";

function App() {
  return (
    <div className="App">
      <MainHeader />
      <section id="main">
        <h3>Hop to a job you love</h3>
      </section>
      <MainFooter />
      <Overlay>
        <button className="modal-button modal-close">×</button>
      </Overlay>
    </div>
  );
}

export default App;
