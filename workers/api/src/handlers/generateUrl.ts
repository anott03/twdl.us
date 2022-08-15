import { Context } from "sunder";
import { v4 as uuid } from 'uuid';

export async function generateUrl(ctx: Context) {
  let id = uuid();
  let reqJSON: { url: string } = await ctx.request.json()
  console.log(reqJSON.url);

  // save id to KV
  ctx.env.SHORTENER_STORE.put(id, reqJSON.url);
  console.log("GET FROM KV", ctx.env.SHORTENER_STORE.get(id));

  ctx.response.body = JSON.stringify({ id });
}
