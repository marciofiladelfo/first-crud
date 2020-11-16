const mongoose = require("mongoose");
const sobre = new mongoose.Schema(
  {
    topTitulo: {
      type: String,
    },
    topSubTitulo: {
      type: String,
    },
    topTexto: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

mongoose.model("Sobre", sobre);
