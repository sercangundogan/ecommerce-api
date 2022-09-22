import products from "../data/categories.json" assert { type: "json" }

const Category = {
    products: (parent, args, context) => {
        const categoryId = parent.id
        return products.filter((product) => product.categoryId === categoryId)
    },
}

export { Category }
