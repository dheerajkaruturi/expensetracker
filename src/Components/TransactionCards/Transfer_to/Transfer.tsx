import React, { useRef } from "react";
import Card from "../../Card/Card";

import styles from "./transfer.module.css";

//* interface of the props that we get from the parent component.
interface PropValues {
  transferDetails(transferedTo: string, tranferedAmount: number, tranferedDate: string): void;
}

const Transfer: React.FC<PropValues> = function (props) {
  const transferToRef = useRef<HTMLInputElement>(null);

  const transferAmountRef = useRef<HTMLInputElement>(null);

  //? to get current date and send them as arguments:
  const date = new Date();
  const currentDate = date.getDate();
  const currentMonth = date.getMonth() + 1;
  const currentYear = date.getFullYear();

  const transferHandler = (event: React.FormEvent): void => {
    event.preventDefault();

    const enteredTransferTo = transferToRef.current!.value;

    const enteredTransferAmt = +transferAmountRef.current!.value;

     const fullDate = `${currentDate}-${currentMonth}-${currentYear}`;

    props.transferDetails(enteredTransferTo, -enteredTransferAmt, fullDate);
  };
  return (
    <div className={styles.transfer_Container}>
      <Card>
        <form className={styles.transferForm} onSubmit={transferHandler}>
          <div className={styles.transfer}>
            <div className={styles.transferTo}>
              <label htmlFor="tranfer">Transfer To</label>
              <input type="text" id="transfer" ref={transferToRef} />
            </div>
            <div className={styles.transferAmount}>
              <label htmlFor="amount">Transfer Amount</label>
              <input type="number" id="transfer" ref={transferAmountRef} />
            </div>
          </div>
          <div className={styles.button}>
            <button>Send</button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default Transfer;
