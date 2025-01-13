import React from 'react';
import StackImage from "../StackImage/StackImage";
import './Prices.css';

const Prices = () => {
  return <>
    <h2 className="reason-title">Quais são os custos?</h2>
    <div className="reasons-container">
      <div className="card-prices">
        <p className="title-price">PLANO GRÁTIS</p>
        <p className="price-value">
          <span className="currency">R$</span>
          <span className="amount">0,00</span>
        </p>
        <p className="price-description">
          Este plano inclui acesso aos seguintes cursos:
        </p>
        <div className="free-stack-images-container">
          <StackImage
            imageUrl="stacks/java.webp"
            backgroundColor="#FFFFFF"
            backgroundSize="40%"
            width="32px"
            height="24px"
          />
          <StackImage
            imageUrl="stacks/spring.webp"
            backgroundColor="#69B62A"
            backgroundSize="80%"
            width="32px"
            height="24px"
          />
          <StackImage
            imageUrl="stacks/maven.webp"
            backgroundColor="#000000"
            backgroundSize="60%"
            width="32px"
            height="24px"
          />
          <StackImage
            imageUrl="stacks/gradle.webp"
            backgroundColor="#FFFFFF"
            backgroundSize="60%"
            width="32px"
            height="24px"
          />
          <StackImage
            imageUrl="stacks/lombok.webp"
            backgroundColor="#FFFFFF"
            backgroundSize="60%"
            width="32px"
            height="24px"
          />
          <StackImage
            imageUrl="stacks/hibernate.webp"
            backgroundColor="#FFFFFF"
            backgroundSize="50%"
            width="32px"
            height="24px"
          />
          <StackImage
            imageUrl="stacks/postgresql.webp"
            backgroundColor="#336791"
            backgroundSize="50%"
            width="32px"
            height="24px"
          />
        </div>
        <button className="price-button">Cadastrar-se</button>
      </div>
      <div className="card-prices">
        <p className="title-price">PLANO MENSAL</p>
        <p className="price-value">
          <span className="currency">R$</span>
          <span className="amount">19,90</span>
        </p>
        <p className="price-description">
          Este plano inclui acesso aos seguintes cursos:
        </p>
        <div className="stack-images-container">
          <StackImage
            imageUrl="stacks/java.webp"
            backgroundColor="#FFFFFF"
            backgroundSize="40%"
            width="32px"
            height="24px"
          />
          <StackImage
            imageUrl="stacks/spring.webp"
            backgroundColor="#69B62A"
            backgroundSize="80%"
            width="32px"
            height="24px"
          />
          <StackImage
            imageUrl="stacks/maven.webp"
            backgroundColor="#000000"
            backgroundSize="60%"
            width="32px"
            height="24px"
          />
          <StackImage
            imageUrl="stacks/gradle.webp"
            backgroundColor="#FFFFFF"
            backgroundSize="60%"
            width="32px"
            height="24px"
          />
          <StackImage
            imageUrl="stacks/lombok.webp"
            backgroundColor="#FFFFFF"
            backgroundSize="60%"
            width="32px"
            height="24px"
          />
          <StackImage
            imageUrl="stacks/hibernate.webp"
            backgroundColor="#FFFFFF"
            backgroundSize="50%"
            width="32px"
            height="24px"
          />
          <StackImage
            imageUrl="stacks/postgresql.webp"
            backgroundColor="#336791"
            backgroundSize="50%"
            width="32px"
            height="24px"
          />
          <StackImage
            imageUrl="stacks/mongo.webp"
            backgroundColor="#13AA52"
            backgroundSize="75%"
            width="32px"
            height="24px"
          />
          <StackImage
            imageUrl="stacks/junit.webp"
            backgroundColor="#FFFFFF"
            backgroundSize="55%"
            width="32px"
            height="24px"
          />
          <StackImage
            imageUrl="stacks/flyway.webp"
            backgroundColor="#CC0000"
            backgroundSize="75%"
            width="32px"
            height="24px"
          />
          <StackImage
            imageUrl="stacks/liquibase.webp"
            backgroundColor="#2962FF"
            backgroundSize="55%"
            width="32px"
            height="24px"
          />
          <StackImage
            imageUrl="stacks/swagger.webp"
            backgroundColor="#85EA2D"
            backgroundSize="75%"
            width="32px"
            height="24px"
          />
          <StackImage
            imageUrl="stacks/openapi.webp"
            backgroundColor="#FFFFFF"
            backgroundSize="60%"
            width="32px"
            height="24px"
          />
          <StackImage
            imageUrl="stacks/sonarqube.webp"
            backgroundColor="#FFFFFF"
            backgroundSize="70%"
            width="32px"
            height="24px"
          />
          <StackImage
            imageUrl="stacks/kafka.webp"
            backgroundColor="#262E32"
            backgroundSize="50%"
            width="32px"
            height="24px"
          />
          <StackImage
            imageUrl="stacks/rabbitmq.webp"
            backgroundColor="#F76300"
            backgroundSize="50%"
            width="32px"
            height="24px"
          />
          <StackImage
            imageUrl="stacks/docker.webp"
            backgroundColor="#0091E2"
            backgroundSize="75%"
            width="32px"
            height="24px"
          />
          <StackImage
            imageUrl="stacks/elk.webp"
            backgroundColor="#FFFFFF"
            backgroundSize="75%"
            width="32px"
            height="24px"
          />
          <StackImage
            imageUrl="stacks/graphql.webp"
            backgroundColor="#D90071"
            backgroundSize="60%"
            width="32px"
            height="24px"
          />
          <StackImage
            imageUrl="stacks/quarkus.webp"
            backgroundColor="#4695EB"
            backgroundSize="60%"
            width="32px"
            height="24px"
          />
          <StackImage
            imageUrl="stacks/micronaut.webp"
            backgroundColor="#000000"
            backgroundSize="85%"
            width="32px"
            height="24px"
          />
        </div>
        <button className="price-button">Quero assinar</button>

      </div>
      <div className="card-prices">
        <p className="title-price">PLANO TRIMESTRAL</p>
        <p className="price-value">
          <span className="currency">R$</span>
          <span className="amount">44,90</span>
        </p>
        <p className="price-description">
          Este plano inclui acesso aos seguintes cursos:
        </p>
        <div className="stack-images-container">
          <StackImage
            imageUrl="stacks/java.webp"
            backgroundColor="#FFFFFF"
            backgroundSize="40%"
            width="32px"
            height="24px"
          />
          <StackImage
            imageUrl="stacks/spring.webp"
            backgroundColor="#69B62A"
            backgroundSize="80%"
            width="32px"
            height="24px"
          />
          <StackImage
            imageUrl="stacks/maven.webp"
            backgroundColor="#000000"
            backgroundSize="60%"
            width="32px"
            height="24px"
          />
          <StackImage
            imageUrl="stacks/gradle.webp"
            backgroundColor="#FFFFFF"
            backgroundSize="60%"
            width="32px"
            height="24px"
          />
          <StackImage
            imageUrl="stacks/lombok.webp"
            backgroundColor="#FFFFFF"
            backgroundSize="60%"
            width="32px"
            height="24px"
          />
          <StackImage
            imageUrl="stacks/hibernate.webp"
            backgroundColor="#FFFFFF"
            backgroundSize="50%"
            width="32px"
            height="24px"
          />
          <StackImage
            imageUrl="stacks/postgresql.webp"
            backgroundColor="#336791"
            backgroundSize="50%"
            width="32px"
            height="24px"
          />
          <StackImage
            imageUrl="stacks/mongo.webp"
            backgroundColor="#13AA52"
            backgroundSize="75%"
            width="32px"
            height="24px"
          />
          <StackImage
            imageUrl="stacks/junit.webp"
            backgroundColor="#FFFFFF"
            backgroundSize="55%"
            width="32px"
            height="24px"
          />
          <StackImage
            imageUrl="stacks/flyway.webp"
            backgroundColor="#CC0000"
            backgroundSize="75%"
            width="32px"
            height="24px"
          />
          <StackImage
            imageUrl="stacks/liquibase.webp"
            backgroundColor="#2962FF"
            backgroundSize="55%"
            width="32px"
            height="24px"
          />
          <StackImage
            imageUrl="stacks/swagger.webp"
            backgroundColor="#85EA2D"
            backgroundSize="75%"
            width="32px"
            height="24px"
          />
          <StackImage
            imageUrl="stacks/openapi.webp"
            backgroundColor="#FFFFFF"
            backgroundSize="60%"
            width="32px"
            height="24px"
          />
          <StackImage
            imageUrl="stacks/sonarqube.webp"
            backgroundColor="#FFFFFF"
            backgroundSize="70%"
            width="32px"
            height="24px"
          />
          <StackImage
            imageUrl="stacks/kafka.webp"
            backgroundColor="#262E32"
            backgroundSize="50%"
            width="32px"
            height="24px"
          />
          <StackImage
            imageUrl="stacks/rabbitmq.webp"
            backgroundColor="#F76300"
            backgroundSize="50%"
            width="32px"
            height="24px"
          />
          <StackImage
            imageUrl="stacks/docker.webp"
            backgroundColor="#0091E2"
            backgroundSize="75%"
            width="32px"
            height="24px"
          />
          <StackImage
            imageUrl="stacks/elk.webp"
            backgroundColor="#FFFFFF"
            backgroundSize="75%"
            width="32px"
            height="24px"
          />
          <StackImage
            imageUrl="stacks/graphql.webp"
            backgroundColor="#D90071"
            backgroundSize="60%"
            width="32px"
            height="24px"
          />
          <StackImage
            imageUrl="stacks/quarkus.webp"
            backgroundColor="#4695EB"
            backgroundSize="60%"
            width="32px"
            height="24px"
          />
          <StackImage
            imageUrl="stacks/micronaut.webp"
            backgroundColor="#000000"
            backgroundSize="85%"
            width="32px"
            height="24px"
          />
        </div>
        <button className="price-button">Quero assinar</button>

      </div>
    </div>

  </>
}

export default Prices;