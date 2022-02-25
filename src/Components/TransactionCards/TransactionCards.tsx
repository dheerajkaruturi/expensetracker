import React from "react";
import CurrentBalance from "./CurrentBalance/CurrentBalance";
import Loan from "./Loan/Loan";

import styles from "./transactioncard.module.css";
import Transfer from "./Transfer_to/Transfer";

//* creating an interface of the props that we recieve from the App.tsx file.

interface PropValues {
  newMovements(movementValues: number, movementDate: string): void;
}

const TransactionCards: React.FC<PropValues> = function (props) {
  //? to get loan details:
  const loanAmountValue = (loan: number, date: string): void => {
    const recievedLoanAmount = loan;
    const happenedDate = date;

    console.log(recievedLoanAmount);

    props.newMovements(recievedLoanAmount, happenedDate);
  };

  //? to get transfer details:
  const transferDetails = function (
    transferedTo: string,
    transferedAmount: number,
    transferedDate: string,
  ): void {
    console.log(transferedAmount, transferedTo);
    props.newMovements(transferedAmount, transferedDate);
  };

  return (
    <div className={styles.cards_Container}>
      <CurrentBalance />
      <Loan loanAmount={loanAmountValue} />
      <Transfer transferDetails={transferDetails} />
    </div>
  );
};

export default TransactionCards;
