import { Link } from "react-router-dom"

function About() {
    return (
        <div className="h-screen flex flex-col items-center justify-center
             bg-blue-900">
            <h1 className="mb-6 text-lg font-bold text-center text-gray-400">
                CONHEÇA NOSSA PÁGINA
            </h1>   
            <hr className="w-screen" />
            <p className="mt-4 text-sm text-center text-white">
            Esta é a página sobre, conheça um pouco mais
            sobre nós
            </p>
            <Link className="mt-4 mr-4 text-blue-600 bg-gray-300 rounded
                px-4 hover:bg-gray-500" to="/"> Voltar </Link>
        </div>
    )
}

export default About