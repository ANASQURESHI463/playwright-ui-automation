import { BasePage } from './BasePage';

export class DashboardPage extends BasePage {
  constructor(page) {
    super(page);

    // Locators
    this.username = page.getByRole('textbox', { name: 'Username' });
    this.password = page.getByRole('textbox', { name: 'Password' });
    this.loginBtn = page.getByRole('button', { name: 'Login' });
    this.logoutBtn = page.getByRole('button', { name: 'Logout' });
    this.messageTab = page.getByRole('link', { name: 'Messages' });
  }

  // Navigate to Dashboard Login Page
  async openDashboard() {
    await this.goto('https://automationintesting.online/admin');
  }

  // Enter Username
  async enterUsername(username) {
    await this.fill(this.username, username);
  }

  // Enter Password
  async enterPassword(password) {
    await this.fill(this.password, password);
  }

  // Click Login button
  async clickLogin() {
    await this.click(this.loginBtn);
  }

  // Login to Dashboard
  async login(username, password) {
    await this.enterUsername(username);
    await this.enterPassword(password);
    await this.clickLogin();
  }

  // Get Page Title
  async getPageTitle() {
    return await this.page.title();
  }

  // Hover over Logout button
  async hoverOnLogout() {
    await this.hover(this.logoutBtn);
  }
 
// Click Mesage Tab 
  async clickMessageTab() {
  await this.click(this.messageTab);
}
}