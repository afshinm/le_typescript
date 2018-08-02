import { APIClient } from './api_client';
import { Log, LogLevel } from './log';

export class Logger {
    private client: APIClient;

    constructor(token: string) {
        this.client = new APIClient(token);
    }

    /**
     * Sends an "info" log
     *
     * @returns {Promise<any>}
     */
    public async info(message: string): Promise<any> {
        return this.send(new Log(LogLevel.Info, message));
    }

    /**
     * Sends an "error" log
     *
     * @returns {Promise<any>}
     */
    public async error(message: string): Promise<any> {
        return this.send(new Log(LogLevel.Error, message));
    }

    /**
     * Sends an "log" log
     *
     * @returns {Promise<any>}
     */
    public async log(message: string): Promise<any> {
        return this.send(new Log(LogLevel.Log, message));
    }

    /**
     * Sends an "warning" log
     *
     * @returns {Promise<any>}
     */
    public async warning(message: string): Promise<any> {
        return this.send(new Log(LogLevel.Warning, message));
    }

    /**
     * Accepts a Log and sends it to LE
     *
     * @param {Log} log
     * @returns {Promise<any>}
     */
    private async send(log: Log): Promise<any> {
        return this.client.post({
            'level': log.level,
            'message': log.message,
        });
    }
}
