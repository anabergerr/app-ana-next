"use client"; // This is a client component 👈🏽

import { useEffect, useState } from 'react';

import ana from '../../public/ana.png'
import 'tailwindcss/tailwind.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';




const myImageSrc = ana.src as string;


export default function Home() {
  const [currentYear, setCurrentYear] = useState('');
  
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const year = new Date().getFullYear();
      setCurrentYear(String(year));
    }
  }, []);





  return (
    <>
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow grid place-items-center mt-10">
          <section>
            {/* Conteúdo principal */}
            <img src={myImageSrc} alt="My Image" width={300} className="image-ana mx-auto filter grayscale" />
            <p className="mt-10 text-center">
              Ola, eu sou a Ana. Sou desenvolvedora de software e atualmente trabalho com instrutora de tecnologia na @Trybe.
            </p>
            <p className='mt-2 text-center'>
              Saiba mais acessando minhas redes :)
            </p>
          </section>

          <section className="socials text-center">
            {/* Ícones das redes sociais */}
            <p>{'<Me acompanhe aqui />'}</p>
            <div className="flex justify-between mt-5">
              <a href="https://www.linkedin.com/in/ana-laura-berger/" target='_blank'>
              <FontAwesomeIcon icon={faLinkedin} style={{ width: '2em', height: '2em' }} />
              </a>
              <a href="https://github.com/anabergerr" target='_blank'>
                <FontAwesomeIcon icon={faGithub} style={{ width: '2em', height: '2em' }} />
              </a>
              <a href="https://www.codewars.com/users/analauraa.js" target='_blank'>
                <FontAwesomeIcon icon={faLaptopCode} style={{ width: '2em', height: '2em' }} />
              </a>
            </div>
          </section>

          <footer className=" text-center py-4 w-full">
            {/* Rodapé */}
            <p>@{currentYear}</p>
          </footer>
        </main>
      </div>
    </>
  );
}

