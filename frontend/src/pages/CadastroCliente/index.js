import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import * as C from "./styles";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import NavBar from "../../components/NavBar";

const CadastroCliente = () => {
  const [email, setEmail] = useState("");
  const [emailConf, setEmailConf] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { cadastro } = useAuth();

  const handleSignup = () => {
    if (!email | !emailConf | !senha) {
      setError("Preencha todos os campos");
      return;
    } else if (email !== emailConf) {
      setError("Os e-mails não são iguais");
      return;
    }

    const res = cadastro(email, senha);

    if (res) {
      setError(res);
      return;
    }

    alert("Usuário cadatrado com sucesso!");
    navigate("/");
  };

  return (
    <C.Container>
      <NavBar/>
      <C.Content>
        <C.Label>Cadastrar cliente</C.Label>
        <Input
          type="text"
          placeholder="NOME COMPLETO"
        />
        <Input
          type="text"
          placeholder="CPF/CNPJ"
        />
        <Input
          type="text"
          placeholder="NOME ESTABELECIMENTO"
        />
        <Input
          type="email"
          placeholder="EMAIL"
        />
        <Input
          type="password"
          placeholder="SENHA"
        />
        <Input
          type="text"
          placeholder="TELEFONE"
        />

        <C.labelError>{error}</C.labelError>
        <Button Text="Cadastrar" onClick={handleSignup} />
      </C.Content>
    </C.Container>
  );
};

export default CadastroCliente;