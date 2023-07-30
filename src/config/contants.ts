import dotenv from 'dotenv';

dotenv.config();

const NODE_ENV = process.env.NODE_ENV;
const SERVER_PORT = process.env.SERVER_PORT;
const RATE_LIMIT_KEY_PREFIX = process.env.RATE_LIMIT_KEY_PREFIX;
const RATE_LIMIT_POINTS = Number(process.env.RATE_LIMIT_POINTS);
const RATE_LIMIT_DURATION = Number(process.env.RATE_LIMIT_DURATION);

export {
  NODE_ENV, SERVER_PORT, RATE_LIMIT_KEY_PREFIX, RATE_LIMIT_POINTS, RATE_LIMIT_DURATION
};