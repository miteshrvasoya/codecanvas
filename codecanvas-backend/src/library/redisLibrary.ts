import { Request, Response, NextFunction } from 'express';
import redisClient from "../config/redisClient";

const rateLimiter = (limit: number, windowInSeconds: number) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        const userIP = req.ip;
        const key = `rate-limit:${userIP}`;

        try {
            const requestCount = await redisClient.get(key);

            if (requestCount === null) {
                // Set initial request count
                await redisClient.setEx(key, windowInSeconds, '1');
                next();
            } else if (parseInt(requestCount) >= limit) {
                res.status(429).json({ message: 'Too many requests, please try again later.' });
            } else {
                // Increment request count
                await redisClient.incr(key);
                next();
            }
        } catch (err) {
            console.error('Redis error in rate limiter:', err);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    };
};

export default rateLimiter;
