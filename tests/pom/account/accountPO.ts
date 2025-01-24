import { Page, expect, Locator } from "@playwright/test";
import accountPE from "./accountPE";

export default class accountPO {
    private pageElements: accountPE;

    constructor(public page: Page) {
        this.pageElements = new accountPE(page);
    }

    async depositarValor(ammount: number) {
        console.log(`Iniciando o deposito de: ${ammount}`);
        await this.pageElements.depositTab.click();
        await this.pageElements.ammountValue.fill(String(ammount));
        await this.pageElements.actionBtn.click();
        await expect(this.pageElements.message).toHaveText(this.pageElements.messageDeposit);
        console.log(`Finalizando o deposito de: ${ammount}`);
    }

    async sacarValor(ammount: number) {
        console.log(`Iniciando tentativa de saque de: ${ammount}`);
        await this.pageElements.withdrawTab.click();
        await this.pageElements.ammountValue.fill(String(ammount));
        await this.pageElements.actionBtn.click();
        await expect(this.pageElements.message).toHaveText(this.pageElements.messageWithdraw);
        console.log(`Saque não realizado: ${this.pageElements.messageWithdraw}`);
    }
}