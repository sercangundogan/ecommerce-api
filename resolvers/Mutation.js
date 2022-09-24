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
    deleteReview: (parent, { id }, { reviews }) => {
        reviews = reviews.filter((review) => review.id !== id)
        return true
    },
    updateCategory: (parent, { id, input }, { categories }) => {
        let index = categories.findIndex((category) => category.id === id)
        if (index === -1) return null
        console.log("Category: ", categories[index])
        categories[index] = {
            ...categories[index],
            ...input,
        }
        return categories[index]
    },
    updateProduct: (parent, { id, input }, { products }) => {
        let index = products.findIndex((product) => product.id === id)
        if (index === -1) return null
        console.log("Product: ", products[index])
        products[index] = {
            ...products[index],
            ...input,
        }
        return products[index]
    },
    updateReview: (parent, { id, input }, { reviews }) => {
        let index = reviews.findIndex((review) => review.id === id)
        if (index === -1) return null
        console.log("Review: ", reviews[index])
        reviews[index] = {
            ...reviews[index],
            ...input,
        }
        return reviews[index]
    },
}
