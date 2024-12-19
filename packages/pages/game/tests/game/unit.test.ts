import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  // Navigate to your test page
  await page.goto('game');
});

test.describe("@feedmolly/game unit tests", () => {
  test('available in DOM', async ({ page }) => {
    // Interact with your component and make assertions
    const component = await page.$('feedmolly-game');
    expect(component).not.toBeNull();
  });
});
