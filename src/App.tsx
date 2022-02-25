import React, { Fragment, useState } from "react";
import Timer from "./Components/CountdownTimer/Timer";

import Header from "./Components/Header/Header";
import Table from "./Components/Table/Table";
import TransactionCards from "./Components/TransactionCards/TransactionCards";

const DUMMY_MOVEMENTS: {
  id: number;
  title: string;
  movements: [number, string][];
} = {
  id: 1,
  title: "Johnas",
  movements: [
    [100, "20-02-2022"],
    [-200, "19-02-2022"],
    [3000, "18-02-2022"],
    [-600, "17-02-2022"],
    [100, "16-02-2022"],
    [-200, "15-02-2022"],
    [7000, "14-02-2022"],
    [-600, "13-02-2022"],
  ],
};

//* for easy approach to use
const moneyMovements = DUMMY_MOVEMENTS.movements;

const App: React.FC = function () {
  const [mov, setMov] = useState<[number, string][]>(moneyMovements);

  const newMov = (movementValues: number, movementDate: string): void => {
    setMov((previousMov) => {
      return [...previousMov, [movementValues, movementDate]];
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
