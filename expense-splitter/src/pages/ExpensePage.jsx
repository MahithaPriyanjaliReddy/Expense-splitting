// src/pages/ExpensePage.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ExpenseSplitter from "../components/ExpenseSplitter";
import GroupSidebar from "../components/GroupSidebar";

function ExpensePage() {
  const [groups, setGroups] = useState([]);
  const [selectedGroup, setSelectedGroup] = useState(null);
  const navigate = useNavigate();

  const goBackHome = () => {
    navigate("/home");
  };

  return (
    <div style={{ display: "flex" }}>
      <div style={{ flex: 3, backgroundColor: "#111", minHeight: "100vh", padding: '20px', color: 'white' }}>
        <button
          onClick={goBackHome}
          style={{
            backgroundColor: "#1e90ff",
            color: "white",
            border: "none",
            padding: "8px 16px",
            borderRadius: "4px",
            cursor: "pointer",
            marginBottom: "20px",
          }}
        >
          ← Back to Home
        </button>

        <ExpenseSplitter
          groups={groups}
          setGroups={setGroups}
          selectedGroup={selectedGroup}
        />
      </div>

      <div style={{ flex: 1 }}>
        <GroupSidebar
          groups={groups}
          setGroups={setGroups}
          selectedGroup={selectedGroup}
          setSelectedGroup={setSelectedGroup}
        />
      </div>
    </div>
  );
}

export default ExpensePage;
