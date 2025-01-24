import { Page, Locator } from "@playwright/test";

export default class loginPE {
    // Tela principal
    public homeButton: Locator
    public customerLoginButton: Locator
    public customerLogin: Locator
    public managerLoginButton: Locator
    public logoutButton: Locator


    constructor(page: Page) {
        // Tela principal
        this.homeButton          = page.locator('button[ng-click=\'home()\']');
        this.customerLoginButton = page.locator('button[ng-click=\'customer()\']');
        this.customerLogin       = page.locator('button[ng-show^=\'custId\']');
        this.managerLoginButton  = page.locator('button[ng-click=\'manager()\']');
        this.logoutButton        = page.locator('button[ng-show=\'logout\']');
    }
}