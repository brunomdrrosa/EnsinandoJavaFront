import "./App.css";
import Header from "./Header/Header";
import StacksSection from "./StacksSection/StacksSection";
import Advantages from "./Advantages/Advantages";
import Prices from "./Prices/Prices";

export default function Home() {
  return (
    <div className="page-container">
      <Header />
      <StacksSection />
      <Advantages />
      <Prices />
      <section className="faq-section">
        <h2>Perguntas frequentes</h2>
        <ul>
          <li>Para quem é indicado o curso?</li>
          <li>Preciso ter conhecimento prévio em programação?</li>
          {/* Continue adicionando perguntas conforme necessário */}
        </ul>
      </section>

      <footer className="footer">
        <h3>Ensinando Java</h3>
        <div className="social-icons">
          {/* Substitua com links reais para redes sociais */}
          <span>Instagram</span> <span>LinkedIn</span>
        </div>
      </footer>
    </div>
  );
}
