export const Product = {
    category: ({ categoryId }, args, { categories }) => {
        console.log(categoryId)
        return categories.find((category) => category.id === categoryId)
    },
    reviews: ({ id }, args, { reviews }) => {
        return reviews.filter((review) => review.productId === id)
    },
}
