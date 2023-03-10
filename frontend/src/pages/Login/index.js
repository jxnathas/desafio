import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import * as C from "./styles";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import BannerAsset from "../../assets/banner.png"
import Line from "../../assets/line.png"

const Login = () => {
  const { signin } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (!email | !senha) {
      setError("Preencha todos os campos");
      return;
    }

    const res = signin(email, senha);

    if (res) {
      setError(res);
      return;
    }

    navigate("/home");
  };

  return (
    <C.Container>
      <C.Line src={Line}></C.Line>
      <C.Label>Paggue</C.Label>
      <C.OutsideContent>
      <C.Content>
        <C.Title>Entrar</C.Title>
        <C.subtitle>Entre para acessar sua conta</C.subtitle>
        <Input
          type="email"
          placeholder="E-MAIL"
          value={email}
          onChange={(e) => [setEmail(e.target.value), setError("")]}
        />
        <Input
          type="password"
          placeholder="SENHA"
          value={senha}
          onChange={(e) => [setSenha(e.target.value), setError("")]}
        />
        <C.labelError>{error}</C.labelError>
        <Button Text="Entrar na plataforma" onClick={handleLogin} />
        <C.LabelSignup>
          Não tem uma conta?!
          <C.Strong>
            <Link to="/cadastro">&nbsp;Registre-se</Link>
          </C.Strong>
        </C.LabelSignup>
        <C.LabelSignup>Esqueceu sua senha?</C.LabelSignup>
      </C.Content>
      <C.Banner src={BannerAsset}></C.Banner>
      </C.OutsideContent>
    </C.Container>
  );
};

export default Login;