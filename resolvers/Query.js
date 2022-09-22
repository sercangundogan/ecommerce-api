import products from "../data/products.json" assert { type: "json" }
import categories from "../data/categories.json" assert { type: "json" }

const Query = {
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
    products: () => {
        return products
    },
    product: (parent, args, context) => {
        const productId = args.id
        return products.find((product) => product.id === productId)
    },
    categories: () => {
        return categories
    },
    category: (parent, args, context) => {
        const { id } = args
        return categories.find((category) => category.id === id)
    },
}

export { Query }
