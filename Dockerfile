# Usar a imagem oficial do Playwright como base
FROM mcr.microsoft.com/playwright:v1.50.0

# Definir o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copiar os arquivos do projeto para o contêiner
COPY package.json .
COPY playwright.config.ts .
COPY tsconfig.ts .
COPY tests/ ./tests/
COPY docs/ ./docs/

# Instalar as dependências do projeto
RUN npm install

# Comando padrão para executar os testes
CMD ["npx", "playwright", "test"]