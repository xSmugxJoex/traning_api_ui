import { test, expect } from '@playwright/test';
import { Color, s } from '../../helpers/selectors/selectors';
import { UrlGenerator, UrlUI } from '../../helpers/selectors/url';

/** URL генератор для создания URL на основе базового адреса и параметров  */
const urlGen = new UrlGenerator('http://uitestingplayground.com');
/** URL для клика по кнопке, сгенерированный на основе элемента интерфейса */
const ClassAttrUrl = urlGen.generateUrl(UrlUI.UrlExt.ClassAttr);

/**
 * Получения все значеня из s.ClassAttr.
 * 
 * @param enumObj - Объект перечисления.
 * @returns Массив значений перечисления.
 */
function getEnumValues(enumObj: any): string[] {
    return Object.values(enumObj);
  }

test("Несколько кнопок и модальное окно", async ({page}) => {
  // Переход на страницу с URL, сгенерированным ранее
  await page.goto(ClassAttrUrl);

  /** Получаем значение всех кнопок и добавляем их в массив */
  const btns = getEnumValues(s.ClassAttr.Btn);

  for (const btn of btns) {
  // Проверка видимости кнопки
  await expect(page.locator(btn)).toBeVisible();
  }

  // Выполнение клика по кнопке
  await expect(page.locator(s.ClassAttr.Btn.Primary)).toHaveCSS("background-color", Color.Btn.Primary);
  await page.locator(s.ClassAttr.Btn.Primary).click();
  // await page.locator(s.ClassAttr.Btn.Primary).click();
  await expect(page.locator(s.ClassAttr.Btn.Primary)).toHaveCSS("border-color", Color.BtnBorderColor.BorderPrimary);


  await expect(page.locator(s.ClassAttr.Btn.Warning)).toHaveCSS("background-color", Color.Btn.Warning);
  await page.locator(s.ClassAttr.Btn.Warning).click();
  await expect(page.locator(s.ClassAttr.Btn.Warning)).toHaveCSS("border-color", Color.BtnBorderColor.BorderWarning);

  await expect(page.locator(s.ClassAttr.Btn.Success)).toHaveCSS("background-color", Color.Btn.Success);
  await page.locator(s.ClassAttr.Btn.Success).click();
  await expect(page.locator(s.ClassAttr.Btn.Success)).toHaveCSS("border-color", Color.BtnBorderColor.BorderSuccess);
})