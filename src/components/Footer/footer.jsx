import "./footer.css";

const Footer = () => {


    return (
        // Sección del footer
        <footer className="bg-black border-footer">
            <div className="container mx-auto text-neutral-content px-4 py-10">

                {/* Contenedor de las columnas */}
                <div className="grid grid-cols-2 text-center md:grid-cols-2 md:text-center lg:grid-cols-4 lg:text-left gap-8">

                    {/* Columna de Portafolio */}
                    <div className="flex justify-center items-center">
                        <h3 className="text-lg font-semibold mb-4 lg:text-2xl text-blue-500">Portafolio - Thiago Cugliari</h3>
                    </div>

                    {/* Columna de Compañía */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 lg:text-2xl text-blue-500">Compañía</h3>
                        <ul className="space-y-2">
                            <li><a href="#sobremi" className="text-white">Sobre mi</a></li>
                            <li><a href="#contactos" className="text-white">Contactos</a></li>
                            <li><a href="#habilidades" className="text-white">Habilidades</a></li>
                            <li><a href="#inicio" className="text-white">Inicio</a></li>
                        </ul>
                    </div>

                    {/* Columna Legal */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 lg:text-2xl text-blue-500">Legal</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-white">Términos de uso</a></li>
                            <li><a href="#" className="text-white">Política de privacidad</a></li>
                            <li><a href="#" className="text-white">Política de cookies</a></li>
                        </ul>
                    </div>

                    {/* Columna de Redes Sociales */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 lg:text-2xl text-blue-500">Redes sociales</h3>
                        <div className="flex gap-4 justify-center md:justify-center lg:justify-start">
                            <a href="https://www.facebook.com/profile.php?id=61572771027675" className="text-2xl text-white"><i className="fab fa-facebook"></i></a>
                            <a href="https://www.instagram.com/thiago0z_/" className="text-2xl text-white"><i className="fab fa-instagram"></i></a>
                            <a href="https://www.linkedin.com/in/thiago-cugliari-0798862b1/" className="text-2xl text-white"><i className="fab fa-linkedin"></i></a>
                        </div>
                    </div>
                </div>

                {/* Información de derechos de autor */}
                <div className="mt-8 pt-8 border-t border-white text-center">
                    <p className="text-white">&copy; 2025 Thiago Cugliari. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
