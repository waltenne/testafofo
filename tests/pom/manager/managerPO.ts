import { Page, expect, Locator } from "@playwright/test";
import managerPE from "./managerPE";

export default class homePO {
    private pageElements: managerPE;

    constructor(public page: Page) {
        this.pageElements = new managerPE(page);
    }

}