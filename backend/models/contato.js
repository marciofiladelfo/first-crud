const mongoose = require("mongoose");
const contato = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    subject: {
      type: String,
    },
    content: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

mongoose.model("Contato", contato);
