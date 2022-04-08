# Graphql/Apollo 🏆🔥

Projeto desenvolvido para treinar o desenvolvimento com graphql + react + typescript

- Quais problemas Graphql resolve?
    - Overfetching - busca mais informações do que está sendo requisitado

- Dificuldade:
    - Cache
    - Erros (não retorn erro 401, por exemplo)

```gql
query {
    users {
        id
        name
        github

        addresses {
            city
            state
            country
        }
    }
}
```

# Code 
- Frontend

    npm create vite@latest
    |
    npm install
    |
    npm i @apollo/client graphql

- Backend

    npm init -y
    |
    npm i type-graphql graphql apollo-server class-validator reflect-metadata
    |
    npm i typescript @types/node ts-node-dev -D
    |
    npx tsc --init
