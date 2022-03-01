import React, { useState } from "react";
import Card from "../Card/Card";

import styles from "./table.module.css";

interface PropValues {
  movTable: [number, string][];
}

const Table: React.FC<PropValues> = function (props) {
  //? defining states for filtering the credit and debit values:
  const [debit, setDebit] = useState(false);
  const [credit, setCredit] = useState(false);
  const [table, setTable] = useState(true);

  //? event handler functions:
  const creditSort = function () {
    setCredit(true);
    setDebit(false);
    setTable(false);
  };

  const debitSort = function () {
    setDebit(true);
    setCredit(false);
    setTable(false);
  };

  //? this function returns all the movement values into the table:
  const newTable = () => {
    return props.movTable.map((mov, index) => {
      return (
        <tr key={index}>
          <th scope="row">{index + 1}</th>
          <td>{mov[0] > 0 ? "Credit" : "Debit"}</td>
          <td>{mov[1]}</td>
          <td>{mov[0]}</td>
        </tr>
      );
    });
  };

  //? filtering debit values:
  const debitFilter = () => {
    return props.movTable.map((mov, index) => {
      if (mov[0] < 0) {
        return (
          <tr key={index}>
            <th scope="row">{index + 1}</th>
            <td>Debit</td>
            <td>{mov[1]}</td>
            <td>{mov[0]}</td>
          </tr>
        );
      }
    });
  };

  //? filtering credit values:
  const creditFilter = () => {
    return props.movTable.map((mov, index) => {
      if (mov[0] > 0) {
        return (
          <tr key={index}>
            <th scope="row">{index + 1}</th>
            <td>Credit</td>
            <td>{mov[1]}</td>
            <td>{mov[0]}</td>
          </tr>
        );
      }
    });
  };
  return (
    <div className={styles.tableWrapper}>
      <Card>
        <div className="row">
          <div className="col-2">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
                onClick={creditSort}
              />
              <label className="form-check-label" id="flexCheckDefault">
                Credit
              </label>
            </div>
          </div>
          <div className="col-2">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
                onClick={debitSort}
              />
              <label className="form-check-label" id="flexCheckDefault">
                Debit
              </label>
            </div>
          </div>
        </div>
        <hr />
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Transaction Type</th>
              <th scope="col">Date</th>
              <th scope="col">Amount</th>
            </tr>
          </thead>
          {table && <tbody>{newTable()}</tbody>}
          {credit && <tbody> {creditFilter()} </tbody>}
          {debit && <tbody>{debitFilter()}</tbody>}
        </table>
      </Card>
    </div>
  );
};

export default Table;
