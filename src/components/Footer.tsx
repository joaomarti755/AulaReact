function Footer(){
    const AnoAtual = new Date().getFullYear()

    return(
        <footer className="bg-gray-900 text-white text-center p-4">
              <p> &copy; {AnoAtual} Minha aplicação react. 
                Todos direitos reservados </p>
            <p> Marca registrada &reg; </p>
        </footer>
    )
}

export default Footer;