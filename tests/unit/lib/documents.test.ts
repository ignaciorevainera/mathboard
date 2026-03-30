import { describe, expect, it } from "vitest";
import { getDocuments } from "../../../src/lib/documents";

describe("getDocuments", () => {
  it("returns curated downloadable resources", () => {
    const docs = getDocuments();

    expect(docs.length).toBeGreaterThan(0);
    expect(docs.map((doc) => doc.id)).toContain("factoring-methods");
    expect(docs.map((doc) => doc.id)).toContain("limits-guide");
    expect(docs.every((doc) => doc.filePath.startsWith("/documents/"))).toBe(true);
  });
});
