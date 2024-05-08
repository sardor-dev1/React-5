import { Fragment, useState } from "react";
import "./index.scss";
import Navbar from "./components/layout/navbar/Navbar";
import Leftform from "./components/leftForm/Leftform";

function App() {
  return (
    <Fragment>
      <Navbar />
      <main>
        <section className="leftForm container">
          <Leftform />
        </section>
      </main>
    </Fragment>
  );
}

export default App;
