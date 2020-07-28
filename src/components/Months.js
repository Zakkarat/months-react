import React from "react";
import { MDBRow, MDBCol, MDBContainer } from "mdbreact";
import monthUserReducer from "../utils/monthUserReducer";
import "../stylesheets/months.css";
import { months } from "../libs/months.json";

const Months = ({ users, onFilterChange }) => {
  const monthCounted = monthUserReducer(users, months);
  return (
    <MDBContainer>
      <MDBRow className="justify-content-center">
        {monthCounted.map((elem, i) => (
          <MDBCol
            onMouseEnter={() => onFilterChange(i)}
            onMouseLeave={() => onFilterChange("")}
            className={`month ${elem.color}`}
            key={elem.name}
            xs="5"
          >
            {elem.name}
          </MDBCol>
        ))}
      </MDBRow>
    </MDBContainer>
  );
};

export default Months;
