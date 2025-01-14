"use client";

import React, { useState, useEffect } from "react";
import { FaGoogle, FaGithub, FaEyeSlash, FaEye } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, GoogleAuthProvider, GithubAuthProvider, signInWithPopup, sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./LoginPage.css";
import Image from "next/image";

const LoginPage = () => {
  type PasswordVisibilityState = {
    password: boolean;
    confirmPassword: boolean;
  };

  const [isRegistering, setIsRegistering] = useState(false);
  const [isForgotPassword, setIsForgotPassword] = useState(false); // Novo estado para "Esqueci minha senha"
  const [mounted, setMounted] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState<PasswordVisibilityState>({
    password: false,
    confirmPassword: false,
  });
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleToggleMode = () => {
    if (isForgotPassword) {
      setIsForgotPassword(false);
    } else {
      setIsRegistering(!isRegistering);
    }
  };

  const handlePasswordVisibility = (field: keyof PasswordVisibilityState) => {
    setPasswordVisible((prevState) => ({
      ...prevState,
      [field]: !prevState[field],
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const confirmPassword = formData.get("confirmPassword");

    if (isRegistering && password !== confirmPassword) {
      toast.error(
        <>
          As senhas não coincidem. <br /> Por favor, tente novamente.
        </>
      );
      return;
    }

    if (isForgotPassword) {
      sendPasswordResetEmail(auth, email)
        .then(() => {
          toast.success("E-mail enviado com sucesso! Verifique sua caixa de entrada.");
          setIsForgotPassword(false); // Volta para a tela de login após o envio
        })
        .catch((error) => {
          toast.error("Erro ao enviar o e-mail de redefinição de senha.");
          console.log(error);
        });
    } else if (isRegistering) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          localStorage.setItem("userName", user.displayName || "Usuário");
          router.push("/welcome");
        })
        .catch((error) => {
          console.log(error);
          if (error.code === "auth/email-already-in-use") {
            toast.error("Usuário já cadastrado no sistema.");
          } else if (error.code === "auth/weak-password") {
            toast.error("A senha deve ter no mínimo 6 caracteres");
          } else {
            toast.error(`Erro ao cadastrar: ${error.message}`);
          }
        });
    } else {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          localStorage.setItem("userName", user.displayName || "Usuário");
          router.push("/welcome");
        })
        .catch((error) => toast.error(`Erro ao fazer login: ${error.message}`));
    }
  };

  const handleGoogleLogin = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        localStorage.setItem("userName", user.displayName || "Usuário");
        router.push("/welcome");
      })
      .catch((error) => toast.error(`Erro ao fazer login com Google: ${error.message}`));
  };

  const handleGithubLogin = () => {
    const provider = new GithubAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        localStorage.setItem("userName", user.displayName || "Usuário");
        router.push("/welcome");
      })
      .catch((error) => {
        if (error.code === "auth/account-exists-with-different-credential") {
          toast.error("Este e-mail já está cadastrado em outra conta.");
        } else {
          toast.error(`Erro ao fazer login com GitHub: ${error.message}`);
        }
      });
  };

  if (!mounted) return null;

  return (
    <div className="login-container">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        closeButton
        pauseOnHover
        draggable
        theme="colored"
      />
      <div className="logo-container">
        <Image
          src="/logo.webp"
          alt="Logo do Ensinando Java"
          className="login-image"
          width={400}
          height={400}
          unoptimized
        />
      </div>
      <h1 className="login-title">
        {isForgotPassword
          ? "Redefinir Senha"
          : isRegistering
          ? "Criar conta"
          : "Fazer login"}
      </h1>
      <form onSubmit={handleSubmit} className="login-form">
        <label>
          E-mail:
          <input
            type="email"
            name="email"
            placeholder="Digite seu e-mail"
            required
          />
        </label>
        {!isForgotPassword && (
          <>
            <label>
              Senha:
              <div className="password-container">
                <input
                  type={passwordVisible.password ? "text" : "password"}
                  name="password"
                  placeholder="Digite sua senha"
                  required
                />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => handlePasswordVisibility("password")}
                >
                  {passwordVisible.password ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </label>
            {isRegistering && (
              <label>
                Confirmar Senha:
                <div className="password-container">
                  <input
                    type={passwordVisible.confirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    placeholder="Confirme sua senha"
                    required
                  />
                  <button
                    type="button"
                    className="password-toggle"
                    onClick={() => handlePasswordVisibility("confirmPassword")}
                  >
                    {passwordVisible.confirmPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </label>
            )}
          </>
        )}
        <button type="submit" className="submit-button">
          {isForgotPassword
            ? "Enviar E-mail"
            : isRegistering
            ? "Cadastrar"
            : "Entrar"}
        </button>
      </form>

      {!isForgotPassword && (
        <div className="external-login-buttons">
          <button className="external-button google-button" onClick={handleGoogleLogin}>
            <FaGoogle /> {isRegistering ? "Fazer login com Google" : "Fazer login com Google"}
          </button>
          <button className="external-button github-button" onClick={handleGithubLogin}>
            <FaGithub /> {isRegistering ? "Fazer login com GitHub" : "Fazer login com GitHub"}
          </button>
        </div>
      )}

      <button onClick={handleToggleMode} className="toggle-button">
        {isRegistering
          ? "Já tem conta? Faça login"
          : isForgotPassword
          ? "Voltar para login"
          : "Não tem conta? Cadastre-se"}
      </button>
        <br></br>
      {!isForgotPassword && !isRegistering && (
        <button
          onClick={() => setIsForgotPassword(true)}
          className="toggle-button"
        >
          Esqueci minha senha
        </button>
      )}
    </div>
  );
};

export default LoginPage;
