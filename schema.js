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
        products(filter: ProductsFilterInput): [Product!]!
        product(id: ID!): Product # We are not defining Scalar Type here, so we need to define it below
        categories: [Category!]!
        category(id: ID!): Category
        reviews: [Review!]!
        review(productId: ID!): Review
    }

    type Product { # We defined the type Product
        id: ID!
        name: String!
        description: String!
        quantity: Int!
        image: String!
        price: Float!
        onSale: Boolean!
        category: Category
        reviews: [Review!]! # We also need to define Review Resolver
    }

    type Category {
        id: ID!
        name: String
        products(filter: ProductsFilterInput): [Product!]!
    }

    type Review {
        id: ID!
        date: String!
        title: String!
        comment: String!
        rating: Int!
        productId: ID!
    }

    input ProductsFilterInput {
        onSale: Boolean
        avgRating: Int
    }
`
