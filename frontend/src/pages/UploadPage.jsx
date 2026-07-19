import { useNavigate } from "react-router-dom"; 
import React, { useState } from "react"; 
function UploadPage() {
  const [image, setImage] = useState(null);
const [file, setFile] = useState(null);
const navigate = useNavigate();
  const handleImage = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFile(file);
setImage(URL.createObjectURL(file));
    }
  }; 
  const analyzePrescription = async () => { 
    console.log("Analyze button clicked"); 
  if (!file) {
    alert("Please select an image first");
    return;
  }

  const formData = new FormData();

  formData.append("prescription", file);
  const response = await fetch("https://mediscan-ofkk.onrender.com/upload", {
  method: "POST",
  body: formData,
});

const data = await response.json();

alert(data.message);

navigate("/result", {
  state: {
    message: data.message,
    image: image,
  },
});
  };
  return (
    <div className="upload-page">
      <h1>Upload Prescription</h1>

      <input 
        type="file" 
        accept="image/*" 
        onChange={handleImage}
      />

      {image && (
        <div>
          <h3>Preview:</h3>

          <img 
            src={image} 
            alt="Prescription preview"
            width="300"
          />
          <br />

          <button 
            onClick={analyzePrescription}
            style={{
              marginTop: "20px",
              padding: "12px 25px",
              background: "#1565C0",
              color: "white",
              border: "none",
              borderRadius: "10px",
              fontSize: "16px",
              cursor: "pointer"
            }}
          >
            🔍 Analyze Prescription
          </button>
        </div>
      )}
    </div>
  );
}

export default UploadPage;