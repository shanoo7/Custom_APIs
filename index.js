import express from "express"

const app = express();



app.get('/api/products', (req, res) => {
    const products = [
        {
            id: 1,
            name: "one",
            price: 1000,
            image: "https://cdn.pixabay.com/photo/2024/02/07/16/15/flower-8559381_1280.jpg"

        }, {
            id: 2,
            name: "two",
            price: 2000,
            image: "https://cdn.pixabay.com/photo/2024/02/07/16/15/flower-8559381_1280.jpg"

        }, {
            id: 3,
            name: "three",
            price: 3000,
            image: "https://cdn.pixabay.com/photo/2024/02/07/16/15/flower-8559381_1280.jpg"

        }, {
            id: 4,
            name: "four",
            price: 4000,
            image: "https://cdn.pixabay.com/photo/2024/02/07/16/15/flower-8559381_1280.jpg"

        }, {
            id: 5,
            name: "five",
            price: 5000,
            image: "https://cdn.pixabay.com/photo/2024/02/07/16/15/flower-8559381_1280.jpg"

        }, {
            id: 6,
            name: "six",
            price: 1000,
            image: "https://cdn.pixabay.com/photo/2024/02/07/16/15/flower-8559381_1280.jpg"

        }, {
            id: 7,
            name: "seven",
            price: 7000,
            image: "https://cdn.pixabay.com/photo/2024/02/07/16/15/flower-8559381_1280.jpg"

        }, {
            id: 8,
            name: "eight",
            price: 8000,
            image: "https://cdn.pixabay.com/photo/2024/02/07/16/15/flower-8559381_1280.jpg"

        }, {
            id: 9,
            name: "nine",
            price: 9000,
            image: "https://cdn.pixabay.com/photo/2024/02/07/16/15/flower-8559381_1280.jpg"

        }, {
            id: 10,
            name: "ten",
            price: 10000,
            image: "https://cdn.pixabay.com/photo/2024/02/07/16/15/flower-8559381_1280.jpg"

        }
    ]

    if (req.query.q) {
        const filterproducts = products.filter((product) =>
            product.name.toLowerCase().includes(req.query.q)
        )
        res.send(filterproducts)
        return;
    }

    setTimeout(() => {
        res.send(products)
    }, 2000);

})

const port = process.env.port || 3000;
app.listen(port, () => {
    console.log("app is running at port :", { port })
})

