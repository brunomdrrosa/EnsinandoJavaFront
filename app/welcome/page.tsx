"use client";
import React, { JSX, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import './WelcomePage.css';
import VideoSlider from "../VideoSlider/VideoSlider";
import { SiApachekafka, SiDocker, SiFlyway, SiGraphql, SiJunit5, SiLiquibase, SiMongodb, SiOpenapiinitiative, SiQuarkus, SiRabbitmq, SiSwagger } from "react-icons/si";

// Defina um tipo para as tecnologias
type Technology = "MongoDB" | "JUnit" | "Flyway" | "Liquibase" | "Swagger" | "OpenAPI" | "Kafka" | "RabbitMQ" | "Docker" | "GraphQL" | "Quarkus";

const WelcomePage = () => {
  const router = useRouter();
  const [firstName, setFirstName] = useState<string | null>(null);

  // useEffect para acessar o localStorage apenas no lado do cliente
  useEffect(() => {
    const userName = localStorage.getItem("userName");
    if (userName) {
      setFirstName(userName.split(" ")[0]); // Extrair o primeiro nome
    } else {
      router.push("/"); // Redireciona para a página principal se o nome não existir
    }
  }, [router]);

  // Este useState só é chamado uma vez, independentemente de condições de renderização
  const [selectedTechnologies, setSelectedTechnologies] = useState<Technology[]>([]);

  const handleTechnologyChange = (tech: Technology) => {
    setSelectedTechnologies((prevSelected) => {
      if (prevSelected.includes(tech)) {
        return prevSelected.filter((technology) => technology !== tech);
      } else {
        return [...prevSelected, tech];
      }
    });
  };

  if (!firstName) {
    return null;
  }

  const recentVideos = [
    {
      title: "Como criar uma API utilizando o Spring Boot",
      thumbnailUrl: "/thumbnails/spring.png",
      videoUrl: "https://example.com/videos/spring-boot-intro",
      progress: 75,
      locked: false,
      technology: "Spring Boot"
    },
    {
      title: "Simplificando o código com as anotações do Lombok",
      thumbnailUrl: "/thumbnails/lombok.png",
      videoUrl: "https://example.com/videos/postgresql-setup",
      progress: 45,
      locked: false,
      technology: "Lombok"
    },
    {
      title: "Mapeando objetos e banco de dados com o Hibernate",
      thumbnailUrl: "/thumbnails/hibernate.png",
      videoUrl: "https://example.com/videos/junit-tests",
      progress: null,
      locked: false,
      technology: "Hibernate"
    },
    {
      title: "Introdução ao PostgreSQL: Como conectar a sua API ao banco SQL",
      thumbnailUrl: "/thumbnails/postgresql.png",
      videoUrl: "https://example.com/videos/rabbitmq",
      progress: null,
      locked: false,
      technology: "PostgreSQL"
    }
  ];

  const allVideos: { title: string; thumbnailUrl: string; videoUrl: string; progress: number | null; locked: boolean; technology: Technology }[] = [
    {
      title: "Introdução ao MongoDB: Como conectar a sua API ao banco NOSQL",
      thumbnailUrl: "/thumbnails/mongo.png",
      videoUrl: "https://example.com/videos/spring-boot-intro",
      progress: null,
      locked: true,
      technology: "MongoDB"
    },
    {
      title: "Aprenda a realizar testes unitários para a sua API",
      thumbnailUrl: "/thumbnails/junit.png",
      videoUrl: "https://example.com/videos/spring-boot-intro",
      progress: null,
      locked: true,
      technology: "JUnit"
    },
    {
      title: "Automatizando migrations de banco de dados com o Flyway",
      thumbnailUrl: "/thumbnails/flyway.png",
      videoUrl: "https://example.com/videos/spring-boot-intro",
      progress: null,
      locked: true,
      technology: "Flyway"
    },
    {
      title: "Automatizando migrations de banco de dados com o Liquibase",
      thumbnailUrl: "/thumbnails/liquibase.png",
      videoUrl: "https://example.com/videos/spring-boot-intro",
      progress: null,
      locked: true,
      technology: "Liquibase"
    },
    {
      title: "Aprenda a documentar suas APIs com o Swagger",
      thumbnailUrl: "/thumbnails/swagger.png",
      videoUrl: "https://example.com/videos/spring-boot-intro",
      progress: null,
      locked: true,
      technology: "Swagger"
    },
    {
      title: "Aprenda a documentar suas APIs com o OpenAPI",
      thumbnailUrl: "/thumbnails/openapi.png",
      videoUrl: "https://example.com/videos/spring-boot-intro",
      progress: null,
      locked: true,
      technology: "OpenAPI"
    },
    {
      title: "Introdução ao Apache Kafka: Mensageria em tempo real",
      thumbnailUrl: "/thumbnails/kafka.png",
      videoUrl: "https://example.com/videos/spring-boot-intro",
      progress: null,
      locked: true,
      technology: "Kafka"
    },
    {
      title: "Como usar RabbitMQ para comunicação assíncrona",
      thumbnailUrl: "/thumbnails/rabbitmq.png",
      videoUrl: "https://example.com/videos/spring-boot-intro",
      progress: null,
      locked: true,
      technology: "RabbitMQ"
    },
    {
      title: "Introdução ao Docker: criando contêiners para suas aplicações",
      thumbnailUrl: "/thumbnails/docker.png",
      videoUrl: "https://example.com/videos/spring-boot-intro",
      progress: null,
      locked: true,
      technology: "Docker"
    },
    {
      title: "Introdução ao GraphQL: consultas eficientes para APIs",
      thumbnailUrl: "/thumbnails/graphql.png",
      videoUrl: "https://example.com/videos/spring-boot-intro",
      progress: null,
      locked: true,
      technology: "GraphQL"
    },
    {
      title: "Introdução ao Quarkus: framework Java para cloud-native",
      thumbnailUrl: "/thumbnails/quarkus.png",
      videoUrl: "https://example.com/videos/spring-boot-intro",
      progress: null,
      locked: true,
      technology: "Quarkus"
    },
  ];

  const filteredVideos = selectedTechnologies.length > 0
    ? allVideos.filter(video => selectedTechnologies.includes(video.technology))
    : allVideos;

  const technologies = [...new Set(allVideos.map(video => video.technology))];

  const iconMapping: Record<Technology, JSX.Element> = {
    "MongoDB": <SiMongodb size={48} className="technology-button" style={{ fill: selectedTechnologies.includes("MongoDB") ? "#ff9900" : "white" }} />,
    "JUnit": <SiJunit5 size={48} className="technology-button" style={{ fill: selectedTechnologies.includes("JUnit") ? "#ff9900" : "white" }} />,
    "Flyway": <SiFlyway size={48} className="technology-button" style={{ fill: selectedTechnologies.includes("Flyway") ? "#ff9900" : "white" }} />,
    "Liquibase": <SiLiquibase size={48} className="technology-button" style={{ fill: selectedTechnologies.includes("Liquibase") ? "#ff9900" : "white" }} />,
    "Swagger": <SiSwagger size={48} className="technology-button" style={{ fill: selectedTechnologies.includes("Swagger") ? "#ff9900" : "white" }} />,
    "OpenAPI": <SiOpenapiinitiative size={48} className="technology-button" style={{ fill: selectedTechnologies.includes("OpenAPI") ? "#ff9900" : "white" }} />,
    "Kafka": <SiApachekafka size={48} className="technology-button" style={{ fill: selectedTechnologies.includes("Kafka") ? "#ff9900" : "white" }} />,
    "RabbitMQ": <SiRabbitmq size={48} className="technology-button" style={{ fill: selectedTechnologies.includes("RabbitMQ") ? "#ff9900" : "white" }} />,
    "Docker": <SiDocker size={48} className="technology-button" style={{ fill: selectedTechnologies.includes("Docker") ? "#ff9900" : "white" }} />,
    "GraphQL": <SiGraphql size={48} className="technology-button" style={{ fill: selectedTechnologies.includes("GraphQL") ? "#ff9900" : "white" }} />,
    "Quarkus": <SiQuarkus size={48} className="technology-button" style={{ fill: selectedTechnologies.includes("Quarkus") ? "#ff9900" : "white" }} />,
  };

  return (
    <div className="welcome-container">
      <h1 className="welcome-title">
        {firstName === "Usuário" ? "Seja bem-vindo!" : `Olá, ${firstName}!`}
      </h1>
      <h2 className="welcome-subtitle">Estas são as suas aulas disponíveis para assistir:</h2>
      <VideoSlider videos={recentVideos} />
      <h2 className="welcome-subtitle">Ao assinar você terá acesso as seguintes aulas:</h2>

      <div className="technology-filter">
        <div className="filter-icons">
          {technologies.map((tech, index) => (
            <button
              key={index}
              onClick={() => handleTechnologyChange(tech as Technology)}
              className={`technology-button ${selectedTechnologies.includes(tech as Technology) ? 'active' : ''}`}
            >
              {iconMapping[tech as Technology]}
            </button>
          ))}
        </div>
      </div>
      <VideoSlider videos={filteredVideos} />
    </div>
  );
};

export default WelcomePage;
