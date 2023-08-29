import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

import { eq } from "drizzle-orm";
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
  updatePost: publicProcedure
    .input(z.object({ content: z.string(), id: z.number() }))
    .mutation(async ({ ctx, input }) => {
      return await ctx.db
        .update(post)
        .set({ content: input.content })
        .where(eq(post.id, input.id))
        .returning({ updateId: post.id });
    }),
  deletePost: publicProcedure
    .input(z.object({ id: z.number() }))
    .query(async ({ ctx, input }) => {
      return await ctx.db.delete(post).where(eq(post.id, input.id));
    }),
});
