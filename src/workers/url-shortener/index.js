import { Router, RouterOptions } from 'itty-router'
import { v4 as uuid } from 'uuid'

const router = Router()

router.post("/generate", async () => {
  return new Response(
    JSON.stringify({
      id: uuid()
    }), {
    headers: {
      "Content-Type": "application/json"
    }
  })
})

router.get("/url/:uuid", ({ params }) => {
  let input = decodeURIComponent(params.uuid)
  return new Response(JSON.stringify({
      input
    }), {
    headers: {
      "Content-Type": "application/json",
    }
  });
})

router.all("*", () => new Response("404, not found!", { status: 404 }))

addEventListener('fetch', (e) => {
  e.respondWith(router.handle(e.request))
})
