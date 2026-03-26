import { getCollection, type CollectionEntry } from "astro:content";

type TopicEntry = CollectionEntry<"topics">;

type TopicVariant = "primary" | "secondary" | "accent" | "neutral";

export interface TopicCardItem {
  id: string;
  title: string;
  description: string;
  subtopicsCount: number;
  icon: string;
  colorVariant: TopicVariant;
}

export interface TopicShortcutItem {
  href: string;
  title: string;
  variant: TopicVariant;
}

export async function getTopicEntries(): Promise<TopicEntry[]> {
  return getCollection("topics");
}

export async function getTopicIds(): Promise<string[]> {
  const entries = await getTopicEntries();
  return entries.map((entry) => entry.data.topicId);
}

export async function getTopicDetailById(
  topicId: string,
): Promise<TopicEntry | undefined> {
  const entries = await getCollection("topics", ({ data }) => data.topicId === topicId);
  return entries.at(0);
}

function sortByOrder(entries: TopicEntry[]): TopicEntry[] {
  return [...entries].sort((a, b) => a.data.order - b.data.order);
}

export async function getTopicCardsForHome(): Promise<TopicCardItem[]> {
  const entries = sortByOrder(await getTopicEntries());

  return entries.map((entry) => ({
    id: entry.data.topicId,
    title: entry.data.title,
    description: entry.data.description,
    subtopicsCount: entry.data.sectionCount,
    icon: entry.data.icon,
    colorVariant: entry.data.colorVariant,
  }));
}

export async function getTopicShortcutsForHome(limit = 9): Promise<TopicShortcutItem[]> {
  const entries = sortByOrder(await getTopicEntries());
  return entries.flatMap((entry) => entry.data.shortcuts).slice(0, limit);
}
