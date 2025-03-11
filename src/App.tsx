import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Suspense, lazy } from "react"

const Home = lazy(() => import("./pages/Home"))
const About = lazy(() => import("./pages/About"))
const Register = lazy(() => import("./pages/Register"))
const Profile = lazy(() => import("./pages/Profile"))
const Users = lazy(() => import("./pages/Users"))

const Footer = lazy(() => import("./components/Footer"))
const Header = lazy(() => import("./components/Header"))

function App() {
  return (

    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Suspense fallback={<div className="bg-gray-500"> Carregando .... </div>}>
          <Header />
        </Suspense>
        <main className="flex-grow p-4">
          <Suspense fallback={<div className="bg-gray-500"> Carregando .... </div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/sobre" element={<About />} />
              <Route path="/cadastro" element={<Register />} />
              <Route path="/perfil/:username" element={<Profile />} />
              <Route path="/usuarios" element={<Users />} />

            </Routes>
          </Suspense>
        </main>
        <Suspense fallback={<div className="bg-gray-500"> Carregando .... </div>}>
          <Footer />
        </Suspense>
      </div>
    </BrowserRouter >
  )
}

export default App
