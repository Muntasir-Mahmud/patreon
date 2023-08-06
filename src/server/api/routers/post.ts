import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

import { post } from "~/db/schema";

export const postRouter = createTRPCRouter({
  getPost: publicProcedure.query(async ({ ctx }) => {
    return await ctx.db.select().from(post);
  }),
  createPost: publicProcedure
    .input(z.object({ content: z.string() }))
    .mutation(async ({ ctx, input }) => {
      return await ctx.db.insert(post).values({ content: input.content });
    }),
  // updatePost:
  // deletePost:
});
