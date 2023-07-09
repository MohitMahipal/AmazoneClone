const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51MjfEfSFonSD7huWpzFrMDNDbMHeqmU09YWAHgQoiCgQnE6eVgTodZtl03DK6fNch96xDFpLRWg91GcwXF1ASS7W00E0cjNYbR');

//API


//-APP CONFIG

const app = express();

//-MIDDLEWARE
app.use(cors({ origin: true }));
app.use(express.json());

//-API ROUTES
app.get('/', (req, res) => {
    res.status(200).send("hello");
});

app.post('/payments/create', async (req, res) => {
    const total = req.query.total;
    console.log("Payment req received : for total : ", total);
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: 'inr'
    });

    //OK created
    res.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});
//-LISTEN COMMAND
exports.api = functions.https.onRequest(app);



//firebase emulators:start
// firebase deploy --only functions



//deploy frontend
//npm run build ------for frontend deploy in amazone clone directory
//firebase deploy --only hosting   second step