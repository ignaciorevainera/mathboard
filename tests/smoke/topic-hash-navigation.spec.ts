import { expect, test, type Page } from "@playwright/test";

const desktopTocNavSelector = 'aside nav[aria-label="En esta pagina"]';

async function getFirstTocHash(page: Page): Promise<string> {
  const tocNav = page.locator(desktopTocNavSelector);
  await expect(tocNav).toBeVisible();

  const firstTocLink = tocNav.locator('a[href^="#"]').first();
  await expect(firstTocLink).toBeVisible();

  const href = await firstTocLink.getAttribute("href");
  if (!href) {
    throw new Error("Expected first TOC link to have a hash href.");
  }

  return href;
}

async function expectTargetInViewport(
  page: Page,
  hash: string,
): Promise<void> {
  const targetId = decodeURIComponent(hash.slice(1));
  const targetHeading = page.locator(`[id="${targetId}"]`);

  await expect(targetHeading).toBeVisible();

  const isInViewport = await targetHeading.evaluate((element) => {
    const rect = element.getBoundingClientRect();
    return rect.top >= 0 && rect.top <= window.innerHeight;
  });

  expect(isInViewport).toBe(true);
}

async function expectDecodedHash(page: Page, hash: string): Promise<void> {
  await expect
    .poll(async () => {
      return page.evaluate(() => decodeURIComponent(window.location.hash));
    })
    .toBe(hash);
}

test.describe("Topic hash navigation", () => {
  test("updates URL hash and scrolls when clicking TOC entry", async ({ page }) => {
    await page.setViewportSize({ width: 1366, height: 900 });
    await page.goto("/topic/factoring-algebraic-expressions");

    const hash = await getFirstTocHash(page);

    await page.locator(`${desktopTocNavSelector} a[href="${hash}"]`).first().click();

    await expectDecodedHash(page, hash);
    await expectTargetInViewport(page, hash);
  });

  test("restores target scroll when opening page with hash", async ({ page }) => {
    await page.setViewportSize({ width: 1366, height: 900 });
    await page.goto("/topic/factoring-algebraic-expressions");

    const hash = await getFirstTocHash(page);

    await page.goto(`/topic/factoring-algebraic-expressions${hash}`);

    await expectDecodedHash(page, hash);
    await expectTargetInViewport(page, hash);
  });
});
