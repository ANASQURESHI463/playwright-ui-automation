import { test, expect, chromium } from '@playwright/test';
import { DashboardPage } from '../pages/DashboardPage';

let browser;
let context;
let page;
let dashboard;

test.beforeAll(async () => {
  browser = await chromium.launch();
  context = await browser.newContext();
  page = await context.newPage();

  dashboard = new DashboardPage(page);

  await dashboard.openDashboard();
  await dashboard.login('admin', 'password');
});

test.afterAll(async () => {
  await browser.close();
});

 test('Verify URL after login page', async ({ page }) => {
    const dashboard = new DashboardPage(page);

    await dashboard.openDashboard();

    await expect(page).toHaveURL(/admin/);
  });

test('Logout Button should be visible', async () => {
  await expect(dashboard.logoutBtn).toBeVisible();
});

test('Verify Messages tab opens Inbox', async () => {
  await dashboard.clickMessageTab();
   await expect(page).toHaveURL('/admin/message');

});