import { Logger } from 'jsr:@deno-library/logger';

// TODO: Implementar el LoggerAdapter

const logger = new Logger();

logger.info('Este es un mensaje de info');
logger.warn('Este es un mensaje de log');
logger.error('Este es un mensaje de error');
