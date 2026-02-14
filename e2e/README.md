# Playwright Test Suite

## Quick Start

```bash
# Run all tests (headless)
npm test

# Run tests with UI mode (recommended for development)
npm run test:ui

# Run only smoke tests (fast, checks all pages load)
npm run test:smoke

# Run tests in headed mode (see browser)
npm run test:headed

# Debug mode (opens Playwright Inspector)
npm run test:debug
```

## Test Structure

### `smoke.spec.ts`
Fast tests that verify all pages load without errors. Run these first after deployment.

### `navigation.spec.ts`
Tests for header navigation, mobile menu, and responsive design.

### `forms.spec.ts`
Form interaction tests (mostly skipped - customize based on your forms).

## What to Update

1. **Forms tests** - Currently skipped. Update selectors to match your actual form fields
2. **Navigation tests** - Verify the link selectors match your header structure
3. **Add dynamic route tests** - Test `/our-families-stories/[slug]` and `/events/[slug]` with real slugs
4. **Base URL** - Update `playwright.config.ts` to uncomment `baseURL` if you want to use relative paths in tests
5. **Web Server** - Uncomment `webServer` config if you want Playwright to auto-start your dev server

## Testing Workflow

**Before deploying:**
```bash
npm run test:smoke  # Quick verification (2-3 minutes)
```

**Full test run:**
```bash
npm test  # Runs across all browsers
```

**Visual debugging:**
```bash
npm run test:ui  # Interactive UI, great for writing new tests
```

## Next Steps

- [ ] Customize form tests in `forms.spec.ts`
- [ ] Add tests for dynamic routes with real content
- [ ] Add visual regression tests if needed
- [ ] Set up CI/CD to run tests automatically
- [ ] Uncomment mobile browser testing in `playwright.config.ts` if needed

## CI Integration

The config is CI-ready. On CI:
- Tests run with 2 retries (0 retries locally)
- Uses single worker for stability
- Configured for continuous integration environments

## Browsers Tested

- ✅ Desktop: Chromium, Firefox, Safari (WebKit)

Mobile browser testing is available but currently disabled. To enable:
1. Uncomment the mobile projects in `playwright.config.ts`

To test only one browser:
```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```
