import { test, expect } from "@playwright/test";
import { baseURL } from "../../../tsconfig";
import {accountPO, loginPO} from "../../pom/pom";
import { addAlureLabels } from '../../utils/allureReport';


const moduleName = '02 - Account';
const moduleDescription = 'Testes de Account';

test.describe.serial(moduleName, () => {

    test.beforeEach(async ({ page }) => {
        await page.goto(baseURL);
        const loginPage = new loginPO(page);
        await loginPage.realizarLogin("Harry Potter");
    });

    test('Deve realizar deposito com sucesso', async ({ page }) => {
        addAlureLabels(moduleName, moduleDescription, 'normal');

        const accountPage = new accountPO(page);
        await accountPage.depositarValor(100);
    });

    test('Nao Deve realizar saque sem saldo', async ({ page }) => {
        addAlureLabels(moduleName, moduleDescription, 'normal');

        const accountPage = new accountPO(page);
        await accountPage.sacarValor(100);
    });
});