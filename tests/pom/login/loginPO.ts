import { Page, expect, Locator } from "@playwright/test";
import loginPE from "./loginPE";

export default class loginPO {
    private pageElements: loginPE;

    constructor(public page: Page) {
        this.pageElements = new loginPE(page);
    }

    async realizarLogin(nome: string): Promise<boolean> {
        console.log(`Iniciando o login com o nome: "${nome}"`);

        // Clique no botão de login do cliente
        await this.pageElements.customerLoginButton.click();

        const dropdownSelector = 'select#userSelect';

        // Verifica se o dropdown está presente e visível
        const dropdownVisible = await this.page.waitForSelector(dropdownSelector, { state: 'visible', timeout: 5000 });
        if (!dropdownVisible) {
            console.error(`Dropdown "${dropdownSelector}" não está visível na página.`);
            return false;
        }

        // Verifica se a opção com o nome existe
        const optionExists = await this.page.$eval(dropdownSelector, (select, nome) => {
            const options = Array.from((select as HTMLSelectElement).options);
            return options.some(option => option.textContent?.trim() === nome);
        }, nome);

        if (!optionExists) {
            console.error(`Opção "${nome}" não encontrada no dropdown.`);
            return false;
        }

        // Selecionar a opção pelo texto
        await this.page.selectOption(dropdownSelector, { label: nome });
        await this.pageElements.customerLogin.click();

        console.log(`Finalizando o login com o nome: "${nome}"`);
    }

    async realizarLogout() {
        console.log('Iniciando o logout');
        await this.pageElements.homeButton.click();
        console.log('Finalizando o logout');
    }
}