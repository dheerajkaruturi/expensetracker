import React, { Fragment, useState } from "react";
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

//* for easy approach to use
const moneyMovements = DUMMY_MOVEMENTS.movements;

const App: React.FC = function () {
  const [mov, setMov] = useState<number[]>(moneyMovements);

  const newMov = (movementValues: number): void => {
    setMov((previousMov) => {
      return [...previousMov, movementValues];
    });
  };
  return (
    <Fragment>
      <header>
        <Header />
      </header>
      <section>
        <Timer />
        {/*//? newly created movements are added in to the movements array through props that are passed. */}
        <TransactionCards newMovements={newMov} />
        <h2
          style={{
            marginLeft: "2rem",
            fontWeight: "400",
          }}
        >
          Transactions :
        </h2>
        <Table movTable={mov} />
      </section>
    </Fragment>
  );
};

export default App;
