import { Page, Locator } from "@playwright/test";

export default class accountPE {
    public transactionsTab: Locator
    public depositTab: Locator
    public withdrawTab: Locator

    public actionBtn: Locator
    public ammountValue: Locator
    public message: Locator
    public messageDeposit: string
    public messageWithdraw: string

    constructor(page: Page) {
        this.transactionsTab = page.locator('button[ng-click=\'transactions()\']');
        this.depositTab      = page.locator('button[ng-click=\'deposit()\']');
        this.withdrawTab     = page.locator('button[ng-class=\'btnClass3\']');
        this.actionBtn       = page.locator('button[class$=\'btn-default\']');
        this.ammountValue    = page.locator('input[ng-model=\'amount\']');
        this.message         = page.locator('span[ng-show=\'message\']');
        this.messageDeposit  = 'Deposit Successful';
        this.messageWithdraw = 'Transaction Failed. You can not withdraw amount more than the balance.';
    }
}