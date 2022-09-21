// Libraries
import { ApolloServer, gql } from "apollo-server-express"
import { ApolloServerPluginDrainHttpServer } from "apollo-server-core"
import express from "express"
import http from "http"

//* Schema: How our data is going to looks likes
const typeDefs = gql`
    type Query {
        hello: String
    }
`

//* Resolver: Actual functions that return data that we defined in schema
const resolvers = {
    Query: {
        hello: () => {
            return "Hello World"
        },
    },
}

// Defining and starting server function
async function startApolloServer(typeDefs, resolvers) {
    // Express app
    const app = express()
    const httpServer = http.createServer(app)

    //* Defining server
    // We have to define two things for Apollo Server: Schema(TypeDefs) and Resolver
    const server = new ApolloServer({
        typeDefs,
        resolvers,
        plugins: [
            ApolloServerPluginDrainHttpServer({
                httpServer,
            }),
        ],
    })

    await server.start()

    server.applyMiddleware({ app })

    await new Promise((resolve) => httpServer.listen({ port: 4000 }, resolve))

    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
}

startApolloServer(typeDefs, resolvers)
