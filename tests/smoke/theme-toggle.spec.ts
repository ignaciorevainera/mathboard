import { expect, test } from "@playwright/test";

test("theme toggle keeps expected contract on home", async ({ page }) => {
  await page.goto("/");

  const toggle = page.locator(
    'button[data-toggle-theme="light,night"][data-key="mathboard-theme"]',
  );

  await expect(toggle).toHaveCount(1);

  await expect(
    toggle.locator('[data-theme-icon-name="hugeicons:moon-02"]'),
  ).toHaveCount(1);

  await expect(
    toggle.locator('[data-theme-icon-name="hugeicons:sun-03"]'),
  ).toHaveCount(1);
});
