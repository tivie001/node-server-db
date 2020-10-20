const express = require('express');
const bodyParser= require('body-parser');
const mongoose = require('mongoose');
const Golf = require('./models/golfModel');
const Manufacture = require('./models/manufactureModel');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect(process.env.MONGODB_URI,
    {useNewUrlParser: true, useUnifiedTopology: true});

app.listen(process.env.PORT || 3004, () => {
    console.log("Server running on port 3004");
})

// ******* GOLF CRUD METHODS *******
app.get('/golf', (req, res) => {

    Golf.find((err, products) => {
        if (err)
            console.log(handleError(err));
        res.json(products);
    })
})

app.post('/golf', (req, res) => {
    console.log(req.query);

    Golf.create({
        name: req.query.name,
        category: req.query.category,
        price: req.query.price,
        qty: req.query.qty,
        manufacture: req.query.manufacture
    }, (err) => {
        if (err)
            console.log(err);
        Golf.find((err, products) => {
            if (err)
                console.log(handleError(err));
            res.json(products);
        })
    })
})

app.put('/golf/:id', (req, res) => {

    Golf.findById(req.params.id, (err, product) => {
        if (err)
            console.log(handleError(err));
        product.update(req.query, (err) => {
            if (err)
                console.log(err);
            Golf.find((err, products) => {
                if (err)
                    console.log(handleError(err));
                res.json(products);
            })
        })
    })
})

app.delete('/golf/:id', (req, res) => {

    Golf.remove({
        _id: req.params.id
    }, (err) => {
        if (err)
            console.log(handleError(err));
        Golf.find((err, products) => {
            if (err)
                console.log(handleError(err));
            res.json(products);
        })
    })
})

// ******* MANUFACTURE CRUD METHODS *******
app.get('/manufactures', (req, res) => {

    Manufacture.find((err, manus) => {
        if (err)
            console.log(handleError(err));
        res.json(manus);
    })
})

app.post('/manufactures', (req, res) => {
    console.log(req.query);

    Manufacture.create({
        name: req.query.name,
        address: req.query.address,
        phone: req.query.phone
    }, (err) => {
        if (err)
            console.log(err);
        Manufacture.find((err, products) => {
            if (err)
                console.log(handleError(err));
            res.json(products);
        })
    })
})

app.put('/manufactures/:id', (req, res) => {

    Manufacture.findById(req.params.id, (err, product) => {
        if (err)
            console.log(handleError(err));
        product.update(req.query, (err) => {
            if (err)
                console.log(err);
            Manufacture.find((err, products) => {
                if (err)
                    console.log(handleError(err));
                res.json(products);
            })
        })
    })
})

app.delete('/manufactures/:id', (req, res) => {

    Manufacture.remove({
        _id: req.params.id
    }, (err) => {
        if (err)
            console.log(handleError(err));
        Manufacture.find((err, products) => {
            if (err)
                console.log(handleError(err));
            res.json(products);
        })
    })
})

app.get('/manufactureProducts', (req, res) => {
    Golf.find({ category: req.query.name })
        .populate('products').exec((err, products) => {
        res.json(products);
    })
})

