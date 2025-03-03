const Zombitron = require("./zombitron/server/Zombitron");
const zombitron = new Zombitron();

zombitron.app.use('/assets', zombitron.express.static(__dirname + '/assets'));

zombitron.app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

zombitron.app.get('/interface1', function (req, res) {
  res.sendFile(__dirname + '/views/interface1.html');
});

zombitron.app.get('/interface2', function (req, res) {
  res.sendFile(__dirname + '/views/interface2.html');
});

zombitron.start();