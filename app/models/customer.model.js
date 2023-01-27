module.exports = (sequelize, Sequelize) => {
  const Customer = sequelize.define("customers", {
    first_name: {
      type: Sequelize.STRING,
    },
    last_name: {
      type: Sequelize.STRING,
    },
    phone_number: {
      type: Sequelize.STRING
    },
    address: {
      type: Sequelize.STRING
    }
  })

  return Customer;
}