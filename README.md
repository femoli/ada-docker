# Docker com Node.js e MongoDB 🐳

Este projeto foi criado para a conclusão do módulo de conteinerização do botcamp de devOps da ADA.
Aqui vamos demonstrar como configurar um ambiente Docker para uma aplicação Node.js e MongoDB.
Essa é uma aplicação web simples de preenchimento de formulário.

### Imagens Docker

- **Node.js**: [Esta imagem](https://hub.docker.com/r/femoliv/nodejs) contém o ambiente de execução Node.js necessário para executar a aplicação web.
- **MongoDB**: [Esta imagem](https://hub.docker.com/r/femoliv/mongodb) contém uma instância do banco de dados MongoDB, necessário para armazenar os dados da aplicação.

## Funcionalidades 🚀

- Aplicação Node.js que permite preencher um formulário e salvar os dados no MongoDB.
- Serviços Dockerizados: Node.js e MongoDB.
- Arquivo docker-compose.yml para orquestrar os contêineres Docker.

## Pré-requisitos 📋

- Docker: [Instalação do Docker](https://docs.docker.com/get-docker/)
- Docker Compose: [Instalação do Docker Compose](https://docs.docker.com/compose/install/)

## Instalação e Execução 🛠️

1. Clone o repositório do projeto para sua máquina local e vá até o diretório:

   ```bash
   git clone https://github.com/femoli/ada-docker.git
   cd ada-docker
   ```

2. Inicie os contêineres Docker usando o docker-compose:

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

## License

Este projeto está licenciado sob a licença MIT.