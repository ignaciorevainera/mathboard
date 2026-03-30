import { expect, test } from "@playwright/test";

test.describe("Main navigation", () => {
  test("navigates from home to a topic and back", async ({ page }) => {
    await page.goto("/");

    const firstTopicLink = page.locator('a[href^="/topic/"]').first();
    await expect(firstTopicLink).toBeVisible();

    await firstTopicLink.click();
    await expect(page).toHaveURL(/\/topic\//);

    await page.locator('a[aria-label="Ir al inicio"]').first().click();
    await expect(page).toHaveURL(/\/$/);
  });

  test("shows key global controls on mobile viewport", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/");

    await expect(page.locator('form[role="search"]')).toBeVisible();
    await expect(page.locator('button[aria-label="Cambiar entre tema claro y oscuro"]')).toBeVisible();
  });
});
