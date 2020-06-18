import React, { useEffect, useState } from "react";
import axios from "axios";

// Make a request for a user with a given ID

// fetch("https://jsonplaceholder.typicode.com/users")
// .then((response) => response.json())
// .then((json) => {
//   setData(json);
//   console.log(json);
// });

const LoadData = () => {
  const [users, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(function (response) {
        setData(response.data);
        console.log(response.data);
      });
  }, []);

  // <code>Obj : {JSON.stringify(users)}</code>
  return (
    <div>
      <ol>
      {users.map((u,id) => (
          <li key={u.id}>Name : {u.name}  username: {u.username}, email: {u.email}</li>
        ))}
      </ol>
    </div>
  );
};

export default LoadData;
