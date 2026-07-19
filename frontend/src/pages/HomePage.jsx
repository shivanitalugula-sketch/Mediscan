import{
    useNavigate} from 
    "react-router-dom"; 
function HomePage() { 
    const navigate = useNavigate();
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #E3F2FD, #FFFFFF)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial, sans-serif",
        padding: "20px",
      }}
    >
      <div
        style={{
          background: "white",
          width: "420px",
          padding: "30px",
          borderRadius: "20px",
          boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
          textAlign: "center",
        }}
      >
        <h1 style={{ color: "#1565C0" }}>🏥 MediScan</h1>

        <h3>Scan. Understand. Stay Healthy.</h3>

        <p style={{ color: "#555" }}>
          Understand your prescription in simple language with AI.
        </p>
        <button
  onClick={() => navigate("/upload")}
  style={{
    width: "100%",
    padding: "15px",
    marginTop: "20px",
    background: "#1565C0",
    color: "white",
    border: "none",
    borderRadius: "10px",
    fontSize: "18px",
  }}
>
  📸 Scan Prescription
</button> 
         <p style={{ margin: "15px 0" }}>OR</p>

        <button
  onClick={() => navigate("/upload")}
  style={{
    width: "100%",
    padding: "15px",
    background: "white",
    color: "#1565C0",
    border: "2px solid #1565C0",
    borderRadius: "10px",
    fontSize: "18px",
  }}
>
  🖼 Upload from Gallery
          <div
  style={{
    marginTop: "30px",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "12px",
  }}
>
  <div
    style={{
      padding: "15px",
      background: "#E8F5E9",
      borderRadius: "12px",
    }}
  >
    🌍
    <h4>All Languages</h4>
    <p style={{ fontSize: "12px" }}>
      Understand prescriptions in your preferred language.
    </p>
  </div>

  <div
    style={{
      padding: "15px",
      background: "#E3F2FD",
      borderRadius: "12px",
    }}
  >
    🔊
    <h4>Voice Reading</h4>
    <p style={{ fontSize: "12px" }}>
      Listen to your prescription with one tap.
    </p>
  </div>

  <div
    style={{
      padding: "15px",
      background: "#FFF8E1",
      borderRadius: "12px",
    }}
  >
    💊
    <h4>Medicine Schedule</h4>
    <p style={{ fontSize: "12px" }}>
      Get easy medicine timings.
    </p>
  </div>

  <div
    style={{
      padding: "15px",
      background: "#F3E5F5",
      borderRadius: "12px",
    }}
  >
    ⏰
    <h4>Smart Reminders</h4>
    <p style={{ fontSize: "12px" }}>
      Never miss your medicines.
    </p>
  </div>
</div>
        </button>
      </div>
    </div>
  );
}

export default HomePage;