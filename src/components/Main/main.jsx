import { useEffect } from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGithub, FaLink, FaEnvelope, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { SiMongodb, SiTailwindcss } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./main.css";
import profileImage from '/profile.jpg';
import img_proyect1 from '/proyecto1.png';
import img_proyect2 from '/proyecto2.png';
import img_proyect3 from '/proyecto3.png';
import { SiNextdotjs } from "react-icons/si";

const Main = () => {
    // Inicialización de AOS para animaciones
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);



    return (
        <main className="bg-fondo-seccions">

            {/* Botón fijo de WhatsApp con animación */}
            <div className="fixed right-4 bottom-4 flex items-center gap-2 z-50 group animate-slow-bounce">
                <a
                    href="https://wa.me/1123306221"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Enviar mensaje"
                    className="flex items-center bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition"
                >
                    <FaWhatsapp className="text-3xl" />
                </a>
            </div>


            {/* Sección: Sobre mí */}
            <section id="Sobre mi" className="container mx-auto py-40 px-4 lg:px-20 md:h-100xl">
                <div className="flex flex-col md:flex-row items-center gap-12 rounded-0xl">
                    <div className="md:w-2/3">
                        <h1 className="text-4xl lg:text-5xl md:text-5xl font-bold mb-3 text-blue-500 text-center lg:text-left md:text-left" data-aos="fade-right">
                            SOBRE MÍ
                        </h1>
                        <hr className="border-4 w-1/2 lg:w-[30%] mt-3 mb-3 linea-2 mx-auto lg:mx-0" />
                        <p className="text-lg lg:text-[1.7rem] md:text-2xl leading-relaxed mt-10 text-neutral-300 text-center lg:text-left md:text-left" data-aos="fade-right">
                            Soy un desarrollador web Full Stack con experiencia en la creación de aplicaciones modernas y escalables. Mi pasión por la tecnología me impulsa a explorar y aprender constantemente nuevas herramientas y tecnologías. Tengo un sólido enfoque en el desarrollo tanto en el <span className="text-blue-500">frontend</span> como en el <span className="text-blue-500">backend</span>, lo que me permite crear aplicaciones web completas y funcionales, adaptadas a las necesidades del usuario.
                        </p>
                    </div>
                    <div className="w-2 /3 lg:w-1/3 flex justify-center items-center cursor-pointer mt-10 scale-yo" data-aos="fade-right">
                        <div className="w-full h-0 pb-[100%] relative">
                            <img
                                src={profileImage}
                                alt="yo"
                                className="absolute inset-0 w-full h-full rounded-full lg:rounded-full md:rounded-2xl border-4 border-white object-cover shadow-lg shadow-[#7d8496] scale-yo"
                            />
                        </div>
                    </div>
                </div>
                {/* Círculo de fondo con efecto scroll */}
                <div className="flex lg:mt-0 mt-25 justify-center gap-7 lg:flex lg:justify-start lg:gap-10">
                    <div className="hidden lg:block" data-aos="fade-left">
                        <div className="flex gap-7 lg:gap-10">
                            <div className="bg-blue-500 rounded-full w-16 h-16"></div>
                            <div className="bg-white rounded-full w-16 h-16"></div>
                            <div className="bg-blue-500 rounded-full w-16 h-16"></div>
                        </div>
                    </div>

                    {/* Versión móvil sin animación */}
                    <div className="flex lg:hidden gap-7">
                        <div className="bg-blue-500 rounded-full w-16 h-16"></div>
                        <div className="bg-white rounded-full w-16 h-16"></div>
                        <div className="bg-blue-500 rounded-full w-16 h-16"></div>
                    </div>
                </div>
            </section>


            {/* Sección: Mis Habilidades */}
            <section id="Mis habilidades" className="bg-fondo-seccions md:h-auto lg:h-screen lg:py-40 py-30" data-aos="zoom-in">
                <div className="mx-auto w-full max-w-6xl container px-4 md:px-10">
                    <div className="flex flex-col items-center pb-20">
                        <h2 className="text-3xl font-bold md:text-5xl text-blue-400">MIS HABILIDADES</h2>
                        <hr className="border-4 w-[60%] lg:w-2/5 mt-3 mb-3 linea-2" />
                        <p className="mt-10 max-w-6xl lg:text-2xl text-center text-neutral-300 text-2xl md:mb-12 md:text-lg lg:mb-15">
                            Habilidades adquiridas en proyectos anteriores.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-10">
                        {/* Columna 1 */}
                        <div className="flex flex-col items-center gap-10 justify-center" data-aos="zoom-in">
                            <div className="flex items-center gap-2">
                                <FaHtml5 className="text-orange-600 text-4xl lg:text-6xl" />
                                <span className="text-white text-[1.3rem] font-semibold lg:text-3xl">HTML</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <FaCss3Alt className="text-blue-500 text-4xl lg:text-6xl" />
                                <span className="text-white text-[1.3rem] font-semibold lg:text-3xl">CSS</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <FaJs className="text-yellow-500 text-4xl lg:text-6xl" />
                                <span className="text-white text-[1.3rem] font-semibold lg:text-3xl">JAVASCRIPT</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <FaReact className="text-cyan-500 text-4xl lg:text-6xl" />
                                <span className="text-white text-[1.3rem] font-semibold lg:text-3xl">REACT</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <FaNodeJs className="text-green-500 text-4xl lg:text-6xl" />
                                <span className="text-white text-[1.3rem] font-semibold lg:text-3xl">NODE.JS</span>
                            </div>
                        </div>
                        {/* Columna 2 */}
                        <div className="flex flex-col items-center gap-10 justify-center" data-aos="zoom-in">
                            <div className="flex items-center gap-2">
                                <SiNextdotjs className="text-white text-4xl lg:text-6xl" />
                                <span className="text-white text-[1.3rem] font-semibold lg:text-3xl">NEXT.JS</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <SiMongodb className="text-green-600 text-4xl lg:text-6xl" />
                                <span className="text-white text-[1.3rem] font-semibold lg:text-3xl">MONGODB</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <FaGithub className="text-white text-4xl lg:text-6xl" />
                                <span className="text-white text-[1.3rem] font-semibold lg:text-3xl">GITHUB</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <FaBootstrap className="text-blue-900 text-4xl lg:text-6xl" />
                                <span className="text-white text-[1.3rem] font-semibold lg:text-3xl">BOOTSTRAP</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <SiTailwindcss className="text-cyan-500 text-4xl lg:text-6xl" />
                                <span className="text-white text-[1.3rem] font-semibold lg:text-3xl">TAILWINDCSS</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>





            {/* Sección Proyectos */}
            <section id="Mis proyectos" className="bg-fondo-seccions h-100vh md:h-auto lg:h-auto py-20 lg:pb-40 lg:pt-40">
                <div className="mx-auto w-full max-w-6xl container px-4 md:px-10">

                    {/* Título de la sección */}
                    <div className="flex flex-col items-center pb-20 text-center">
                        <h2 className="text-3xl font-bold md:text-5xl text-blue-500">MIS PROYECTOS</h2>
                        <hr className="border-4 w-1/2 lg:w-2/5 mt-3 mb-3 linea-2" />
                        <p className="mt-5 max-w-5xl lg:text-2xl text-2xl md:mb-12 md:text-lg text-neutral-300 lg:mb-15">
                            Bienvenido a mi sección de proyectos, donde podrás ver el resultado de mi pasión y experiencia en cada trabajo realizado.
                        </p>
                    </div>

                    {/* Contenido de los proyectos */}
                    <div className="grid gap-20 lg:gap-8 md:gap-5 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 cursor-pointer justify-items-center items-center">

                        {/* Proyecto 1 */}
                        <div className="border-2 border-gray-500 overflow-hidden transition-all scale-proyect flex flex-col justify-between shadow-[0px_0px_10px] shadow-[#7d8496]" data-aos="zoom-in">
                            <div className="w-full">
                                <img src={img_proyect1} alt="Proyecto 1" className="w-full h-full object-cover" />
                            </div>
                            <div className="p-4">
                                <h3 className="text-3xl font-semibold mt-6 text-white text-center">PROYECTO 1</h3>
                                <p className="text-gray-400 mt-2 text-1xl text-center">
                                    Un coach de mentalidad emprendedora guía a las personas para desarrollar confianza, enfoque y resiliencia...
                                </p>
                                {/* Tecnologías */}
                                <div className="flex items-center justify-center gap-2 mt-4">
                                    <FaHtml5 className="text-orange-600 text-4xl" />
                                    <span className="text-white text-lg font-semibold">HTML</span>
                                    <FaCss3Alt className="text-blue-500 text-4xl" />
                                    <span className="text-white text-lg font-semibold">CSS</span>
                                    <FaJs className="text-yellow-500 text-4xl" />
                                    <span className="text-white text-lg font-semibold">JS</span>
                                </div>
                                {/* Enlace a la web */}
                                <div className="flex items-center justify-center mt-4 gap-2">
                                    <a
                                        className="bg-blue-transparent border border-blue-900 text-white py-2 px-6 text-lg font-semibold hover:bg-blue-600 transition ease flex items-center gap-2"
                                        href="https://doctrina-imparable--one.vercel.app/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Ir a la web <FaLink className="text-white text-lg" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Proyecto 2 */}
                        <div className="border-2 border-gray-500 overflow-hidden transition-all scale-proyect flex flex-col justify-between shadow-[0px_0px_10px] shadow-[#7d8496]" data-aos="zoom-in">
                            <div className="w-full">
                                <img src={img_proyect2} alt="Proyecto 2" className="w-full h-full object-cover" />
                            </div>
                            <div className="p-4">
                                <h3 className="text-3xl font-semibold mt-6 text-white text-center">PROYECTO 2</h3>
                                <p className="text-gray-400 mt-2 text-1xl text-center">
                                    Esta página ofrece una amplia variedad de termos diseñados para mantener tus bebidas a la temperatura ideal...
                                </p>
                                {/* Tecnologías */}
                                <div className="flex items-center justify-center gap-2 mt-4">
                                    <FaHtml5 className="text-orange-600 text-4xl" />
                                    <span className="text-white text-lg font-semibold">HTML</span>
                                    <FaCss3Alt className="text-blue-500 text-4xl" />
                                    <span className="text-white text-lg font-semibold">CSS</span>
                                    <FaJs className="text-yellow-500 text-4xl" />
                                    <span className="text-white text-lg font-semibold">JS</span>
                                </div>
                                {/* Enlace a la web */}
                                <div className="flex items-center justify-center mt-4 gap-2">
                                    <a
                                        className="bg-blue-transparent border border-blue-900 text-white py-2 px-6 text-lg font-semibold hover:bg-blue-600 transition ease flex items-center gap-2"
                                        href="https://thermo-lock-tp.vercel.app/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Ir a la web <FaLink className="text-white text-lg" />
                                    </a>
                                </div>
                            </div>
                        </div>


                         <div className="border-2 border-gray-500 overflow-hidden transition-all scale-proyect flex flex-col justify-between shadow-[0px_0px_10px] shadow-[#7d8496]" data-aos="zoom-in">
                            <div className="w-full">
                                <img src={img_proyect3} alt="Proyecto 2" className="w-full h-full object-cover" />
                            </div>
                            <div className="p-4">
                                <h3 className="text-3xl font-semibold mt-6 text-white text-center">PROYECTO 3</h3>
                                <p className="text-gray-400 mt-2 text-1xl text-center">
                                    Distribución Mataderos SRL ofrece una amplia gama de productos de consumo masivo
                                </p>
                                {/* Tecnologías */}
                                <div className="flex items-center justify-center gap-2 mt-4">
                                    <FaHtml5 className="text-orange-600 text-4xl" />
                                    <span className="text-white text-lg font-semibold">HTML</span>
                                    <FaCss3Alt className="text-blue-500 text-4xl" />
                                    <span className="text-white text-lg font-semibold">CSS</span>
                                    <FaJs className="text-yellow-500 text-4xl" />
                                    <span className="text-white text-lg font-semibold">JS</span>
                                </div>
                                {/* Enlace a la web */}
                                <div className="flex items-center justify-center mt-4 gap-2">
                                    <a
                                        className="bg-blue-transparent border border-blue-900 text-white py-2 px-6 text-lg font-semibold hover:bg-blue-600 transition ease flex items-center gap-2"
                                        href="http://mataderosdistribucionessrrl.com/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Ir a la web <FaLink className="text-white text-lg" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sección Contactos */}
            <section id="contactos" className="bg-fondo-seccions h-100vh md:h-auto lg:h-auto lg:py-20 py-35 pb-10" data-aos="fade-up">
                <div className="container mx-auto text-center">

                    {/* Título de la sección */}
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-500">CONTACTOS</h2>
                    <hr className="border-4 border-white w-[40%] lg:w-1/4 mx-auto mt-3 mb-3 linea-4" />

                    {/* Información de contacto */}
                    <div className="flex flex-col md:flex-row justify-center items-center mt-20 gap-10">

                        {/* Correo electrónico */}
                        <div className="flex items-center gap-4 cursor-pointer group" data-aos="fade-up">
                            <FaEnvelope className="text-blue-500 text-3xl lg:text-4xl md:text-4xl " />
                            <a href="mailto:thesolotov01@gmail.com" className="text-white text-[1.3rem] lg:text-2xl md:text-2xl ">Correo</a>
                        </div>


                        {/* LinkedIn */}
                        <div className="flex items-center gap-4 cursor-pointer group" data-aos="fade-up">
                            <FaLinkedin className="text-blue-700 text-3xl lg:text-4xl md:text-4xl" />
                            <a href="https://www.linkedin.com/in/thiago-cugliari-0798862b1/" target="_blank" rel="noopener noreferrer" className="text-white text-[1.3rem] lg:text-2xl md:text-2xl">Linkedin</a>
                        </div>

                        {/* GitHub */}
                        <div className="flex items-center gap-4 cursor-pointer group" data-aos="fade-up">
                            <FaGithub className="text-black text-3xl lg:text-4xl md:text-4xl" />
                            <a href="https://github.com/1Thiago0z" target="_blank" rel="noopener noreferrer" className="text-white text-[1.3rem] lg:text-2xl md:text-2xl">Github</a>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    )
}

export default Main