import { Elysia } from "elysia";
import { cors } from "@elysiajs/cors";
import { swagger } from "@elysiajs/swagger";
import { healthRoute } from "./routes/health";

const port = Number(process.env.PORT) || 3000;

const app = new Elysia()
  .use(cors())
  .use(
    swagger({
      documentation: {
        info: {
          title: "Belajar Vibe Coding API",
          version: "1.0.0",
          description: "Backend service powered by Bun, ElysiaJS, Drizzle ORM & MySQL",
        },
      },
    })
  )
  .get("/", () => ({
    name: "Belajar Vibe Coding API",
    version: "1.0.0",
    status: "running",
    documentation: "/swagger",
  }))
  .use(healthRoute)
  .listen(port);

console.log(
  `🦊 Server Elysia running at http://${app.server?.hostname}:${app.server?.port}`
);

export type App = typeof app;
