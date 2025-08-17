import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import UploadPDF from "./pages/UploadPDF"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/upload" element={<UploadPDF />} />
        {/* placeholder for old PDFs page */}
        <Route path="/history" element={<div>Old PDFs will show here</div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
