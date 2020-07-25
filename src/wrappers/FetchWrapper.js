import React, { useEffect, useState } from "react";

const FetchWrapper = ({ children }) => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchPeople = async () => {
      return await fetch(
        "https://yalantis-react-school-api.yalantis.com/api/task0/users"
      ).then((res) => res);
    };
    setUsers(fetchPeople());
  }, []);

  return children(users);
};

export default FetchWrapper;
