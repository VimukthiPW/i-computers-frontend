import { Route, Routes } from "react-router-dom"
import AdminPage from "./pages/admin"
import HomePage from "./pages/home"
import LoginPage from "./pages/login"
import Card from "./components/caed"
import Text from "./components/text"
import { Toaster } from "react-hot-toast"

function App() {
  return (
    <div className="w-full h-screen bg-primary text-secondary" >
      <Toaster position="top-right"/>
         <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/admin/*" element={<AdminPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/text" element={<Text/>} />
         </Routes>
    </div>
  )
}

export default App
