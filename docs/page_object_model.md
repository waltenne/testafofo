# Page Object Model (POM)
O Page Object Model (POM) é um padrão de design que ajuda a organizar e manter os testes de automação de forma eficiente. Ele funciona como uma "ponte" entre os testes e a aplicação, representando cada página ou funcionalidade da aplicação em uma classe separada.

# Por que usar o POM?

1. Reutilização de Código: Métodos comuns, como fazer login ou preencher formulários, são escritos uma única vez e reutilizados em vários testes.

2. Facilidade de Manutenção: Se a interface do usuário mudar, você só precisa atualizar o código em um lugar (no objeto da página), sem precisar alterar todos os testes.

3. Legibilidade Melhorada: Os testes ficam mais claros e focados no "o que testar", enquanto os detalhes técnicos (como seletores e interações) ficam escondidos nos objetos de página.

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

1. Organização: Código limpo e bem estruturado.
2. Reutilização: Menos duplicação de código.
3. Manutenção Simplificada: Alterações na interface afetam apenas os objetos de página, não os testes.
4. Testes Mais Legíveis: Foco no comportamento, não nos detalhes técnicos.

