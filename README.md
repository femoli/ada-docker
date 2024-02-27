# Projeto Docker com Node.js e MongoDB 🐳

Este é um projeto básico demonstrando como configurar um ambiente Docker com Node.js e MongoDB para criar e executar uma aplicação web simples de preenchimento de formulário.

## Funcionalidades 🚀

- Aplicação Node.js que permite preencher um formulário e salvar os dados no MongoDB.
- Serviços Dockerizados: Node.js e MongoDB.
- Arquivo docker-compose.yml para orquestrar os contêineres Docker.

## Pré-requisitos 📋

- Docker: [Instalação do Docker](https://docs.docker.com/get-docker/)
- Docker Compose: [Instalação do Docker Compose](https://docs.docker.com/compose/install/)

## Instalação e Execução 🛠️

1. Clone o repositório:

   ```bash
   git clone https://github.com/femoli/ada-docker.git
   ```

2. Navegue até o diretório do projeto:

   ```bash
   cd ada-docker
   ```

3. Inicie os contêineres Docker usando o docker-compose:

   ```bash
   docker-compose up --build
   ```

4. Acesse a aplicação em seu navegador em [http://localhost:3000](http://localhost:3000)

## Estrutura do Projeto 📂

```
projeto/
│
├── nodejs/
│   ├── Dockerfile
│   ├── package.json
│   ├── package-lock.json
│   ├── app.js
│   └── models/
│       └── formData.js
│
├── mongodb/
│   └── Dockerfile
│
└── docker-compose.yml
```