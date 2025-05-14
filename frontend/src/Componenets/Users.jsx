import axios from "axios";
import React, { useState } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [err, setErr] = useState(false);

  const handleClick = () => {
    (async () => {
      try {
        setErr(false);
        // const res = await axios.get('http://mzmltry.com/backend')
        const res = await axios.get("http://localhost:5000/api/user");
        if (res.status === 200) {
          setUsers(res.data);
        }
      } catch (error) {
        setErr(true);
        console.error(error);
      }
    })();
  };

  return (
    <>
      {!users.length > 0 && <button onClick={handleClick}>User</button>}
      <>
        {!err ? (
          <>
            {users.map((user) => (
              <div key={user.id} className="user">
                <h2>{user.name}</h2>
              </div>
            ))}
          </>
        ) : (
          <>
            <p className="err">Somthing went wrong!</p>
          </>
        )}
      </>
    </>
  );
};

export default Users;
