import { test, expect } from '@playwright/test';
import { Color, s } from '../../helpers/selectors/selectors';
import { UrlGenerator, UrlUI } from '../../helpers/selectors/url';

/** URL генератор для создания URL на основе базового адреса и параметров  */
const urlGen = new UrlGenerator("http://uitestingplayground.com");
/** URL для клика по кнопке, сгенерированный на основе элемента интерфейса */
const ClickUrl = urlGen.generateUrl(UrlUI.UrlExt.Click);

test("Одиночный клик по кнопке ", async ({page}) => {
  // Переход на страницу с URL, сгенерированным ранее
  await page.goto(ClickUrl);

  // Проверка видимости кнопки
  await expect(page.locator(s.Btn.BtnClick)).toBeVisible();

  // Проверка цвета фона кнопки
  await expect(page.locator(s.Btn.BtnClick)).toHaveCSS("background-color", Color.Btn.Default);

  // Выполнение клика по кнопке
  await page.locator(s.Btn.BtnClick).click();

  // Проверка наличия класса после клика
  await expect(page.locator(s.Btn.BtnClick)).toHaveClass(".btn-success");

  // Проверка цвета фона кнопки
  await expect(page.locator(s.Btn.BtnClick)).toHaveCSS("background-color", Color.Btn.Selected)
})
