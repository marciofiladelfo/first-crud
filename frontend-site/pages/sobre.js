import Head from "next/head";
import { Jumbotron, Container } from "reactstrap";
import Menu from "../components/Menu";
import Rodape from "../components/Rodape";

function Home({ data }) {
  return (
    <>
      <Head>
        <title>Sobre - D3M</title>
        <meta name="description" content="Sobre a empresa D3M" />
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
          }
          .conteudo-sobre{
            height: 62vh;
            backgroud-color: #fff;
            text-align: center;
            padding: 100px 0px;
            font-size: 1.5rem;
          }
          `}
        </style>
        <Container className="text-center">
          <h1 className="disply-4">{data.sobre.topTitulo}</h1>
          <p className="lead">{data.sobre.topSubTitulo}</p>
        </Container>
      </Jumbotron>
      <Container className="text-center">
        <h3 className="conteudo-sobre lead">{data.sobre.topTexto}</h3>
      </Container>
      <Rodape></Rodape>
    </>
  );
}

export async function getServerSideProps() {
  const response = await fetch(`http://localhost:3500/sobre`);
  const data = await response.json();
  return { props: { data } };
}

export default Home;
