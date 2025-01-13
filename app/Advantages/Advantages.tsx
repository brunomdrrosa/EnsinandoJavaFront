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
            Java é uma das linguagens de programação mais requisitadas pelas
            empresas em diversos setores, como fintechs, saúde, e-commerce, e
            grandes corporações. Aprender Java abre portas para muitas
            oportunidades de emprego, desde startups até empresas globais,
            devido à sua ampla utilização em sistemas corporativos e aplicações
            de grande escala.
          </p>
        </div>
        <div className="card">
          <PiCurrencyDollarFill size={64} />
          <p className="title-reason">Remuneração competitiva</p>
          <p className="description">
            Desenvolvedores Java são altamente valorizados no mercado, com
            salários competitivos em comparação com outras linguagens. A demanda
            constante, especialmente para posições sêniores, resulta em uma
            remuneração mais elevada, tornando Java uma escolha promissora para
            quem deseja crescer na carreira de TI.
          </p>
        </div>
        <div className="card">
          <PiChartLineUpFill size={64} />
          <p className="title-reason">Estabilidade e futuro promissor</p>
          <p className="description">
            Java é uma linguagem madura com mais de 25 anos de história, e sua
            popularidade continua forte no mercado. Empresas que utilizam Java
            frequentemente adotam soluções de longo prazo, o que proporciona
            estabilidade e oportunidades para profissionais que buscam uma
            carreira sólida, com espaço para evolução e aprendizado contínuo.
          </p>
        </div>
      </div>
    </>
  );
};

export default Advantages;
