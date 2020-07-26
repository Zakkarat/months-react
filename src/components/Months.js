import React from "react";
import { MDBRow, MDBCol, MDBContainer } from "mdbreact";
import monthUserReducer from "../utils/monthUserReducer";
import "../stylesheets/months.css";

const Months = ({ users }) => {
  const monthCounted = monthUserReducer(users);

  return (
    <MDBContainer>
      <MDBRow className="justify-content-center">
        {monthCounted.map((elem) => (
          <MDBCol className={`month ${elem.color}`} key={elem.name} xs="5">
            {elem.name}
          </MDBCol>
        ))}
      </MDBRow>
    </MDBContainer>
  );
};

export default Months;
