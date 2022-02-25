import React, { useRef } from "react";
import Card from "../../Card/Card";

import styles from "./loan.module.css";

// interface FuncProps {
//   loanAmount(loan: number): number;
// }
//? either you can pass FuncProps interface as a generic type or can in the other way around

const Loan: React.FC<{ loanAmount(loan: number): void }> = function (props) {
  const loanAmountRef = useRef<HTMLInputElement>(null);

  const loanHandler = function (event: React.FormEvent): void {
    event.preventDefault();

    let enteredLoanamount = +loanAmountRef.current!.value;

    props.loanAmount(enteredLoanamount);
  };

  return (
    <div className={styles.loan_container}>
      <Card>
        <form className={styles.loanForm} onSubmit={loanHandler}>
          <div className={styles.loanAmount}>
            <label htmlFor="loan">Ask for Loan</label>
            <input type="text" id="loan" ref={loanAmountRef} />
            <button>→</button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default Loan;
