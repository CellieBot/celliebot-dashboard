import React, { useState } from 'react';

export default function App() {
  const [chatLog, setChatLog] = useState([]);
  const [customMessage, setCustomMessage] = useState("");
  const [tipUser, setTipUser] = useState("");
  const [tipAmount, setTipAmount] = useState("");

  const sendMessage = (message) => {
    // Append message in local chat log.
    // You can copy from here into High Rise chat when logged in as @CellieBot.
    setChatLog(prev => [...prev, `CellieBot: ${message}`]);
  };

  const handleSendTip = () => {
    if (tipUser && tipAmount) {
      sendMessage(`Tipped @${tipUser} with ${tipAmount} gold ✨`);
      setTipUser("");
      setTipAmount("");
    }
  };

  return (
    <div style={{ padding: 16, background: "#FFFDE7", minHeight: "100vh", color: "#333" }}>
      <h1 style={{ fontSize: 24, fontWeight: "bold", marginBottom: 16, textAlign: "center" }}>
        CellieBot Dashboard
      </h1>

      <div style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: 16,
          maxWidth: 600,
          margin: "0 auto"
        }}>

        {/* Greeting Buttons */}
        <div style={{
            background: "#ffffff",
            padding: 16,
            borderRadius: 12,
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
          }}>
          <h2 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8 }}>Send a Greeting</h2>
          <button
            onClick={() => sendMessage("Hey cuties! Welcome to the room 💛")}
            style={{
              background: "#FFEB3B",
              border: "none",
              padding: "8px 12px",
              borderRadius: 8,
              fontWeight: "bold",
              width: "100%",
              marginBottom: 8,
            }}
          >
            Greet All
          </button>
          <button
            onClick={() => sendMessage("Drop your fav emoji if you're vibin' ✨")}
            style={{
              background: "#FFEB3B",
              border: "none",
              padding: "8px 12px",
              borderRadius: 8,
              fontWeight: "bold",
              width: "100%",
            }}
          >
            Get Them Talking
          </button>
        </div>

        {/* Tip Sender */}
        <div style={{
            background: "#ffffff",
            padding: 16,
            borderRadius: 12,
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
          }}>
          <h2 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8 }}>Send a Tip</h2>
          <input
            placeholder="Username (no @)"
            value={tipUser}
            onChange={e => setTipUser(e.target.value)}
            style={{
              border: "1px solid #ccc",
              borderRadius: 8,
              padding: 8,
              width: "100%",
              marginBottom: 8
            }}
          />
          <input
            placeholder="Amount (gold)"
            value={tipAmount}
            onChange={e => setTipAmount(e.target.value)}
            style={{
              border: "1px solid #ccc",
              borderRadius: 8,
              padding: 8,
              width: "100%",
              marginBottom: 8
            }}
          />
          <button
            onClick={handleSendTip}
            style={{
              background: "#FFEB3B",
              border: "none",
              padding: "8px 12px",
              borderRadius: 8,
              fontWeight: "bold",
              width: "100%",
            }}
          >
            Send Tip
          </button>
        </div>

        {/* Custom Message Sender */}
        <div style={{
            background: "#ffffff",
            padding: 16,
            borderRadius: 12,
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
          }}>
          <h2 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8 }}>Custom Message</h2>
          <textarea
            placeholder="Type a message..."
            value={customMessage}
            onChange={e => setCustomMessage(e.target.value)}
            style={{
              border: "1px solid #ccc",
              borderRadius: 8,
              padding: 8,
              width: "100%",
              height: 80,
              marginBottom: 8
            }}
          />
          <button
            onClick={() => { sendMessage(customMessage); setCustomMessage(""); }}
            style={{
              background: "#FFEB3B",
              border: "none",
              padding: "8px 12px",
              borderRadius: 8,
              fontWeight: "bold",
              width: "100%",
            }}
          >
            Send
          </button>
        </div>

        {/* Chat Log */}
        <div style={{
            background: "#ffffff",
            padding: 16,
            borderRadius: 12,
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
          }}>
          <h2 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8 }}>Chat Log</h2>
          <div style={{
              background: "#F5F5F5",
              padding: 8,
              borderRadius: 8,
              height: 200,
              overflowY: "auto"
            }}>
            {chatLog.length === 0 ? (
              <p style={{ color: "#777" }}>No messages yet.</p>
            ) : (
              chatLog.map((msg, idx) => (
                <p key={idx} style={{ margin: "4px 0" }}>{msg}</p>
              ))
            )}
          </div>
        </div>

      </div>
    </div>
  );
                     }
