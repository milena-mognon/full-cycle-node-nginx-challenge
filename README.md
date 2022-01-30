# Desafio Docker - Full Cycle

A aplicação consiste em criar um servidor com Node e deve ter um endpoint GET / que será o responsável por trazer uma listagem das pessoas cadastradas.

O servidor estará rodando na porta 3333, mas o nginx fará com que seja acessado pela porta 8080.

A cada requisição uma pessoa é cadastrada no banco de dados (mysql).

O objetivo desse desafio é criar um arquivo docker-compose.yaml para configurar tudo.

## Tecnologias Utilizadas

- NodeJS
- Express
- TypeORM
- Nginx
- Docker
- Dockerize
- MySQL

## Execução

1. Faça um clone do repositório
2. Execute o seguinte comando no terminal
   `docker-compose up -d`
3. Acesse `http://localhost:8080`
