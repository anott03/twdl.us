import * as trpc from '@trpc/server';
import { z } from 'zod';
import { prisma } from '@/backend/utils/prisma';

export const appRouter = trpc
  .router()
  .mutation('generate-url', {
    input: z.object({
      url: z.string()
    }),
    async resolve({ input }) {
      const dbEntry = await prisma.urls.create({
        data: {
          ...input
        }
      })

      return {
        success: true,
        generatedUrl: `localhost:3000/u/${dbEntry.id}`
      }
    }
  })
  .query('get-url', {
    input: z.object({ id: z.any() }),
    async resolve({ input }) {
      // find the entry with id input.id
      let foundEntry = await prisma.urls.findUnique({ where: { ...input }})

      if (foundEntry) {
        return {
          success: true,
          redirectUrl: foundEntry.url
        }
      }

      return {
        success: false,
        errorMsg: "Invalid ID"
      }
    }
  });

// export type definition of API
export type AppRouter = typeof appRouter;
