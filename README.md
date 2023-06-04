# Primeiros passos para rodar o programa:
Projeto em NodeJs, então é necessário instalar o mesmo. Versão usada: `18.16.0`
\
Pode ser encontrado [AQUI](https://nodejs.org/dist/v18.16.0/)

## Rodar os comandos:

### `npm install`
Caso use Yarn:
### `yarn install`

Configurar no .env as informações do banco de dados (Indicado o PostgreSQL)\
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

# OBSERVAÇÃO DE ESTUDO:


