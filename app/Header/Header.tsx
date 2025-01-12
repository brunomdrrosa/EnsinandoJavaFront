import React from 'react';
import './Header.css';

const Header = () => {
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
            <button className="learn-more-button">Saiba mais</button>
          </div>
        </div>
        <img 
          src="/logo.webp" 
          alt="Logo do Ensinando Java" 
          className="hero-image"
        />
      </div>
    </header>
  );
};

export default Header;
