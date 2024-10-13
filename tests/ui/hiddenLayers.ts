import { test, expect } from '@playwright/test';
import { Color, s } from '../../helpers/selectors/selectors';
import { UrlGenerator, UrlUI } from '../../helpers/selectors/url';

/** URL генератор для создания URL на основе базового адреса и параметров  */
const urlGen = new UrlGenerator("http://uitestingplayground.com");
/** URL для клика по кнопке, сгенерированный на основе элемента интерфейса */
const HiddenLayersUrl = urlGen.generateUrl(UrlUI.UrlExt.HiddenLayers);

test("Кнопка меняет цвет при нажатии", async ({page}) => {
    // Переход на страницу с URL, сгенерированным ранее
    await page.goto(HiddenLayersUrl);

    await expect(page.locator(s.Btn.Success)).toBeVisible();

    await expect(page.locator(s.Btn.Success)).toHaveCSS("background-color", Color.Btn.Success);

    await page.locator(s.Btn.Success).click();

    await expect(page.locator(s.Btn.Primary)).toBeVisible();

    await expect(page.locator(s.Btn.Primary)).toHaveCSS("background-color", "rgb(0, 105, 217)");

    await page.locator(s.Btn.Primary).click();

    await expect(page.locator(s.Btn.Primary)).toHaveCSS("background-color", "rgb(0, 105, 217)");
})