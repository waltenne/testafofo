import { allure } from 'allure-playwright';
import { baseURL } from "../../tsconfig";

export function addAlureLabels(moduleName: string, moduleDescription: string, severity: 'minor' | 'normal' | 'critical' | 'blocker') {
    allure.label('module', moduleName);
    allure.label('description', moduleDescription);
    allure.label('projectOwner', baseURL);
    allure.label('severity', severity);
}