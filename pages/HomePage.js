import { BasePage } from './BasePage';

export class HomePage extends BasePage {
    constructor(page) {
        super(page);

        // LOCATORS 
        this.bookNowBtn = page.getByRole('link', { name: 'Book Now', exact: true });
        this.contactSection = page.getByText('Send Us a Message');
    }

    // ACTIONS
    async openHome() {
        await this.goto('https://automationintesting.online/');
    }
    async getPageTitle() {
        return await this.page.title();

    }
    async login(username, password) {
        await this.enterUsername(username);
        await this.enterPassword(password);
        await this.clickLogin();
    }

}
