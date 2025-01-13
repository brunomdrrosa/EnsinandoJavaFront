import "./App.css";
import Header from "./Header/Header";
import StacksSection from "./StacksSection/StacksSection";
import Advantages from "./Advantages/Advantages";

export default function Home() {
  return (
    <div className="page-container">
      <Header />
      <StacksSection />
      <Advantages />
<h2 className="reason-title">Quais são os custos?</h2>
      <div className="reasons-container">
        <div className="card-prices">
          <p className="title-reason">PLANO GRÁTIS</p>
          <p className="title-reason">R$ 0,00</p>
          <p className="description">
            Java é uma das linguagens de programação mais requisitadas pelas
            empresas em diversos setores, como fintechs, saúde, e-commerce, e
            grandes corporações. Aprender Java abre portas para muitas
            oportunidades de emprego, desde startups até empresas globais,
            devido à sua ampla utilização em sistemas corporativos e aplicações
            de grande escala.
          </p>
        </div>
        <div className="card-prices">
        <p className="title-reason">PLANO MENSAL</p>
        <p className="title-reason">R$ 19,90</p>
          <p className="description">
            Desenvolvedores Java são altamente valorizados no mercado, com
            salários competitivos em comparação com outras linguagens. A demanda
            constante, especialmente para posições sêniores, resulta em uma
            remuneração mais elevada, tornando Java uma escolha promissora para
            quem deseja crescer na carreira de TI.
          </p>
        </div>
        <div className="card-prices">
        <p className="title-reason">PLANO TRIMESTRAL</p>
        <p className="title-reason">R$ 44,90</p>
          <p className="description">
            Java é uma linguagem madura com mais de 25 anos de história, e sua
            popularidade continua forte no mercado. Empresas que utilizam Java
            frequentemente adotam soluções de longo prazo, o que proporciona
            estabilidade e oportunidades para profissionais que buscam uma
            carreira sólida, com espaço para evolução e aprendizado contínuo.
          </p>
        </div>
      </div>

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
