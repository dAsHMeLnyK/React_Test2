import React from "react";

const UserCard = ({ user, onDelete }) => {
  return (
    <div className="user-card">
      <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} />
      <div>
        <h3>{`${user.first_name} ${user.last_name}`}</h3>
        <p>{user.email}</p>
        <button onClick={() => onDelete(user.id)}>Delete</button>
      </div>
    </div>
  );
};

export default UserCard;
