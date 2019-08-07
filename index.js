const express = require('express');

const app = express();

const PORT =  process.env.PORT;

app.use(express.static('public'));

console.log('Setting timeout...');
setTimeout(() => {
  console.log('About to listen...');
  app.listen(PORT, () => {
    console.log(`App now listening on port ${PORT}`);
  })
}, 10000)
