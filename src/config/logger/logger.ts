import { createLogger, format, transports } from "winston";
import { NODE_ENV } from "../contants";

const logger = createLogger({
  level: 'info',
  format: format.combine(
    format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss'
    }),
    format.errors({ stack: true }),
    format.splat(),
    format.json()
  ),
  transports: [
    new transports.File({ filename: 'logs/logs.log' }),
    new transports.File({ filename: 'logs/errors.log', level: 'error' })
  ]
});

if(NODE_ENV === 'development') {
  logger.add(new transports.Console({
    format: format.simple(),
  }))
}



export default logger;