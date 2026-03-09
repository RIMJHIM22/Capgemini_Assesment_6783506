import { test, expect } from "@playwright/test";

test('flipkart', async ({ page }) => {

  await page.goto('https://www.flipkart.com');

  await page.waitForTimeout(3000);

  const closeBtn = page.locator('//button[contains(text(),"✕")]');
  if (await closeBtn.isVisible()) {
    await closeBtn.click();
  }

  await page.locator('//input[@name="q" and not(@readonly)]').fill('shoes');
  await page.locator('//input[@name="q" and not(@readonly)]').press('Enter');

  await page.waitForTimeout(4000);

  const womenItems = page.locator('//a[contains(translate(text(),"WOMEN","women"),"women")]');

  await expect(womenItems.first()).toBeVisible();

  const count = await womenItems.count();
  expect(count).toBeGreaterThan(0);

  const text = await womenItems.first().textContent();
  expect(text?.toLowerCase()).toContain('women');

  //await expect(page).toHaveScreenshot('flipkart-women-shoes.png');

});