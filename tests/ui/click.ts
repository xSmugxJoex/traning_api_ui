import { test, expect } from '@playwright/test';
import { s } from '../../helpers/selectors/selectors';
import { UrlGenerator, UrlUI } from '../../helpers/selectors/url';

/** URL генератор для создания URL на основе базового адреса и параметров  */
const urlGen = new UrlGenerator('http://uitestingplayground.com');
/** URL для клика по кнопке, сгенерированный на основе элемента интерфейса */
const ClickUrl = urlGen.generateUrl(UrlUI.UrlExt.Click);


test("Одиночный клик по кнопке ", async ({page}) => {
  // Переход на страницу с URL, сгенерированным ранее
  await page.goto(ClickUrl);

  // Проверка видимости кнопки
  await expect(page.locator(s.Click.btn)).toBeVisible();

  // Выполнение клика по кнопке
  await page.locator(s.Click.btn).click();

  // Проверка наличия класса после клика
  await expect(page.locator(s.Click.btn)).toHaveClass("btn btn-success");

  // Проверка цвета фона кнопки
  await expect(page.locator(s.Click.btn)).toHaveCSS("background-color", "rgb(33, 136, 56)")
})
