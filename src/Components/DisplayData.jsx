import { useState, useEffect } from 'react';
import './Style.css';

function DisplayData() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    setUsers(storedUsers);
  }, []);

  return (
    <div className="display-data">
      <h2>Registered Users</h2>
      {users.length === 0 ? (
        <p>No users registered yet.</p>
      ) : (
        <ul>
          {users.map((user, index) => (
            <li key={index}>
              <strong>Name:</strong> {user.name} <br />
              <strong>Email:</strong> {user.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default DisplayData;