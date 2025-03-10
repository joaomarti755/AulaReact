import { BrowserRouter, Routes, Route }
  from "react-router-dom"

import Home from "./pages/Home"
import About from "./pages/About"
import Register from "./pages/Register"
import Profile from "./pages/Profile"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<About />} />
        <Route path="/cadastro" element={<Register />} />
        <Route path="/perfil/:username" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
