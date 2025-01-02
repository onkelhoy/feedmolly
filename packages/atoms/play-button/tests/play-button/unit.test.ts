import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  // Navigate to your test page
  await page.goto('play-button');
});

test.describe("@feedmolly/play-button unit tests", () => {
  test('available in DOM', async ({ page }) => {
    // Interact with your component and make assertions
    const component = await page.$('play-button');
    expect(component).not.toBeNull();
  });
});
