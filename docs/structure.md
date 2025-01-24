# Estrutura do Projeto

Aqui está uma visão geral da estrutura do projeto:

```bash
testafofo/
├── allure-results/           - Diretório dos relatórios Allure
├── docs/                     - Diretório da documentação
├── node_modules/             - Módulos de dependências
├── tests/
│   ├── e2e/                  - Diretório de testes E2E, configurado no playwright.config.ts
│   │     ├── 01-login/         - Módulo Login
│   │     │   └── *.spec.ts
│   │     └── 02-account/       - Módulo Account
│   │        └── *.spec.ts
│   ├── pom/                  - Diretório de POM (Page Object Model)        
│   │   ├── login/             - Módulo Login
│   │   │   └── loginPE.ts
│   │   │   └── loginPO.ts
│   │   ├── account/           - Módulo Account
│   │   │   └── accountPE.ts
│   │   │   └── accountPO.ts
│   │   └── pom.ts             - Arquivo principal de POM para importar e expor os módulos
│   └── utils/                 - Diretório de utilitários, funções criadas para apoiar no projeto
│       └── allureReport.ts     
├── readme.md                  - Arquivo principal da documentação
├── tsconfig.json              - Arquivo usado para exportar variáveis globalmente
├── playwright.config.ts       - Arquivo de configuração do Playwright
└── package.json               - Arquivo de configuração do NPM```