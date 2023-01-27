const db = require("../models");
const Customer = db.customer;

exports.all = (req, res) => {
  Customer.findAll()
    .then((customer) => {
      res.status(200).send({
        message: "Data berhasil didapat",
        data: customer
      })
    }).catch(err => {
      res.status(500).send({ message: err.message });
    });
}

exports.byId = (req, res) => {
  Customer.findOne({
    where: {
      id: req.params.id
    }
  })
    .then((customer) => {
      if (!customer) {
        res.status(404).send({
          message: "Customer tidak ditemukan",
          data: null
        });
      }
      res.status(200).send({
        message: "Data berhasil didapatkan",
        data: customer
      });
    }).catch(err => {
      res.status(500).send({ message: err.message });
    });
}

exports.add = (req, res) => {
  Customer.create({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    phone_number: req.body.phone_number,
    address: req.body.address,
  })
    .then((customer) => {
      res.status(200).send({
        message: "Data berhasil ditambahkan",
        data: customer
      });
    }).catch(err => {
      res.status(500).send({ message: err.message });
    });
}

exports.update = (req, res) => {
  Customer.findOne({
    where: {
      id: req.params.id
    }
  }).then((customer) => {
    if (!customer) {
      return res.status(404).send({ message: "Customer tidak ditemukan." });
    }
    const { first_name, last_name, phone_number, address } = req.body;
    customer.update({
      first_name, last_name, phone_number, address,
    })
      .then(
        (customer) => {
          res.status(200).send({
            message: "Customer behasil di update!",
            data: customer
          })
        }
      )
  })
}

exports.delete = (req, res) => {
  Customer.destroy({
    where: {
      id: req.params.id
    }
  }
  )
    .then((customer) => {
      res.status(200).send({
        message: "Data berhasil dihapus",
        data: customer
      })
    }).catch(err => {
      res.status(500).send({ message: err.message });
    });
}

