const express = require('express');
const axios = require('axios');
const qs = require('qs');
const app = express();

const config = require("./config.js")

//middleware to parse incoming request with json payload
app.use(express.json());

const port = 5000;

app.get('/', (req, res) => {
    res.sendFile('index.html', { root: __dirname });
});

app.listen(port, () => {
    console.log(`Now listening on port ${port}`);
});

//api to create a transaction in Origins Ecommerce platform
app.post('/api/create_transaction', (req, res) => {
    const body = req.body;

    //set type and payment method before sent to moresbymedia server to make a Google Pay
    Object.assign(body, { type: "SALE", payment_method: "GOOGLE_PAY" });

    const result = makeTransaction(body);
    result.then((response) => {
        res.status(201).json(response.data);
    }).catch((err) => {
        console.log("err:", err);
        res.status(500).json([]);
    })
});

/**
 * Make API call to Origins Ecommerce
 * @param {*} postData 
 * @returns 
 */
async function makeTransaction(postData) {
    const requestData = {
        url: config.url,
        method: 'post',
        headers: {
            'api_key': config.api_key,
            'merchant_fid': config.merchant_fid,
            'version': 3
        },
        //qs to make post data to be url encoded
        data: qs.stringify(postData)
    }

    const result = await axios(requestData);
    return result;
}
