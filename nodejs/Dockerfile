# usa a imagem oficial do node.js como base - versão mais recente
FROM node:latest

# define o diretório de trabalho dentro do contêiner
WORKDIR /nodejs

# copia os arquivos necessários para o diretório de trabalho
COPY package*.json ./
COPY app.js .

# copia o restante dos arquivos da aplicação
COPY . .

# instala as dependências do projeto
RUN npm install

# expõe a porta em que o app irá ser executado
EXPOSE 3000

# comando para iniciar o app
CMD ["node", "app.js"]
