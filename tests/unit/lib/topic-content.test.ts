import { beforeEach, describe, expect, it, vi } from "vitest";

vi.mock("astro:content", () => ({
  getCollection: vi.fn(),
}));

import { getCollection } from "astro:content";
import {
  getTopicCardsForHome,
  getTopicDetailById,
  getTopicEntries,
  getTopicGroupsForHome,
  getTopicIds,
  getTopicShortcutsForHome,
} from "../../../src/lib/topic-content";

type TopicVariant = "primary" | "secondary" | "accent" | "neutral";

type Shortcut = {
  href: string;
  title: string;
  variant: TopicVariant;
};

type TopicEntryMock = {
  data: {
    topicId: string;
    title: string;
    description: string;
    icon: string;
    colorVariant: TopicVariant;
    order: number;
    sectionCount: number;
    shortcuts: Shortcut[];
  };
};

function makeTopic(
  topicId: string,
  order: number,
  shortcuts: Shortcut[],
  colorVariant: TopicVariant = "primary",
): TopicEntryMock {
  return {
    data: {
      topicId,
      title: topicId,
      description: `${topicId} description`,
      icon: "hugeicons:book-01",
      colorVariant,
      order,
      sectionCount: 3,
      shortcuts,
    },
  };
}

function buildEntries(): TopicEntryMock[] {
  return [
    makeTopic(
      "logarithms-exponentials",
      1,
      [{
        href: "/topic/logarithms-exponentials#teoria-de-logaritmos",
        title: "Log shortcuts",
        variant: "secondary",
      }],
      "secondary",
    ),
    makeTopic(
      "geometry-trigonometry",
      2,
      [{
        href: "/topic/geometry-trigonometry#identidades-trigonometricas",
        title: "Trig shortcuts",
        variant: "accent",
      }],
      "accent",
    ),
    makeTopic(
      "factoring-algebraic-expressions",
      3,
      [
        {
          href: "/topic/factoring-algebraic-expressions#metodos-de-factorizacion",
          title: "Factor shortcuts",
          variant: "primary",
        },
        {
          href: "/topic/factoring-algebraic-expressions#extra",
          title: "Factor extra",
          variant: "primary",
        },
      ],
      "primary",
    ),
    makeTopic(
      "custom-topic",
      4,
      [{
        href: "/topic/custom-topic#intro",
        title: "Custom shortcut",
        variant: "neutral",
      }],
      "neutral",
    ),
  ];
}

describe("topic-content helpers", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("returns topic entries from collection", async () => {
    const entries = buildEntries();
    vi.mocked(getCollection).mockResolvedValue(entries as never);

    const result = await getTopicEntries();

    expect(getCollection).toHaveBeenCalledWith("topics");
    expect(result).toHaveLength(entries.length);
  });

  it("returns topic ids in collection order", async () => {
    const entries = buildEntries();
    vi.mocked(getCollection).mockResolvedValue(entries as never);

    const result = await getTopicIds();

    expect(result).toEqual([
      "logarithms-exponentials",
      "geometry-trigonometry",
      "factoring-algebraic-expressions",
      "custom-topic",
    ]);
  });

  it("returns first matching topic detail by id", async () => {
    const entries = buildEntries();
    const geometryTopic = entries.find(
      (entry) => entry.data.topicId === "geometry-trigonometry",
    );

    vi.mocked(getCollection)
      .mockResolvedValueOnce((geometryTopic ? [geometryTopic] : []) as never)
      .mockResolvedValueOnce([] as never);

    const found = await getTopicDetailById("geometry-trigonometry");
    const missing = await getTopicDetailById("missing-topic");

    expect(found?.data.topicId).toBe("geometry-trigonometry");
    expect(missing).toBeUndefined();
  });

  it("returns topic cards sorted by order", async () => {
    const entries = buildEntries();
    vi.mocked(getCollection).mockResolvedValue(entries as never);

    const cards = await getTopicCardsForHome();

    expect(cards.map((card) => card.id)).toEqual([
      "logarithms-exponentials",
      "geometry-trigonometry",
      "factoring-algebraic-expressions",
      "custom-topic",
    ]);
  });

  it("groups topics by pedagogical blocks and creates fallback group", async () => {
    const entries = buildEntries();
    vi.mocked(getCollection).mockResolvedValue(entries as never);

    const groups = await getTopicGroupsForHome();

    expect(groups.map((group) => group.id)).toEqual([
      "bases-algebraicas",
      "geometria-trigonometria",
      "otros-temas",
    ]);

    const fallback = groups.find((group) => group.id === "otros-temas");
    expect(fallback?.topics.map((topic) => topic.id)).toEqual(["custom-topic"]);
  });

  it("prioritizes shortcut hrefs and respects limit", async () => {
    const entries = buildEntries();
    vi.mocked(getCollection).mockResolvedValue(entries as never);

    const shortcuts = await getTopicShortcutsForHome(3);

    expect(shortcuts.map((shortcut) => shortcut.href)).toEqual([
      "/topic/factoring-algebraic-expressions#metodos-de-factorizacion",
      "/topic/logarithms-exponentials#teoria-de-logaritmos",
      "/topic/geometry-trigonometry#identidades-trigonometricas",
    ]);
  });
});
