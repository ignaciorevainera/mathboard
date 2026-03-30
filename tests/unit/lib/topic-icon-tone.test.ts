import { describe, expect, it } from "vitest";
import {
  getTopicHaloToneClasses,
  getTopicIconToneClasses,
} from "../../../src/lib/topic-icon-tone";

describe("topic icon tone helpers", () => {
  it("returns mapped tone classes for known topic ids", () => {
    expect(getTopicIconToneClasses("conic-sections")).toBe("bg-success text-success-content");
    expect(getTopicHaloToneClasses("conic-sections")).toBe("bg-success/20");
  });

  it("falls back to variant classes for unknown topic ids", () => {
    expect(getTopicIconToneClasses("custom-topic", "accent")).toBe(
      "bg-accent text-accent-content",
    );
    expect(getTopicHaloToneClasses("custom-topic", "neutral")).toBe("bg-neutral/20");
  });
});
