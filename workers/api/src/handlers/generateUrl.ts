import { Context } from "sunder";
import { v4 as uuid } from 'uuid';

export async function generateUrl(ctx: Context) {
  ctx.response.headers.set("Access-Control-Allow-Origin", "*");
  ctx.response.headers.set("Content-Type", "application/json");
  ctx.response.body = JSON.stringify({
    id: uuid()
  });
}
