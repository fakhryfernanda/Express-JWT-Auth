const db = require("../models");
const Product = db.product;

exports.add = (req, res) => {
  Product.create({
    name: req.body.name,
    uom: req.body.uom,
    stock: req.body.stock,
    price: req.body.price
  })
    .then((product) => {
      res.status(200).send({
        message: "Data berhasil ditambahkan",
        data: product
      });
    }).catch(err => {
      res.status(500).send({ message: err.message });
    });

  return Product;
}

exports.update = (req, res) => {
  Product.findOne({
    where: {
      id: req.params.id
    }
  }).then((product) => {
    if (!product) {
      return res.status(404).send({ message: "product tidak ditemukan." });
    }

    const { name, uom, stock, price } = req.body;
    product.update({
      name, uom, stock, price
    })
      .then(
        (product) => {
          res.status(200).send({
            message: "product behasil diupdate!",
            data: product
          })
        }
      )
  })
}

exports.all = (req, res) => {
  Product.findAll()
    .then((product) => {
      res.status(200).send({
        message: "Data berhasil di dapatkan",
        data: product
      })
    }).catch(err => {
      res.status(500).send({ message: err.message });
    });
}

exports.byId = (req, res) => {
  Product.findOne({
    where: {
      id: req.params.id
    }
  })
    .then((product) => {
      if (!product) {
        res.status(404).send({
          message: "product tidak ditemukan",
          data: null
        });
      }
      res.status(200).send({
        message: "Data berhasil didapatkan",
        data: product
      });
    }).catch(err => {
      res.status(500).send({ message: err.message });
    });
}

exports.delete = (req, res) => {
  Product.destroy({
    where: {
      id: req.params.id
    }
  }
  )
    .then((product) => {
      res.status(200).send({
        message: "Data berhasil di dihapus",
        data: product
      })
    }).catch(err => {
      res.status(500).send({ message: err.message });
    });
}