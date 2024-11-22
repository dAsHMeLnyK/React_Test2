import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import { getUsers, deleteUser } from "./utils/apiMethods";
import UserList from "./components/UserList";
import FilterBox from "./components/FilterBox";

const Index = () => {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const fetchUsers = async () => {
    const data = await getUsers();
    setUsers(data);
    setErrorMessage("");
  };

  const handleDelete = async (userId) => {
    await deleteUser(userId);
    setUsers(users.filter((user) => user.id !== userId));
  };

  const filteredUsers = users.filter((user) =>
    `${user.first_name} ${user.last_name}`
      .toLowerCase()
      .includes(filter.toLowerCase())
  );

  const noResultsMessage =
    filteredUsers.length === 0 && filter ? (
      <p>No users found with that name.</p>
    ) : null;

  return (
    <div className="app">
      <h2>Users from API:</h2>
      <button onClick={fetchUsers}>Fetch Users</button>
      <FilterBox filter={filter} setFilter={setFilter} />
      {noResultsMessage}
      <UserList users={filteredUsers} onDelete={handleDelete} />
    </div>
  );
};

ReactDOM.render(<Index />, document.getElementById("root"));
