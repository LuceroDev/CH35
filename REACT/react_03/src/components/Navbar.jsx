import "./Navbar.css" //Importación de CSS

// Crear función que contiene el marcado para que viva nuestro código
const Navbar = () => {
    return (
        <>
            {/* Fragmento (por cierto, el comentario debe ser multilinea y estar encerrado entre llaves) */}
            <div className="navbar--container">
                <div className="navbar--title">
                    <h1>GenMex=35</h1>
                </div>
                <div className="navbar--links">
                    {/* Cada enlace debe estar envuelto en un div individual */}
                    <div className="navbar--link">
                        <a href="#">Home</a>
                    </div>
                    <div className="navbar--link">
                        <a href="#">About</a>
                    </div>
                    <div className="navbar--link">
                        <a href="#">Astros </a>
                    </div>
                </div>
            </div>
        </>
    );
}


export default Navbar;

