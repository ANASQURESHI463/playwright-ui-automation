import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

test.describe('Home Page Tests', () => {

    test('Verify the title of the HomePage', async ({ page }) => {

        const home = new HomePage(page);
        await home.openHome();
        const title = await home.getPageTitle();
        console.log('Page Title:', title);
        await expect(page).toHaveTitle(/Restful-booker-platform demo/);
    });

    test('Verify Book Now button is visible', async ({ page }) => {
        const home = new HomePage(page);
        await home.openHome();
        await expect(home.bookNowBtn).toBeVisible();
    });

    test('Verify contact section is visible', async ({ page }) => {
        const home = new HomePage(page);
        await home.openHome();
        await expect(home.contactSection).toBeVisible();
    });

});