import { createClient } from "redis";

const redisClient = createClient({
    url: 'redis://localhost:6379',
});

redisClient.on('connect', () => {
    console.log('Connected to Redis');
});

redisClient.on('ready', () => {
    console.log('Redis client is ready');
});

redisClient.on('error', (err) => {
    console.error('Redis client error:', err);
});

redisClient.on('end', () => {
    console.log('Redis client connection closed');
});

(async () => {
    try {
        await redisClient.connect();
    } catch (err) {
        console.error('Failed to connect to Redis:', err);
    }
})();

export default redisClient;
