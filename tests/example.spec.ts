import { test, expect } from '@playwright/test';

test.skip("Проверка заголовка", async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test.skip("Отображается ссылка Get started", async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

test("Мой первый тест", async ({page}) => {
  console.log("Hello, Inzhenerka.Tech!")
})
