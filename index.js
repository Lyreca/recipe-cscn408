const express = require('express');
const cors = require('cors');
const app = express();

const port = 5000;

app.get('/', (req, res) => {
    res.sendFile('/index.html', {root: __dirname}); 
  });

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

app.use(express.static('public'));
app.use(cors());

