module.exports = (sequelize, Sequelize) => {
    const Role = sequelize.define("roles", { // roles adalah nama tabel di database
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        name: {
            type: Sequelize.STRING
        }
    });

    return Role;
};