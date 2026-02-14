import { test, expect } from '@playwright/test';

/**
 * Smoke tests - verify all pages load without errors
 * These tests ensure basic functionality after migration
 */

test.describe('Smoke Tests - All Pages Load', () => {
  test('homepage loads successfully', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/./); // Has some title

    // Check for no console errors
    const errors: string[] = [];
    page.on('console', (msg) => {
      if (msg.type() === 'error') {
        errors.push(msg.text());
      }
    });

    // Wait for page to be fully loaded
    await page.waitForLoadState('networkidle');
    expect(errors).toHaveLength(0);
  });

  test('about us page loads', async ({ page }) => {
    await page.goto('/about-us');
    await expect(page).toHaveURL(/about-us/);
    await page.waitForLoadState('networkidle');
  });

  test('contact page loads', async ({ page }) => {
    await page.goto('/contact');
    await expect(page).toHaveURL(/contact/);
    await page.waitForLoadState('networkidle');
  });

  test('events page loads', async ({ page }) => {
    await page.goto('/events');
    await expect(page).toHaveURL(/events/);
    await page.waitForLoadState('networkidle');
  });

  test('for families page loads', async ({ page }) => {
    await page.goto('/for-families');
    await expect(page).toHaveURL(/for-families/);
    await page.waitForLoadState('networkidle');
  });

  test('how to help page loads', async ({ page }) => {
    await page.goto('/how-to-help');
    await expect(page).toHaveURL(/how-to-help/);
    await page.waitForLoadState('networkidle');
  });

  test('support page loads', async ({ page }) => {
    await page.goto('/support');
    await expect(page).toHaveURL(/support/);
    await page.waitForLoadState('networkidle');
  });

  test('privacy policy page loads', async ({ page }) => {
    await page.goto('/privacy-policy');
    await expect(page).toHaveURL(/privacy-policy/);
    await page.waitForLoadState('networkidle');
  });
});
