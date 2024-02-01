// GroupManagement/GroupCreation.jsx

import React, { useState } from 'react';
import "./GroupCreation.css"

const GroupCreation = () => {
  const [groupName, setGroupName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form data as needed

    // Create a group object
    const newGroup = {
      name: groupName,
      // Add more properties as needed
    };

    // Pass the new group to the parent component
   // onCreateGroup(newGroup);

    // Clear form fields
    setGroupName('');
  };

  return (
    <div className="group-creation-container">
      <h2>Create Group</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Group Name:
          <input
            type="text"
            value={groupName}
            onChange={(e) => setGroupName(e.target.value)}
            required
          />
        </label>
        {/* Add more form fields as needed */}
        <button type="submit">Create Group</button>
      </form>
    </div>
  );
};

export default GroupCreation;
