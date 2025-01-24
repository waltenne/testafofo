import { Page, Locator } from "@playwright/test";

export default class managerPE {
    // Sub Tela Manager
    public addCustomerBtn: Locator
    public openAccountBtn: Locator
    public customerBtn: Locator

    constructor(page: Page) {
        // Sub Tela Manager
        this.addCustomerBtn      = page.locator('button[ng-class=\'btnClass1\']');
        this.openAccountBtn      = page.locator('button[ng-class=\'btnClass2\']');
        this.customerBtn         = page.locator('button[ng-class=\'btnClass3\']');
    }
}