import { Context } from "sunder";

export async function getUrl(ctx: Context) {
  let reqJSON: { id: string } = await ctx.request.json()
  let redirectUrl = await ctx.env.SHORTENER_STORE.get(reqJSON.id);
  ctx.response.body = JSON.stringify({ redirectUrl });
}
