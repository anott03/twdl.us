import { Context, Router } from "sunder";
import { Env } from "./bindings";
import { generateUrl } from "./handlers/generateUrl";

export function registerRoutes(router: Router<Env>) {
    router.get("/robots.txt", (ctx) => {
        // This disallows all bots/scrapers
        ctx.response.body = `Agent: *\nDisallow: /`;
    });

    // approve all preflight requests
    // this should probably eventually be made specific for individual requests
    router.options("*", (ctx: Context) => {
      ctx.response.headers.set("Connection", "keep-alive");
      ctx.response.headers.set("Access-Control-Allow-Origin", "*");
      ctx.response.headers.set("Access-Control-Allow-Headers", "referer, origin, content-type, authorization, Access-Control-Allow-Origin, xyz");
      ctx.response.headers.set("Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE");
      ctx.response.headers.set("Access-Control-Max-Age", "86400");
    })
    router.post("/generate", generateUrl);
}
