import winston from 'winston';

// 1. Define our custom log levels.
const levels = {
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  debug: 4,
  // This is our special level for the contribution message.
  // We give it a high value to ensure it's always visible.
  shout: 5,
};

// 2. Define colors for each level, which will be used in development.
const colors = {
  error: 'red',
  warn: 'yellow',
  info: 'green',
  http: 'magenta',
  debug: 'white',
  shout: 'bold blue', // Make it stand out!
};
winston.addColors(colors);

// 3. Determine the log level based on the environment.
const level = () => {
  const isDevelopment = process.env.NODE_ENV === 'development';
  // In development, we want to see everything up to 'debug'.
  // In production, we only want to see 'info' and above.
  // Our 'shout' level (5) is higher than both, so it will always be included.
  return isDevelopment ? 'debug' : 'info';
};

// 4. Define the format of the logs.
const format = winston.format.combine(
  winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss:ms' }),
  // In development, we use colorized output.
  process.env.NODE_ENV === 'development'
    ? winston.format.colorize({ all: true })
    : winston.format.uncolorize(),
  winston.format.printf(
    (info) => `${info.timestamp} ${info.level}: ${info.message}`
  )
);

// 5. Define where the logs should go (the "transports").
const transports = [
  // We always want to log to the console.
  new winston.transports.Console(),
  // In production, we also want to write error logs to a file.
  new winston.transports.File({
    filename: 'logs/error.log',
    level: 'error', // Only 'error' level messages will go to this file.
  }),
];

// 6. Create the logger instance.
const logger = winston.createLogger({
  level: level(), // Set the maximum level to log.
  levels,
  format,
  transports,
});

export default logger;