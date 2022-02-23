import Card from "../../Card/Card";

import styles from "./transfer.module.css";

const Transfer = function () {
  return (
    <div className={styles.transfer_Container}>
      <Card>
        <form className={styles.transferForm}>
          <div className={styles.transfer}>
            <div className={styles.transferTo}>
              <label htmlFor="tranfer">Tranfer To</label>
              <input type="text" id="transfer" />
            </div>
            <div className={styles.transferAmount}>
              <label htmlFor="amount">Transfer Amount</label>
              <input type="number" id="transfer" />
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
