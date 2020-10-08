const functions = require('firebase-functions');
const express = require('express')
const cors = require('cors')
const stripe = require('stripe')('sk_test_51HWekRIsyk1Ymc7rqNoNyxBSHxHikGWmTyGCZmzcyb2mZljrsSoD4rRwcAp7jgUPrMKS3hUftZ76rjtywv13V6qY00OqZGV4rX')


const app = express()

app.use(cors({origin: true}))
app.use(express.json())

app.get('/', (req, res) => {
    res.status(200)
    res.send('hello world everyone a')
})

app.post("/payments/create", async (req, res) => {
    const total = req.query.total;
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,  // subunits of the currency
        currency: "eur", 
    })
    res.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })

})

// Listen command
exports.api = functions.https.onRequest(app)