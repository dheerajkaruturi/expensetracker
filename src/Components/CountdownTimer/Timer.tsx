import React from "react";
import Card from "../Card/Card";

import styles from "./timer.module.css";

const Timer: React.FC = function () {
  return (
    <div className={styles.timer_wrapper}>
      <Card>
        <h3 className={styles.counter}>Time left to Auto Logout: 00:00:00</h3>
      </Card>
    </div>
  );
};

export default Timer;
