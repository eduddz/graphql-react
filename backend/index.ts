import "reflect-metadata";
import path from "path";
import { buildSchema } from "type-graphql";
import { ApolloServer } from "apollo-server";
import { UserResolvers } from "./src/resolvers/UserResolver";

async function main() {
    const schema = await buildSchema({
        //controllers - são as rotas
        resolvers: [
            UserResolvers,
        ],
        //onde quero salvar o arquivo schema graphql
        emitSchemaFile: path.resolve(__dirname, "schema.gql"),
    })

    const server = new ApolloServer({
        schema,
    })

    const { url } = await server.listen();

    console.log(`Server running on ${url}`)
}

main();