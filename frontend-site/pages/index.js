import Head from "next/head";
import { Jumbotron, Container } from "reactstrap";
import Menu from "../components/Menu";
import Rodape from "../components/Rodape";

//Importação dos icones do Fontawesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas);

function Home({ data }) {
  return (
    <>
      <Head>
        <title>Home - D3M</title>
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
            padding: 150px 0px;
            margin-bottom: 0rem;
          }`}
        </style>
        <Container className="text-center">
          <h1 className="disply-4">{data.home.topTitulo}</h1>
          <p className="lead">{data.home.topSubTitulo}</p>
          <p>
            <a
              href={data.home.topLinkBtn}
              className="btn btn-outline-warning btn-lg"
            >
              {data.home.topTextoBtn}
            </a>
          </p>
        </Container>
      </Jumbotron>
      <Jumbotron fluid className="servicos">
        <style>
          {`.servicos{
            ackground-color: #fff;
            padding: 80px 0px;
            margin-bottom: 0rem;
          }
          .circulo{
            width: 140px;
            height: 140px;
            background-color: #fed136;
            font-size: 52px;
            padding-top: 28px;
            color: #fff;
          }
          .centralizar{
            margin: 0 auto;
            float: none;
          }
          `}
        </style>
        <Container className="text-center">
          <div>
            <h2 className="display-4">{data.home.serTitulo}</h2>
            <p className="lead pb-4">{data.home.serSubTitulo}</p>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="rounded-circle circulo centralizar">
                <FontAwesomeIcon icon={["fas", "code"]} />
              </div>
              <h2 lassName="mt-4 mb-4">{data.home.serUmTitulo}</h2>
              <p>{data.home.serUmDesc}</p>
            </div>
            <div className="col-md-4">
              <div className="rounded-circle circulo centralizar">
                <FontAwesomeIcon icon={["fas", "laptop-code"]} />
              </div>
              <h2 lassName="mt-4 mb-4">{data.home.serDoisTitulo}</h2>
              <p>{data.home.serDoisDesc}</p>
            </div>
            <div className="col-md-4">
              <div className="rounded-circle circulo centralizar">
                <FontAwesomeIcon icon={["fas", "database"]} />
              </div>{" "}
              <h2 lassName="mt-4 mb-4">{data.home.serTresTitulo}</h2>
              <p>{data.home.serTresDesc}</p>
            </div>
          </div>
        </Container>
      </Jumbotron>
      <Rodape></Rodape>
    </>
  );
}

export async function getServerSideProps() {
  const response = await fetch(`http://localhost:3500/home`);
  const data = await response.json();
  return { props: { data } };
}

export default Home;
