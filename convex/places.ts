import { v } from "convex/values";
import { query } from "./_generated/server";

export const get = query({
  args: {
    category: v.string()
  },
  handler: async (ctx, args) => {
    const places = await ctx.db.query("places").collect()
    return places.filter(place => place.categories.includes(args.category))
  },
});