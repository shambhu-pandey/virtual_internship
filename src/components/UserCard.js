import React from "react";
import "./UserCard.scss";

const UserCard = ({ user }) => {
  return (
    <div className="user-card">
      <img src={user.avatar} alt={user.first_name} className="user-avatar" />
      <div className="user-info">
        <h3>
          {user.first_name} {user.last_name}
        </h3>
        <p>{user.email}</p>
      </div>
    </div>
  );
};

export default UserCard;
