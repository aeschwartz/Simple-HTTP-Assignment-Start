const fs = require('fs');

const imageData = fs.readFileSync(`${__dirname}/../client/spongegar.png`);

const getSpongegar = (req, res) => {
  res.writeHead(200, { 'Content-Type': 'image/png' });
  res.write(imageData);
  res.end();
};

module.exports = {
  getSpongegar
};
