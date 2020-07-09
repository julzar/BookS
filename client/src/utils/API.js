const axios = require("axios");


async function search() {
    const res = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=catch+22`)
    console.log(res.data.items)
}