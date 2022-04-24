import * as trpc from '@trpc/server';
import { z } from 'zod';
import { prisma } from '@/backend/utils/prisma';

export const appRouter = trpc
  .router()
  .query('hello', {
    input: z
      .object({
        text: z.string().nullish(),
      })
      .nullish(),
    resolve({ input }) {
      return {
        greeting: `hello ${input?.text ?? 'world'}`,
      };
    },
  })
  .mutation('generate-url', {
    input: z.object({
      url: z.string()
    }),
    async resolve({ input }) {
      const dbEntry = await prisma.url.create({
        data: {
          ...input
        }
      })

      return {
        success: true,
        generatedUrl: `localhost:3000/u/${dbEntry.id}`
      }
    }
  });

// export type definition of API
export type AppRouter = typeof appRouter;
