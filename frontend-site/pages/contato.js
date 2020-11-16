import { useState } from "react";
import Head from "next/head";
import {
  Jumbotron,
  Container,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";
import Menu from "../components/Menu";
import Rodape from "../components/Rodape";

function Home() {
  const [contato, setContato] = useState({
    name: "",
    email: "",
    subject: "",
    content: "",
  });

  const [response, setResponse] = useState({
    formSave: false,
    type: "",
    message: "",
  });

  const onChangeInput = (e) =>
    setContato({ ...contato, [e.target.name]: e.target.value });

  const sendMsg = async (e) => {
    e.preventDefault();
    setResponse({ formSave: true });
    try {
      const res = await fetch("http://localhost:3500/contato", {
        method: "POST",
        body: JSON.stringify(contato),
        headers: { "Content-Type": "application/json" },
      });
      const responseEnv = await res.json();
      if (responseEnv.erros) {
        setResponse({
          formSave: false,
          type: "error",
          message: responseEnv.message,
        });
      } else {
        setResponse({
          formSave: false,
          type: "success",
          message: responseEnv.message,
        });
      }
    } catch (err) {
      setResponse({
        formSave: false,
        type: "error",
        message: "Erro: Cadastro não enviado. Tente novamente",
      });
    }
  };

  return (
    <>
      <Head>
        <title>Contato - D3M</title>
        <meta
          name="description"
          content="Site de portifolio sobre desenvolvedor web"
        />
        <meta name="author" content="Marcio Filadelfo" />
      </Head>
      <Menu></Menu>
      <Jumbotron fluid className="descr-top">
        <style>
          {`.descr-top{
            background-color: #000;
            color: #fed136;
            padding: 100px 0px;
            margin-bottom: 0rem;
          }`}
        </style>
        <Container className="text-center">
          <h1 className="disply-4">Welcome to page Contato</h1>
        </Container>
      </Jumbotron>
      <Jumbotron fluid className="form-contato">
        <style>
          {`
          .form-contato{
            padding: 80px 0px;
            background-color: #fff;
            margin-bottom: 0rem;
          }
        
          `}
        </style>
        <Container>
          {response.type === "error" ? (
            <div className="alert alert-danger">{response.message}</div>
          ) : response.type === "success" ? (
            <div className="alert alert-success">{response.message}</div>
          ) : (
            <div></div>
          )}
          <Form onSubmit={sendMsg}>
            <FormGroup>
              <Label for="name">Nome</Label>
              <Input
                type="text"
                name="name"
                id="name"
                placeholder="Nome completo"
                onChange={onChangeInput}
              />
            </FormGroup>
            <FormGroup>
              <Label for="email">E-mail</Label>
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="E-mail"
                onChange={onChangeInput}
              />
            </FormGroup>
            <FormGroup>
              <Label for="subject">Assunto</Label>
              <Input
                type="text"
                name="subject"
                id="subject"
                placeholder="Assunto da mensagem"
                onChange={onChangeInput}
              />
            </FormGroup>
            <FormGroup>
              <Label for="content">Conteúdo</Label>
              <Input
                type="textarea"
                name="content"
                id="content"
                placeholder="Conteúdo da mensagem"
                onChange={onChangeInput}
              />
            </FormGroup>
            {response.formSave ? (
              <Button type="submit" outline color="warning" disabled>
                Enviando...
              </Button>
            ) : (
              <Button type="submit" outline color="warning">
                Enviar
              </Button>
            )}
          </Form>
        </Container>
      </Jumbotron>
      <Rodape></Rodape>
    </>
  );
}

export default Home;
