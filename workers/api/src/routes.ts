import { Router } from "sunder";
import { Env } from "./bindings";
import { serveStaticAssetsFromKV } from "./middleware/static";
import { generateUrl } from "./handlers/generateUrl";

export function registerRoutes(router: Router<Env>) {
    router.get("/robots.txt", (ctx) => {
        // This disallows all bots/scrapers
        ctx.response.body = `Agent: *\nDisallow: /`;
    });

    router.post("/generate", generateUrl);
}
