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
        });
    }

    /**
     * Sends an "info" log
     *
     * @returns {Promise<any>}
     */
    public async info() {
        return await this.send(new Log(LogLevel.Info));
    }
}
