import React, { Fragment } from "react";

import Header from "./Components/Header/Header";
import Login from "./Components/Login/Login";

const DUMMY_MOVEMENTS: {
  id: number;
  title: string;
  movements: number[];
} = {
  id: 1,
  title: "Johnas",
  movements: [100, -200, 3000, -600, 100, -200, 7000, -600],
};

const App: React.FC = function () {
  console.log(DUMMY_MOVEMENTS);
  return (
    <Fragment>
      <Login />
      {/* <header>
        <Header />
      </header> */}
    </Fragment>
  );
};

export default App;
