import { v4 as uuid } from "uuid"

export const Mutation = {
    addCategory: (parent, { input }, { categories }) => {
        const { name } = input
        const newCategory = {
            id: uuid(),
            name,
        }
        categories.push(newCategory)

        return newCategory
    },
    addProduct: (parent, { input }, { products }) => {
        const newProduct = {
            id: uuid(),
            ...input,
        }
        products.push(newProduct)

        return newProduct
    },
    addReview: (parent, { input }, { reviews }) => {
        const newReview = {
            id: uuid(),
            ...input,
        }
        reviews.push(newReview)

        return newReview
    },
    deleteCategory: (parent, { id }, { categories, products }) => {
        categories = categories.filter((category) => category.id !== id)
        products = products.map((product) => {
            console.log(product.categoryId, id, product.categoryId === id)
            if (product.categoryId === id) {
                return {
                    ...product,
                    categoryId: null,
                }
            } else {
                return product
            }
        })
        return true
    },
    deleteProduct: (parent, { id }, { products, reviews }) => {
        products = products.filter((product) => product.id !== id)
        reviews = reviews.filter((review) => review.productId !== id)
        return true
    },
    deleteReview: (parent, { id }, { reviews, products }) => {
        console.log("Product Keys: ", Object.keys(products[0]))
        return true
    },
}
