const fs = require("fs");
const path = require("path");

const mapRoutes = (app) => {
  const routeDir = fs.readdirSync(path.join(__dirname, "./module"));

  for (const itemDir of routeDir) {
    const fileDir = fs.readdirSync(path.join(__dirname, `./module/${itemDir}`));

    for (const route of fileDir) {
      const router = require(path.join(
        __dirname,
        `./module/${itemDir}/${route}`
      ));

      app.use(router.routes());
      app.use(router.allowedMethods());
    }
  }
};

module.exports = mapRoutes;
