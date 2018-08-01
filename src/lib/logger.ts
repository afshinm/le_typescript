import { Log, LogLevel } from './log';
import { APIClient } from './api_client';

export class Logger {
    private _client: APIClient;

    constructor(token: string) {
        this._client = new APIClient(token);
    }

    /**
     * Accepts a Log and sends it to LE
     *
     * @param {Log} log
     * @returns {Promise<any>}
     */
    private async send(log: Log) {
        return this._client.post({
            'level': log.level,
            'message': log.message,
        });
    }

    /**
     * Sends an "info" log
     *
     * @returns {Promise<any>}
     */
    public async info(message: string) {
        return await this.send(new Log(LogLevel.Info, message));
    }

    /**
     * Sends an "error" log
     *
     * @returns {Promise<any>}
     */
    public async error(message: string) {
        return await this.send(new Log(LogLevel.Error, message));
    }

    /**
     * Sends an "log" log
     *
     * @returns {Promise<any>}
     */
    public async log(message: string) {
        return await this.send(new Log(LogLevel.Log, message));
    }

    /**
     * Sends an "warning" log
     *
     * @returns {Promise<any>}
     */
    public async warning(message: string) {
        return await this.send(new Log(LogLevel.Warning, message));
    }
}
