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

export interface TopicGroup {
  id: string;
  title: string;
  description: string;
  topics: TopicCardItem[];
}

interface TopicGroupDefinition {
  id: string;
  title: string;
  description: string;
  topicIds: string[];
}

const PEDAGOGICAL_TOPIC_ORDER: string[] = [
  "factoring-algebraic-expressions",
  "logarithms-exponentials",
  "geometry-trigonometry",
  "analytic-geometry-lines-points",
  "conic-sections",
  "inverse-functions",
  "limits-continuity",
  "continuity",
  "asymptotes",
  "differential-calculus-function-analysis",
  "derivative-applications",
  "derivative-advanced-analysis",
  "integral-calculus",
  "sequences-series",
];

const TOPIC_ORDER_POSITION = new Map(
  PEDAGOGICAL_TOPIC_ORDER.map((topicId, index) => [topicId, index]),
);

const HOME_TOPIC_GROUP_DEFINITIONS: TopicGroupDefinition[] = [
  {
    id: "bases-algebraicas",
    title: "Bases Algebraicas",
    description: "Fundamentos para simplificar expresiones y operar con modelos algebraicos.",
    topicIds: [
      "factoring-algebraic-expressions",
      "logarithms-exponentials",
    ],
  },
  {
    id: "geometria-trigonometria",
    title: "Geometria y Trigonometria",
    description: "Herramientas geometricas y trigonométricas para analizar figuras y relaciones metricas.",
    topicIds: [
      "geometry-trigonometry",
      "analytic-geometry-lines-points",
      "conic-sections",
    ],
  },
  {
    id: "analisis-funciones",
    title: "Analisis de Funciones",
    description: "Comportamiento de funciones, limites y continuidad antes del calculo diferencial.",
    topicIds: ["inverse-functions", "limits-continuity", "continuity", "asymptotes"],
  },
  {
    id: "calculo-diferencial",
    title: "Calculo Diferencial",
    description: "Derivadas y sus aplicaciones para estudiar variacion, optimizacion y cambio.",
    topicIds: [
      "differential-calculus-function-analysis",
      "derivative-applications",
      "derivative-advanced-analysis",
    ],
  },
  {
    id: "calculo-integral-series",
    title: "Calculo Integral y Series",
    description: "Integracion y sucesiones para acumulacion, aproximaciones y analisis avanzado.",
    topicIds: ["integral-calculus", "sequences-series"],
  },
];

const FALLBACK_TOPIC_GROUP: Pick<TopicGroup, "id" | "title" | "description"> = {
  id: "otros-temas",
  title: "Otros Temas",
  description: "Temas adicionales incorporados fuera de los bloques principales.",
};

const HOME_SHORTCUT_PRIORITY_HREFS: string[] = [
  "/topic/factoring-algebraic-expressions#metodos-de-factorizacion",
  "/topic/logarithms-exponentials#teoria-de-logaritmos",
  "/topic/geometry-trigonometry#identidades-trigonometricas",
  "/topic/limits-continuity#propiedades-de-limites",
  "/topic/continuity#condiciones-de-continuidad",
  "/topic/differential-calculus-function-analysis#tabla-de-derivadas-fundamentales",
  "/topic/derivative-applications#aplicaciones-de-la-derivada",
  "/topic/integral-calculus#metodos-de-integracion",
  "/topic/sequences-series#series-y-aproximacion",
];

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

function sortByPedagogicalOrder(entries: TopicEntry[]): TopicEntry[] {
  return [...entries].sort((a, b) => {
    const aPosition = TOPIC_ORDER_POSITION.get(a.data.topicId) ?? Number.MAX_SAFE_INTEGER;
    const bPosition = TOPIC_ORDER_POSITION.get(b.data.topicId) ?? Number.MAX_SAFE_INTEGER;

    if (aPosition !== bPosition) {
      return aPosition - bPosition;
    }

    return a.data.order - b.data.order;
  });
}

function toTopicCardItem(entry: TopicEntry): TopicCardItem {
  return {
    id: entry.data.topicId,
    title: entry.data.title,
    description: entry.data.description,
    subtopicsCount: entry.data.sectionCount,
    icon: entry.data.icon,
    colorVariant: entry.data.colorVariant,
  };
}

export async function getTopicCardsForHome(): Promise<TopicCardItem[]> {
  const entries = sortByOrder(await getTopicEntries());

  return entries.map(toTopicCardItem);
}

export async function getTopicGroupsForHome(): Promise<TopicGroup[]> {
  const entries = sortByPedagogicalOrder(await getTopicEntries());
  const topicById = new Map(entries.map((entry) => [entry.data.topicId, entry]));
  const usedTopicIds = new Set<string>();

  const groups = HOME_TOPIC_GROUP_DEFINITIONS.map((groupDefinition) => {
    const topics = groupDefinition.topicIds
      .map((topicId) => topicById.get(topicId))
      .filter((entry): entry is TopicEntry => entry !== undefined)
      .map((entry) => {
        usedTopicIds.add(entry.data.topicId);
        return toTopicCardItem(entry);
      });

    return {
      id: groupDefinition.id,
      title: groupDefinition.title,
      description: groupDefinition.description,
      topics,
    };
  }).filter((group) => group.topics.length > 0);

  const fallbackTopics = entries
    .filter((entry) => !usedTopicIds.has(entry.data.topicId))
    .map(toTopicCardItem);

  if (fallbackTopics.length > 0) {
    groups.push({
      id: FALLBACK_TOPIC_GROUP.id,
      title: FALLBACK_TOPIC_GROUP.title,
      description: FALLBACK_TOPIC_GROUP.description,
      topics: fallbackTopics,
    });
  }

  return groups;
}

export async function getTopicShortcutsForHome(limit = 9): Promise<TopicShortcutItem[]> {
  const entries = sortByOrder(await getTopicEntries());
  const allShortcuts = entries.flatMap((entry) => entry.data.shortcuts);
  const shortcutsByHref = new Map(allShortcuts.map((shortcut) => [shortcut.href, shortcut]));

  const prioritizedShortcuts = HOME_SHORTCUT_PRIORITY_HREFS
    .map((href) => shortcutsByHref.get(href))
    .filter((shortcut): shortcut is TopicShortcutItem => shortcut !== undefined);

  const prioritizedHrefs = new Set(prioritizedShortcuts.map((shortcut) => shortcut.href));
  const fallbackShortcuts = allShortcuts.filter(
    (shortcut) => !prioritizedHrefs.has(shortcut.href),
  );

  return [...prioritizedShortcuts, ...fallbackShortcuts].slice(0, limit);
}
