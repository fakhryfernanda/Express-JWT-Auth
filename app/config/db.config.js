module.exports = {
    HOST: "localhost",
    USER: "postgres",
    PASSWORD: "digitalskill",
    DB: "jwt-test-db",
    dialect: "postgres",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};