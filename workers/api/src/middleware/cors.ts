
import { Context } from "sunder";

export async function setCorsHeaders(ctx: Context, next: Function) {
    ctx.response.headers.set('Content-Type', `application/json`);
    ctx.response.headers.set('Access-Control-Allow-Origin', `*`);
    await next();
}

export async function handlePreflightRequests(ctx: Context, next: Function) {
  if (ctx.request.method === 'OPTIONS') {
    console.log("Preflight Request!")
    ctx.response.headers.set("Connection", "keep-alive");
    ctx.response.headers.set("Access-Control-Allow-Origin", "*");
    ctx.response.headers.set("Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE");
    ctx.response.headers.set("Access-Control-Max-Age", "86400");
  }
  await next();
}
