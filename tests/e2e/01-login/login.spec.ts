import { test, expect } from "@playwright/test";
import { baseURL } from "../../../tsconfig";
import { loginPO } from "../../pom/pom";
import { addAlureLabels } from '../../utils/allureReport';


const moduleName = '01 - Login';
const moduleDescription = 'Testes de login';

test.describe.parallel(moduleName, () => {

    test.beforeEach(async ({ page }) => {
        await page.goto(baseURL);
    });

    test('Deve realizar login com sucesso', async ({ page }) => {
        addAlureLabels(moduleName, moduleDescription, 'normal');

        const loginPage = new loginPO(page);
        await loginPage.realizarLogin("Harry Potter");
    });
});