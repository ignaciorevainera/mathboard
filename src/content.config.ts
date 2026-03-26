import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const topicColorVariant = z.enum(["primary", "secondary", "accent", "neutral"]);

const topics = defineCollection({
  loader: glob({ base: "./src/content/topics", pattern: "**/*.mdx" }),
  schema: z.object({
    topicId: z.string(),
    title: z.string(),
    description: z.string(),
    icon: z.string().default("tabler:book"),
    colorVariant: topicColorVariant,
    order: z.number().int().positive(),
    sectionCount: z.number().int().nonnegative(),
    shortcuts: z.array(
      z.object({
        href: z.string(),
        title: z.string(),
        variant: topicColorVariant,
      }),
    ),
  }),
});

export const collections = { topics };
