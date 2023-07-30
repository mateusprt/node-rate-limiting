import { createClient } from 'redis';

const redisClient = createClient({
  legacyMode: true,
  disableOfflineQueue: true
});

async function connectRedis(): Promise<void> {
  await redisClient.connect();
}

export { redisClient, connectRedis };