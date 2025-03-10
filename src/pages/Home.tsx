import { Link } from "react-router-dom"

function Home() {
    return (
        <div className="h-screen flex flex-col items-center justify-center
             bg-blue-900">
            <h1 className="text-2xl font-bold text-center text-gray-400">
                BEM VINDO A NOSSA PÁGINA
            </h1>
            <hr className="w-screen" />
            <p className="text-1sm text-center text-white">
                Utilizando tailwind com react router
            </p>
            <nav className="mt-4 p-2 bg-blue-300">
                <Link className="mr-4 text-blue-600 
                hover:text-blue-800" to="/"> Início </Link>
               <Link className="mr-4 text-blue-600 
                hover:text-blue-800" to="/sobre"> Sobre nós </Link>
                <Link className="mr-4 text-blue-600 
                hover:text-blue-800" to="/cadastro"> Cadastre-se </Link>
            </nav>
        </div>
    )
}

export default Home