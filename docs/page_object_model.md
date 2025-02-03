# Page Object Model (POM)
O Page Object Model, ou simplesmente POM, é um padrão de design utilizado para estruturar e organizar testes automatizados. Ele funciona como uma ponte entre os testes e a aplicação, representando cada página ou funcionalidade como uma classe separada.

# Por que usar o Page Object Model?

Primeiro, a reutilização de código. Métodos como login e preenchimento de formulários são escritos uma única vez e podem ser reutilizados em vários testes.

Segundo, a facilidade de manutenção. Se a interface da aplicação mudar, você só precisa atualizar a classe correspondente, sem a necessidade de modificar todos os testes.

Terceiro, a legibilidade. Os testes ficam mais claros, focando no que realmente precisa ser validado, enquanto os detalhes técnicos são encapsulados nos objetos de página.

# Como funciona?

Cada página ou funcionalidade da aplicação é representada por uma classe no diretório `tests/pom/`. Por exemplo, para a página de login, temos:

1. loginPE.ts: Define os elementos da página (como campos de texto, botões, etc.) usando seletores.
2. loginPO.ts: Contém os métodos que interagem com esses elementos, como preencher campos, clicar em botões ou validar resultados.

# Exemplo Prático

Imagine a página de login de um sistema. No POM, ela seria organizada assim:

```typescript
// loginPE.ts (Elementos da página)
export class LoginPageElements {
  static usernameInput = '#username';
  static passwordInput = '#password';
  static loginButton = '#login-button';
}

// loginPO.ts (Métodos de interação)
import { Page } from '@playwright/test';
import { LoginPageElements } from './loginPE';

export class LoginPage {
  constructor(private page: Page) {}

  async navigate() {
    await this.page.goto('/login');
  }

  async login(username: string, password: string) {
    await this.page.fill(LoginPageElements.usernameInput, username);
    await this.page.fill(LoginPageElements.passwordInput, password);
    await this.page.click(LoginPageElements.loginButton);
  }
}
```
Por ja estar organizados, os testes ficam mais claros e focados no "o que testar", enquanto os detalhes técnicos (como seletores e interações) ficam escondidos nos objetos de página.

Por exemplo...

```typescript
test('Login com credenciais válidas', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate();
    await loginPage.login('usuario', 'senha');
    await expect(page).toHaveURL('/dashboard');
});
```

# Benefícios do uso do Page Object Model

* Organização: Mantém o código limpo e bem estruturado.
* Reutilização: Evita a duplicação de código.
* Facilidade de manutenção: Mudanças na interface afetam apenas os objetos de página, sem impactar os testes diretamente.
* Testes mais legíveis: O foco fica no comportamento esperado, não nos detalhes técnicos.

Seguindo esse padrão, os testes se tornam mais eficientes, fáceis de manter e menos suscetíveis a falhas causadas por mudanças na interface da aplicação. 🚀