import { Context } from "sunder";
import { nanoid } from 'nanoid';

export async function generateUrl(ctx: Context) {
  let id = nanoid(5);
  let reqJSON: { url: string } = await ctx.request.json()
  console.log(reqJSON.url);

  // save id to KV
  await ctx.env.SHORTENER_STORE.put(id, reqJSON.url);

  ctx.response.body = JSON.stringify({ id });
}
