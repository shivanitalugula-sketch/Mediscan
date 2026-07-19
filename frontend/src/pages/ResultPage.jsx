import React, { useState } from "react";
import{ useLocation } from 
"react-router-dom";
import Tesseract from 
"tesseract.js";

function ResultPage() { 
const [text, setText] = useState("");
const [loading, setLoading] = useState(false); 
const [detectedMedicines, setDetectedMedicines] = useState([]);
const [language, setLanguage] = useState("");
const location = useLocation();
const image = location.state?.image; 
const extractMedicines = (prescriptionText) => {
  const medicineList = [];
  const medicinesDatabase = [
  {
    name: "Paracetamol",
    purpose: "Used for fever and pain relief",
    timing: "After food as prescribed by the doctor",
  },
  {
    name: "Amoxicillin",
    purpose: "Antibiotic used to treat bacterial infections",
    timing: "After food",
  },
  {
    name: "Ibuprofen",
    purpose: "Used for pain, fever and inflammation",
    timing: "After food",
  },
  {
    name: "Cetirizine",
    purpose: "Used for allergies and itching",
    timing: "Usually at night",
  },
  {
    name: "Azithromycin",
    purpose: "Antibiotic for bacterial infections",
    timing: "Once daily",
  },
  {
    name: "Pantoprazole",
    purpose: "Reduces stomach acid",
    timing: "Before breakfast",
  },
  {
    name: "Metformin",
    purpose: "Used to control diabetes",
    timing: "After meals",
  },
  {
    name: "Aspirin",
    purpose: "Blood thinner and pain reliever",
    timing: "After food",
  },
  {
    name: "Omeprazole",
    purpose: "Treats acidity and ulcers",
    timing: "Before food",
  },
  {
    name: "Dolo",
    purpose: "Used for fever and body pain",
    timing: "As prescribed by the doctor",
  }
];
  medicinesDatabase.forEach((medicine) => {
    if (
      prescriptionText
        .toLowerCase()
        .includes(medicine.name.toLowerCase())
    ) {
      medicineList.push(medicine);
    }
  });

  setDetectedMedicines(medicineList);
};
const readPrescription = async () => {
  if (!image) {
    alert("No prescription image found");
    return;
  }

  try {
    setLoading(true);

    const result = await Tesseract.recognize(
  image,
  "eng",
  {
    logger: (m) => console.log(m),
    tessedit_pageseg_mode: 6,
    tessedit_char_whitelist:
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-./() ",
  }
);
    setText(result.data.text);
    extractMedicines(result.data.text);

  } catch (error) {
    console.log(error);
    alert("Unable to read prescription");
  } finally {
    setLoading(false);
  }
};
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #E3F2FD, #FFFFFF)",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "450px",
          margin: "auto",
          background: "white",
          padding: "25px",
          borderRadius: "20px",
          boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
        }}
      >
        <h1 style={{ color: "#1565C0", textAlign: "center" }}>
          🏥 MediScan Report
        </h1>
        {image && (
  <img
    src={image}
    alt="Prescription"
    width="100%"
    style={{
      borderRadius: "10px",
      marginTop: "15px"
    }}
  />
)}
<div
  style={{
    marginTop: "20px",
    padding: "15px",
    background: "#E8F5E9",
    borderRadius: "12px",
  }}
>
  <h3>🌍 Select Language</h3>
  <select
  value={language}
  onChange={(e) => setLanguage(e.target.value)}
  style={{
    width: "100%",
    padding: "10px",
    borderRadius: "8px",
    fontSize: "16px",
  }}
>
    <option>English</option>
    <option>తెలుగు</option>
    <option>हिन्दी</option>
    <option>Tamil</option>
  </select>
</div>
        <p style={{ textAlign: "center", color: "#555" }}>
          AI Prescription Understanding
        </p>
        <div
  style={{
    marginTop: "20px",
    padding: "15px",
    background: "#FFF8E1",
    borderRadius: "12px",
  }}
>
  <h3>🤖 AI Analysis</h3>

  <p>
    Your prescription has been scanned successfully.
  </p>
  <p>
  🔍 Extracted Text:
</p>

<p style={{ fontSize: "14px" }}>
  {text ? text : "Click Read Prescription Text to scan."}
</p>
  <p>
    💡 AI will explain medicines in simple language.
  </p>
</div>
        <h3>💊 Medicines Detected</h3>
        {detectedMedicines.length > 0 ? (
  detectedMedicines.map((medicine, index) => (
    <div
      key={index}
      style={{
        background: "#E8F5E9",
        padding: "15px",
        borderRadius: "12px",
        marginBottom: "12px",
      }}
    >
      <h3 style={{ color: "#2E7D32" }}>
        💊 {medicine.name}
      </h3>

      <p>
       📌 Purpose: {
  language === "English"
    ? medicine.purpose
    : language === "తెలుగు"
    ? "జ్వరం మరియు నొప్పి తగ్గించడానికి ఉపయోగిస్తారు"
    : language === "हिन्दी"
    ? "बुखार और दर्द कम करने के लिए उपयोग किया जाता है"
    : "காய்ச்சல் மற்றும் வலியை குறைக்க பயன்படுகிறது"
}
      </p>

      <p>
        ⏰ Timing: {
  language === "English"
    ? medicine.timing
    : language === "తెలుగు"
    ? "డాక్టర్ సూచించిన విధంగా తీసుకోండి"
    : language === "हिन्दी"
    ? "डॉक्टर के निर्देशानुसार लें"
    : "மருத்துவரின் ஆலோசனைப்படி எடுத்துக்கொள்ளுங்கள்"
}
      </p>
    </div>
  ))
) : (
  <div
    style={{
      background: "#FFF3E0",
      padding: "15px",
      borderRadius: "12px",
      marginBottom: "12px",
    }}
  >
    <h3>💊 No Medicine Detected</h3>
    <p>
      Please upload a clearer prescription image.
    </p>
  </div>
)}
        <button
  onClick={readPrescription}
  style={{
    width: "100%",
    padding: "15px",
    background: "#2E7D32",
    color: "white",
    border: "none",
    borderRadius: "10px",
    fontSize: "16px",
    marginTop: "15px",
    cursor: "pointer",
  }}
>
  🔍 Read Prescription Text
</button>

{loading && (
  <p style={{ textAlign: "center" }}>
    Reading prescription...
  </p>
)}

{text && (
  <div
    style={{
      marginTop: "15px",
      padding: "15px",
      background: "#F5F5F5",
      borderRadius: "12px",
    }}
  >
   <h3>📝 Prescription Text</h3>

<div
  style={{
    background: "white",
    padding: "12px",
    borderRadius: "10px",
    marginTop: "10px",
    border: "1px solid #ddd",
    lineHeight: "1.6",
  }}
>
  {text}
</div>
</div>
)}
        <button
  onClick={async () => {
    const report = `
Prescription Text:
${text}
${
  detectedMedicines.length > 0
    ? detectedMedicines
        .map(
          (medicine) =>
            `Medicine: ${medicine.name}. Purpose: ${medicine.purpose}. Timing: ${medicine.timing}.`
        )
        .join(" ")
    : "No medicine detected."
}`;
const speech = new SpeechSynthesisUtterance(report);
speech.lang = "en-IN";
speech.lang =
  language === "తెలుగు"
    ? "te-IN"
    : language === "हिन्दी"
    ? "hi-IN"
    : language === "Tamil"
    ? "ta-IN"
    : "en-IN";
window.speechSynthesis.speak(speech);
  }}
  style={{
    width: "100%",
    padding: "15px",
    background: "#1565C0",
    color: "white",
    border: "none",
    borderRadius: "10px",
    fontSize: "16px",
    marginTop: "15px",
    cursor: "pointer",
  }}
>
  🔊 Listen to Report
</button>
      </div>
    </div>
  );
}

export default ResultPage;