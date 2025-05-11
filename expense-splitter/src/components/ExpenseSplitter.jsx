// src/components/ExpenseSplitter.jsx
import { useState } from "react";

function ExpenseSplitter({ groups, selectedGroup, setGroups }) {
  const [expenseName, setExpenseName] = useState("");
  const [amount, setAmount] = useState("");
  const [participants, setParticipants] = useState("");
  const [paidBy, setPaidBy] = useState("");

  const handleSplitExpense = () => {
    if (!selectedGroup) {
      alert("Please select a group first.");
      return;
    }

    const participantList = participants
      .split(",")
      .map((p) => p.trim())
      .filter((p) => p);

    if (!expenseName || !amount || participantList.length === 0 || !paidBy) {
      alert("Please fill all fields.");
      return;
    }

    const totalAmount = parseFloat(amount);
    const splitAmount = totalAmount / participantList.length;

    const newExpense = {
      name: expenseName,
      amount: totalAmount,
      participants: participantList,
      paidBy: paidBy.trim(),
      splitAmount: splitAmount.toFixed(2),
    };

    const updatedGroups = groups.map((group) => {
      if (group.name === selectedGroup.name) {
        return {
          ...group,
          expenses: [...group.expenses, newExpense],
        };
      }
      return group;
    });

    setGroups(updatedGroups);
    setExpenseName("");
    setAmount("");
    setParticipants("");
    setPaidBy("");
  };

  const currentGroup = groups.find((g) => g.name === selectedGroup?.name);

  return (
    <div style={{ color: "white", padding: "20px" }}>
      {selectedGroup && <h1>{selectedGroup.name}</h1>}
      <p style={{ color: "white" }}>{selectedGroup?.description}</p>

      <h2>Add Expense</h2>
      <input
        placeholder="Expense Name"
        value={expenseName}
        onChange={(e) => setExpenseName(e.target.value)}
        style={{ marginBottom: "8px", padding: "8px", width: "60%" }}
      />
      <input
        placeholder="Total Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        style={{ marginBottom: "8px", padding: "8px", width: "60%" }}
      />
      <input
        placeholder="Participants (comma separated)"
        value={participants}
        onChange={(e) => setParticipants(e.target.value)}
        style={{ marginBottom: "8px", padding: "8px", width: "60%" }}
      />
      <input
        placeholder="Paid By (name)"
        value={paidBy}
        onChange={(e) => setPaidBy(e.target.value)}
        style={{ marginBottom: "8px", padding: "8px", width: "60%" }}
      />

      <button
        onClick={handleSplitExpense}
        style={{
          backgroundColor: "#1e90ff",
          color: "white",
          border: "none",
          padding: "10px 20px",
          cursor: "pointer",
          borderRadius: "4px",
          marginTop: "8px",
          marginLeft: "20px",
        }}
      >
        Split Expense
      </button>

      <h2 style={{ marginTop: "30px" }}>Expenses Summary</h2>
      <ul>
        {currentGroup?.expenses.map((exp, idx) => (
          <li key={idx} style={{ marginBottom: "10px" }}>
            <strong>{exp.name}</strong> — ₹{exp.amount}  
            <br />
            Paid by: <strong>{exp.paidBy}</strong>  
            <br />
            Participants: {exp.participants.join(", ")}
            <br />
            <u>Split Details:</u>
            <ul>
              {exp.participants.map((p, i) => {
                if (p === exp.paidBy) {
                  return (
                    <li key={i}>
                      {p} paid ₹{exp.amount} and owes ₹0
                    </li>
                  );
                } else {
                  return (
                    <li key={i}>
                      {p} owes ₹{exp.splitAmount} to {exp.paidBy}
                    </li>
                  );
                }
              })}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExpenseSplitter;
