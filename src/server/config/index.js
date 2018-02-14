let config = {
    postgresUser: process.env.POSTGRES_USER || 'properties-app',
    postgresPassword: process.env.POSTGRES_PASSWORD || 'properties-app',
    postgresDb: process.env.POSTGRES_DB || 'properties-app',
    postgresAddress: process.env.POSTGRES_ADDRESS || 'localhost',
    serverPort: process.env.PORT || 3000
};

module.exports = config;
