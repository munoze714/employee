import React, { useState, useEffect } from "react";
import * as _ from "lodash";
import API from "./utils/API";
import Table from "../src/components/Table";
import Jumbotron from "./components/Jumbotron";

function App() {
  const [state, setState] = useState({
    employees: [],
    filteredEmployees: [],
  });

  useEffect(() => {
    API.getEmployee()
      .then((res) => {
        // console.log("data", res.data.results);
        var newEmps = [];
        var data = res.data.results;

        for (var i = 0; i < data.length; i++) {
          var emp = {
            name: data[i].name.first + " " + data[i].name.last,
            email: data[i].email,
            phone: data[i].phone,
            pic: data[i].picture.thumbnail,
            location: data[i].location.city + ", " + data[i].location.state,
          };
          newEmps.push(emp);
        }
        // console.log("new data", newEmps);
        setState({ ...state, employees: newEmps });
      })
      .catch((err) => console.log(err));
  }, []);

  var handleInputChange = (event) => {
    var newFiltered = [];

    state.employees.forEach((empSearch) => {
      // console.log("what they serached", event.target.value.toLowerCase());
      // console.log(
      //   empSearch.name.substring(0, event.target.value.length).toLowerCase()
      // );
      if (
        event.target.value.toLowerCase() ===
        empSearch.name.substring(0, event.target.value.length).toLowerCase()
      ) {
        // console.log(" we found a match!! keep for filtered!!", empSearch);
        newFiltered.push(empSearch);
      }
    });
    // console.log("these r the filted ppl", newFiltered);
    setState({ ...state, filteredEmployees: newFiltered });
  };
  // console.log(state);
  var empsToDisplay = state.employees;

  if (state.filteredEmployees.length > 0) {
    empsToDisplay = state.filteredEmployees;
  }
  var handleSortChange = () => {
    let sortedEmp = []
    _.sortBy(empsToDisplay, "name").map(sortEmp => {
      // console.log("sort", sortEmp);
      sortedEmp.push(sortEmp)
      return sortEmp

    })

    setState({ ...state, filteredEmployees: sortedEmp });
  };

  return (
    <>
      <div className="App">
        <Jumbotron
          handleInputChange={handleInputChange}
          handleSortChange={handleSortChange}
        />
        <Table empsToDisplay={empsToDisplay} />
      </div>
    </>
  );
}

export default App;
