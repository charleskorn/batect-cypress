const express = require('express');

const app = express();

const PORT =  process.env.PORT;

app.use(express.static('public'));

app.listen(PORT, () => {
  console.log(`App now listening on port ${PORT}`);
});
