import { useNavigate } from "react-router-dom";

function Fourbuttons() {
  const navigate = useNavigate();

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem", padding: "2rem", alignItems: "center", justifyContent: "center", minHeight: "100vh" }}>
      <h1>Select a Page</h1>
      <button onClick={() => navigate("/Agency")} style={{ padding: "1rem 2rem", fontSize: "1rem", cursor: "pointer", backgroundColor: "#3b82f6", color: "white", border: "none", borderRadius: "8px" }}>
        Agency
      </button>
      <button onClick={() => navigate("/scale")} style={{ padding: "1rem 2rem", fontSize: "1rem", cursor: "pointer", backgroundColor: "#10b981", color: "white", border: "none", borderRadius: "8px" }}>
        Scale
      </button>
      <button onClick={() => navigate("/maverick")} style={{ padding: "1rem 2rem", fontSize: "1rem", cursor: "pointer", backgroundColor: "#f59e0b", color: "white", border: "none", borderRadius: "8px" }}>
        Maverick
      </button>
      <button onClick={() => navigate("/maverick2")} style={{ padding: "1rem 2rem", fontSize: "1rem", cursor: "pointer", backgroundColor: "#ef4444", color: "white", border: "none", borderRadius: "8px" }}>
        Maverick 2
      </button>
    </div>
  );
}

export default Fourbuttons;
