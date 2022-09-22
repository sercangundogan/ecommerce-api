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
    products: (parent, { filter }, { products, reviews }) => {
        let filteredProducts = products
        if (filter) {
            const { onSale, avgRating } = filter
            if (onSale) {
                filteredProducts = filteredProducts.filter(
                    (product) => product.onSale === filter.onSale
                )
            }
            if ([1, 2, 3, 4, 5].includes(avgRating)) {
                filteredProducts = filteredProducts.filter((product) => {
                    let sumRating = 0
                    let numberOfReviews = 0
                    reviews.forEach((review) => {
                        if (review.productId === product.id) {
                            numberOfReviews += 1
                            sumRating += review.rating
                        }
                    })
                    let avgProductRating = sumRating / numberOfReviews
                    console.log(numberOfReviews)
                    return avgRating <= avgProductRating
                })
            }
        }
        return filteredProducts
    },
    product: (parent, args, { products }) => {
        const productId = args.id
        return products.find((product) => product.id === productId)
    },
    categories: (parent, args, { categories }) => {
        return categories
    },
    category: (parent, args, { categories }) => {
        const { id } = args
        return categories.find((category) => category.id === id)
    },
    reviews: (parent, args, { reviews }) => {
        console.log("Parent: ", parent)
        console.log("Args: ", args)
        // console.log("Context: ", reviews)
        return reviews
    },
    review: (parent, { productId }, { reviews }) => {
        return reviews.find((review) => review.productId === productId)
    },
}

export { Query }
