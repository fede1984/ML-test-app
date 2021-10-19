const { Router } = require('express');
const router = Router()
const axios = require('axios');

router.get('/items', (req, res) => {

  axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${req.query.q}`)
    .then((response) => {

      let categories = response.data.results.map(result => result.category_id)

      let items = response.data.results.map(result => {
        return {
          "id": result.id,
          "title": result.title,
          "price": {
            "currency": result.prices.presentation.display_currency,
            "amount": Math.round(result.prices.prices[0].amount),
            "decimals": (result.prices.prices[0].amount) - Math.round(result.prices.prices[0].amount),
          },
          "picture": result.thumbnail,
          "condition": result.condition,
          "free_shipping": result.shipping.free_shipping,
          "address": result.address.state_name,
          "category": result.category_id
        }

      })

      res.json(
        {
          "author": {
            "name": "Federico",
            "lastname": "Fabbrini"
          },
          categories: categories,
          items: items,
        }
      )
    }).catch(error => {
      console.log(error);
    });

})

router.get('/items/:id', (req, res) => {

  let url = encodeURI(`https://api.mercadolibre.com/items/​${req.params.id}`).replace("%E2%80%8B", "")
  axios.all([
    axios.get(url),
    axios.get(`${url}/description`)
  ]).then(axios.spread((response1, response2) => {


    const item = {
      "id": response1.data.id,
      "title": response1.data.title,
      "price": {
        "currency": response1.data.currency_id,
        "amount": Math.round(response1.data.price),
        "decimals": (response1.data.price) - Math.round(response1.data.price),
      },
      "picture": response1.data.thumbnail,
      "condition": response1.data.condition,
      "free_shipping": response1.data.shipping.free_shipping,
      "sold_quantity": response1.data.sold_quantity,
      "description": response2.data.plain_text

    }

    res.json({
      "author": {
        "name": "Federico",
        "lastname": "Fabbrini"
      },
      "item": item,

    })

  })).catch(error => {
    console.log(error);
  });

})


module.exports = router;