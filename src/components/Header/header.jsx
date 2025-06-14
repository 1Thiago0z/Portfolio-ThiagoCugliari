import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faDownload,
  faBriefcase,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";
import "./header.css";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    window.scrollTo(0, 0); // Restablecer posición al cargar

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const menuVariants = {
    hidden: { opacity: 0, y: "-100%" },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: "-100%" },
  };

  const navigationSections = ["inicio", "Sobre mi", "Mis habilidades", "Mis proyectos"];

  return (
    <>
      {/* Barra de navegación */}
      <header className={`sticky top-0 z-20 w-full transition-all duration-300 
        ${isScrolled ? "bg-black shadow-lg border-b" : "bg-[rgb(12,12,12)] lg:bg-[#0e0e0e56]"}
        py-6 sm:bg-black`}
      >
        <nav className="container flex items-center justify-between mx-auto px-4">
          <div className="font-bold text-3xl text-blue-500 cursor-pointer hover:text-blue-500">
            <div className="flex items-center tracking-wider">
              <FontAwesomeIcon icon={faBriefcase} className="mr-2" />
              <h1>PORTFOLIO</h1>
            </div>
          </div>

          <ul className="hidden sm:flex flex-1 justify-end items-center gap-12 tracking-wider text-white uppercase text-xs">
            {navigationSections.map((section) => (
              <li key={section} className="group cursor-pointer font-semibold text-base">
                <Link
                  to={section}
                  smooth
                  duration={500}
                  offset={-50}
                  className="relative block px-2 py-1 overflow-hidden"
                >
                  <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </span>
                  <span className="absolute bottom-0 left-0 w-full h-0 bg-blue-900 transition-all duration-300 -z-10 group-hover:h-full group-hover:rounded-t-[3px]"></span>
                </Link>
              </li>
            ))}

            {/* Botón de Contacto */}
            <div className="relative cursor-pointer group border border-blue-600 px-6 py-3 inline-flex items-center gap-3 overflow-hidden">
              <span className="absolute inset-0 bg-blue-600 transform translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></span>
              <a href="#contactos" className="relative flex items-center gap-2 text-base text-white font-semibold uppercase z-10">
                Contactos
                <img src="/Contact-icon.svg" alt="Icono de contacto" className="w-4 h-4 transition-transform duration-300" />
              </a>
            </div>
          </ul>

          {/* Botón menú móvil */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex sm:hidden text-white text-3xl ml-auto"
          >
            <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
          </button>
        </nav>

        {/* Menú hamburguesa desplegable */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              key="mobileMenu"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={menuVariants}
              transition={{ duration: 0.5, ease: "easeInOut", delay: 0.1 }}
              className="sm:hidden bg-black px-2 border-b-2 text-white absolute top-[100%] left-0 w-full z-10"
            >
              <ul className="flex flex-col items-left gap-10 py-8 uppercase text-sm">
                {navigationSections.map((section) => (
                  <li key={section} className="group cursor-pointer font-semibold text-[1.2rem]">
                    <Link
                      to={section}
                      smooth
                      duration={500}
                      offset={-50}
                      onClick={() => setMenuOpen(false)}
                      className="relative block px-2 py-1 overflow-hidden"
                    >
                      <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                        {section.charAt(0).toUpperCase() + section.slice(1)}
                      </span>
                      <span className="absolute bottom-0 left-0 w-full h-0 bg-blue-500 transition-all duration-300 -z-10 group-hover:h-full group-hover:rounded-t-[3px]"></span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Sección Hero */}
      <section className="md:h-screen lg:h-[100vh] pt-20 pb-10 lg:pt-40 md:py-20 bg-[#0c0c0c] flex items-start justify-center text-white relative overflow-hidden" id="inicio">
        <div className="container mx-auto px-4 text-left relative">
          <h1 className="text-4xl lg:text-6xl font-bold">HOLA, SOY THIAGO CUGLIARI</h1>
          <hr className="border border-white lg:w-1/2 w-[80%] mt-5 mb-5 text-left" />
          <h2 className="text-blue-500 lg:text-3xl font-bold uppercase tracking-wider">Desarrollador Web</h2>
          <p className="text-lg lg:text-[1.7rem] text-gray-300 pt-4 max-w-4xl">
            Soy un desarrollador web apasionado por crear experiencias digitales
            innovadoras. Con experiencia en tecnologías como React, Node.js y bases de
            datos, me especializo en el desarrollo de aplicaciones web modernas
            escalables, enfocándome en la usabilidad y la eficiencia.
          </p>

          <div className="mt-10">
            <a
              href="https://drive.google.com/drive/u/0/folders/1DnoGznv6oRdZhcJZ-UQa0GejnPQYyHEI"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white border uppercase rounded-md px-6 py-3 font-bold hover:bg-neutral-900 transition-all"
            >
              Ir a mi currículum <FontAwesomeIcon icon={faDownload} className="pl-2" />
            </a>
          </div>

          <div className="absolute top-[180%] left-1/2 right-1/2 transform -translate-x-1/2">
            <Link to="Sobre mi"
              smooth
              duration={500}
              offset={-50}
              className="text-white text-2xl cursor-pointer transition-colors duration-300 p-4 rounded-full bg-opacity-50 hover:bg-opacity-70 neon-effect hover:neon-effect group"
            >
              <FontAwesomeIcon
                icon={faChevronDown}
                className="text-white text-2xl transition-all duration-700 transform group-hover:rotate-180"
              />
            </Link>
          </div>
        </div>


      </section>
    </>
  );
};

export default Header;
