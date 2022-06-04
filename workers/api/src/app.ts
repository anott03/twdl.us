import { Router, Sunder } from "sunder";
import { renderErrorsAsJSON } from "sunder/middleware/render";
import { registerRoutes } from "./routes";
import { Env } from "@/bindings";
import { setCorsHeaders } from "./middleware/cors";

export function createApp() {
    const app = new Sunder<Env>();
    const router = new Router<Env>();
    registerRoutes(router);

    app.use(setCorsHeaders);
    app.use(renderErrorsAsJSON);
    app.use(router.middleware);

    return app;
}
