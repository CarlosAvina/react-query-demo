import { Callback } from "aws-lambda";

exports.handler = function (callback: Callback) {
  callback(null, {
    statusCode: 200,
    body: "Hello, World",
  });
};
