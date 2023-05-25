const Mock = require("mockjs");

class TestMock {
  async testMockService() {
    return Mock.mock({
      name: "coder",
      age: 23,
      height: 1.88,
      birthday: Mock.Random.date(),
    });
  }
}

module.exports = new TestMock();
