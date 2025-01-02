import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  // Navigate to your test page
  await page.goto('heart');
});

test.describe("@feedmolly/heart unit tests", () => {
  test('available in DOM', async ({ page }) => {
    // Interact with your component and make assertions
    const component = await page.$('feedmolly-heart');
    expect(component).not.toBeNull();
  });
});
