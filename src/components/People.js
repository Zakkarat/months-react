import React from "react";
import User from "./User";
import { MDBRow, MDBContainer } from "mdbreact";

const People = ({ users }) => {
  return (
    <MDBContainer fluid>
      <MDBRow className="justify-content-center">
        {users.map((user, i) => (
          <User
            key={i}
            firstName={user.firstName}
            lastName={user.lastName}
            dob={new Date(user.dob)}
          />
        ))}
      </MDBRow>
    </MDBContainer>
  );
};

export default People;
