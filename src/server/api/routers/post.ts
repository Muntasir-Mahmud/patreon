import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

import { post } from "~/db/schema";

export const postRouter = createTRPCRouter({
  getPost: publicProcedure.query(async ({ ctx }) => {
    return await ctx.db.select().from(post);
  }),

  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),
});
