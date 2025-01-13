import React from 'react';
import './FAQ.css';

export const FAQ = () => {
  return <>
        <section className="faq-section">
        <h2 className="reason-title">Perguntas frequentes</h2>
        <ul>
          <li>
            <details open>
              <summary>Para quem é indicado o curso?</summary>
              <p>O curso foi desenvolvido tanto para iniciantes que desejam aprender programação do zero quanto para profissionais que já atuam no mercado e querem se especializar em Java e outras tecnologias modernas. Ele abrange desde conceitos básicos até tópicos avançados, proporcionando uma formação completa e alinhada com as demandas do mercado de trabalho atual.</p>
            </details>
          </li>
          <li>
            <details open>
              <summary>Preciso ter conhecimento prévio em programação?</summary>
              <p>Não é necessário ter experiência prévia em programação. O curso começa com os fundamentos essenciais de Java, passando por conceitos como variáveis, programação orientada a objetos (POO) e boas práticas de desenvolvimento. À medida que o aluno avança, os conteúdos se tornam mais desafiadores, proporcionando um aprendizado progressivo e sólido.</p>
            </details>
          </li>
          <li>
            <details open>
              <summary>Quanto tempo dura o curso?</summary>
              <p>O curso é estruturado para ser feito no seu próprio ritmo. Não há um tempo limite para conclusão, pois entendemos que cada aluno tem uma rotina diferente. No entanto, oferecemos uma trilha de estudos sugerida para ajudá-lo a organizar seu tempo de maneira eficiente e concluir o curso no prazo que for mais conveniente para você.</p>
            </details>
          </li>
          <li>
            <details open>
              <summary>O curso oferece certificado?</summary>
              <p>Sim, ao concluir todas as aulas, exercícios e projetos obrigatórios, você receberá um certificado digital de conclusão, que poderá ser utilizado para valorizar seu currículo, perfil no LinkedIn e comprovar suas habilidades adquiridas ao longo do curso.</p>
            </details>
          </li>
          <li>
            <details open>
              <summary>As aulas são gravadas ou ao vivo?</summary>
              <p>As aulas são gravadas para que você tenha a flexibilidade de assisti-las quando e onde quiser. Esse formato permite que você programe seus estudos de acordo com sua agenda.</p>
            </details>
          </li>
          <li>
            <details open>
              <summary>Quais são as formas de pagamento?</summary>
              <p>Aceitamos PIX, cartões de crédito, débito e pagamentos via boleto bancário.</p>
            </details>
          </li>
          <li>
            <details open>
              <summary>Há garantia de reembolso?</summary>
              <p>Sim, oferecemos garantia de reembolso em até 7 dias após a inscrição, caso o curso não atenda suas expectativas.</p>
            </details>
          </li>
        </ul>
      </section>
  </>
}

export default FAQ;