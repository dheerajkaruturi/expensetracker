import React from "react";
import Card from "../../Card/Card";

import styles from "./currenbalance.module.css";

interface PropValues {
  toCurrentBalReducer: [number, string][];
}

const CurrentBalance: React.FC<PropValues> = function (props) {
  console.log(props.toCurrentBalReducer);

  //?using map method on the array that was recieve through props and then used reducer function to calculate the total available balance.
  const availBal = props.toCurrentBalReducer
    .map((mov) => {
      return mov[0];
    })
    .reduce((prevBal, currentBal) => {
      return prevBal + currentBal;
    }, 0)
    .toFixed(2);

  return (
    <div className={styles.currentBal_container}>
      <Card>
        <div className={styles.currentBal}>
          <h2>
            Current Balance <span>as of 23-02-2022</span>
          </h2>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <p>{availBal} ₹</p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default CurrentBalance;
