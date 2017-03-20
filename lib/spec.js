
module.exports = pkg => ({
    description: pkg.description,
    env: {
        redisPort: {
            description: 'the Redis host port',
            default: 6379
        },
        redisHost: {
            description: 'the Redis host address',
            default: 'localhost'
        },
        logging: {
            description: 'the logging level',
            default: 'info'
        }
    }
});
