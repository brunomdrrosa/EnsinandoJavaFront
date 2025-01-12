import "./App.css";
import Header from "./Header/Header";
import StackImage from "./StackImage/StackImage";

export default function Home() {
  return (
    <div className="page-container">
      <Header />
      {/* Restante do código permanece igual */}
      <h2 className="learning-title">O que vou aprender?</h2>
      <section className="learning-section">
        <div className="icons-container">
          <StackImage imageUrl="stacks/java.webp" backgroundColor="#FFFFFF" altText="Java" backgroundSize="40%" />
          <StackImage imageUrl="stacks/spring.webp" backgroundColor="#69B62A" altText="Spring" backgroundSize="80%" />
          <StackImage imageUrl="stacks/maven.webp" backgroundColor="#000000" altText="Maven" backgroundSize="60%" />
          <StackImage imageUrl="stacks/gradle.webp" backgroundColor="#FFFFFF" altText="Gradle" backgroundSize="60%" />
          <StackImage imageUrl="stacks/lombok.webp" backgroundColor="#FFFFFF" altText="Lombok" backgroundSize="60%" />
          <StackImage imageUrl="stacks/hibernate.webp" backgroundColor="#FFFFFF" altText="Hibernate" backgroundSize="50%" />
          <StackImage imageUrl="stacks/postgresql.webp" backgroundColor="#336791" altText="PostgreSQL" backgroundSize="50%" />
        </div>
      </section>

      <section className="why-java-section">
        <h2>Por que escolher Java?</h2>
        <div className="reasons-container">
          <div>
            <h3>Alta demanda no mercado de trabalho</h3>
            <p>
              Java é uma das linguagens de programação mais requisitadas pelas
              empresas...
            </p>
          </div>
          <div>
            <h3>Remuneração competitiva</h3>
            <p>Desenvolvedores Java são altamente valorizados no mercado...</p>
          </div>
          <div>
            <h3>Estabilidade e futuro promissor</h3>
            <p>
              Java é uma linguagem madura com mais de 25 anos de história...
            </p>
          </div>
        </div>
      </section>

      <section className="pricing-section">
        <h2>Quais são os custos?</h2>
        <div className="plans-container">
          <div className="plan">PLANO GRÁTIS - R$ 0,00</div>
          <div className="plan">PLANO MENSAL - R$ 19,90</div>
          <div className="plan">PLANO TRIMESTRAL - R$ 44,90</div>
        </div>
      </section>

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
