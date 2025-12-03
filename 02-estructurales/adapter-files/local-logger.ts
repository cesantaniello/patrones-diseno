import { COLORS } from '../../helpers/colors.ts';

// TODO: Implementar el LocalLogger Class

export class LocalLogger {
    constructor(private filePath: string) {}

    writeLog(message: string): void {
        console.log(`[LocalLogger] Guardando en ${this.filePath}: ${message}`);
    }

    writeError(message: string): void {
        console.error(`[LocalLogger] Guardando en ${this.filePath}: ${message}`);
    }

    writeInfo(message: string): void {
        console.info(`[LocalLogger] Guardando en ${this.filePath}: ${message}`);
    }
}