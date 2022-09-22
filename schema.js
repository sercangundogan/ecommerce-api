import { gql } from "apollo-server-core"

/* Scalar Types
    - String
    - Int
    - Float
    - Boolean
    - ID!
*/

//* Schema: How our data is going to looks likes
export const typeDefs = gql`
    type Query {
        hello: String
        helloString: String!
        numberOfAnimals: Int
        price: Float
        isCool: Boolean
        animals: [String]
        animalsString: [String!]
        products: [Product!]!
        product(id: ID!): Product
        categories: [Category!]!
        category(id: ID!): Category
    }

    type Product {
        id: ID!
        name: String!
        description: String!
        quantity: Int!
        image: String!
        price: Float!
        onSale: Boolean!
        category: Category
    }

    type Category {
        id: ID!
        name: String
        products: [Product!]!
    }
`
