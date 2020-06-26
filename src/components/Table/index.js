import React from "react";

function Table(props) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col"></th>
          <th scope="col"> Name</th>
          <th scope="col">Phone</th>
          <th scope="col">Email</th>
          <th scope="col">Location</th>
        </tr>
      </thead>
      <tbody>
        {props.empsToDisplay.map((emp, i) => {
          return (
            <tr key={i}>
              <td>
                <img src={emp.pic} alt="avatar"></img>
              </td>
              <td> {emp.name} </td>
              <td>
                <a href={"tel:+" + emp.phone}>{emp.phone}</a>
              </td>
              <td>
                <a href={"mailto:" + emp.email}>{emp.email}</a>
              </td>
              <td> {emp.location} </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;
