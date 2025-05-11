// src/components/GroupSidebar.jsx
import { useState } from "react";

function GroupSidebar({ groups, setGroups, selectedGroup, setSelectedGroup }) {
  const [newGroupName, setNewGroupName] = useState("");
  const [newGroupDesc, setNewGroupDesc] = useState("");

  const handleCreateGroup = () => {
    if (!newGroupName) {
      alert("Group name cannot be empty");
      return;
    }

    const newGroup = {
      name: newGroupName.trim(),
      description: newGroupDesc.trim(),
      expenses: [],
    };

    setGroups([...groups, newGroup]);
    setNewGroupName("");
    setNewGroupDesc("");
  };

  return (
    <div
      style={{
        backgroundColor: "#1e90ff",
        color: "white",
        padding: "20px",
        height: "100vh",
        borderLeft: "4px solid #000",
      }}
    >
      <h2>Groups</h2>

      <input
        placeholder="Group Name"
        value={newGroupName}
        onChange={(e) => setNewGroupName(e.target.value)}
        style={{ marginBottom: "8px", padding: "8px", width: "100%", color: 'black' }}
      />
      <input
        placeholder="Description (optional)"
        value={newGroupDesc}
        onChange={(e) => setNewGroupDesc(e.target.value)}
        style={{ marginBottom: "8px", padding: "8px", width: "100%", color: 'black' }}
      />
      <button
        onClick={handleCreateGroup}
        style={{
          backgroundColor: "black",
          color: "white",
          border: "none",
          padding: "8px 16px",
          cursor: "pointer",
          borderRadius: "4px",
          width: "100%",
        }}
      >
        + Create Group
      </button>

      <div style={{ marginTop: "20px" }}>
        {groups.map((group, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedGroup(group)}
            style={{
              display: "block",
              width: "100%",
              backgroundColor:
                selectedGroup?.name === group.name ? "black" : "#00000099",
              color: "white",
              border: "none",
              padding: "10px",
              textAlign: "left",
              marginTop: "8px",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            {group.name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default GroupSidebar;
