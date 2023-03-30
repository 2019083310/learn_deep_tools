import Koa from "koa";
import KoaRouter from "koa-router";
import cors from "koa2-cors";
import * as Sentry from "@sentry/node";

const testRouter = new KoaRouter({
  prefix: "/test",
});

const app = new Koa();

Sentry.init({
  dsn: "https://af17e69f856f4b51abe69470f59c3e0a@o4504927134351360.ingest.sentry.io/4504927137890304",
});

app.use(cors());

testRouter.get("/", async (ctx, next) => {
  console.log(1);
  ctx.body = 1;
});

testRouter.get("/calc", async (ctx, next) => {
  console.error(2);
  // ctx.body = 2;

  ctx.app.emit("error", new Error("error"), ctx);
});

app.use(testRouter.routes());
app.use(testRouter.allowedMethods());

app.on("error", (err, ctx) => {
  Sentry.withScope(function (scope) {
    scope.addEventProcessor(function (event) {
      return Sentry.addRequestDataToEvent(event, ctx.request);
    });
    Sentry.captureException(err);
  });
});

export default app;
