import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  // Navigate to your test page
  await page.goto('play-button');
});

test.describe("@feedmolly/play-button visual regression", () => {
  test('default snapshot', async ({ page }) => {
    await expect(page).toHaveScreenshot();
  });
})
