const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

const app = express();

// sessão db
mongoose.connect(
     'mongodb://localhost:27017/nodeapi',
      {useNewUrlParser : true}
     );
// *********************

// acesso aos models, sem precisar chamar 1 por vez;
requireDir('./src/models');
// *************************

// rotas


app.use('/api', require("./src/routes"));


app.listen(3001);

