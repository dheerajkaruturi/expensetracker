import Card from "../../Card/Card";

import styles from "./loan.module.css";

const Loan = function () {
  return (
    <div className={styles.loan_container}>
      <Card>
        <form className={styles.loanForm}>
          <div className={styles.loanAmount}>
            <label htmlFor="loan">Ask for Loan</label>
            <input type="text" id="loan" />
            <button>→</button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default Loan;
