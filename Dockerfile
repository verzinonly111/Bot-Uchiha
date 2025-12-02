FROM node:20-alpine

WORKDIR /app

# Copia apenas os arquivos necessários primeiro
COPY package.json package-lock.json* tsconfig.json ./

# Instala dependências
RUN npm install --silent

# Copia o resto do código
COPY . .

# Compila o TypeScript
RUN npm run build

# A porta que o Render vai usar
EXPOSE 3000

# Inicia o bot
CMD ["npm", "start"]
