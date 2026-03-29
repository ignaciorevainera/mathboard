export type TopicVariant = "primary" | "secondary" | "accent" | "neutral";

const topicIconToneMap: Record<string, string> = {
  "factoring-algebraic-expressions": "bg-primary text-primary-content",
  "logarithms-exponentials": "bg-secondary text-secondary-content",
  "geometry-trigonometry": "bg-accent text-accent-content",
  "analytic-geometry-lines-points": "bg-info text-info-content",
  "conic-sections": "bg-success text-success-content",
  "inverse-functions": "bg-warning text-warning-content",
  "limits-continuity": "bg-error text-error-content",
  continuity: "bg-neutral text-neutral-content",
  asymptotes: "bg-primary text-primary-content",
  "differential-calculus-function-analysis": "bg-secondary text-secondary-content",
  "derivative-applications": "bg-accent text-accent-content",
  "derivative-advanced-analysis": "bg-info text-info-content",
  "integral-calculus": "bg-success text-success-content",
  "sequences-series": "bg-neutral text-neutral-content",
};

const topicHaloToneMap: Record<string, string> = {
  "factoring-algebraic-expressions": "bg-primary/20",
  "logarithms-exponentials": "bg-secondary/20",
  "geometry-trigonometry": "bg-accent/20",
  "analytic-geometry-lines-points": "bg-info/20",
  "conic-sections": "bg-success/20",
  "inverse-functions": "bg-warning/20",
  "limits-continuity": "bg-error/20",
  continuity: "bg-neutral/20",
  asymptotes: "bg-primary/20",
  "differential-calculus-function-analysis": "bg-secondary/20",
  "derivative-applications": "bg-accent/20",
  "derivative-advanced-analysis": "bg-info/20",
  "integral-calculus": "bg-success/20",
  "sequences-series": "bg-neutral/20",
};

const iconColorClassMap: Record<TopicVariant, string> = {
  primary: "bg-primary text-primary-content",
  secondary: "bg-secondary text-secondary-content",
  accent: "bg-accent text-accent-content",
  neutral: "bg-neutral text-neutral-content",
};

const haloColorClassMap: Record<TopicVariant, string> = {
  primary: "bg-primary/20",
  secondary: "bg-secondary/20",
  accent: "bg-accent/20",
  neutral: "bg-neutral/20",
};

export function getTopicIconToneClasses(
  topicId: string,
  colorVariant: TopicVariant = "primary",
): string {
  return topicIconToneMap[topicId] ?? iconColorClassMap[colorVariant];
}

export function getTopicHaloToneClasses(
  topicId: string,
  colorVariant: TopicVariant = "primary",
): string {
  return topicHaloToneMap[topicId] ?? haloColorClassMap[colorVariant];
}
