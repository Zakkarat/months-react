import React, { useState, useEffect } from "react";
import User from "./User";
import { MDBRow, MDBContainer } from "mdbreact";

const People = ({ users, filterMonth }) => {
  const [resUsers, setResUsers] = useState(users);
  useEffect(() => {
    if (filterMonth || filterMonth === 0) {
      setResUsers(
        users.filter((elem) => new Date(elem.dob).getMonth() === filterMonth)
      );
    } else {
      setResUsers(users);
    }
  }, [filterMonth, users]);
  return (
    <MDBContainer fluid>
      <MDBRow className="justify-content-center">
        {resUsers.map((user, i) => (
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
