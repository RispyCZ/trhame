import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  categories: defineTable({
    slug: v.string(),
    subtitle: v.string(),
    title: v.string(),
  }),
  places: defineTable({
    categories: v.array(v.string()),
    description: v.string(),
    googleLinkUrl: v.string(),
    location: v.string(),
    name: v.string(),
    websiteUrl: v.string(),
  }),
});