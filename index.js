const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static('public'))
app.use(express.static(path.join(__dirname,'public')));


const dbRoutes = require('./routers');

dbRoutes(app);



app.get('/send', (req, res) => {
  res.send('Hello  World!');
});

app.post('/Save', (req, res) => {
  console.log('Hello')
  console.log(req.body);
  res.json({ 'res': 'Save' })


});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
