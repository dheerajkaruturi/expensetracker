import React, { Fragment } from "react";
import Timer from "./Components/CountdownTimer/Timer";

import Header from "./Components/Header/Header";
import TransactionCards from "./Components/TransactionCards/TransactionCards";

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
      <header>
        <Header />
      </header>
      <section>
        <Timer />
        <TransactionCards />
      </section>
    </Fragment>
  );
};

export default App;
