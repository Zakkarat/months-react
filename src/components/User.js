import React from "react";
import {
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
} from "mdbreact";
import datePrettiefier from "../utils/datePrettifier";

const User = ({ firstName, lastName, dob }) => {
  console.log(dob);
  return (
    <MDBCol md="3" className="mx-5 my-3">
      <MDBCard>
        <MDBCardBody>
          <MDBCardTitle className="text-center">
            {firstName} {lastName}
          </MDBCardTitle>
          <MDBCardText className="text-center font-weight-bold">
            Date of birth:{" "}
            {`${datePrettiefier(dob.getDate())}.${datePrettiefier(
              dob.getMonth() + 1
            )}.${dob.getFullYear()}`}
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  );
};

export default User;
