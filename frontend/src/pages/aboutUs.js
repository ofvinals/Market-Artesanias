import React from 'react';
import NavBar from '../components/NavBar.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope as solidEnvelope } from '@fortawesome/free-solid-svg-icons';

function AboutUs() {
  const teamMembers = [
    {
      name: "Daniel Aguledo",
      role: "Frontend Developer",
      image: "danielagudelo.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget tellus vel nulla fermentum interdum."
    },
    {
      name: "Lucas Bernaola",
      role: "Frontend Developer",
      image: "lucasbernaola.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget tellus vel nulla fermentum interdum."
    },
    {
      name: "Oscar Frías Viñals",
      role: "Frontend Developer",
      image: "oscarfriasviñals.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget tellus vel nulla fermentum interdum."
    },
    {
      name: "Justina Cid",
      role: "UX/UI Designer",
      image: "justinacid.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget tellus vel nulla fermentum interdum."
    },
    {
      name: "Ricardo Díaz",
      role: "Backend Developer",
      image: "ricardodiaz.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget tellus vel nulla fermentum interdum."
    },
    {
      name: "Javier Pignataro",
      role: "Backend Developer",
      image: "javierpignataro.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget tellus vel nulla fermentum interdum."
    },
    {
      name: "Federico Fernández",
      role: "Dev Ops",
      image: "federicofernandez.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget tellus vel nulla fermentum interdum."
    },
    {
      name: "Franco Ramirez",
      role: "QA Tester",
      image: "francoramirez.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget tellus vel nulla fermentum interdum."
    },
  ];

  return (
    <main>
      <NavBar />
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
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
      </div>
    </main>
  );
}

export default AboutUs;

