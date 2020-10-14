const http = require("./app");
const host = "localhost" || process.env.HOST;
const port = process.env.PORT || 5000;
http.listen(port, host, () => {
  console.log("Servidor en ip: " + host + " puerto:" + port);
});
