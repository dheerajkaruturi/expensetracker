import React from "react";
import Card from "../Card/Card";

import styles from "./table.module.css";

const Table: React.FC<{ movTable: [number, string][] }> = function (props) {
  console.log(props.movTable);

  //? this function returns the table values
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
          <tbody>{newTable()}</tbody>
        </table>
      </Card>
    </div>
  );
};

export default Table;
