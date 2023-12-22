import fastify from "fastify";
import cors from "@fastify/cors";
import { memoriesRoutes } from "./routes/memories";
const app = fastify();

app.get("/controller/teste", async () => {
  return "Hello World!";
});

app.register(cors, {
  origin: true, // array com todas URLs de front-end poderão acessar nosso back-end
});

app.register(memoriesRoutes);

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log("🚀 HTTP server runing on http://localhost:3333");
  });
