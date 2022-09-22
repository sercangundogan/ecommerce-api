import categories from "../data/categories.json" assert { type: "json" }

export const Product = {
    category: (parent, args, context) => {
        const { categoryId } = parent
        return categories.find((category) => category.id === categoryId)
    },
}
