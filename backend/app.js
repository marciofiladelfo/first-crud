const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("./models/home");
const Home = mongoose.model("Home");

require("./models/contato");
const Contato = mongoose.model("Contato");

require("./models/sobre");
const Sobre = mongoose.model("Sobre");

const app = express();

app.use(express.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "X-PINGOTHER, Content-Type, Authorization"
  );
  app.use(cors());
  next();
});

mongoose
  .connect("mongodb://localhost/celke", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Conexão realizada com sucesso no MongoDB");
  })
  .catch((err) => {
    console.log("Falha na conexão realizada no MongoDB" + err);
  });

app.get("/", (req, res) => {
  res.json({ name: "Marcio  " });
});

app.get("/home", async (req, res) => {
  await Home.findOne({})
    .then((home) => {
      return res.json({
        error: false,
        home,
      });
    })
    .catch((err) => {
      return res.status(400).json({
        error: true,
        message: "Erro: Nenhum registro encontrado",
      });
    });
});

app.post("/home", async (req, res) => {
  const homeExiste = await Home.findOne({});
  if (homeExiste) {
    return res.status(400).json({
      error: true,
      message: "Erro: A página home já possui cadastrado",
    });
  }

  await Home.create(req.body, (err) => {
    if (err)
      return res.status(400).json({
        error: true,
        message: "Erro: Conteúdo da página home não cadastrado",
      });
  });
  return res.json({
    error: false,
    message: "Conteúdo da página home cadastrado com sucesso!",
  });
});

app.get("/sobre", async (req, res) => {
  await Sobre.findOne({})
    .then((sobre) => {
      return res.json({
        error: false,
        sobre,
      });
    })
    .catch((err) => {
      return res.status(400).json({
        error: true,
        message: "Erro: Nenhum registro encontrado",
      });
    });
});

app.post("/sobre", async (req, res) => {
  const sobreExiste = await Sobre.findOne({});
  if (sobreExiste) {
    return res.status(400).json({
      error: true,
      message: "Erro: A página sobre já possui cadastrado",
    });
  }

  await Sobre.create(req.body, (err) => {
    if (err)
      return res.status(400).json({
        error: true,
        message: "Erro: Conteúdo da página sobre não cadastrado",
      });
  });
  return res.json({
    error: false,
    message: "Conteúdo da página sobre cadastrado com sucesso!",
  });
});

app.post("/contato", async (req, res) => {
  await Contato.create(req.body, (err) => {
    if (err)
      return res.status(400).json({
        error: true,
        message: "Erro: Mensagem de contato não cadastrada",
      });
  });
  return res.json({
    error: false,
    message: "Mensagem de contato cadastrada com sucesso!",
  });
});

app.listen(3500, () => {
  console.log("Start Server");
});
