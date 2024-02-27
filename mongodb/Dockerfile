# Usa a imagem oficial do MongoDB como base
FROM mongo:latest

# Define o diretório de trabalho dentro do contêiner
WORKDIR /mongodb

# Exponha a porta padrão do MongoDB (27017)
EXPOSE 27017

# Define a variável de ambiente para a URL de conexão do MongoDB
ENV MONGO_URI=mongodb://localhost:27017/meu_db