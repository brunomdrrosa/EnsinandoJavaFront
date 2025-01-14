"use client";

import React, { useState, useEffect } from "react";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, GoogleAuthProvider, GithubAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../firebaseConfig"; 
import "./LoginPage.css";

const LoginPage = () => {
  const [isRegistering, setIsRegistering] = useState(false);
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleToggleMode = () => {
    setIsRegistering(!isRegistering);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const confirmPassword = formData.get("confirmPassword") as string;

    if (isRegistering && password !== confirmPassword) {
      alert("As senhas não coincidem. Por favor, tente novamente.");
      return;
    }

    if (isRegistering) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          localStorage.setItem("userName", user.displayName || "Usuário"); // Armazenando o nome no localStorage
          router.push("/welcome");
        })
        .catch((error) => {
          alert(error.message);
        });
    } else {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          localStorage.setItem("userName", user.displayName || "Usuário"); // Armazenando o nome no localStorage
          router.push("/welcome");
        })
        .catch((error) => {
          alert(error.message);
        });
    }
  };

  const handleGoogleLogin = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        localStorage.setItem("userName", user.displayName || "Usuário"); // Armazenando o nome no localStorage
        router.push("/welcome");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const handleGithubLogin = () => {
    const provider = new GithubAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        localStorage.setItem("userName", user.displayName || "Usuário"); // Armazenando o nome no localStorage
        router.push("/welcome");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  if (!mounted) return null;

  return (
    <div className="login-container">
      <h1>{isRegistering ? "Cadastrar" : "Entrar"}</h1>
      <form onSubmit={handleSubmit} className="login-form">
        <label>
          E-mail:
          <input type="email" name="email" placeholder="Digite seu e-mail" required />
        </label>
        <label>
          Senha:
          <input type="password" name="password" placeholder="Digite sua senha" required />
        </label>
        {isRegistering && (
          <label>
            Confirmar Senha:
            <input type="password" name="confirmPassword" placeholder="Confirme sua senha" required />
          </label>
        )}
        <button type="submit" className="submit-button">
          {isRegistering ? "Cadastrar" : "Entrar"}
        </button>
      </form>

      <div className="external-login-buttons">
        <button className="external-button google-button" onClick={handleGoogleLogin}>
          <FaGoogle /> {isRegistering ? "Criar conta com Google" : "Fazer login com Google"}
        </button>
        <button className="external-button github-button" onClick={handleGithubLogin}>
          <FaGithub /> {isRegistering ? "Criar conta com GitHub" : "Fazer login com GitHub"}
        </button>
      </div>

      <button onClick={handleToggleMode} className="toggle-button">
        {isRegistering ? "Já tem conta? Faça login" : "Não tem conta? Cadastre-se"}
      </button>
    </div>
  );
};

export default LoginPage;
