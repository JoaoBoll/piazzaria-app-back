# Primeiros passos para rodar o programa:
Projeto em NodeJs, então é necessário instalar o mesmo. Versão usada: `18.16.0`
\
Pode ser encontrado [AQUI](https://nodejs.org/dist/v18.16.0/)

Para funcionar perfeitamente, precisa-se instalar o PostgreSQL
\
Pode ser encontrado [AQUI](https://www.postgresql.org/download/)

Este é o projeto BackEnd, caso queira rodar o sistema Web inteiro, o FrontEnd se encontra em: 
[pizzaria-app-front](https://github.com/JoaoBoll/pizzaria-app-front)

## Rodar os comandos:
```bash
npm install --global yarn
```
Caso já use Yarn:

```bash
yarn install
```

```bash
yarn dev
```

Configurar no .env as informações do banco de dados (PostgreSQL)\
Substituir as segundtes informações:\
`postgres` : Usuário\
`admin` : Senha\
`localhost` : Endereço do Servidor\
`5432` : Porta\
`mydb` : Nome da base

```
DATABASE_URL="postgresql://postgres:admin@localhost:5432/mydb?schema=public"
``` 

Rodar projeto:
### `yarn dev`
