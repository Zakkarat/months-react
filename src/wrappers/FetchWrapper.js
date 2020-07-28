// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import axios from "axios";

const FetchWrapper = ({ children }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    (async () => {
      await axios(
        "https://yalantis-react-school-api.yalantis.com/api/task0/users"
      ).then((res) => setUsers(res.data));
    })();
  }, []);

  return children(users);
};

export default FetchWrapper;
