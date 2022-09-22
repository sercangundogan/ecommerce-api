const Category = {
    products: (parent, { filter }, { products }) => {
        const categoryId = parent.id
        const categoryProduct = products.filter(
            (product) => product.categoryId === categoryId
        )
        let filteredCategoryProducts = categoryProduct
        if (filter) {
            filteredCategoryProducts = filteredCategoryProducts.filter(
                (product) => product.onSale === filter.onSale
            )
        }
        return filteredCategoryProducts
    },
}

export { Category }
