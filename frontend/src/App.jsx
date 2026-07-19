import ResultPage from "./pages/ResultPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import UploadPage from "./pages/UploadPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/upload" element={<UploadPage />} /> 
        <Route path="/result" element={<ResultPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;