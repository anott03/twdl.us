
import { Context } from "sunder";

export async function setCorsHeaders(ctx: Context, next: Function) {
    let allowed_origins: string[] = ["https://www.twdl.us"];
    if (allowed_origins.includes(ctx.request.get('Origin') || "")) {
      ctx.response.headers.set('Content-Type', `application/json`);
      ctx.response.headers.set('Access-Control-Allow-Origin', `*`);
    }
    await next();
}
