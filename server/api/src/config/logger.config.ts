import { createLogger, format } from 'winston'
import DailyRotateFile from 'winston-daily-rotate-file';

const formatError = format.printf(info => {
    if(info instanceof Error) {
        return `${info.level} : ${[info.timestamp]} : ${info.message} : ${info.stack}`;
    }
    return `${info.level} : ${[info.timestamp]} : ${info.message}`;
});

const transport: DailyRotateFile = new DailyRotateFile({
    filename: 'logs/log-%DATE%.log',
    datePattern: 'YYYY-MM-DD',
    zippedArchive: true,
    auditFile: 'logs/log-audit.json',
    maxSize: '20m',
    maxFiles: '14d',
    format: format.combine(
        format.timestamp({format: 'MMM-DD-YYYY HH:mm:ss'}),
        format.align(),
        formatError,
    )
});

transport.on('rotate', function (_oldFilename, _newFilename) {});

const logger = createLogger({
    transports: [
        transport
    ]
});

export default logger