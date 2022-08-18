
import { Context } from "sunder";

export async function setCorsHeaders(ctx: Context, next: Function) {
    ctx.response.headers.set('Content-Type', `application/json`);
    ctx.response.headers.set('Access-Control-Allow-Origin', `twdl.us,www.twdl.us`);
    await next();
}
