import { Link } from "react-router-dom"


const  Nosotros = () =>{
    return(
        <>
        <div>
            <h1>Esta es la página de Nosotros</h1>
            <Link to="/">
                Regresa a la página de inicio
            </Link>
            <br/>
            <Link to="/contacto">
                Ve a la página de contacto
            </Link>
        </div>
        </>
    )
}

export default Nosotros