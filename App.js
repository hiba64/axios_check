const express = require("express");
const axios = require("axios");
const app = express();
const port = 3000;
app.listen(port, function (err) {
  if (err) console.log("server is not running");
  else console.log("server is running");
});

app.get("/Brazil", (req, res) => {
    requestBrazil
      .then((data) => {
        res.json(data.data);
      })
      .catch((err) => {});
  });
  app.get("/London", (req, res) => {
    requestLondon
      .then((data) => {
        res.json(data.data);
      })
      .catch((err) => {});
  });

  const requestBrazil = axios.get(
    "https://api.openweathermap.org/data/2.5/weather?q=Brasil&APPID=90066c1ded495762d56240881de66b4a"
  );
  const requestLondon = axios.get(
    "https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=90066c1ded495762d56240881de66b4a"
  );
  axios
  .all([requestBrazil, requestLondon])
  .then(
    axios.spread((brazil, London) => {
      console.log(brazil.data, London.data);
    })
  )
  .catch((errors) => {
    console.error(errors);
  });
