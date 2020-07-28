import React, { useState } from "react";
import Months from "./components/Months";
import People from "./components/People";
import FetchWrapper from "./wrappers/FetchWrapper";

function App() {
  const [filterMonth, setFilterMonth] = useState("");
  const onFilterChange = (month) => {
    setFilterMonth(month);
  };

  return (
    <>
      <FetchWrapper>
        {(users) => (
          <>
            {" "}
            <Months onFilterChange={onFilterChange} users={users}></Months>
            <People filterMonth={filterMonth} users={users}></People>
          </>
        )}
      </FetchWrapper>
    </>
  );
}

export default App;
