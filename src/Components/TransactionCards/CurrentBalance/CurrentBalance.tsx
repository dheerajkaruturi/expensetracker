import react from "react";
import Card from "../../Card/Card";

import styles from "./currenbalance.module.css";

const CurrentBalance: React.FC = function () {
  return (
    <div className={styles.currentBal_container}>
      <Card>
        <div className={styles.currentBal}>
          <h2>
            Current Balance <span>as of 23-02-2022</span>
          </h2>
          <p>33000.00 ₹</p>
        </div>
      </Card>
    </div>
  );
};

export default CurrentBalance;