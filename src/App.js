import React from "react";
import Months from "./components/Months";
import People from "./components/People";
import FetchWrapper from "./wrappers/FetchWrapper";

function App() {
  return (
    <>
      <FetchWrapper>
        {(users) => (
          <>
            {" "}
            <Months users={users}></Months>
            <People users={users}></People>
          </>
        )}
      </FetchWrapper>
    </>
  );
}

export default App;
