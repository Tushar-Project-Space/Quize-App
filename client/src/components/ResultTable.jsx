import React from "react";

const ReasultTable = () => {
  return (
    <div>
      <table>
        <thead className="table-header">
          <tr className="table-row">
            <td>Name</td>
            <td>Attempts</td>
            <td>Earn Points</td>
            <td>Result</td>
          </tr>
        </thead>
        <body>
          <tr className="table-body">
            <td>Daily Tution</td>
            <td>03</td>
            <td>20</td>
            <td>Passed</td>
          </tr>
        </body>
      </table>
    </div>
  );
};

export default ReasultTable;
