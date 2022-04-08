import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { User } from "../models/User";
import crypto from "crypto"

// query: buscar dados
// mutation: criar, alterar ou deletar dados

@Resolver()
export class UserResolvers {
    private data: User[] = [];

    @Query(() => [User])
    async users() {
        return this.data;
    }

    @Mutation(() => User)
    async createUser(
        @Arg('name') name: string
    ) {
        const user = { id: crypto.randomUUID(), name }

        this.data.push(user)

        return user;
    }
}