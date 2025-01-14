import "./Advantages.css";

import { PiChartLineUpFill } from "react-icons/pi";
import { PiCurrencyDollarFill } from "react-icons/pi";
import { BsFillSuitcaseLgFill } from "react-icons/bs";

const Advantages = () => {
  return (
    <>
      <h2 className="reason-title">Por que escolher Java?</h2>
      <div className="reasons-container">
        <div className="card">
          <BsFillSuitcaseLgFill size={50} />
          <p className="title-reason">Alta demanda no mercado de trabalho</p>
          <p className="description">
            Java é uma das linguagens mais requisitadas, sendo amplamente usada em setores como fintechs, saúde e e-commerce. Aprender Java abre muitas oportunidades de emprego, desde startups até grandes corporações, devido à sua aplicação em sistemas corporativos e de grande escala.
          </p>
        </div>
        <div className="card">
          <PiCurrencyDollarFill size={64} />
          <p className="title-reason">Remuneração competitiva</p>
          <p className="description">
          Desenvolvedores Java são bem valorizados, com salários competitivos, especialmente para posições sêniores. A demanda constante por profissionais qualificados resulta em uma remuneração elevada, tornando Java uma boa escolha para quem quer crescer na carreira.
          </p>
        </div>
        <div className="card">
          <PiChartLineUpFill size={64} />
          <p className="title-reason">Estabilidade e futuro promissor</p>
          <p className="description">
          Java, com mais de 25 anos de uso, permanece uma escolha sólida para empresas que buscam soluções duradouras. Sua confiabilidade garante aos profissionais estabilidade na carreira, além de oportunidades constantes para aprendizado e crescimento no mercado de TI.
          </p>
        </div>
      </div>
    </>
  );
};

export default Advantages;
