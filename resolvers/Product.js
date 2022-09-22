export const Product = {
    category: (parent, args, { categories }) => {
        const { categoryId } = parent
        return categories.find((category) => category.id === categoryId)
    },
}
