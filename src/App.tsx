import React, { Fragment, useEffect, useState } from "react";
import firebase from "firebase";
import Timer from "./Components/CountdownTimer/Timer";

import Header from "./Components/Header/Header";
import Table from "./Components/Table/Table";
import TransactionCards from "./Components/TransactionCards/TransactionCards";

const base_Url = `https://moneytracker-7c315-default-rtdb.firebaseio.com/moneymovements.json`;

const App: React.FC = function () {
  const [mov, setMov] = useState([]);

  //! getting movements values from the firebase:

  const getMovements = async function () {
    const response = await fetch(base_Url);
    const data = await response.json();

    console.log(typeof data.movements);

    //? change the string value that is stored in json file(firebase) to object
    const parsedValue = JSON.parse(data.movements);

    console.log(typeof parsedValue, parsedValue);

    //* setting the movements value to the state setting function.
    setMov(parsedValue);
  };

  //? using this useEffect() to handle the infinte renders of this function:
  useEffect(() => {
    getMovements();
  }, []);

  //! posting movements data to firebase:

  const newMov = (movementValues: number, movementDate: string): void => {
    //? pushing the amount and date to an array to push the array into the array of movements in firebase
    console.log(
      "Movement Value: " + movementValues,
      "Movement Date: " + movementDate
    );
    let movementsDetailsArray: any[] = [];
    movementsDetailsArray.push(movementValues, movementDate);
    console.log(movementsDetailsArray);

    //? updating the movements array in firebase by adding this movementsDetailsArray from here:
    const newMovements = function () {
      return firebase
        .database()
        .ref("moneymovements")
        .child("movements")
        .push(movementsDetailsArray);
    };
    newMovements();
  };
  return (
    <Fragment>
      <header>
        <Header />
      </header>
      <section>
        <Timer />
        {/*//? newly created movements are added in to the movements array through props that are passed. */}
        <TransactionCards newMovements={newMov} toCurrentBalReducer={mov} />
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
