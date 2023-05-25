const KoaRouter = require("koa-router");

const { testMockCont } = require("../../../controller/test/test-controller");

const testRouter = new KoaRouter({
  prefix: "/api/test",
});

testRouter.get("/mock", testMockCont);

module.exports = testRouter;
