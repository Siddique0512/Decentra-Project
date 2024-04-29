import React from 'react';
import { FaUser } from 'react-icons/fa'; // Import profile symbol

const UserAddress = ({ address }) => {
    return (
        <div className="user-address">
            <FaUser className="profile-icon" />
            <span>{address}</span>
        </div>
    );
};

export default UserAddress;
