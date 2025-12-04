import { Logger } from 'jsr:@deno-library/logger';

// TODO: Implementar el LoggerAdapter

interface ILoggerAdapter {
    writeError(message: string): void;
}

export class LoggerAdapter implements ILoggerAdapter {

    public filePath: string;
    private logger = new Logger();

    constructor(filePath: string) {
        this.filePath = filePath;
    }
    
    writeLog(message: string): void {
        this.logger.warn(`[LoggerAdapter] Guardando en ${this.filePath}: ${message}`);
    }

    writeError(message: string): void {
        this.logger.error(`[LoggerAdapter] Guardando en ${this.filePath}: ${message}`);
    }

    writeInfo(message: string): void {
        this.logger.info(`[LoggerAdapter] Guardando en ${this.filePath}: ${message}`);
    }
}




/*
const logger = new Logger();

logger.info('Este es un mensaje de info');
logger.warn('Este es un mensaje de log');
logger.error('Este es un mensaje de error');
*/