import redis from "ioredis";

const redisStore = new redis({
  host: "gz-crs-0nuqua91.sql.tencentcdb.com",
  port: 28468,
  password: "ly123456",
  db: 0,
});

// 测试
redisStore.set("name", "coder", redis.print);
redisStore.get("name", (err, val) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("val ", val);

  // 退出
  // redisClient.quit();
});
