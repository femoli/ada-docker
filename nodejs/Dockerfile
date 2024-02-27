# Usa a imagem oficial do Node.js como base
FROM node

# Define o diretório de trabalho dentro do contêiner
WORKDIR /nodejs

# Copia os arquivos necessários para o diretório de trabalho
COPY package*.json ./
COPY app.js .

# Instala as dependências do projeto
RUN npm install

# Expõe a porta em que o aplicativo irá ser executado
EXPOSE 5000

# Comando para iniciar o aplicativo
CMD ["node", "app.js"]
