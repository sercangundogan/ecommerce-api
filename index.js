// Libraries
import { ApolloServer } from "apollo-server-express"
import { ApolloServerPluginDrainHttpServer } from "apollo-server-core"
import express from "express"
import http from "http"

// Type Definations
import { typeDefs } from "./schema.js"

// Resolvers
import { Query } from "./resolvers/Query.js"
import { Product } from "./resolvers/Product.js"
import { Category } from "./resolvers/Category.js"
import { Review } from "./resolvers/Review.js"

// Data
import products from "./data/products.json" assert { type: "json" }
import categories from "./data/categories.json" assert { type: "json" }
import reviews from "./data/reviews.json" assert { type: "json" }

//* Resolver: Actual functions that return data that we defined in schema
const resolvers = {
    Query,
    Category,
    Product,
    Review,
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
        context: {
            categories,
            products,
            reviews,
        },
    })

    await server.start()

    server.applyMiddleware({ app })

    await new Promise((resolve) => httpServer.listen({ port: 4000 }, resolve))

    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
}

startApolloServer(typeDefs, resolvers)
