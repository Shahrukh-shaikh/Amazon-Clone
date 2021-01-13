  
//const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51I7SMSGpiG7MdvUCNvaWNsig1siKIlXvhousTCEm8sEf188jTGJTZb0DjQmbYNJdZyw9IeIBTo4jAOlkTuMmrxjH00D4LcNjCS')

// API

// - App config

const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
    //const amount = 55
  console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "usd"
            
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command
// exports.api = functions.https.onRequest(app);
app.listen("8080")

// Example endpoint
// http://localhost:5001/challenge-4b2b2/us-central1/api