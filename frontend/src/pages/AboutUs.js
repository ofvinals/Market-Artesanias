import React from 'react';
import NavBar from '../components/NavBar.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope as solidEnvelope } from '@fortawesome/free-solid-svg-icons';
import AboutUsCards from '../components/AboutUs/AboutUsCards.jsx';

function AboutUs() {
  const teamMembers = [
    {

      id: 1,
      name: "Daniel Aguledo",
      role: "Frontend Developer",
      image: "./aboutUs/danielagudelo.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget tellus vel nulla fermentum interdum.",
      linkedin: 'https://www.linkedin.com/in/dan-agud/',
      email: 'daniel.agudelo185@gmail.com'
    },
    {
      id: 2,
      name: "Lucas Bernaola",
      role: "Frontend Developer",
      image: './aboutUs/lucasbernaola.jpg',
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget tellus vel nulla fermentum interdum.",
      linkedin: 'https://www.linkedin.com/in/javier-gonzalo-pignataro/',
      email: 'jgp.workmail@gmail.com'
    },
    {
      id: 3,
      name: "Oscar Frías Viñals",
      role: "Frontend Developer",
      image: "./aboutUs/oscarfriasviñals.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget tellus vel nulla fermentum interdum.",
      linkedin: 'https://www.linkedin.com/in/javier-gonzalo-pignataro/',
      email: 'jgp.workmail@gmail.com'
    },
    {
      id: 4,
      name: "Justina Cid",
      role: "UX/UI Designer",
      image: "./aboutUs/justinacid.jpg",
      description: "Creo firmemente que mis habilidades me convierten en una candidata ideal para el puesto de Diseñadora UX/UI. Estoy ansiosa por llevar mi pasión por el diseño en productos digitales y mi experiencia en aplicar conocimientos de Design Thinking, usabilidad, metodología ágiles y accesibilidad a su equipo.",
      linkedin: 'https://www.linkedin.com/in/justinacid/',
      email: 'justinacid20@gmail.com'
    },
    {
      id: 5,
      name: "Ricardo Díaz",
      role: "Backend Developer",
      image: "./aboutUs/ricardodiaz.jpg",
      description: "Enfocado en el desarrollo de software, estoy siempre dispuesto a aprender nuevas tecnologías y mejorar continuamente. Disfruto trabajando en equipo y compartiendo mis conocimientos para alcanzar los objetivos del proyecto.",
      linkedin: 'https://www.linkedin.com/in/ricardo-dionel-diaz-1b6802236',
      email: 'Franco.miguel.ramirez.96@gmail.com'
    },
    {
      id: 6,
      name: "Javier Pignataro",
      role: "Backend Developer",
      image: "./aboutUs/JavierPignataro.webp",
      description: "Entusiasmado en aprender y continuar aprendiendo sobre como funcionan las tecnologias actuales que sostienen al mundo. Con ganas de compartir mis conocimientos, mi esfuerzo y mi paciencia con trabajando en un equipo.",
      linkedin: 'https://www.linkedin.com/in/javier-gonzalo-pignataro/',
      email: 'jgp.workmail@gmail.com'
    },
    {
      id: 7,
      name: "Federico Fernández",
      role: "Dev Ops",
      image: "./aboutUs/FedericoFernandez.webp",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget tellus vel nulla fermentum interdum.",
      linkedin: 'https://www.linkedin.com/in/javier-gonzalo-pignataro/',
      email: 'jgp.workmail@gmail.com'
    },
    {
      id: 8,
      name: "Franco Ramirez",
      role: "QA Tester",
      image: "./aboutUs/FrancoRamirez.webp",
      description: "Me encuentro en busca de aumentar mis conocimientos sobre el aseguramiento de la calidad y poder encontrar un desafío laboral donde pueda demostrar todas mis skills y poder crecer como QA Manual.",
      linkedin: 'https://ar.linkedin.com/in/francoramirez96',
      email: 'Franco.miguel.ramirez.96@gmail.com'
    },
  ];

  return (
    <>
      <NavBar />
      <div className='mt-10 px-[91px] mb-10'>
        <h2 className='text-general text-tlv mb-9'>Nuestro equipo</h2>
        <AboutUsCards teamMembers={teamMembers} />
      </div>

    </>
  );
}

export default AboutUs;

{/* <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
        {teamMembers.map((member, index) => (
          <div key={index} className="card rounded-lg overflow-hidden border-[#E98C00] border-4 w-296 h-615 top-276 left-105">
            <img src={member.image} className="w-full h-auto object-cover border-b-2 border-[#E98C00]" alt={member.name} />
            <div className="flex flex-col p-4 text-left">
              <h2 className="font-inter text-2xl text-[#E98C00] font-bold">{member.name}</h2>
              <h3 className="font-inter font-bold text-lg text-[#563300]">{member.role}</h3>
              <div className="info-container">
                <p className="text-[#563300] text-sm overflow-hidden overflow-y-auto max-h-20">{member.description}</p>
              </div>
              <div className="flex justify-center items-center p-4">
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-[#E98C00] hover:text-gray-700">
                  <FontAwesomeIcon icon={faLinkedin} size="2x" className="mr-4" />
                </a>
                <a href={member.email} target="_blank" rel="noopener noreferrer" className="text-[#E98C00] hover:text-gray-700">
                  <FontAwesomeIcon icon={solidEnvelope} size="2x" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div> */}