// Libraries
import { ApolloServer, gql } from "apollo-server-express"
import { ApolloServerPluginDrainHttpServer } from "apollo-server-core"
import express from "express"
import http from "http"

/* Scalar Types
    - String
    - Int
    - Float
    - Boolean
    - ID!
*/

//* Schema: How our data is going to looks likes
const typeDefs = gql`
    type Query {
        hello: String
        helloString: String!
        numberOfAnimals: Int
        price: Float
        isCool: Boolean
        animals: [String]
        animalsString: [String!]
    }
`

//* Resolver: Actual functions that return data that we defined in schema
const resolvers = {
    Query: {
        hello: () => {
            return null //* Query is String but this return value can be also null
        },
        helloString: () => {
            return "Hello World" //* Query is String! so this return value can not be null
        },
        numberOfAnimals: () => {
            return 55
        },
        price: () => {
            return 10.8
        },
        isCool: () => {
            return true
        },
        animals: () => {
            return ["dog", null, 22.9] // 22.9 will be also string and return as "22.9"
        },
        animalsString: () => {
            return ["cat", "dog"] // Has to be only string because type is [String!]
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
