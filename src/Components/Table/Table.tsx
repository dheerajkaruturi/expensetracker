import Card from "../Card/Card";

import styles from "./table.module.css";

const Table: React.FC<{ movTable: number[] }> = function (props) {
  for (const movements of props.movTable) {
    console.log(movements);
  }

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
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Credit</td>
              <td>22-02-2022</td>
              <td>500</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Debit</td>
              <td>20-02-2020</td>
              <td>200</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Credit</td>
              <td>19-02-2022</td>
              <td>3000</td>
            </tr>
          </tbody>
        </table>
      </Card>
    </div>
  );
};

export default Table;
