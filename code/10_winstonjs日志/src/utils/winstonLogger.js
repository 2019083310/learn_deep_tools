const winston = require("winston");
// ?每日滚动天数文件
require("winston-daily-rotate-file");

// ?自定义格式化信息格式
const customFormat = winston.format.combine(
  winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
  winston.format.align(),
  winston.format.printf((info) => {
    return `${info.level}:${info.timestamp}:${info.message}`;
  })
);

const defaultOptions = {
  format: customFormat,
  datePattern: "YYYY-MM-DD",
  zippedArchive: true,
  maxSize: "20m",
  maxFiles: "30d",
};

// ?这里是全局记录器，还可以定义多个记录器
const globalLogger = winston.createLogger({
  level: "info",
  format: customFormat,
  transports: [
    new winston.transports.DailyRotateFile({
      level: "info",
      filename: "logs/info-%DATE%.log",
      ...defaultOptions,
    }),
    new winston.transports.DailyRotateFile({
      level: "error",
      filename: "logs/error-%DATE%.log",
      ...defaultOptions,
    }),
    new winston.transports.Console({
      format: customFormat,
    }),
  ],
  exitOnError: false,
});

module.exports = globalLogger;
