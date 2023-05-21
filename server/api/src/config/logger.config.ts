import { createLogger } from 'winston'
import DailyRotateFile from 'winston-daily-rotate-file';

const transport: DailyRotateFile = new DailyRotateFile({
    filename: 'logs/log-%DATE%.log',
    datePattern: 'YYYY-MM-DD-HH',
    zippedArchive: true,
    auditFile: 'logs/log-audit.json',
    maxSize: '20m',
    maxFiles: '14d'
});

transport.on('rotate', function (oldFilename, newFilename) {
    // do something fun
});

const logger = createLogger({
    transports: [
        transport
    ]
});;

export default logger