const { testMockService } = require("../../mock/test/test");

class TestCont {
  async testMockCont(ctx) {
    try {
      const result = await testMockService();

      ctx.body = result;
    } catch (error) {
      return ctx.emit("error", ctx, error);
    }
  }
}

module.exports = new TestCont();
