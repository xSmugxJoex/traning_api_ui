import { test, expect } from '@playwright/test';
import { Color, s } from '../../helpers/selectors/selectors';
import { UrlGenerator, UrlUI } from '../../helpers/selectors/url';

/** URL генератор для создания URL на основе базового адреса и параметров  */
const urlGen = new UrlGenerator('http://uitestingplayground.com');
/** URL для клика по кнопке, сгенерированный на основе элемента интерфейса */
const DinamicIDUrl = urlGen.generateUrl(UrlUI.UrlExt.DinamicID);


test("Клик по кнопке с динамическим ID", async ({page}) => {
  // Переход на страницу с URL, сгенерированным ранее
  await page.goto(DinamicIDUrl);

  // Проверка видимости кнопки
  await expect(page.locator(s.DinamicID.Btn)).toBeVisible();

  // Проверка цвета фона кнопки
  await expect(page.locator(s.DinamicID.Btn)).toHaveCSS("background-color", Color.Btn.Default);

  // Выполнение клика по кнопке
  await page.locator(s.DinamicID.Btn).click();
})