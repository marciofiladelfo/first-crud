const mongoose = require("mongoose");
const home = new mongoose.Schema(
  {
    topTitulo: {
      type: String,
    },
    topSubTitulo: {
      type: String,
    },
    topTextoBtn: {
      type: String,
    },
    topLinkBtn: {
      type: String,
    },

    serTitulo: {
      type: String,
    },
    serSubTitulo: {
      type: String,
    },

    serUmIcone: {
      type: String,
    },
    serUmTitulo: {
      type: String,
    },
    serUmDesc: {
      type: String,
    },

    serDoisIcone: {
      type: String,
    },
    serDoisTitulo: {
      type: String,
    },
    serDoisDesc: {
      type: String,
    },

    serTresIcone: {
      type: String,
    },
    serTresTitulo: {
      type: String,
    },
    serTresDesc: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

mongoose.model("Home", home);
