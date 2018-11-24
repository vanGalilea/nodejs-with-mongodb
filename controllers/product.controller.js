import Product from '../models/product.model';

exports.test = (req, res)=> {
    res.send('Greetings from the Test controller!');
};

exports.create = (req, res)=> {
    const {name, price} = req.body;
    const product = new Product({name, price});

    product.save((err)=> {
        if (err) return next(err);
        res.send('Product Created successfully')
    })
};

exports.find = (req, res)=> {
    Product.findById(req.params.id, (err, product)=> {
        if (err) return next(err);
        res.send(product);
    })
};