import React, { Fragment } from "react";
import Timer from "./Components/CountdownTimer/Timer";

import Header from "./Components/Header/Header";
import Table from "./Components/Table/Table";
import TransactionCards from "./Components/TransactionCards/TransactionCards";

const DUMMY_MOVEMENTS: {
  id: number;
  title: string;
  date: object;
  movements: number[];
} = {
  id: 1,
  title: "Johnas",
  date: new Date(),
  movements: [100, -200, 3000, -600, 100, -200, 7000, -600],
};

const App: React.FC = function () {
  return (
    <Fragment>
      <header>
        <Header />
      </header>
      <section>
        <Timer />
        <TransactionCards />
        <h2
          style={{
            marginLeft: "2rem",
            fontWeight: "400",
          }}
        >
          Transactions :
        </h2>
        <Table movTable={DUMMY_MOVEMENTS.movements} />
      </section>
    </Fragment>
  );
};

export default App;
