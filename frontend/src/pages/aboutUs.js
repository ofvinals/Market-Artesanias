import React from 'react';
import NavBar from '../components/NavBar';

function AboutUs() {
  return (
    <main>
      <NavBar />
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
      <div className="flex flex-col items-center justify-center space-y-4">
        <img src='/aboutUs/danielaguledo.jpg' className="rounded-full w-32 h-32" alt="Daniel Aguledo" />
        <h2 className="font-inter text-3xl text-[#E98C00]">Daniel Aguledo</h2>
        <h3 className="font-inter font-thin text-2xl text-[#563300]">Frontend Developer</h3>
      </div>
      <div className="flex flex-col items-center justify-center space-y-4">
        <img src='/aboutUs/lucasbernaola.jpg' className="rounded-full w-32 h-32" alt="Lucas Bernaola" />
        <h2 className="font-inter text-3xl text-[#E98C00]">Lucas Bernaola</h2>
        <h3 className="font-inter font-thin text-2xl text-[#563300]">Frontend Developer</h3>
      </div>
      <div className="flex flex-col items-center justify-center space-y-4">
        <img src='/aboutUs/oscarfríasviñals.jpg' className="rounded-full w-32 h-32" alt="Oscar Frías Viñals" />
        <h2 className="font-inter text-3xl text-[#E98C00]">Oscar Frías Viñals</h2>
        <h3 className="font-inter font-thin text-2xl text-[#563300]">Frontend Developer</h3>
      </div>
      <div className="flex flex-col items-center justify-center space-y-4">
        <img src='/aboutUs/justinacid.jpg' className="rounded-full w-32 h-32" alt="Justina Cid" />
        <h2 className="font-inter text-3xl text-[#E98C00]">Justina Cid</h2>
        <h3 className="font-inter font-thin text-2xl text-[#563300]">UX/UI Designer</h3>
      </div>
      <div className="flex flex-col items-center justify-center space-y-4">
        <img src='/aboutUs/ricardodíaz.jpg' className="rounded-full w-32 h-32" alt="Ricardo Díaz" />
        <h2 className="font-inter text-3xl text-[#E98C00]">Ricardo Díaz</h2>
        <h3 className="font-inter font-thin text-2xl text-[#563300]">Backend Developer</h3>
      </div>
      <div className="flex flex-col items-center justify-center space-y-4">
        <img src='/aboutUs/javierpignataro.jpg' className="rounded-full w-32 h-32" alt="Javier Pignataro" />
        <h2 className="font-inter text-3xl text-[#E98C00]">Javier Pignataro</h2>
        <h3 className="font-inter font-thin text-2xl text-[#563300]">Backend Developer</h3>
      </div>
      <div className="flex flex-col items-center justify-center space-y-4">
        <img src='/aboutUs/federicofernández.jpg' className="rounded-full w-32 h-32" alt="Federico Fernández" />
        <h2 className="font-inter text-3xl text-[#E98C00]">Federico Fernández</h2>
        <h3 className="font-inter font-thin text-2xl text-[#563300]">DevOps</h3>
      </div>
      <div className="flex flex-col items-center justify-center space-y-4">
        <img src='/aboutUs/francoramirez.jpg' className="rounded-full w-32 h-32" alt="Franco Ramirez" />
        <h2 className="font-inter text-3xl text-[#E98C00]">Franco Ramirez</h2>
        <h3 className="font-inter font-thin text-2xl text-[#563300]">QA Tester</h3>
      </div>
      </div>
    </main>
  );
}

export default AboutUs;
