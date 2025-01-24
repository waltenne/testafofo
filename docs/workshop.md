# Workshop: Automação de Testes E2E com Playwright e Page Object Model

## Objetivo do Workshop
Ensinar os conceitos básicos e intermediários de automação de testes E2E utilizando [Playwright](https://playwright.dev/) e o padrão de design **Page Object Model (POM)**.

## Público-Alvo
- Iniciantes em automação de testes.
- Desenvolvedores e testadores que desejam aprimorar seus conhecimentos em Playwright e POM.

## Requisitos Prévios
- Noções básicas de JavaScript/TypeScript.
- Familiaridade com linha de comando.
- Node.js e npm instalados na máquina.

## Agenda do Workshop

### 1. Introdução
- [O que é automação de testes E2E?](https://www.youtube.com/watch?v=x_z2QgbrpQI)
- Benefícios e desafios.
- [Visão geral do Playwright.](https://www.youtube.com/shorts/hoh83eLbWXQ)
- [Conceito de Page Object Model (POM) e sua importância.](https://www.youtube.com/watch?v=WhZHZ_RYzxw)

### 2. Configuração do Ambiente
1. Instalar Node.js e npm.
    - [Download Node.js](https://nodejs.org/)
2. Clonar o repositório e instalar dependências:
   ```bash
   git clone <URL_DO_REPOSITORIO>
   cd testafofo
   npm install
   ```

### 3. Estrutura do Projeto
Explicação detalhada da estrutura de pastas:

```
testafofo/
├── node_modules/             - Modulos de dependências
├── tests/
│   ├── e2e/                  - Diretório de testes E2E
│   │   ├── 01-login/         - Modulo Login
│   │   │   └── *.spec.ts
│   │   └── 02-account/       - Modulo Account
│   │       └── *.spec.ts
│   ├── pom/                  - Diretório de POM (Page Object Model)
│   │   ├── login/            - Modulo Login
│   │   │   └── loginPE.ts
│   │   │   └── loginPO.ts
│   │   ├── account/          - Modulo Account
│   │   │   └── accountPE.ts
│   │   │   └── accountPO.ts
│   │   └── pom.ts            - Arquivo principal de POM
│   └── utils/                - Funções auxiliares
│       └── allureReport.ts   
├── README.md
├── tsconfig.json              - Configuração TypeScript
├── playwright.config.ts       - Configuração do Playwright
└── package.json               - Configuração do NPM
```

### 4. Criando um Teste Simples
1. Abrir o arquivo `tests/e2e/01-login/login.spec.ts`.
2. Explicar a sintaxe de um teste em Playwright.
3. Criar um teste simples que valida os componentes da tela
4. Executar o teste:
   ```bash
   npm run login
   ```

### 5. Implementando Page Object Model (POM)
1. Criar uma classe em `tests/pom/login/loginPO.ts`:
   ```typescript
   export class LoginPO {
       constructor(private page: Page) {}

       async navigateToLogin() {
           await this.page.goto('https://exemplo.com/login');
       }

       async login(username: string, password: string) {
           await this.page.fill('#username', username);
           await this.page.fill('#password', password);
           await this.page.click('#login-button');
       }
   }
   ```
2. Atualizar o teste em `login.spec.ts` para usar a classe `LoginPO`.

### 6. Gerando Relatórios com Allure
1. Executar os testes com Allure:
   ```bash
   npm run all
   ```
2. Gerar e abrir o relatório:
   ```bash
   npx allure serve
   ```

### 7. Sessão de Perguntas e Respostas
- Dúvidas sobre o Playwright e POM.
- Discutir melhores práticas.

### 8. Atividade Prática
- Os participantes implementam testes para o módulo `02-account` utilizando POM.
- Revisão e discussão das soluções.

### 9. Encerramento
- Resumo do workshop.
- Indicação de próximos passos: integração com CI/CD, execução em docker.

---

## Recursos Adicionais
- [Documentação Playwright](https://playwright.dev/docs/intro)
- [Documentação Allure](https://docs.qameta.io/allure/)
- [Exemplo de POM no Playwright](https://playwright.dev/docs/pom)

## Conclusão
Esse workshop fornece uma base para que você possa criar e estruturar testes E2E robustos, utilizando boas práticas com Playwright e POM. Aproveite o conhecimento adquirido e pratique implementando mais testes!

