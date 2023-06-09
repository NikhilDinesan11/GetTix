import express from "express";
import "express-async-errors";
import { json } from "express";

import cookieSession from "cookie-session";
import { errorHandler } from "@ndtickets/common";
import { NotFoundError, currentUser } from "@ndtickets/common";
import { createChrageRouter } from "./routes/new";

const app = express();
app.set("trust proxy", true);
app.use(json());
app.use(
  cookieSession({
    signed: false,
    secure: process.env.NODE_ENV !== "test",
  })
);
app.use(currentUser);

app.use(createChrageRouter);

app.all("*", async () => {
  throw new NotFoundError();
});
app.use(errorHandler);

export { app };
