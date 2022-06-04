import { Context } from "sunder";
import { v4 as uuid } from 'uuid';

export async function generateUrl(ctx: Context) {
  ctx.response.body = JSON.stringify({
    id: uuid()
  });
}
