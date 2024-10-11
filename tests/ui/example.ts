import { test, expect } from '@playwright/test';

test("Мой первый тест", async ({page}) => {
  await page.goto("https://demoqa.com/");
  
})
