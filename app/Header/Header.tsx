'use client';

import React from 'react';
import './Header.css';
import Image from 'next/image';

const Header = () => {
  const scrollToFAQ = () => {
    const faqSection = document.getElementById("faq-title");

    if (faqSection) {
      const offset = 50; // Distância adicional para ajustar a posição (valor negativo)
      const position = faqSection.getBoundingClientRect().top + window.pageYOffset - offset;

      window.scrollTo({
        top: position,
        behavior: "smooth",
      });
    }
  };

  return (
    <header className="hero-section">
      <div className="hero-content">
        <div className="text-container">
          <h1 className="title">Do básico ao avançado: domine Java e transforme sua carreira em tecnologia</h1>
          <p className="subtitle">
            A plataforma ideal para transformar seu aprendizado em Java em uma jornada prática e divertida,
            com conteúdo atualizado e projetos desafiadores no seu ritmo.
          </p>
          <div className="buttons">
            <button className="start-button">Começar</button>
            <button className="learn-more-button" onClick={scrollToFAQ}>Saiba mais</button>
          </div>
        </div>
        <Image 
          src="/logo.webp" 
          alt="Logo do Ensinando Java" 
          className="hero-image"
          width={400}
          height={400}
          unoptimized
        />
      </div>
    </header>
  );
};

export default Header;
