import React from "react";
import CurrentBalance from "./CurrentBalance/CurrentBalance";
import Loan from "./Loan/Loan";

import styles from "./transactioncard.module.css";
import Transfer from "./Transfer_to/Transfer";

const TransactionCards = function () {
  return (
    <div className={styles.cards_Container}>
      <CurrentBalance />
      <Loan />
      <Transfer />
    </div>
  );
};

export default TransactionCards;
