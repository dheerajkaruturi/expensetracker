import React from "react";

import styles from './card.module.css'

const Card: React.FC = function (props) {
  return <div className={styles.card}>{props.children}</div>;
};

export default Card;
