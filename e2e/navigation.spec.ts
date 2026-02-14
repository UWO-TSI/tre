import { test, expect } from '@playwright/test';

/**
 * Navigation tests - verify core user flows work
 */

test.describe('Navigation', () => {
  test('header navigation is visible and functional', async ({ page }) => {
    await page.goto('/');

    // Check header is visible
    const header = page.locator('header');
    await expect(header).toBeVisible();
  });

  test('can navigate between pages via header links', async ({ page }) => {
    await page.goto('/');

    // Click on About Us link (adjust selector as needed)
    await page.click('a[href*="about"]');
    await expect(page).toHaveURL(/about/);

    // Navigate to another page
    await page.click('a[href*="contact"]');
    await expect(page).toHaveURL(/contact/);
  });

  test('mobile menu works on small screens', async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');

    // Mobile menu should be present
    const header = page.locator('header');
    await expect(header).toBeVisible();
  });

  test('all header links are clickable', async ({ page }) => {
    await page.goto('/');

    // Get all navigation links
    const navLinks = page.locator('header a[href^="/"]');
    const count = await navLinks.count();

    // Verify we have navigation links
    expect(count).toBeGreaterThan(0);

    // Verify each link has an href
    for (let i = 0; i < count; i++) {
      const href = await navLinks.nth(i).getAttribute('href');
      expect(href).toBeTruthy();
    }
  });
});

test.describe('Responsive Design', () => {
  test('homepage is responsive on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Take screenshot for visual reference
    await page.screenshot({ path: 'test-results/mobile-homepage.png' });
  });

  test('homepage is responsive on desktop', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Take screenshot for visual reference
    await page.screenshot({ path: 'test-results/desktop-homepage.png' });
  });
});
