import React from 'react';
import NavBar from '../components/NavBar.jsx';
import AboutUsCards from '../components/AboutUs/AboutUsCards.jsx';

function AboutUs() {
  const teamMembers = [
    {

      id: 1,
      name: "Daniel Agudelo",
      role: "Frontend Developer",
      image: "./aboutUs/danielAgudelo.webp",
      description: "Apasionado por crear experiencias web excepcionales. Soy una persona autónoma que sabe trabajar en equipo, sé que la clave del éxito es la comunicación. Si buscas un desarrollador front-end apasionado, confiable y con un fuerte espíritu de equipo, no dudes en contactarme.",
      linkedin: 'https://www.linkedin.com/in/dan-agud/',
      email: 'daniel.agudelo185@gmail.com'
    },
    {
      id: 2,
      name: "Lucas Bernaola",
      role: "Frontend Developer",
      image: './aboutUs/lucasbernaola2.webp',
      description: "Como desarrollador frontend, mi pasión radica en crear experiencias digitales cautivadoras y funcionales. Me encanta traducir ideas y diseños en interfaces de usuario dinámicas y atractivas.",
      linkedin: 'https://www.linkedin.com/in/lucas-bernaola-b58b3720a/',
      email: 'bernadev7@gmail.com'
    },
    {
      id: 3,
      name: "Oscar Frías Viñals",
      role: "Frontend Developer",
      image: "./aboutUs/oscarfriasviñals.jpg",
      description: "Soy un firme creyente en la importancia del trabajo en equipo y la colaboración, y me encanta enfrentar desafíos complejos y encontrar soluciones creativas junto con mis compañeros de equipo. Siempre abierto a nuevas oportunidades y colaboraciones!",
      linkedin: 'https://www.linkedin.com/in/javier-gonzalo-pignataro/',
      email: 'ofvinals@gmail.com'
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
      image: "./aboutUs/ricardodiaz3.webp",
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
      description: "Seguro de mis capacidades, y capaz de aprender cualquier cosa. Desde pequeño siempre me intereso la tecnología y a día de hoy lo sigue haciendo. Decidí convertir algo que era un hobby en mi profesión. Comence hace 4 años estudiando Desarrollo de Software, para luego dedicarme a la cultura DevOps hace ya un año y medio. ",
      linkedin: 'https://www.linkedin.com/in/fernandezbarriosfederico/',
      email: 'federicofernandezcontacto@gmail.com'
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
      <div className='mt-10 mx-4 md:px-[30px] 2xl:px-[91px] mb-10'>
        <h2 className='text-general text-tlv mb-9 2xl:ml-[150px]'>Nuestro equipo</h2>
        <AboutUsCards teamMembers={teamMembers} />
      </div>

    </>
  );
}

export default AboutUs;

